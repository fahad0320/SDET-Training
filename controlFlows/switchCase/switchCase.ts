var grades:string = "A"; 
switch(grades) { 
   case "A": { 
      console.log("Excellent"); 
      break; 
   } 
   case "B": { 
      console.log("Good"); 
      break; 
   } 
   case "C": {
      console.log("Fair"); 
      break;    
   } 
   case "D": { 
      console.log("Poor"); 
      break; 
   }  
   default: { 
      console.log("Invalid choice"); 
      break;              
   } 
}

// without break

var grd: string = 'A';
console.log("Entering switch block");
switch(grd) { 
   case "A": { 
      console.log("Excellent"); 
   } 
   case "B": { 
      console.log("Good"); 
   } 
   case "C": {
      console.log("Fair"); 
   } 
   case "D": { 
      console.log("Poor"); 
   }  
   default: { 
      console.log("Invalid choice");          
   } 
}
console.log("Exiting switch block");