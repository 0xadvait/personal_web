import React, { useState, useRef, useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import ResumeContent from './ResumeContent';
import ResearchContent from './ResearchContent';
import styles from '../styles/Terminal.module.css';

/**
 * We'll have commands:
 *   help
 *   print(resume)
 *   print(research)
 *   print(contact)
 *   clear
 */
export default function Terminal() {
    // Terminal lines: { type: 'text'|'html', content: string }
    const [lines, setLines] = useState([]);
    const [inputVal, setInputVal] = useState('');

    // Draggable state for the entire terminal window
    const windowRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [pos, setPos] = useState({ x: 0, y: 0 }); // We'll initialize in a useEffect

    // On mount, center the window (we do initial left=50%, top=50%, but we handle actual offset)
    useEffect(() => {
        if (!windowRef.current) return;
        const rect = windowRef.current.getBoundingClientRect();
        // Already set transform: translate(-50%, -50%). So we don't need to do anything with pos initially.
        // We'll keep pos at 50% 50% "virtual" but let the user drag it around.
    }, []);

    // Draggable handlers
    const onMouseDown = (e) => {
        if (!windowRef.current) return;
        setIsDragging(true);
        const rect = windowRef.current.getBoundingClientRect();
        // Calculate offset so we know how far from the top-left corner
        setDragOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };
    const onMouseMove = (e) => {
        if (!isDragging) return;
        // Update pos so we can set style left/top
        const left = e.clientX - dragOffset.x;
        const top = e.clientY - dragOffset.y;
        // We remove the transform so we can position absolutely
        setPos({ x: left, y: top });
    };
    const onMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        // Add global mouse events for dragging
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    });

    // Command logic
    const pushLine = (type, content) => {
        setLines((prev) => [...prev, { type, content }]);
    };
    const handleCommand = (cmd) => {
        const c = cmd.trim();
        if (!c) return;
        // Echo the command
        pushLine('text', `guest@mysite.com:~ $ ${c}`);

        switch (c) {
            case 'help':
                pushLine('text', `AVAILABLE COMMANDS:
  help
  print(resume)
  print(research)
  print(contact)
  clear
        `);
                break;
            case 'print(resume)': {
                const html = ReactDOMServer.renderToStaticMarkup(<ResumeContent />);
                pushLine('html', html);
                break;
            }
            case 'print(research)': {
                const html = ReactDOMServer.renderToStaticMarkup(<ResearchContent />);
                pushLine('html', html);
                break;
            }
            case 'print(contact)':
                pushLine('text', `CONTACT:
  Email: aj@perilabs.net
  Website: https://www.perilabs.net
        `);
                break;
            case 'clear':
                setLines([]);
                break;
            default:
                pushLine('text', `Unrecognized command: ${c}`);
        }
    };

    const onEnter = (e) => {
        if (e.key === 'Enter') {
            handleCommand(inputVal);
            setInputVal('');
        }
    };

    // Some clickable commands
    const commands = ['help', 'print(resume)', 'print(research)', 'print(contact)', 'clear'];

    return (
        <div
            ref={windowRef}
            className={styles.terminalWindow}
            style={{
                // If user dragged the window, apply absolute left/top
                left: pos.x ? `${pos.x}px` : '50%',
                top: pos.y ? `${pos.y}px` : '50%',
                transform: pos.x || pos.y ? 'none' : 'translate(-50%, -50%)'
            }}
        >
            {/* Title bar */}
            <div className={styles.titleBar} onMouseDown={onMouseDown}>
                <div className={styles.dotContainer}>
                    <span className={`${styles.dot} ${styles.closeDot}`} />
                    <span className={`${styles.dot} ${styles.minDot}`} />
                    <span className={`${styles.dot} ${styles.maxDot}`} />
                </div>
            </div>

            {/* Terminal body */}
            <div className={styles.terminalBody}>
                {lines.map((line, idx) => {
                    if (line.type === 'text') {
                        return <div key={idx}>{line.content}</div>;
                    } else {
                        // HTML line
                        return (
                            <div
                                key={idx}
                                dangerouslySetInnerHTML={{ __html: line.content }}
                                style={{ marginBottom: '1rem' }}
                            />
                        );
                    }
                })}

                {/* Command shortcuts */}
                <div className={styles.commandLinks}>
                    [
                    {commands.map((c, idx) => (
                        <span
                            key={idx}
                            className={styles.commandLink}
                            onClick={() => handleCommand(c)}
                        >
              {c}
            </span>
                    ))}
                    ]
                </div>

                {/* Input line */}
                <div className={styles.promptLine}>
                    <span className={styles.prompt}>guest@mysite.com:~ $</span>
                    <input
                        type="text"
                        className={styles.inputArea}
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        onKeyDown={onEnter}
                        placeholder="Type a command..."
                    />
                </div>
            </div>
        </div>
    );
}
