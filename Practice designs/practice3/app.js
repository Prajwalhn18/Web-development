const countDown = () =>{
    const countDate = new Date("Aug 20,2021 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = now - countDate;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = Math.floor(minutes * 60);
    const days = Math.floor(hours * 24);

    const textDays = Math.floor(gap / days );
    console.log(textDays);
    const textHours = Math.floor (gap%days) / hours;
    const textMinutes = Math.floor(gap % hours ) / minutes;
    const textSeconds = Math.floor(gap % minutes ) / seconds;

    document.querySelector(".days").innerText = textDays;
    document.querySelector(".hours").innerText = textHours;
    document.querySelector(".minutes").innerText = textMinutes;
    document.querySelector(".seconds").innerText = textSeconds;
};
setInterval(countDown,1000);