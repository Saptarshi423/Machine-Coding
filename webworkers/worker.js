onmessage = (e)=>{
    console.log("Worker started");
    const { data } = e;
    console.log(e);
    let sum = 0;

    for(let i = 0; i < data; i++) {
        sum += i;
    }
    postMessage(sum);
    console.log("Worker finished");
}