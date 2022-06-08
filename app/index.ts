import Clock from './Clock';
import document from 'document';
import DateDisplay from './DateDisplay';
import DayOfWeek from './DayOfWeek';

const timeElement = document.getElementById('clock-label') as TextElement;
const dateElement = document.getElementById('date') as TextElement;
const dayElement = document.getElementById('day') as TextElement;

const clock = new Clock();
clock.clockCallback = (time) => (timeElement.text = time);

const dateDisplay = new DateDisplay();
dateDisplay.dateCallback = (date) => (dateElement.text = date);

const dayOfWeek = new DayOfWeek();
dayOfWeek.dateCallback = (date) => (dayElement.text = date);
