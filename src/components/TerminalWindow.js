import React, { useState, useRef, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import ResumeContent from './ResumeContent';
import ResearchContent from './ResearchContent';
import ContactContent from './ContactContent';
import IntroContent from './IntroContent';
import styles from '../styles/Window.module.css';

export default function TerminalWindow({
                                           onClose,
                                           onMinimize,
                                           onMaximize,
                                           isMaximized,
                                           position,
                                       }) {
    // 1) Detect if we're in a browser
    const isBrowser = typeof window !== 'undefined';
    // If server‐side, return null so Next can complete SSR/Static Build
    if (!isBrowser) return null;

    // ------------------ Screen Size & Font ------------------
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    // Handle window resize for responsive text
    useEffect(() => {
        const handleResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // A helper to scale our base font size up/down
    // (Similar logic to your ResumeContent.js).
    const getFontSize = (baseRem) => {
        if (screenSize.width < 400) return baseRem * 0.8;
        if (screenSize.width < 600) return baseRem * 0.9;
        return baseRem; // default
    };

    // We'll define some dynamic styles so the terminal text
    // matches the sizing approach from ResumeContent.js
    const dynamicStyles = {
        terminalText: {
            color: '#ddd',
            fontSize: `${getFontSize(1)}rem`, // 1rem base, scaled
            lineHeight: 1.5,
        },
        linkText: {
            color: '#58a6ff',
            textDecoration: 'underline',
            cursor: 'pointer',
            display: 'block',
            margin: '0.3rem 0',
        },
        commandOutput: {
            whiteSpace: 'pre-wrap',
            marginBottom: '0.5rem',
        },
        commandPrompt: {
            marginTop: '1rem',
            display: 'flex',
            alignItems: 'center',
        },
        promptText: {
            marginRight: '0.5rem',
            color: '#bbb',
        },
    };

    // ------------------ Position & Size ------------------
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [width, setWidth] = useState(700);
    const [height, setHeight] = useState(500);

    const minWidth = 300;
    const minHeight = 200;
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [isResizing, setIsResizing] = useState(null);
    const [maximized, setMaximized] = useState(isMaximized);

    const windowRef = useRef(null);
    const terminalBodyRef = useRef(null);
    const inputRef = useRef(null);

    // ------------------ Terminal State ------------------
    const [lines, setLines] = useState([]);
    const [inputVal, setInputVal] = useState('');

    // Update `maximized` if prop changes
    useEffect(() => {
        setMaximized(isMaximized);
    }, [isMaximized]);

    // Center the terminal on first mount + adjust size
    useEffect(() => {
        const updateWindowSize = () => {
            let newWidth = 910;
            let newHeight = 650;

            if (screenSize.width < 600) {
                newWidth = Math.min(screenSize.width * 0.95, 700);
                newHeight = Math.min(screenSize.height * 0.7, 500);
            } else if (screenSize.width < 900) {
                newWidth = Math.min(screenSize.width * 0.8, 700);
                newHeight = Math.min(screenSize.height * 0.7, 500);
            } else {
                newWidth = Math.min(screenSize.width * 0.6, 910);
                newHeight = Math.min(screenSize.height * 0.6, 650);
            }

            setWidth(newWidth);
            setHeight(newHeight);

            const centerX = screenSize.width / 2 - newWidth / 2;
            const centerY = screenSize.height / 2 - newHeight / 2;
            setPos({ x: centerX, y: centerY });
        };

        updateWindowSize();
    }, [screenSize]);

    // Set up dragging and resizing
    useEffect(() => {
        const onMouseMove = (e) => {
            e.preventDefault();
            if (isDragging && !maximized) {
                const left = e.clientX - dragOffset.x;
                const top = e.clientY - dragOffset.y;
                const maxBottom = window.innerHeight - 100; // keep above any dock

                let newX = Math.min(Math.max(left, 0), window.innerWidth - width);
                let newY = Math.min(Math.max(top, 0), maxBottom - height);

                setPos({ x: newX, y: newY });
            }

            if (isResizing && !maximized) {
                const dx = e.clientX - (pos.x + width);
                const dy = e.clientY - (pos.y + height);

                let newW = width,
                    newH = height;
                let newX = pos.x,
                    newY = pos.y;

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

    // ------------------ Terminal Setup ------------------
    // Show cat on mount
    useEffect(() => {
        pushLine('text', '\n');
        pushLine(
            'text',
            `      
      /) /)
     ( • ༝•)
     /づ  づ
`
        );
    }, []);

    // Push text or HTML lines
    const pushLine = (type, content) => {
        setLines((prev) => [...prev, { type, content }]);
    };

    // Execute a command
    const handleCommand = (cmd) => {
        pushLine('text', `guest@advait.tech:~ $ ${cmd}`);
        const c = cmd.trim().toLowerCase();

        const currentLineCount = lines.length;

        switch (c) {
            case 'help':
                pushLine(
                    'text',
                    `Recognized commands:
  print(intro)
  print(resume)
  print(research)
  print(contact)
  connect(x)
  connect(linkedin)
  help
  clear
`
                );
                break;
            case 'print(intro)':
                pushLine('html', ReactDOMServer.renderToStaticMarkup(<IntroContent />));
                break;
            case 'print(resume)':
                pushLine('html', ReactDOMServer.renderToStaticMarkup(<ResumeContent />));
                break;
            case 'print(research)':
                pushLine(
                    'html',
                    ReactDOMServer.renderToStaticMarkup(<ResearchContent />)
                );
                break;
            case 'print(contact)':
                pushLine(
                    'html',
                    ReactDOMServer.renderToStaticMarkup(<ContactContent />)
                );
                break;
            case 'connect(x)':
                window.open(
                    'https://x.com/intent/follow?screen_name=advait_peri',
                    '_blank'
                );
                pushLine(
                    'text',
                    'Attempting to open X profile: @advait_peri in a new tab...'
                );
                break;
            case 'connect(linkedin)':
                window.open(
                    'https://www.linkedin.com/in/advait-jayant-21b465bb/',
                    '_blank'
                );
                pushLine('text', 'Attempting to open LinkedIn in a new tab...');
                break;
            case 'clear':
                setLines([]);
                break;
            default:
                pushLine('text', `Unrecognized command: ${cmd}`);
        }

        // Scroll to newly added line after a short delay
        setTimeout(() => {
            if (terminalBodyRef.current) {
                const lineElements = terminalBodyRef.current.querySelectorAll('div');
                if (lineElements.length > currentLineCount) {
                    lineElements[currentLineCount].scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            }
        }, 100);
    };

    // Pressing Enter in input
    const onKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (inputVal.trim()) handleCommand(inputVal);
            setInputVal('');
        }
    };

    // Clicking the terminal background
    const handleTerminalClick = (e) => {
        // If you want the user to be able to type commands when clicking empty space:
        if (e.target === terminalBodyRef.current && inputRef.current) {
            inputRef.current.focus();
        }
    };

    // Title bar drag
    const handleMouseDownTitle = (e) => {
        if (maximized) return;
        setIsDragging(true);
        const rect = windowRef.current.getBoundingClientRect();
        setDragOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        e.preventDefault();
        e.stopPropagation();
    };

    // Resizers
    const handleMouseDownResizer = (e, edge) => {
        e.stopPropagation();
        e.preventDefault();
        if (maximized) return;
        setIsResizing(edge);
    };

    // Command list
    const isSmallScreen = screenSize.width < 600;
    const commandsList = isSmallScreen
        ? [
            { desc: 'About Me', cmd: 'print(intro)' },
            { desc: 'Research', cmd: 'print(research)' },
            { desc: 'Contact Me', cmd: 'print(contact)' },
            { desc: 'Connect on X', cmd: 'connect(x)' },
            { desc: 'Connect on LinkedIn', cmd: 'connect(linkedin)' },
            { desc: 'Clear terminal', cmd: 'clear' },
        ]
        : [
            { desc: 'About Me', cmd: 'print(intro)' },
            { desc: 'Resume', cmd: 'print(resume)' },
            { desc: 'Research', cmd: 'print(research)' },
            { desc: 'Contact Me', cmd: 'print(contact)' },
            { desc: 'Connect on X', cmd: 'connect(x)' },
            { desc: 'Connect on LinkedIn', cmd: 'connect(linkedin)' },
            { desc: 'Show commands', cmd: 'help' },
            { desc: 'Clear terminal', cmd: 'clear' },
        ];

    // Build container classes
    let containerClass = styles.windowContainer;
    if (maximized) containerClass += ' ' + styles.maximized;
    containerClass += ' ' + styles.commandListVertical; // vertical layout

    // If not maximized, inline styles for position
    const containerStyle = maximized
        ? {
            backgroundColor: 'rgba(0,0,0,0.9)',
            // Base font at least 16px to prevent iOS zoom
            fontSize: '16px',
        }
        : {
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: `${width}px`,
            height: `${height}px`,
            transform: 'none',
            backgroundColor: 'rgba(0,0,0,0.9)',
            // Use dynamic scaling for the entire terminal
            fontSize: `${Math.max(getFontSize(1) * 16, 16)}px`,
        };

    return (
        <>
            {/* Disable iOS text-size adjust globally */}
            <style jsx global>{`
                html,
                body {
                    -webkit-text-size-adjust: none;
                    -moz-text-size-adjust: none;
                    -ms-text-size-adjust: none;
                    text-size-adjust: none;
                }
            `}</style>

            <div
                ref={windowRef}
                className={containerClass}
                style={containerStyle}
                onClick={handleTerminalClick}
            >
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

                {/* Terminal Body */}
                <div
                    ref={terminalBodyRef}
                    className={styles.windowBody}
                    style={{
                        overflowY: 'auto',
                        ...dynamicStyles.terminalText, // font & color
                    }}
                >
                    {/* Command list (clickable) */}
                    <div
                        className={styles.commandListVertical}
                        style={{ marginBottom: '1rem', color: '#58a6ff' }}
                    >
                        {commandsList.map((item, idx) => (
                            <span
                                key={idx}
                                style={dynamicStyles.linkText}
                                onClick={(e) => {
                                    e.stopPropagation(); // don't focus input
                                    handleCommand(item.cmd);
                                }}
                            >
                {item.desc}:{' '}
                                <span style={{ color: '#bbb', textDecoration: 'none' }}>
                  {item.cmd}
                </span>
              </span>
                        ))}
                    </div>

                    {/* Help message */}
                    <div style={{ marginBottom: '1rem', color: '#bbb' }}>
                        Use the{' '}
                        <span
                            style={{ color: '#58a6ff', cursor: 'pointer' }}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleCommand('help');
                            }}
                        >
              help
            </span>{' '}
                        command for help. All the above commands are clickable.
                    </div>

                    {/* Terminal lines */}
                    {lines.map((line, i) =>
                        line.type === 'text' ? (
                            <div key={i} style={dynamicStyles.commandOutput}>
                                {line.content}
                            </div>
                        ) : (
                            <div
                                key={i}
                                style={{ marginBottom: '1rem', whiteSpace: 'pre-wrap' }}
                                dangerouslySetInnerHTML={{ __html: line.content }}
                            />
                        )
                    )}

                    {/* Prompt row */}
                    <div style={dynamicStyles.commandPrompt}>
                        <span style={dynamicStyles.promptText}>guest@advait.tech:~ $</span>
                        <input
                            ref={inputRef}
                            type="text"
                            style={{
                                border: 'none',
                                background: 'transparent',
                                color: '#bbb',
                                flex: 1,
                                outline: 'none',
                                // Force minimum 16px to prevent iOS zoom
                                fontSize: '16px',
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
        </>
    );
}
