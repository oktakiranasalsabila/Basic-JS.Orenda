// function tambah(a,b) { //-> parameter
//     return a + b;
// }
// var hasil = tambah(2,3); //-> argument
// console.log(hasil);

// function tambah() {
//     var hasil = 0;
//     for (var i = 0; i< arguments.length; i++){
//         hasil += arguments[i];
//     }
//     return hasil;
// }
// var coba = tambah(1,2,3,4,5);
// console.log(coba);

// function kali() {
//     var hasil = 3;
//     for (var i = 0; i< arguments.length; i++){
//         hasil *= arguments[i];
//     }
//     return hasil;
// }
// var coba = kali(1,2,3,4,5);
// console.log(coba);

function bagi() {
    var hasil = 20;
    for (var i = 0; i< arguments.length; i++){
        hasil /= arguments[i];
    }
    return hasil;
}
var coba = bagi(10,2);
console.log(coba);
