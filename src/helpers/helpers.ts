export const timerToMs = (timer: string): number => {
  const splitTimer: string[] = timer.split(':');
  const hours1: number = Number(splitTimer[0]) * 60000 * 60;
  const minutes1: number = Number(splitTimer[1]) * 60000;
  const seconds1: number = Number(splitTimer[2]) * 1000;
  return hours1 + minutes1 + seconds1;
};

export const msToTime = (t: number) => {
  let seconds: string = String(Math.floor((t / 1000) % 60));
  if (seconds.length === 1) {
    seconds = '0' + seconds;
  }
  let minutes: string = String(Math.floor((t / 1000 / 60) % 60));
  if (minutes.length === 1) {
    minutes = '0' + minutes;
  }
  let hours: string = String(Math.floor((t / (1000 * 60 * 60)) % 24));
  if (hours.length === 1) {
    hours = '0' + hours;
  }
  return `${hours}:${minutes}:${seconds}`;
};
