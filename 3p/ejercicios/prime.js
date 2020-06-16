 let prime = (nm) => {
     let ct = 0
     for (var a = 1; a <= nm; a++) {
         if (nm % a === 0) {
             ct++
         }
         if (ct > 2) {
             return false
         }
     }
     if (ct <= 2) {
         return true
     }
 }

 let print = (cont) => {
     let ct = 0,
         temp = 1;
     do {
         if (prime(temp) == true) {
             console.log(temp)
             ct++
         }
         temp++
     } while (ct < cont);
 }
 print(20)