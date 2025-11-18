type timerProps = {
    time: number;
    isRunning: boolean;
    setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
    setTime: React.Dispatch<React.SetStateAction<number>>;
};

export default function Stopwatch(props: timerProps) {
    const hours = Math.floor(props.time / 3600);
    const minutes = Math.floor((props.time % 3600) / 60);
    const seconds = props.time % 60;

    const tenthsHour = Math.floor(hours / 10);
    const onesHour = hours % 10;
    const tenthsMinute = Math.floor(minutes / 10);
    const onesMinute = minutes % 10;
    const tenthsSecond = Math.floor(seconds / 10);
    const onesSecond = seconds % 10;

    return (
        <>
            <div className="h-[500px] flex flex-col gap-4">
                <div className="card inline-block text-xl text-center w-42">
                    Stopwatch
                </div>
                <div className="gap-8">
                    <div className="h-80 card flex gap-4">
                        <div className="flex gap-4">
                            <div className="stopwatch-card">{tenthsHour}</div>
                            <div className="stopwatch-card">{onesHour}</div>
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
                            <div className="stopwatch-card">{tenthsMinute}</div>
                            <div className="stopwatch-card">{onesMinute}</div>
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
                            <div className="stopwatch-card">{tenthsSecond}</div>
                            <div className="stopwatch-card">{onesSecond}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
