
import { getMonth } from "./getMonth";
/**
 * Retrieves the current date and time, formats it, and logs the individual components.
 * The output format is "day-month-year at hour-minute-second".
 * 
 * @returns {string} Formatted current date and time.
 * @throws {Error} If there is an issue with date retrieval (unlikely with Date object).
 */export const getTimeStamp = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = getMonth(now.getMonth());
    const day = now.getDate();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    console.log("Year:", year);
    console.log("Month:", month);
    console.log("Day:", day);
    console.log("Hour:", hour);
    console.log("Minute:", minute);
    console.log("Second:", second);
    
    // You can format the output as needed
    // return `${year}-${month}-${day} ${hour}:${minute}:${second}`;

    return `${day}-${month}-${year} at ${hour}-${minute}-${second}`;

}

 