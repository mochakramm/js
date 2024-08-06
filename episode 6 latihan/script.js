let nama_depan, nama_belakang, nama_lengkap

document.getElementById("button_merge").onclick = function(){
    nama_depan = document.getElementById("namadepan").value;
    nama_belakang = document.getElementById("namabelakang").value;
    nama_lengkap = (nama_depan + " " +nama_belakang)

    console.log(nama_lengkap);

    document.getElementById("namalengkap").textContent = nama_lengkap

};