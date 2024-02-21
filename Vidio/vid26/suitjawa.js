//menangkap pilihan player
var tanya = true;
while (tanya == true) {
    

var p = prompt('pilih :gajah, semut, orang');

//menangkap pilihan komputer

//membangkitkan bilangan random
var comp=Math.random();

if( comp <0.34){
    comp = 'gajah';

}else if(comp >= 0.34 && comp <0.67){
    comp ='orang';
}else{
    comp = 'semut';
}

var hasil='';
//menentukan rules
if(p == comp){
   hasil = 'SERI!';
}else if (p == 'gajah') {
    // if (comp =='orang') {
    //     hasil ='menang';

    // }else{
    //     hasil='kalah';

    // }
    hasil = (comp == 'orang') ? 'menang' : 'kalah';
}else if (p == 'orang') {
    hasil = (comp == 'gajah') ? 'menang' : 'kalah';

}
else if (p == 'semut') {
    hasil = (comp == 'orang') ? 'menang' : 'kalah';

}else{
    hasil ='masukkan pilihan yang salah'
}

//tampilkan hasilnya
alert('kamu memilih : ' + p + ' dan komputer memilih :' + comp + '\nMaka hasilnya : kamu ' + hasil);
tanya = confirm('lagi?');

}
alert ('terimakasih telah bermain')