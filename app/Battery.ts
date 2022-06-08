import { battery } from 'power';

export class Battery {
  public batteryCallback: (text: string) => void;
  constructor() {
    battery.addEventListener('change', this.updateBattery);
  }
  private updateBattery = () => {
    if (!this.batteryCallback) return;

    const batteryString = Math.floor(battery.chargeLevel) + '%';

    this.batteryCallback(batteryString);
  };
}
export default Battery;
