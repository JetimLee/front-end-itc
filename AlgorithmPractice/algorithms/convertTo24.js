const time = "05:00AM";

function convertTo24HrsFormat(time) {
  // write your solution here
  let [hour, minutes] = time.split(":");
  let modifier = minutes.includes("AM") ? "AM" : "PM";
  minutes = minutes.includes("AM")
    ? minutes.replace("AM", "")
    : minutes.replace("PM", "");
  if (hour === "12") {
    hour = "00";
  }
  if (modifier === "PM") {
    hour = parseInt(hour, 10) + 12;
  }
  return `${hour}:${minutes}`;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`);
