var myTuple1: [number, string, string, string]; 
myTuple1 = [10,"Hello","World","typeScript"]; 
console.log("Items before push " + myTuple1.length)

myTuple1.push(12) // append value to the tuple 
console.log("Items after push " + myTuple1.length) 
console.log("Items before pop " + myTuple1.length)
 
// removes and returns the last item
console.log(myTuple1.pop() + " popped from the tuple") 
console.log("Items after pop " + myTuple1.length)