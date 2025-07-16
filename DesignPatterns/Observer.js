class Subject {
  constructor() {
    this.observers = [];
    this.temp_data = null;

    setInterval(() => {
      this.temp_data = Math.floor(Math.random() * 100);
      this.notify(this.temp_data);
    }, 1000);
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class Observer {
  constructor(name, callback) {
    this.name = name;
    this.callback = callback ? callback : undefined;
  }

  update(data) {
    let ret = `${this.name} received data: ${data}`;
    if (this.callback) {
      this.callback(ret);
    }
    return ret;
  }
}

function printData(data) {
  console.log(data);
  console.log(".............");
}

const config = {
  name: "Observer1",
  callback: printData,
};

function subscribe_to(config) {
  const m_sub = new Subject();
  const observer1 = new Observer(config.name, config.callback);
  m_sub.subscribe(observer1);
}

subscribe_to(config);

module.exports = {
  Subject,
  Observer,
  subscribe_to,
};
