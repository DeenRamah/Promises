//catch() method is used with the callback when the promise is rejected or if an error occurs
let countValue = new Promise(function(resolve,reject){
  reject('Promise Rejected');
});

countValue
  .then(function successValue(result){
      console.log(result);
    })
  .catch(
    function errorValue(result){
      console.log(result);
  }
)
