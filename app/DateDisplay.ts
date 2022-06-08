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

  public dateCallback: (text: string) => void;

  constructor() {
    clock.addEventListener('tick', this.updateDate);
  }

  private updateDate = () => {
    if (!this.dateCallback) return;

    const currDate = new Date();
    const day = currDate.getDate();
    const month = currDate.getMonth();

    const date = `${this.months[month]} ${day}`;

    this.dateCallback(date);
  };
}

export default DateDisplay;
