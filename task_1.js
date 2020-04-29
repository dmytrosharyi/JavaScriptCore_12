function show(data){
  console.log(data);
}
function Person(){
  this.prs1 = {name:'Dmytro',age:27};
  this.prs2 = {name:'Nataliia',age:28};
  this.prs3 = {name:'Petro',age:31};
  this.prs4 = {name:'Vasyl',age:50};
  this.prs5 = {name:'Olha',age:19};
  this.getPrs1 = function(){
    return this.prs1;
  }
  this.getPrs2 = function(){
    return this.prs2;
  }
  this.getPrs3 = function(){
    return this.prs3;
  }
  this.getPrs4 = function(){
    return this.prs4;
  }
  this.getPrs5 = function(){
    return this.prs5;
  }
}
let p = new Person();

let map = new Map();
map
  .set(1,p.getPrs1())
  .set(2,p.getPrs2())
  .set(3,p.getPrs3())
  .set(4,p.getPrs4())
  .set(5,p.getPrs5());
function outputMapValues(thisMap){
  for(let value of thisMap.values()){
    show('name: '+value.name+', age: '+value.age);
  }
}
outputMapValues(map);