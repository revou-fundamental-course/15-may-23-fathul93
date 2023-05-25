function hitungLuasKelilingPersegiPanjang()
               {
                    var Panjang, Lebar, Keliling, Luas;
 
                    Panjang = parseInt(document.getElementById("panjang").value);
                    Lebar = parseInt(document.getElementById("lebar").value);
                    Keliling = 2 * (Panjang + Lebar);
                    Luas = Panjang * Lebar;
                    document.getElementById("kelilingpersegipanjang").value = Keliling;
                    document.getElementById("luaspersegipanjang").value = Luas;
               }

function hitungLuasKelilingPersegi()
               {
                    var Sisi, Keliling, Luas;
 
                    Sisi = parseInt(document.getElementById("sisi").value);
                    Keliling = 4 * Sisi;
                    Luas = Sisi * Sisi;
                    document.getElementById("kelilingpersegi").value = Keliling;
                    document.getElementById("luaspersegi").value = Luas;
               }

function tombol1() {
  var x = document.getElementById("tombolPersegiPanjang");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 

function tombol2() {
  var x = document.getElementById("tombolPersegi");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 