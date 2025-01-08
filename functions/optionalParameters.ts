function summ(x: number, y: number, z?: number): number {
    if (z){
       return x + y + z;
    }
    else{
       return x + y;
    }
 }
 console.log(summ(2,3));
 console.log(summ(2,3,5));