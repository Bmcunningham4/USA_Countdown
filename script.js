const countdowns = [
    {
        date: new Date("December 27, 2024 19:00:00").getTime(),
        ids: {
            days: "days-1",
            hours: "hours-1",
            minutes: "minutes-1",
            seconds: "seconds-1",
            timer: "timer-1"
        }
    },
    {
        date: new Date("January 15, 2025 12:00:00").getTime(),
        ids: {
            days: "days-2",
            hours: "hours-2",
            minutes: "minutes-2",
            seconds: "seconds-2",
            timer: "timer-2"
        }
    },
    {
        date: new Date("February 1, 2025 18:30:00").getTime(),
        ids: {
            days: "days-3",
            hours: "hours-3",
            minutes: "minutes-3",
            seconds: "seconds-3",
            timer: "timer-3"
        }
    },
    {
        date: new Date("March 10, 2025 09:00:00").getTime(),
        ids: {
            days: "days-4",
            hours: "hours-4",
            minutes: "minutes-4",
            seconds: "seconds-4",
            timer: "timer-4"
        }
    },
    {
        date: new Date("April 25, 2025 16:00:00").getTime(),
        ids: {
            days: "days-5",
            hours: "hours-5",
            minutes: "minutes-5",
            seconds: "seconds-5",
            timer: "timer-5"
        }
    },
    {
        date: new Date("May 30, 2025 20:45:00").getTime(),
        ids: {
            days: "days-6",
            hours: "hours-6",
            minutes: "minutes-6",
            seconds: "seconds-6",
            timer: "timer-6"
        }
    },
    {
        date: new Date("June 15, 2025 14:15:00").getTime(),
        ids: {
            days: "days-7",
            hours: "hours-7",
            minutes: "minutes-7",
            seconds: "seconds-7",
            timer: "timer-7"
        }
    }
];


function updateCountdowns() {
    const now = new Date().getTime();

    countdowns.forEach((countdown) => {
        const timeRemaining = countdown.date - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById(countdown.ids.days).innerHTML = days;
        document.getElementById(countdown.ids.hours).innerHTML = hours;
        document.getElementById(countdown.ids.minutes).innerHTML = minutes;
        document.getElementById(countdown.ids.seconds).innerHTML = seconds;

        if (timeRemaining < 0) {
            clearInterval(interval);
            document.getElementById(countdown.ids.days).innerHTML = "0";
            document.getElementById(countdown.ids.hours).innerHTML = "0";
            document.getElementById(countdown.ids.minutes).innerHTML = "0";
            document.getElementById(countdown.ids.seconds).innerHTML = "0";
            document.getElementById(countdown.ids.timer).innerHTML = "Event has started!";
        }
    });
}

// Update all countdowns every second
const interval = setInterval(updateCountdowns, 1000);
