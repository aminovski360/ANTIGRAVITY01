let pyodideInstance = null;
let loadingPromise = null;

export async function loadPyodide() {
    if (pyodideInstance) {
        return pyodideInstance;
    }

    if (loadingPromise) {
        return loadingPromise;
    }

    loadingPromise = (async () => {
        try {
            const pyodide = await window.loadPyodide({
                indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/',
            });

            // Set up stdout/stderr capture
            pyodide.setStdout({
                batched: (output) => {
                    // This will be overridden by the component
                    console.log(output);
                }
            });

            pyodide.setStderr({
                batched: (output) => {
                    console.error(output);
                }
            });

            pyodideInstance = pyodide;
            return pyodide;
        } catch (error) {
            console.error('Failed to load Pyodide:', error);
            loadingPromise = null;
            throw error;
        }
    })();

    return loadingPromise;
}

export async function runPythonCode(code, onOutput, onError) {
    try {
        const pyodide = await loadPyodide();

        // Capture stdout
        let output = '';
        pyodide.setStdout({
            batched: (text) => {
                output += text + '\n';
                if (onOutput) onOutput(text);
            }
        });

        pyodide.setStderr({
            batched: (text) => {
                if (onError) onError(text);
            }
        });

        // Run the code
        const result = await pyodide.runPythonAsync(code);

        // If there's a return value, add it to output
        if (result !== undefined && result !== null) {
            const resultStr = result.toString();
            output += resultStr;
            if (onOutput) onOutput(resultStr);
        }

        return { success: true, output };
    } catch (error) {
        const errorMessage = error.message || String(error);
        if (onError) onError(errorMessage);
        return { success: false, error: errorMessage };
    }
}

export function isPyodideReady() {
    return pyodideInstance !== null;
}
