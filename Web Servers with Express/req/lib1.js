function sayhi(name){
    console.log('Hello', name);
}
console.log(module.exports); // print empty object
module.exports = {sayhi}
console.log(module.exports);

setTimeout(() => {
   module.exports.omg = 'Ahh!'
},1000)