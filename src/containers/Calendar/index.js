import React from 'react';
import './index.css';

const Calendar = () => {
    var MODE = "DAY";
    if (window.device.toLowerCase() === "tablet") { MODE = "WEEK" }
    if (window.device.toLowerCase() === "computer") { MODE = "MONTH" }
    return <iframe className={"calendar-iframe"} src={"https://calendar.google.com/calendar/embed?src=sahiln.narula%40gmail.com&ctz=America%2FToronto&mode=" + MODE}></iframe>;
};

export default Calendar;
