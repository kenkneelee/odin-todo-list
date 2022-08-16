import format from "date-fns/format";
import add from "date-fns/add";
import eachDayOfInterval from "date-fns/eachDayOfInterval";

export function daysOfWeek () {
    const today = new Date();
    console.log (today);
    const thisWeek = eachDayOfInterval({
        start: today,
        end: add(today, {days:6})
    })
    const formattedThisWeek = thisWeek.map(day => {
        return format(day, "E d");
    })
    return (formattedThisWeek);
}