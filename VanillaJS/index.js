const delay = 200;
let isOnline = true;
let interval_Id = null;
let cnt = 0;


document.addEventListener("mousemove",resetTimer);

function highlightBtn(color="green"){
    document.getElementById('btn').style.backgroundColor = color;
}

function startTimer() {
    interval_Id = setInterval(()=>{
        cnt++;
        checkIfUserOnline(highlightBtn)
    },delay);
}

function setIsOnline(value){
    isOnline = value;
}

function resetTimer(){
    if(!isOnline){
        setIsOnline(true);
    }

    cnt = 0;
    clearInterval(interval_Id);
    startTimer();
    highlightBtn();
}

export function checkIfUserOnline(callbk){
    if(typeof callbk !== 'function'){
        throw new Error("Callback is not of type function.")
    }
    if(isOnline && cnt < 50){
        return;
    };

    setIsOnline(false);
    callbk("red");
}



// Execute the function statements.
startTimer();
highlightBtn();

