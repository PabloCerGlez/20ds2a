function euclides(n1,n2){
     while (n2!=0){
         let temp=n2
         n2=n1%n2
         n1=temp
     }
     return n1
 }