// var angka=[1,2,3,4,5,6,7,8];

// angka.forEach(function(e) {
//     console.log(e);

// });

// var angka=[1,2,3,4,5,6,7,8];

// angka.forEach(angka=> {
//     console.log(angka);

// });

const message = [
    {type: 'A', name: 'salsabila 1'},
    {type: 'A', name: 'salsabila 2'},
    {type: 'B', name: 'salsabila 3'},
    {type: 'B', name: 'salsabila 4'},
    {type: 'C', name: 'salsabila 5'},
    {type: 'C', name: 'salsabila 6'},
    {type: 'D', name: 'salsabila 7'},
    {type: 'D', name: 'salsabila 8'},
    {type: 'E', name: 'salsabila 9'},
    {type: 'E', name: 'salsabila 10'},
  ];
 
  const k = {};
   message.forEach(function (data, index) {
     if (!k[data.type]) {
        k[data.type]=[];
        
     }
     k[data.type].push({index, name: data.name});
   })

  console.log(message,k);












