export function splitTime(timeString: string) {
  const [hour, minute] = timeString.split(":");
  return {
    hour,
    minute,
  };
}

export function joinTime(hour: string, minute: string) {
  const pad = (n: string) => String(n).padStart(2, "0");
  return `${pad(hour)}:${pad(minute)}`;
}
