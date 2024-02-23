//manipulasi array

// 1. menambah isi array

// var arr = ["a", 1, true];
// console.log(arr);
// var arr =[];
// arr[0] ="salsa";
// arr[1] ="bila";
// arr[2] ="okta";
// arr[3] ="kirana";
// console.log(arr);

//2. menghapus isi array
// var arr = ["salsa","bila","okta","kirana"]
// arr[1] = undefined;
// console.log(arr);

//3. menampilkan isi array
// var arr=["salsa","bila","okta","kirana"];

// for (var i = 0; i < 3; i++) {
//     console.log ('mahasiswa ke- ' + (i+1) + ' : ' + arr[i]);
    
// }

//Method pada array

//1. join
// var arr = ['salsa','bila','okta','kirana'];
// console.log(arr.join(' - '));

//2. push(untuk menambah elemen array di akhir array) & pop(elemen terakhir seolah2 pecah) pop membuat elemennya satu persatu dan mengurangi elemen

// var arr = ['salsa','bila','okta','kirana'];
// arr.push('kirana');
// console.log(arr.join(' - '));
// var arr = ['salsa','bila','okta','kirana'];
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

//3. unshift & shift

// arr.unshift('salsa');
// console.log(arr.join(' - '));

var arr = ['salsa','bila','okta','kirana'];

arr.shift();
console.log(arr.join(' - '));