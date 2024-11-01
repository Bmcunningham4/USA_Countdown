const countdowns = [
    {
        date: new Date("October 31, 2024 01:10:00").getTime(),
        ids: {
            days: "days-1",
            hours: "hours-1",
            minutes: "minutes-1",
            seconds: "seconds-1",
            timer: "timer-1"
        }
    },
    {
        date: new Date("October 31, 2024 01:10:01").getTime(),
        ids: {
            days: "days-2",
            hours: "hours-2",
            minutes: "minutes-2",
            seconds: "seconds-2",
            timer: "timer-2"
        }
    },
    {
        date: new Date("November 1, 2024 14:00:00").getTime(),
        ids: {
            days: "days-3",
            hours: "hours-3",
            minutes: "minutes-3",
            seconds: "seconds-3",
            timer: "timer-3"
        }
    },
    {
        date: new Date("November 2, 2024 22:00:00").getTime(),
        ids: {
            days: "days-8",
            hours: "hours-8",
            minutes: "minutes-8",
            seconds: "seconds-8",
            timer: "timer-8"
        }
    },
    {
        date: new Date("November 23, 2024 07:30:00").getTime(),
        ids: {
            days: "days-4",
            hours: "hours-4",
            minutes: "minutes-4",
            seconds: "seconds-4",
            timer: "timer-4"
        }
    },
    {
        date: new Date("November 24, 2024 23:00:00").getTime(),
        ids: {
            days: "days-5",
            hours: "hours-5",
            minutes: "minutes-5",
            seconds: "seconds-5",
            timer: "timer-5"
        }
    },
    {
        date: new Date("November 20, 2024 11:00:00").getTime(),
        ids: {
            days: "days-6",
            hours: "hours-6",
            minutes: "minutes-6",
            seconds: "seconds-6",
            timer: "timer-6"
        }
    },
    {
        date: new Date("November 7, 2024 6:30:00").getTime(),
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

        if (timeRemaining > 0) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            document.getElementById(countdown.ids.days).innerHTML = days;
            document.getElementById(countdown.ids.hours).innerHTML = hours;
            document.getElementById(countdown.ids.minutes).innerHTML = minutes;
            document.getElementById(countdown.ids.seconds).innerHTML = seconds;
        } else {
            // Set countdown to zero and display event started message
            document.getElementById(countdown.ids.days).innerHTML = "0";
            document.getElementById(countdown.ids.hours).innerHTML = "0";
            document.getElementById(countdown.ids.minutes).innerHTML = "0";
            document.getElementById(countdown.ids.seconds).innerHTML = "0";
            document.getElementById(countdown.ids.timer).innerHTML = "Event has started!";
        }
    });
}

// Update all countdowns every second
setInterval(updateCountdowns, 1000);
