import { useState, useEffect } from "react";

export default function useTime(timeType: boolean) {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout | null;
        if (isRunning) {
            interval = setInterval(() => {
                setTime((prev) => {
                    const newTime = prev + (timeType == false ? 1 : -1);

                    if (newTime <= 0) {
                        setIsRunning(false);
                        return 0;
                    }
                    return newTime;
                });
            }, 1000);
        }

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [isRunning, timeType]);

    return { isRunning, setIsRunning, time, setTime };
}
