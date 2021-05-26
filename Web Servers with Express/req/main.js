const lib1 = require('./lib1')

console.log('hello world');
if(typeof window != 'undefined') {

    console.log('Running In Browser');
}
else {

    console.log('Running In Node');
}

console.log(lib1);

lib1.sayhi('Mr. Guest')

setTimeout(() => {
  
  console.log(lib1);
}, 2000)