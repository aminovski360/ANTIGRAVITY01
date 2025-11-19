import React, { useState } from 'react';
import './LessonPanel.css';

function LessonPanel({ lesson, onLessonChange, allLessons, onLoadSolution, completedLessons = [] }) {
    const [showHints, setShowHints] = useState(false);
    const [showSolution, setShowSolution] = useState(false);
    const [currentHint, setCurrentHint] = useState(0);

    const getDifficultyColor = (difficulty) => {
        switch (difficulty.toLowerCase()) {
            case 'beginner':
                return 'success';
            case 'intermediate':
                return 'warning';
            case 'advanced':
                return 'error';
            default:
                return 'primary';
        }
    };

    const handleNextHint = () => {
        if (lesson.hints && currentHint < lesson.hints.length - 1) {
            setCurrentHint(currentHint + 1);
        }
    };

    const handleShowSolution = () => {
        setShowSolution(true);
        if (onLoadSolution) {
            onLoadSolution(lesson.solution);
        }
    };

    const handleLessonChange = (newLesson) => {
        setShowHints(false);
        setShowSolution(false);
        setCurrentHint(0);
        onLessonChange(newLesson);
    };

    const progressPercent = Math.round((completedLessons.length / allLessons.length) * 100);

    return (
        <div className="lesson-panel">
            <div className="lesson-header">
                <h1 className="lesson-brand">
                    <span className="gradient-text">Crewers.ai</span>
                </h1>
                <p className="lesson-tagline">learn python with crewers.ai</p>
                <div className="progress-indicator">
                    🏆 Progress: {completedLessons.length}/{allLessons.length} ({progressPercent}%)
                </div>
            </div>

            <div className="lesson-selector">
                <label htmlFor="lesson-select">Choose a lesson:</label>
                <select
                    id="lesson-select"
                    value={lesson.id}
                    onChange={(e) => {
                        const selectedLesson = allLessons.find(
                            (l) => l.id === parseInt(e.target.value)
                        );
                        if (selectedLesson) {
                            handleLessonChange(selectedLesson);
                        }
                    }}
                    className="lesson-dropdown"
                >
                    {allLessons.map((l) => (
                        <option key={l.id} value={l.id}>
                            {completedLessons.includes(l.id) ? '✓ ' : ''}{l.id}. {l.title} ({l.category})
                        </option>
                    ))}
                </select>
            </div>

            <div className="lesson-content">
                <div className="lesson-meta">
                    <h2 className="lesson-title">{lesson.title}</h2>
                    <span className={`difficulty-badge difficulty-${getDifficultyColor(lesson.difficulty)}`}>
                        {lesson.difficulty}
                    </span>
                </div>

                {lesson.category && (
                    <div className="lesson-category">📁 {lesson.category}</div>
                )}

                <p className="lesson-description">{lesson.description}</p>

                <div className="lesson-instructions">
                    <div
                        className="markdown-content"
                        dangerouslySetInnerHTML={{
                            __html: lesson.instructions
                                .replace(/^# (.*?)$/gm, '<h3>$1</h3>')
                                .replace(/^## (.*?)$/gm, '<h4>$1</h4>')
                                .replace(/^- (.*?)$/gm, '<li>$1</li>')
                                .replace(/`([^`]+)`/g, '<code>$1</code>')
                                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                .replace(/```([^```]+)```/g, '<pre><code>$1</code></pre>')
                                .replace(/\n\n/g, '<br/><br/>')
                        }}
                    />
                </div>

                {lesson.hints && lesson.hints.length > 0 && (
                    <div className="hints-section">
                        {!showHints ? (
                            <button
                                className="hint-button"
                                onClick={() => setShowHints(true)}
                            >
                                💡 Need a hint?
                            </button>
                        ) : (
                            <div className="hints-container">
                                <div className="hint-header">
                                    💡 Hint {currentHint + 1} of {lesson.hints.length}
                                </div>
                                <div className="hint-content">
                                    {lesson.hints[currentHint]}
                                </div>
                                <div className="hint-controls">
                                    {currentHint < lesson.hints.length - 1 && (
                                        <button
                                            className="hint-next-button"
                                            onClick={handleNextHint}
                                        >
                                            Next Hint →
                                        </button>
                                    )}
                                    <button
                                        className="hint-close-button"
                                        onClick={() => setShowHints(false)}
                                    >
                                        Close Hints
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {lesson.solution && (
                    <div className="solution-section">
                        {!showSolution ? (
                            <button
                                className="solution-button"
                                onClick={handleShowSolution}
                            >
                                👁️ View Solution
                            </button>
                        ) : (
                            <div className="solution-container">
                                <div className="solution-header">
                                    ✅ Solution
                                </div>
                                <pre className="solution-code">
                                    <code>{lesson.solution}</code>
                                </pre>
                                <button
                                    className="solution-load-button"
                                    onClick={handleShowSolution}
                                >
                                    Load into Editor
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default LessonPanel;
