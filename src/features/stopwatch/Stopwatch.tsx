import useStopwatch from "./useStopwatch.tsx";

export default function Stopwatch() {
    const { isRunning, setIsRunning, time, setTime } = useStopwatch();

    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const tenthsHour = Math.floor(hours / 10);
    const onesHour = hours % 10;
    const tenthsMinute = Math.floor(minutes / 10);
    const onesMinute = minutes % 10;
    const tenthsSecond = Math.floor(seconds / 10);
    const onesSecond = seconds % 10;

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

    return (
        <>
            <div className="h-[500px] flex flex-col gap-4">
                <div className="card inline-block text-xl text-center w-42">
                    Stopwatch
                </div>
                <div className="gap-8">
                    <div className="h-80 card flex gap-4">
                        <div className="flex gap-4">
                            <div className="time-card">{tenthsHour}</div>
                            <div className="time-card">{onesHour}</div>
                        </div>
                        <div className="w-4 flex flex-col self-center gap-16">
                            <svg
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="50" cy="50" r="50" fill="#f2f2f2" />
                            </svg>

                            <svg
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="50" cy="50" r="50" fill="#f2f2f2" />
                            </svg>
                        </div>
                        <div className="flex gap-4">
                            <div className="time-card">{tenthsMinute}</div>
                            <div className="time-card">{onesMinute}</div>
                        </div>
                        <div className="w-4 flex flex-col self-center gap-16">
                            <svg
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="50" cy="50" r="50" fill="#f2f2f2" />
                            </svg>

                            <svg
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="50" cy="50" r="50" fill="#f2f2f2" />
                            </svg>
                        </div>
                        <div className="flex gap-4">
                            <div className="time-card">{tenthsSecond}</div>
                            <div className="time-card">{onesSecond}</div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex gap-8 justify-center items-center">
                    <button className="btn-primary" onClick={handleStart}>
                        {isRunning ? "Stop" : "Start"}
                    </button>
                    <button className="btn-primary" onClick={handleReset}>
                        Reset
                    </button>
                    <button className="btn-primary">Mode</button>
                </div>
            </div>
        </>
    );
}
