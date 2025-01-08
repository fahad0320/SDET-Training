class Encapsulate { 
    str:string = "hello" 
    private str5:string = "world" 
 }
  
 var obj3 = new Encapsulate() 
 console.log(obj3.str)     //accessible 
// console.log(obj3.str5)   //compilation Error as str2 is private