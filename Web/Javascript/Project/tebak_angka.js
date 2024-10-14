var lanjut = true;


while(lanjut){
    var nyawa = 3;
    var comp = Math.floor(Math.random() * 10) + 1;
    alert('Selamat datang di permainan tebak angka 1-10\nAnda mempunya 3 kali kesempatan');
    while(nyawa != 0){
        var p = parseInt(prompt('Masukkan Angka Pilihan Anda'));
        if(p == comp){
            alert('Selamat anda benar, angkanya adalah ' + comp);
            break;
        } else if(p < comp){
            alert('Angka yang dimasukkan terlalu kecil\nKesempatan anda sisa ' + nyawa);
        } else if(p > comp){
            alert('Angka yang dimasukkan terlalu besar\nKesempatan anda sisa ' + nyawas);
        }
        nyawa--;
    }
    lanjut = confirm('Mainkan Lagi?')
}

alert('Terimakasih sudah bermain');