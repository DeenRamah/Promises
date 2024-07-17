//then() method is used with the callback when the promise is successfully fullfilled or resolved
//you can chain multiple then() methods with the promise

let countValue = new Promise(function (resolve, reject){
  resolve("Promise resolved");
});


countValue
  .then(function successValue(result){
  console.log(result);
})
  .then(function successValue1(){
  console.log("Call multiple functions this way")
})
