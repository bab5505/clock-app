import React, {useState, useEffect} from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date());


    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const formatTime = () => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        return `${hours}:${minutes}:${seconds}`;
    };

    return(
        <div>
            <h1>{formatTime()}</h1>
        </div>
    );
};

export default Clock;