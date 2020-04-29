function calculator(a,b,c){
  let x;
  if(c=='*' && typeof(a)=='number' && typeof(b)=='number'){x = a* b;}
  else if(c=='/'&& typeof(a)=='number' && typeof(b)=='number' && b!=0){x = a/b;}
  else if(c=='+'&& typeof(a)=='number' && typeof(b)=='number'){x = a+b;}
  else if(c=='-'&& typeof(a)=='number' && typeof(b)=='number'){x = a-b;}
  else{console.log('incorrectly entered data');}
  console.log(x);
}
try{
    calculator(1,a,'8');
}catch(e){
    console.log('Error ' + e.name + ":" + e.message);
}
try{
    calculator(5,7,'*');
}catch(e){
    console.log('Error ' + e.name + ":" + e.message);
}
try{
    calculator(5,2,'/');
}catch(e){
    console.log('Error ' + e.name + ":" + e.message);
}