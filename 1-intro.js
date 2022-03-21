const amount = 12;
if(amount<10){
    console.log('small number');
}else{
    console.log('large number');
}

console.log('Hello it is my first node app');

// GLOBAL - No Window
// __dirname - path to current directory
// __filename - filename
// require - funtion to use modules(CommonJS)
// module - info about current module(file)
// process - info about env where the program is being executed

setInterval(() => {
    console.log('setting interval 1 sec');
},1000)
