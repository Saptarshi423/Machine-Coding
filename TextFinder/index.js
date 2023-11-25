const inputBox = document.getElementsByClassName('search--input')[0];
const content = document.getElementsByClassName('input')[0].textContent.trim();


const render = (value)=>{
    document.getElementsByClassName('input')[0].innerHTML = value;
}
const findAndHighLightTetx = (value)=>{
    let booleanArr =  Array(content.length).fill(false);
    for(let i=0;i<content.length;i++){
        if(content.substring(i,value.length+i).toLowerCase() ===  value.toLowerCase()){
            booleanArr.fill(true,i, i+value.length);
        }
    }

    let output = ``;
    for(let i=0;i<content.length;i++){
        if(booleanArr[i] && !booleanArr[i-1]){
            output+=`<b style="color:red">`
        }

        output+=content[i];
        if(booleanArr[i] && !booleanArr[i+1]){
            output+=`</b>`
        }
    }

    render(output)
}

const handleChange = (e)=>{
    findAndHighLightTetx(e.target.value);
}

(()=>{
    inputBox.addEventListener("input", handleChange);
})()