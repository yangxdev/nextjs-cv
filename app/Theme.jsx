'use client';
import { useState, useEffect } from 'react';

export default function Theme() {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.classList.toggle('dark', theme === 'dark')
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
    };

    const buttonStyle = {
        color: theme === 'light' ? '#000' : '#fff'
    }

    return (
        <div className={`absolute theme text-sm right-0 top-0 py-1 px-2 `}>
            <button style={buttonStyle} onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} mode
            </button>
        </div>
    );
}