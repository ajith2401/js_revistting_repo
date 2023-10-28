console.log(Boolean(10 > 9))

Boolean.prototype.Check = function(){
  if(this.valueOf() == true){
    return "yes"
  }
  else{
    return "no"
  }
}

let bool = true

console.log(bool.Check())

let bool1 = true;

console.log(bool1.toString());