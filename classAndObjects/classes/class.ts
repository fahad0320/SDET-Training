class Car { 
    //field 
    engine:string; 
  
    //constructor 
    constructor(engine:string) { 
       this.engine = engine 
    }  
 
    //function 
    disp():void { 
       console.log("Engine is  :   "+this.engine) 
    } 
 }

 //create an object 
var object = new Car("XXSY1")

//access the field 
console.log("Reading attribute value Engine as :  "+object.engine)  

//access the function
object.disp()