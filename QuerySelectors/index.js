class Selector{
    #root = null;
    #nodes = [];

    constructor(){
        this.#root = document.body;
    }

    getElementsByClassName(value){
        const findNodes = (node)=>{
            if(node.classList && node.classList.contains(value)){
                this.#nodes.push(node);

                if(node.childNodes.length === 0){
                    return;
                }
            }

            for(let i=0;i<node.childNodes.length;i++){
                findNodes(node.childNodes[i])
            }
        };

        findNodes(this.#root);
        return this.#nodes;
    }

    getRootNode(){
        return this.#root;
    }
}

let mySelector = new Selector();
console.log(mySelector.getElementsByClassName("test2"));