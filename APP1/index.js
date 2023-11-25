// function calculate(amount, notes){
//     let ans = {};
//     /* Code Goes Here */
//     let tmp_amt = amount;
//     let arr = [];
//     for(let i=0;i<notes.length;i++){
//         if(notes[i] <= tmp_amt){
//             arr[i] = Math.floor(tmp_amt/notes[i]); // [3, 1, 1] 
//             tmp_amt = tmp_amt % notes[i];
//         }
//     }
    
//     arr.forEach((item,index)=>{
//         ans[notes[index]] = item;
//     })

//     return ans;
// }
// /**
//   {2000: 3, 500: 1, 200:1}
// **/

// console.log(calculate(6700, [2000, 500, 200, 100]))


function getElementsByClassName(className){
    let items = [];
    function recurse(root){
        if(root.className === className){
            items.push(root);
            return;
        }
        for(let i=0;i<root.childNodes.length;i++){
            recurse(root.childNodes[i]);
        }
    }
    recurse(document.body);
    return items;
}
const items = getElementsByClassName("fa fa-star");
console.log('Elements are:-', items)
