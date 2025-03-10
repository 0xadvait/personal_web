import React, { useState, useEffect } from 'react';
import Head from 'next/head';
// import DesktopIcon from '../components/DesktopIcon';

import Dock from '../components/Dock';
import TerminalWindow from '../components/TerminalWindow';
import BlogWindow from '../components/BlogWindow';
import BrowserWindow from '../components/BrowserWindow';
import { Analytics } from "@vercel/analytics/react";
// Import SpeedInsights directly without next
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
    // Terminal states
    const [terminalOpen, setTerminalOpen] = useState(true);
    const [terminalMinimized, setTerminalMinimized] = useState(false);
    const [terminalMaximized, setTerminalMaximized] = useState(false);

    // Blog states
    const [blogOpen, setBlogOpen] = useState(false);
    const [blogMinimized, setBlogMinimized] = useState(false);
    const [blogMaximized, setBlogMaximized] = useState(false);

    // Browser states
    const [browserOpen, setBrowserOpen] = useState(false);
    const [browserMinimized, setBrowserMinimized] = useState(false);
    const [browserMaximized, setBrowserMaximized] = useState(false);

    // Window positioning state
    const [windowPosition, setWindowPosition] = useState({
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    });

    // Visible windows => open && !minimized
    const terminalVisible = terminalOpen && !terminalMinimized;
    const blogVisible = blogOpen && !blogMinimized;
    const browserVisible = browserOpen && !browserMinimized;

    // Handle window resizing
    useEffect(() => {
        const handleResize = () => {
            // Reset window position to center when screen size changes
            setWindowPosition({
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)'
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Terminal actions
    const closeTerminal = () => {
        setTerminalOpen(false);
        setTerminalMinimized(false);
        setTerminalMaximized(false);
    };
    const minimizeTerminal = () => {
        setTerminalMinimized(true);
        setTerminalMaximized(false);
    };
    const maximizeTerminal = () => {
        setTerminalMaximized(!terminalMaximized);
    };

    // Blog actions
    const openBlog = () => {
        setBlogOpen(true);
        setBlogMinimized(false);
    };
    const closeBlog = () => {
        setBlogOpen(false);
        setBlogMinimized(false);
        setBlogMaximized(false);
    };
    const minimizeBlog = () => {
        setBlogMinimized(true);
        setBlogMaximized(false);
    };
    const maximizeBlog = () => {
        setBlogMaximized(!blogMaximized);
    };

    // Browser actions
    const openBrowser = () => {
        setBrowserOpen(true);
        setBrowserMinimized(false);
    };
    const closeBrowser = () => {
        setBrowserOpen(false);
        setBrowserMinimized(false);
        setBrowserMaximized(false);
    };
    const minimizeBrowser = () => {
        setBrowserMinimized(true);
        setBrowserMaximized(false);
    };
    const maximizeBrowser = () => {
        setBrowserMaximized(!browserMaximized);
    };

    return (
        <>
            <Head>
                {/*
                  The viewport meta tag below forces:
                  - width=device-width: sets the page width to match device width
                  - initial-scale=1.0: starts at 100% zoom
                  - minimum-scale=1.0 and maximum-scale=1.0: disallow zooming in or out
                  - user-scalable=no: prevents users from manually zooming
                */}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
            </Head>

            {/* Dock at the bottom */}
            <Dock
                onOpenTerminal={() => {
                    setTerminalOpen(true);
                    setTerminalMinimized(false);
                }}
                onOpenBlog={openBlog}
                onOpenBrowser={openBrowser}
            />

            {/* Terminal window */}
            {terminalVisible && (
                <TerminalWindow
                    onClose={closeTerminal}
                    onMinimize={minimizeTerminal}
                    onMaximize={maximizeTerminal}
                    isMaximized={terminalMaximized}
                    position={!terminalMaximized ? windowPosition : undefined}
                />
            )}

            {/* Blog window */}
            {blogVisible && (
                <BlogWindow
                    onClose={closeBlog}
                    onMinimize={minimizeBlog}
                    onMaximize={maximizeBlog}
                    isMaximized={blogMaximized}
                    position={!blogMaximized ? windowPosition : undefined}
                />
            )}

            {/* Browser window */}
            {browserVisible && (
                <BrowserWindow
                    onClose={closeBrowser}
                    onMinimize={minimizeBrowser}
                    onMaximize={maximizeBrowser}
                    isMaximized={browserMaximized}
                    position={!browserMaximized ? windowPosition : undefined}
                />
            )}

            {/* Vercel Analytics */}
            <Analytics />
            <SpeedInsights />
        </>
    );
}
