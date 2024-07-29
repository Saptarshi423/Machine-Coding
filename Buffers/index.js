let buffer = new ArrayBuffer(4);
let view = new DataView(buffer);
// console.log(buffer)
view.setUint32(0,200);
view.setUint32(1,250);
view.setUint32(2,350);

console.log( new Uint32Array(view)[0]);