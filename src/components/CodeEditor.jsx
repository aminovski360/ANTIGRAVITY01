import React from 'react';
import Editor from '@monaco-editor/react';
import './CodeEditor.css';

function CodeEditor({ value, onChange, readOnly = false }) {
    const handleEditorChange = (newValue) => {
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className="code-editor">
            <div className="editor-header">
                <div className="editor-title">
                    <span className="editor-icon">{'</>'}</span>
                    <span>code.py</span>
                </div>
                <div className="editor-language">Python</div>
            </div>
            <Editor
                height="100%"
                defaultLanguage="python"
                value={value}
                onChange={handleEditorChange}
                theme="vs-dark"
                options={{
                    fontSize: 14,
                    fontFamily: 'JetBrains Mono, monospace',
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    readOnly: readOnly,
                    lineNumbers: 'on',
                    roundedSelection: false,
                    cursorStyle: 'line',
                    automaticLayout: true,
                    tabSize: 4,
                    wordWrap: 'on',
                    padding: { top: 16, bottom: 16 },
                }}
            />
        </div>
    );
}

export default CodeEditor;
