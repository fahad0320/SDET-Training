var j:any; 
var n:any = "abc";
for(j in n) {
   console.log(n[j])  
}

// The for...in loop with arrays

const arr: number[] = [10,20,30];
for(var idx in arr){
    console.log(arr[idx]);
}

// The for...in loop with tuples

const tp:[string, number] = ['TypeScript',20]
for( var u in tp) {
   console.log(tp[u])  
}