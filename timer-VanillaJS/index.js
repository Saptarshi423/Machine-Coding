let hourVal = null;
let minVal = null;
let secVal = null;
let timer = null;

let hourEle = document.querySelector("#hours");
let minuteEle = document.querySelector("#minutes");
let secondEle = document.querySelector("#seconds");
let startBtn = document.querySelector("#start");

const upDateHourEle = () => {
  hourEle.value = hourVal;
};
const upDateMinuteEle = () => {
  minuteEle.value = minVal;
};

const upDateSecondEle = () => {
  secondEle.value = secVal;
};

const startTimer = () => {
  if (hourVal === null || minVal === null || secVal === null) {
    alert("Please enter a valid time");
    return;
  }

  timer = setInterval(() => {
    if (secVal > 0) {
      secVal--;
      upDateSecondEle();
    }

    else if (secVal === 0) {
      if (minVal === 0) {
        if (hourVal === 0) {
          console.log("Time's up!");
          clearInterval(timer);
          alert("Time's up!");
          //return;
        } 
        else {
            console.log({hourVal, minVal, secVal});
          hourVal--;
          minVal = 59;
          secVal = 59;
          upDateHourEle();
          upDateMinuteEle();
          upDateSecondEle();
        }
      }
        console.log({hourVal, minVal, secVal});
      
        minVal--;
        secVal = 59;
        upDateMinuteEle();
        upDateSecondEle();
      
    }
  }, 1000);
};

hourEle.addEventListener("input", function (e) {
  hourVal = e.target.value;
  console.log(hourVal);
});

minuteEle.addEventListener("input", function (e) {
  minVal = e.target.value;
  console.log(minVal);
});

secondEle.addEventListener("input", function (e) {
  secVal = e.target.value;
  console.log(secVal);
});

startBtn.addEventListener("click", startTimer);
