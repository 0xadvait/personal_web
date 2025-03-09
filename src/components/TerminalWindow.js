import React, { useState, useRef, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import ResumeContent from './ResumeContent';
import ResearchContent from './ResearchContent';
import ContactContent from './ContactContent';
import IntroContent from './IntroContent';
import styles from '../styles/Window.module.css';

export default function TerminalWindow({ onClose, onMinimize, onMaximize, isMaximized, position }) {
    // 1) Detect if we're in a browser
    const isBrowser = typeof window !== 'undefined';
    // If server‐side, return null so Next can complete SSR/Static Build
    if (!isBrowser) return null;

    // ------------------ State ------------------
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    // We'll initialize position after mount using useEffect to avoid referencing `window` on the server
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [width, setWidth] = useState(700);
    const [height, setHeight] = useState(500);

    const minWidth = 300, minHeight = 200;
    const [isResizing, setIsResizing] = useState(null);
    const [maximized, setMaximized] = useState(isMaximized);

    const windowRef = useRef(null);
    const inputRef = useRef(null);
    const terminalBodyRef = useRef(null);

    // Terminal lines
    const [lines, setLines] = useState([]);
    const [inputVal, setInputVal] = useState('');
    
    // Screen size state
    const [screenSize, setScreenSize] = useState({
        width: isBrowser ? window.innerWidth : 1200,
        height: isBrowser ? window.innerHeight : 800
    });

    // ------------------ Effects ------------------

    // Update `maximized` if prop changes
    useEffect(() => {
        setMaximized(isMaximized);
    }, [isMaximized]);

    // Initialize position (center on screen) after mount
    useEffect(() => {
        const updateWindowSize = () => {
            // Adjust window size based on screen size
            let newWidth = 700;
            let newHeight = 500;
            
            if (screenSize.width < 600) {
                newWidth = Math.min(screenSize.width * 0.95, 700);
                newHeight = Math.min(screenSize.height * 0.7, 500);
            } else if (screenSize.width < 900) {
                newWidth = Math.min(screenSize.width * 0.8, 700);
                newHeight = Math.min(screenSize.height * 0.7, 500);
            } else {
                newWidth = Math.min(screenSize.width * 0.6, 700);
                newHeight = Math.min(screenSize.height * 0.6, 500);
            }
            
            setWidth(newWidth);
            setHeight(newHeight);
            
            // Center the window
            const centerX = screenSize.width / 2 - newWidth / 2;
            const centerY = screenSize.height / 2 - newHeight / 2;
            setPos({ x: centerX, y: centerY });
        };
        
        updateWindowSize();
    }, [screenSize]);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // On mount => print cat
    useEffect(() => {
        pushLine('text', '\n');
        pushLine('text', `      
      /) /)
     ( • ༝•)
     /づ  づ
`);
    }, []);

    // Scroll to top for small screens on mount
    useEffect(() => {
        if (isSmallScreen && terminalBodyRef.current) {
            terminalBodyRef.current.scrollTop = 0;
        }
    }, [screenSize.width]);

    // Mousemove & Mouseup – only needed in the browser
    useEffect(() => {
        const onMouseMove = (e) => {
            e.preventDefault();

            if (isDragging && !maximized) {
                const left = e.clientX - dragOffset.x;
                const top = e.clientY - dragOffset.y;
                const maxBottom = window.innerHeight - 100; // keep above the dock

                let newX = Math.min(Math.max(left, 0), window.innerWidth - width);
                let newY = Math.min(Math.max(top, 0), maxBottom - height);

                setPos({ x: newX, y: newY });
            }

            if (isResizing && !maximized) {
                const dx = e.clientX - (pos.x + width);
                const dy = e.clientY - (pos.y + height);

                let newW = width, newH = height;
                let newX = pos.x, newY = pos.y;

                if (isResizing.includes('r')) {
                    newW = width + dx;
                }
                if (isResizing.includes('b')) {
                    newH = height + dy;
                }
                if (isResizing.includes('l')) {
                    newW = width - dx;
                    newX = pos.x + dx;
                }
                if (isResizing.includes('t')) {
                    newH = height - dy;
                    newY = pos.y + dy;
                }

                // clamp
                if (newW < minWidth) newW = minWidth;
                if (newH < minHeight) newH = minHeight;
                if (newX < 0) newX = 0;
                if (newY < 0) newY = 0;

                const maxBottom = window.innerHeight - 100;
                if (newY + newH > maxBottom) {
                    newH = maxBottom - newY;
                }
                if (newX + newW > window.innerWidth) {
                    newW = window.innerWidth - newX;
                }

                setWidth(newW);
                setHeight(newH);
                setPos({ x: newX, y: newY });
            }
        };

        const onMouseUp = () => {
            setIsDragging(false);
            setIsResizing(null);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, [isDragging, isResizing, pos, width, height, dragOffset, maximized]);

    // ------------------ Handlers ------------------

    const handleMouseDownTitle = (e) => {
        if (maximized) return;
        setIsDragging(true);
        const rect = windowRef.current.getBoundingClientRect();
        setDragOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseDownResizer = (e, edge) => {
        e.stopPropagation();
        e.preventDefault();
        if (maximized) return;
        setIsResizing(edge);
    };

    const pushLine = (type, content) => {
        setLines((prev) => [...prev, { type, content }]);
    };

    const handleCommand = (cmd) => {
        pushLine('text', `guest@advait.tech:~ $ ${cmd}`);
        const c = cmd.trim().toLowerCase();

        switch (c) {
            case 'help':
                pushLine('text', `Recognized commands:
  print(intro)
  print(resume)
  print(research)
  print(contact)
  connect(x)
  connect(linkedin)
  help
  clear
`);
                break;

            case 'print(intro)':
                pushLine('html', ReactDOMServer.renderToStaticMarkup(<IntroContent />));
                break;

            case 'print(resume)':
                pushLine('html', ReactDOMServer.renderToStaticMarkup(<ResumeContent />));
                break;

            case 'print(research)':
                pushLine('html', ReactDOMServer.renderToStaticMarkup(<ResearchContent />));
                break;

            case 'print(contact)':
                pushLine('html', ReactDOMServer.renderToStaticMarkup(<ContactContent />));
                break;

            case 'connect(x)':
                window.open('https://x.com/intent/follow?screen_name=advait_peri','_blank');
                pushLine('text', 'Attempting to open X profile: @advait_peri in a new tab...');
                break;

            case 'connect(linkedin)':
                window.open('https://www.linkedin.com/in/advait-jayant-21b465bb/','_blank');
                pushLine('text', 'Attempting to open LinkedIn in a new tab...');
                break;

            case 'clear':
                setLines([]);
                break;

            default:
                pushLine('text', `Unrecognized command: ${cmd}`);
        }
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (inputVal.trim()) handleCommand(inputVal);
            setInputVal('');
        }
    };

    const handleTerminalClick = (e) => {
        // Don't focus input if clicking on a command or a button
        if (e.target.tagName === 'SPAN' && e.target.style.textDecoration === 'underline') return;
        if (e.target.className && e.target.className.includes('dot')) return;
        
        // Focus the input for typing
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    // This list is shown at the top
    const commandsList = [
        'print(intro)',
        'print(resume)',
        'print(research)',
        'print(contact)',
        'connect(x)',
        'connect(linkedin)',
        'help',
        'clear',
    ];

    // For small screens => vertical layout
    const isSmallScreen = screenSize.width < 600;
    const commandStyle = {
        cursor: 'pointer',
        display: isSmallScreen ? 'block' : 'inline-block',
        margin: isSmallScreen ? '0.3rem 0' : '0 0.5rem',
        textDecoration: 'underline',
    };

    let containerClass = styles.windowContainer;
    if (maximized) containerClass += ' ' + styles.maximized;
    if (isSmallScreen) containerClass += ' ' + styles.commandListVertical;

    // If not maximized, use inline styles for pos and size
    const containerStyle = maximized
        ? { backgroundColor: 'rgba(0,0,0,0.8)' }  // Increased opacity and darker background
        : {
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: `${width}px`,
            height: `${height}px`,
            transform: 'none',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            backgroundColor: 'rgba(0,0,0,0.8)'  // Increased opacity and darker background
        };

    // ------------------ Render ------------------
    return (
        <div ref={windowRef} className={containerClass} style={containerStyle} onClick={handleTerminalClick}>
            {/* Title Bar */}
            <div className={styles.titleBar} onMouseDown={handleMouseDownTitle}>
                <div className={styles.dotContainer}>
                    <span
                        className={`${styles.dot} ${styles.closeDot}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                    />
                    <span
                        className={`${styles.dot} ${styles.minDot}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            onMinimize();
                        }}
                    />
                    <span
                        className={`${styles.dot} ${styles.maxDot}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            onMaximize();
                        }}
                    />
                </div>
            </div>

            {/* Body */}
            <div
                ref={terminalBodyRef}
                className={styles.windowBody}
                style={{ overflowY: 'auto' }}
            >
                {/* Command list */}
                <div style={{ marginBottom: '1rem', color: '#58a6ff' }} className={isSmallScreen ? styles.commandListVertical : ''}>
                    [
                    {commandsList.map((c, idx) => (
                        <span
                            key={idx}
                            style={commandStyle}
                            onClick={() => handleCommand(c)}
                        >
                            {c}
                        </span>
                    ))}
                    ]
                </div>

                {/* Terminal lines */}
                {lines.map((line, i) =>
                    line.type === 'text' ? (
                        <div key={i} style={{ whiteSpace: 'pre-wrap', marginBottom: '0.5rem' }}>
                            {line.content}
                        </div>
                    ) : (
                        <div
                            key={i}
                            dangerouslySetInnerHTML={{ __html: line.content }}
                            style={{ marginBottom: '1rem', whiteSpace: 'pre-wrap' }}
                        />
                    )
                )}

                {/* Prompt */}
                <div style={{ marginTop: '1rem', display: 'flex' }}>
                    <span style={{ marginRight: '0.5rem', color: '#bbb' }}>
                        guest@advait.tech:~ $
                    </span>
                    <input
                        ref={inputRef}
                        type="text"
                        style={{
                            border: 'none',
                            background: 'transparent',
                            color: '#bbb',
                            flex: 1,
                            outline: 'none',
                            fontSize: 'inherit',
                        }}
                        placeholder="Type a command..."
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        onKeyDown={onKeyDown}
                    />
                </div>
            </div>

            {/* Resizers */}
            <div
                className={`${styles.resizer} ${styles['resizer-tl']}`}
                onMouseDown={(e) => handleMouseDownResizer(e, 'tl')}
            />
            <div
                className={`${styles.resizer} ${styles['resizer-tr']}`}
                onMouseDown={(e) => handleMouseDownResizer(e, 'tr')}
            />
            <div
                className={`${styles.resizer} ${styles['resizer-bl']}`}
                onMouseDown={(e) => handleMouseDownResizer(e, 'bl')}
            />
            <div
                className={`${styles.resizer} ${styles['resizer-br']}`}
                onMouseDown={(e) => handleMouseDownResizer(e, 'br')}
            />
            <div
                className={`${styles.resizer} ${styles['resizer-l']}`}
                onMouseDown={(e) => handleMouseDownResizer(e, 'l')}
            />
            <div
                className={`${styles.resizer} ${styles['resizer-r']}`}
                onMouseDown={(e) => handleMouseDownResizer(e, 'r')}
            />
            <div
                className={`${styles.resizer} ${styles['resizer-t']}`}
                onMouseDown={(e) => handleMouseDownResizer(e, 't')}
            />
            <div
                className={`${styles.resizer} ${styles['resizer-b']}`}
                onMouseDown={(e) => handleMouseDownResizer(e, 'b')}
            />
        </div>
    );
}
