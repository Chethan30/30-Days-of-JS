const setTime = () => {
  const hoursHand = document.querySelector(".hour-hand");
  const minutesHand = document.querySelector(".min-hand");
  const secondsHand = document.querySelector(".second-hand");
  const timeDisplay = document.querySelector(".time");

  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const time = hours + ":" + minutes + ":" + seconds;

  const secondsDegree = (seconds / 60) * 360 + 90;
  const minuteDegree = (minutes / 60) * 360 + 90;
  const hourDegree = (hours / 60) * 360;

  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
  minutesHand.style.transform = `rotate(${minuteDegree}deg)`;
  hoursHand.style.transform = `rotate(${hourDegree}deg)`;
  timeDisplay.innerHTML = time;

  console.log(secondsDegree);
};

setInterval(setTime, 1000);
