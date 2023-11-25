import { SearchQuery, debounce } from "./helpers/utils.js";

async function fetchItems(value) {
  try {
    let response = await SearchQuery(value);
    renderItems(response);
  } catch (error) {
    console.error(error);
  }
}

function renderItems(items=[]){
    let outputContainer = document.getElementsByClassName("output-wrapper")[0];
    let outputHtml=``;

    if(!items){
        return;
    }

    items.forEach((item,index)=>{
        outputHtml+=`<div id="${index}" class="output">${item}</div>`
    });
    
    outputContainer.classList.add("display")
    outputContainer.innerHTML = outputHtml
}

function handelChange(e) {
  let input = e.target.value;
  if(input === ""){
    document.getElementsByClassName("output-wrapper")[0].classList.remove("display");
    return;  
  }
  fetchItems(e.target.value);
}

(() => {
  let inpBox = document.getElementsByClassName("search-input")[0];
  inpBox.addEventListener("input", debounce(handelChange));
})();
