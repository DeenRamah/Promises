//The finally method gets executed when the promise is either resolved successfully or rejected
let countValue = new Promise(function(resolve, reject){
  reject('Promise rejected');
});

countValue.finally(
  function greet(){
    console.log('This Code is executed');
  }
)
