import React, { useEffect, useRef } from 'react';
import './Console.css';

function Console({ outputs, isRunning }) {
    const consoleEndRef = useRef(null);

    useEffect(() => {
        // Auto-scroll to bottom when new output arrives
        consoleEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [outputs]);

    return (
        <div className="console">
            <div className="console-header">
                <div className="console-title">
                    <span className="console-icon">⚡</span>
                    <span>Output</span>
                </div>
                {isRunning && (
                    <div className="console-status">
                        <div className="status-indicator animate-pulse"></div>
                        <span>Running...</span>
                    </div>
                )}
            </div>
            <div className="console-content">
                {outputs.length === 0 ? (
                    <div className="console-empty">
                        <span className="empty-icon">💻</span>
                        <p>No output yet. Run your code to see results!</p>
                    </div>
                ) : (
                    <div className="console-output">
                        {outputs.map((output, index) => (
                            <div
                                key={index}
                                className={`console-line ${output.type}`}
                            >
                                {output.type === 'error' && <span className="line-prefix">❌ </span>}
                                {output.type === 'success' && <span className="line-prefix">✓ </span>}
                                <span className="line-content">{output.text}</span>
                            </div>
                        ))}
                        <div ref={consoleEndRef} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Console;
