//Promises are useful when you have to handle more than one asynchronoustask, one after another
//you can perform an operation afetr a peomise is resolved using methods then(), catch(), and finally() 

const fPromise = new Promise((resolve, reject) =>{
  setTimeout(()=>{
    resolve(10);
  }, 1000)
});

fPromise.then(result =>{
  console.log(result);//10
  return result * 2;
}).then(result => {
  console.log(result)//20
  return result * 3;
}).then(result =>{
  console.log(result);//60
}).catch(error =>{
  console.error(error);//Handle any errors in the chain
});
