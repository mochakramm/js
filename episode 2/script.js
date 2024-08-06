
//variabel dengan let
let nama = "akram";
console.log(nama)

//variabel dengan var
var name = "jajang";
console.log(name);

//scooping dengan let

let namaDepan = "muhammad";
{
    let namaDepan = "ahmad";
    console.log(namaDepan);
}

console.log(namaDepan);

//scooping dengan var

var namaAkhir = "zakia";
{
    var namaAkhir ="azkia";
    console.log(namaAkhir);
}

console.log(namaAkhir);

//scooping tanpa keyword

latename = "azkia";
{
    latename = "mulyana";
    console.log(latename);
}

console.log(latename);

//const = nilai mutlak tidak bisa berubah

const TTL = "10 juli 2002";
console.log(TTL)