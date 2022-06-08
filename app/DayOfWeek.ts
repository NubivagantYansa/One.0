import clock from 'clock';

export class DayOfWeek {
  private days = [
    'Monday',
    'Tuesday',
    'Wed',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  public dateCallback: (text: string) => void;

  constructor() {
    clock.addEventListener('tick', this.updateDate);
  }

  private updateDate = () => {
    if (!this.dateCallback) return;

    const currDate = new Date();

    const dayOfTheWeek = currDate.getDay();

    const date = this.days[dayOfTheWeek];

    this.dateCallback(date);
  };
}

export default DayOfWeek;
