const updateUTCTime = () => {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDayOfTheWeek = daysOfTheWeek[currentDate.getUTCDay()];
  document.querySelector(
    "[data-testid='currentDayOfTheWeek']"
  ).textContent = `${currentDayOfTheWeek}`;

  const currentUTCTime = currentDate.toUTCString();
  const currentUTCTimeInMilliSeconds = Date.parse(currentUTCTime);
  document.querySelector(
    "[data-testid='currentUTCTime']"
  ).textContent = `${currentUTCTimeInMilliSeconds}`;
  console.log(currentDayOfTheWeek);
  console.log(currentUTCTimeInMilliSeconds);
};

setInterval(updateUTCTime, 1000);

updateUTCTime();
