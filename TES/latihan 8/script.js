//Membuat objectnya (method)
function Angkot(sopir,trayek,penumpang,kas) {
    this.sopir =sopir;
    this.trayek =trayek;
    this.penumpang =penumpang;
    this.kas =kas;
    
    //kelola ketika penumpang naik
    this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
         return this.penumpang;
    }
///kelola ketika penumpang turun
    this.penumpangTurun = function (namaPenumpang,bayar) {
        if (this.penumpang.length === 0) {
            alert('angkot masih kosong');
            return false;
        }
   //kelola ketika penumpang turun dan harus bayar    
        for (var i = 0; i<this.penumpang.length; i++) {
            if (this.penumpang[i]== namaPenumpang) {
                this.penumpang[i]=undefined;
                this.kas += bayar;
                return this.penumpang;
            }
            
        }
    }
   
}
//kita inisialisasi object baru
var angkot1 = new Angkot('caca', ['padang - pekanbaru'],[],0);