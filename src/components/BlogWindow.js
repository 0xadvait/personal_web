import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Window.module.css';

export default function BlogWindow({ onClose, onMinimize, onMaximize, isMaximized, position }) {
    // 1) Detect if we're in a browser
    const isBrowser = typeof window !== 'undefined';
    // If server‐side, return null so Next can complete SSR/Static Build
    if (!isBrowser) return null;

    // ------------------ State ------------------
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [width, setWidth] = useState(800);
    const [height, setHeight] = useState(600);
    const [maximized, setMaximized] = useState(isMaximized);
    const windowRef = useRef(null);
    
    // Screen size state
    const [screenSize, setScreenSize] = useState({
        width: isBrowser ? window.innerWidth : 1200,
        height: isBrowser ? window.innerHeight : 800
    });
    
    const minWidth = 300, minHeight = 200;
    const [isResizing, setIsResizing] = useState(null);

    // ------------------ Effects ------------------

    // Update `maximized` if prop changes
    useEffect(() => {
        setMaximized(isMaximized);
    }, [isMaximized]);

    // Initialize position (center on screen) after mount
    useEffect(() => {
        const updateWindowSize = () => {
            // Adjust window size based on screen size
            let newWidth = 800;
            let newHeight = 600;
            
            if (screenSize.width < 600) {
                newWidth = Math.min(screenSize.width * 0.95, 800);
                newHeight = Math.min(screenSize.height * 0.7, 600);
            } else if (screenSize.width < 900) {
                newWidth = Math.min(screenSize.width * 0.8, 800);
                newHeight = Math.min(screenSize.height * 0.7, 600);
            } else {
                newWidth = Math.min(screenSize.width * 0.6, 800);
                newHeight = Math.min(screenSize.height * 0.6, 600);
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

    // For small screens => vertical layout
    const isSmallScreen = screenSize.width < 600;

    let containerClass = styles.windowContainer;
    if (maximized) containerClass += ' ' + styles.maximized;
    if (isSmallScreen) containerClass += ' ' + styles.commandListVertical;

    // If not maximized, use inline styles for pos and size
    const containerStyle = maximized
        ? {}
        : {
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: `${width}px`,
            height: `${height}px`,
            transform: 'none',
        };

    return (
        <div ref={windowRef} className={containerClass} style={containerStyle}>
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

            <div className={styles.windowBody}>
                <iframe
                    src="https://paragraph.xyz/@chaostheory"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    title="ChaosTheory Blog"
                />
            </div>

            {/* Resizers */}
            <div className={`${styles.resizer} ${styles['resizer-tl']}`} onMouseDown={(e) => handleMouseDownResizer(e,'tl')}/>
            <div className={`${styles.resizer} ${styles['resizer-tr']}`} onMouseDown={(e) => handleMouseDownResizer(e,'tr')}/>
            <div className={`${styles.resizer} ${styles['resizer-bl']}`} onMouseDown={(e) => handleMouseDownResizer(e,'bl')}/>
            <div className={`${styles.resizer} ${styles['resizer-br']}`} onMouseDown={(e) => handleMouseDownResizer(e,'br')}/>
            <div className={`${styles.resizer} ${styles['resizer-l']}`} onMouseDown={(e) => handleMouseDownResizer(e,'l')}/>
            <div className={`${styles.resizer} ${styles['resizer-r']}`} onMouseDown={(e) => handleMouseDownResizer(e,'r')}/>
            <div className={`${styles.resizer} ${styles['resizer-t']}`} onMouseDown={(e) => handleMouseDownResizer(e,'t')}/>
            <div className={`${styles.resizer} ${styles['resizer-b']}`} onMouseDown={(e) => handleMouseDownResizer(e,'b')}/>
        </div>
    );
}
