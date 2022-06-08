import clock from 'clock';

export class Clock {
  public clockCallback: (text: string) => void;
  constructor() {
    clock.granularity = 'minutes';
    // Update the clock every tick event
    clock.addEventListener('tick', this.updateClock);
  }
  private updateClock = () => {
    if (!this.clockCallback) return;
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const zeroPad = (n: number) => (n < 10 ? '0' + n : n); // add zeros before number 1-9
    const time = `${zeroPad(hours)}:${zeroPad(minutes)}`;
    this.clockCallback(time);
  };
}
export default Clock;
