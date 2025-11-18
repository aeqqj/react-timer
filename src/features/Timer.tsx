import { ChevronUp, ChevronDown } from "lucide-react";

type timerProps = {
    time: number;
    isRunning: boolean;
    setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
    setTime: React.Dispatch<React.SetStateAction<number>>;
};

export default function Timer(props: timerProps) {
    const hours = Math.floor(props.time / 3600);
    const minutes = Math.floor((props.time % 3600) / 60);
    const seconds = props.time % 60;

    const tenthsHour = Math.floor(hours / 10);
    const onesHour = hours % 10;
    const tenthsMinute = Math.floor(minutes / 10);
    const onesMinute = minutes % 10;
    const tenthsSecond = Math.floor(seconds / 10);
    const onesSecond = seconds % 10;

    function updateTime(place: number, direction: "up" | "down"): void {
        let amount = 0;

        switch (place) {
            case 6:
                amount = 36000;
                break;
            case 5:
                amount = 3600;
                break;
            case 4:
                amount = 600;
                break;
            case 3:
                amount = 60;
                break;
            case 2:
                amount = 10;
                break;
            case 1:
                amount = 1;
                break;
        }

        props.setTime((prev) => {
            const newTime = direction === "up" ? prev + amount : prev - amount;
            return Math.max(0, newTime);
        });
    }

    return (
        <>
            <div className="h-[500px] flex flex-col gap-4">
                <div className="card inline-block text-xl text-center w-42">
                    Timer
                </div>
                <div className="gap-8">
                    <div className="h-80 card flex gap-4">
                        <div className="flex gap-4">
                            <div className="timer-card">
                                <button onClick={() => updateTime(6, "up")}>
                                    <ChevronUp />
                                </button>
                                {tenthsHour}
                                <button onClick={() => updateTime(6, "down")}>
                                    <ChevronDown />
                                </button>
                            </div>
                            <div className="timer-card">
                                <button onClick={() => updateTime(5, "up")}>
                                    <ChevronUp />
                                </button>
                                {onesHour}
                                <button onClick={() => updateTime(5, "down")}>
                                    <ChevronDown />
                                </button>
                            </div>
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
                            <div className="timer-card">
                                <button onClick={() => updateTime(4, "up")}>
                                    <ChevronUp />
                                </button>
                                {tenthsMinute}
                                <button onClick={() => updateTime(4, "down")}>
                                    <ChevronDown />
                                </button>
                            </div>
                            <div className="timer-card">
                                <button onClick={() => updateTime(3, "up")}>
                                    <ChevronUp />
                                </button>
                                {onesMinute}
                                <button onClick={() => updateTime(3, "down")}>
                                    <ChevronDown />
                                </button>
                            </div>
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
                            <div className="timer-card">
                                <button onClick={() => updateTime(2, "up")}>
                                    <ChevronUp />
                                </button>
                                {tenthsSecond}
                                <button onClick={() => updateTime(2, "down")}>
                                    <ChevronDown />
                                </button>
                            </div>
                            <div className="timer-card">
                                <button onClick={() => updateTime(1, "up")}>
                                    <ChevronUp />
                                </button>
                                {onesSecond}
                                <button onClick={() => updateTime(1, "down")}>
                                    <ChevronDown />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
