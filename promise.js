const count = true;

let countValue = new Promise(function (resolve, reject){
  if(count){
    resolve("There is a count Value");
  }else {
    reject("There is no count Value");
  }
});
