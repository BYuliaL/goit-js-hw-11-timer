import './styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
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

    const sel = document.querySelector(this.selector);

    sel.children[0].firstElementChild.textContent = `${days}`;
    sel.children[1].firstElementChild.textContent = `${hours}`;
    sel.children[2].firstElementChild.textContent = `${mins}`;
    sel.children[3].firstElementChild.textContent = `${secs}`;
  }
}

const timer1 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('May 01, 2022'),
});

const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Apr 01, 2021'),
});
