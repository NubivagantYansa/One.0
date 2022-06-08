import clock from 'clock';

export class DateDisplay {
  private months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

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
    const day = currDate.getDate();
    const month = currDate.getMonth();
    const dayOfTheWeek = currDate.getDay();

    const date = `${this.months[month]} ${day} ${this.days[dayOfTheWeek]}`;

    this.dateCallback(date);
  };
}

export default DateDisplay;
