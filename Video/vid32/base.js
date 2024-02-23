// function cetakAngka(n){
//     if (n === 0) { //base case
//        return; 
//     }
//     console.log(n);
//     cetakAngka(n-1);

// }
// cetakAngka(10);

function cetakAngka(n){//rekursif
    if (n === 0) return 1;
  
    return n * faktorial(n-1);
  
}

// looping
// function faktorial(n){
//     var hasil = 1;
//     for(var i = n; i>0; i--){
//         hasil *= i;
//     }
//     return hasil;
// }