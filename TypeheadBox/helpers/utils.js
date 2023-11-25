import { data } from "./data.js";

// mimic an actual API response.
function SearchQuery(val) {
  const items = data.filter(
    (item) => item.substr(0, val.length).toLowerCase() === val.toLowerCase()
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 200);
  });
}

function debounce(fn, delay=500){
  let timer = null;

  return function(){
      let context = this;
      clearTimeout(timer);
      timer = setTimeout(()=>{
          fn.apply(context, arguments)
      },delay)
  }
}

export { SearchQuery, debounce };
