import './styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
    this.refs = {
      days: document.querySelector('span[data-value="days"]'),
      hours: document.querySelector('span[data-value="hours"]'),
      mins: document.querySelector('span[data-value="mins"]'),
      secs: document.querySelector('span[data-value="secs"]'),
    };
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      this.updateCountdowntimer(deltaTime);
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateCountdowntimer(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`;
  }
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 01, 2022'),
});
