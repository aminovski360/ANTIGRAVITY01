import React, { useState, useEffect } from 'react';
import CodeEditor from './components/CodeEditor';
import Console from './components/Console';
import LessonPanel from './components/LessonPanel';
import { pythonLessons } from './data/lessons';
import { runPythonCode, loadPyodide } from './utils/pyodideManager';
import './App.css';

function App() {
    const [currentLesson, setCurrentLesson] = useState(pythonLessons[0]);
    const [code, setCode] = useState(currentLesson.starterCode);
    const [outputs, setOutputs] = useState([]);
    const [isRunning, setIsRunning] = useState(false);
    const [isPyodideLoading, setIsPyodideLoading] = useState(true);
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
    const [completedLessons, setCompletedLessons] = useState(() => {
        const saved = localStorage.getItem('completedLessons');
        return saved ? JSON.parse(saved) : [];
    });
    const [mobileTab, setMobileTab] = useState('lesson'); // Mobile tab state

    // Load Pyodide on mount
    useEffect(() => {
        loadPyodide()
            .then(() => {
                setIsPyodideLoading(false);
                setOutputs([
                    { type: 'success', text: '✨ Python environment ready! Start coding!' },
                ]);
            })
            .catch((error) => {
                setIsPyodideLoading(false);
                setOutputs([
                    { type: 'error', text: `Failed to load Python: ${error.message}` },
                ]);
            });
    }, []);

    // Apply theme
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Save completed lessons
    useEffect(() => {
        localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
    }, [completedLessons]);

    // Update code when lesson changes
    useEffect(() => {
        setCode(currentLesson.starterCode);
        setOutputs([]);
    }, [currentLesson]);

    const markLessonComplete = (lessonId) => {
        if (!completedLessons.includes(lessonId)) {
            setCompletedLessons([...completedLessons, lessonId]);
        }
    };

    const handleRunCode = async () => {
        if (isPyodideLoading) {
            setOutputs([
                { type: 'error', text: 'Python is still loading. Please wait...' },
            ]);
            return;
        }

        setIsRunning(true);
        setOutputs([]);

        const newOutputs = [];

        const onOutput = (text) => {
            newOutputs.push({ type: 'output', text });
            setOutputs([...newOutputs]);
        };

        const onError = (text) => {
            newOutputs.push({ type: 'error', text });
            setOutputs([...newOutputs]);
        };

        const result = await runPythonCode(code, onOutput, onError);

        if (result.success) {
            if (currentLesson.validate && currentLesson.validate(result.output)) {
                newOutputs.push({
                    type: 'success',
                    text: '🎉 Great job! Challenge completed!',
                });
                setOutputs([...newOutputs]);
                markLessonComplete(currentLesson.id);
            }
        }

        setIsRunning(false);
    };

    const handleClearConsole = () => {
        setOutputs([]);
    };

    const handleResetCode = () => {
        setCode(currentLesson.starterCode);
        setOutputs([]);
    };

    const handleLoadSolution = (solutionCode) => {
        setCode(solutionCode);
        setOutputs([
            { type: 'success', text: '✅ Solution loaded! You can now run it or modify it.' }
        ]);
    };

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="app">
            <button
                className="theme-toggle"
                onClick={toggleTheme}
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
                {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* Desktop Layout */}
            <div className="app-container">
                <div className="panel lesson-panel-wrapper">
                    <LessonPanel
                        lesson={currentLesson}
                        onLessonChange={setCurrentLesson}
                        allLessons={pythonLessons}
                        onLoadSolution={handleLoadSolution}
                        completedLessons={completedLessons}
                    />
                </div>

                <div className="panel editor-panel">
                    <CodeEditor value={code} onChange={setCode} />
                    <div className="editor-controls">
                        <button
                            className="btn btn-primary"
                            onClick={handleRunCode}
                            disabled={isRunning || isPyodideLoading}
                        >
                            {isRunning ? (
                                <>
                                    <span className="btn-spinner animate-spin">⚙️</span>
                                    Running...
                                </>
                            ) : isPyodideLoading ? (
                                <>
                                    <span className="btn-spinner animate-spin">⚙️</span>
                                    Loading Python...
                                </>
                            ) : (
                                <>
                                    <span className="btn-icon">▶</span>
                                    Run Code
                                </>
                            )}
                        </button>
                        <button className="btn btn-secondary" onClick={handleResetCode}>
                            <span className="btn-icon">↻</span>
                            Reset
                        </button>
                        <button className="btn btn-secondary" onClick={handleClearConsole}>
                            <span className="btn-icon">🗑️</span>
                            Clear Output
                        </button>
                    </div>
                </div>

                <div className="panel console-panel">
                    <Console outputs={outputs} isRunning={isRunning} />
                </div>
            </div>

            {/* Mobile Tab Layout */}
            <div className="mobile-tabs">
                <div className="mobile-tab-nav">
                    <button
                        className={`mobile-tab-button ${mobileTab === 'lesson' ? 'active' : ''}`}
                        onClick={() => setMobileTab('lesson')}
                    >
                        <span className="mobile-tab-icon">📚</span>
                        <span>Lesson</span>
                    </button>
                    <button
                        className={`mobile-tab-button ${mobileTab === 'code' ? 'active' : ''}`}
                        onClick={() => setMobileTab('code')}
                    >
                        <span className="mobile-tab-icon">💻</span>
                        <span>Code</span>
                    </button>
                    <button
                        className={`mobile-tab-button ${mobileTab === 'output' ? 'active' : ''}`}
                        onClick={() => setMobileTab('output')}
                    >
                        <span className="mobile-tab-icon">📤</span>
                        <span>Output</span>
                    </button>
                </div>

                <div className={`mobile-tab-content ${mobileTab === 'lesson' ? 'active' : ''}`}>
                    <LessonPanel
                        lesson={currentLesson}
                        onLessonChange={(lesson) => {
                            setCurrentLesson(lesson);
                            setMobileTab('code'); // Auto-switch to code tab
                        }}
                        allLessons={pythonLessons}
                        onLoadSolution={handleLoadSolution}
                        completedLessons={completedLessons}
                    />
                </div>

                <div className={`mobile-tab-content ${mobileTab === 'code' ? 'active' : ''}`}>
                    <CodeEditor value={code} onChange={setCode} />
                    <div className="editor-controls">
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                handleRunCode();
                                setTimeout(() => setMobileTab('output'), 500);
                            }}
                            disabled={isRunning || isPyodideLoading}
                        >
                            {isRunning ? (
                                <>
                                    <span className="btn-spinner animate-spin">⚙️</span>
                                    Running...
                                </>
                            ) : isPyodideLoading ? (
                                <>
                                    <span className="btn-spinner animate-spin">⚙️</span>
                                    Loading...
                                </>
                            ) : (
                                <>
                                    <span className="btn-icon">▶</span>
                                    Run
                                </>
                            )}
                        </button>
                        <button className="btn btn-secondary" onClick={handleResetCode}>
                            <span className="btn-icon">↻</span>
                            Reset
                        </button>
                    </div>
                </div>

                <div className={`mobile-tab-content ${mobileTab === 'output' ? 'active' : ''}`}>
                    <Console outputs={outputs} isRunning={isRunning} />
                    <div className="editor-controls" style={{ marginTop: '12px' }}>
                        <button className="btn btn-secondary" onClick={handleClearConsole}>
                            <span className="btn-icon">🗑️</span>
                            Clear
                        </button>
                        <button className="btn btn-secondary" onClick={() => setMobileTab('code')}>
                            <span className="btn-icon">💻</span>
                            Back to Code
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
