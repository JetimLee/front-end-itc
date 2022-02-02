const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

//the destructuring portion comes first, annotation comes after
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};

logWeather(todaysWeather);
