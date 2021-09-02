import { useState, useEffect } from "react";

const Countdown = (props) => {
    const hours = 0
    const minutes = 3
    const seconds = 0
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);

    const tick = () => {
   
        if (hrs === 0 && mins === 0 && secs === 0) {
            console.log('time is up!');
            props.timesUp();
        } else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };
    
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    return (
        <div id="clock">
            <h3>Time<br/>Remaining</h3>
            <p>{`${hrs.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}

export default Countdown;