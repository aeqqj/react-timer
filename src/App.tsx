import { useState } from "react";
import useTime from "./useTime.tsx";
import Stopwatch from "./features/Stopwatch.tsx";
import Timer from "./features/Timer.tsx";

function App() {
    const [mode, setMode] = useState(true);
    const { isRunning, setIsRunning, time, setTime } = useTime(mode);

    function handleStart() {
        if (!isRunning) {
            setIsRunning(true);
        } else {
            setIsRunning(false);
        }
    }

    function handleReset() {
        setIsRunning(false);
        setTime(0);
    }

    function handleMode() {
        setMode(!mode);
        setTime(0);
    }

    return (
        <>
            <section className="w-screen h-screen flex flex-col items-center justify-center">
                <div className="h-[420px] flex gap-4">
                    {mode ? (
                        <Timer
                            time={time}
                            isRunning={isRunning}
                            setIsRunning={setIsRunning}
                            setTime={setTime}
                        />
                    ) : (
                        <Stopwatch
                            time={time}
                            isRunning={isRunning}
                            setIsRunning={setIsRunning}
                            setTime={setTime}
                        />
                    )}
                </div>
                <div className="w-full flex gap-8 justify-center items-center">
                    <button className="btn-primary" onClick={handleStart}>
                        {isRunning ? "Stop" : "Start"}
                    </button>
                    <button className="btn-primary" onClick={handleReset}>
                        Reset
                    </button>
                    <button className="btn-primary" onClick={handleMode}>
                        Mode
                    </button>
                </div>
            </section>
        </>
    );
}

export default App;
