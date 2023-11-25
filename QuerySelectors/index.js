class Selector{
    #root = null;
    #nodes = [];
    #node_with_id = null;

    constructor(){
        this.#root = document.body; // save a copy of the root node.
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

    getElementById(value){
        const findNodes = (node)=>{
            if(node.id === value){
                this.#node_with_id = node;
                return;
            }

            for(let i=0;i<node.childNodes.length;i++){
                findNodes(node.childNodes[i])
            }
        };

        findNodes(this.#root);
        return this.#node_with_id ?? new Error("Node not found");
    }

    getRootNode(){
        return this.#root;
    }
}

let mySelector = new Selector();
console.log(mySelector.getElementById("test5"));