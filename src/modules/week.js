import format from "date-fns/format";
import add from "date-fns/add";
import eachDayOfInterval from "date-fns/eachDayOfInterval";

export function daysOfWeek() {
    const today = new Date();
    console.log(today);
    const thisWeek = eachDayOfInterval({
        start: today,
        end: add(today, { days: 6 }),
    });
    // console.log(
    //     thisWeek.map((day) => {
    //         return day;
    //     })
    // );
    const formattedThisWeek = thisWeek.map((day) => {
        return format(day, "E d");
    });
    return thisWeek;
    // .map((day) => {
    //     return day.toISOString().split("T")[0];
    // });
    // return formattedThisWeek;
}
