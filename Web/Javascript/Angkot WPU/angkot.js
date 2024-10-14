var jumlah_angkot = parseInt(prompt('Punya berapa angkot?'));
var angkotBeroperasi = parseInt(prompt('Berapa angkot yang beroperasi?'));
var angkotLembur1 = prompt('Angkot yang sedang lembur');
var angkotLembur2 = prompt('Angkot yang sedang lembur');

for(var angkot = 1; angkot <= jumlah_angkot;angkot++){
    if(angkot == angkotLembur1 || angkot == angkotLembur2){
        console.log('Angkot No. ' + angkot + ' sedang lembur');
    } else if(angkot <= angkotBeroperasi){
        console.log('Angkot No. ' + angkot + ' beroperasi dengan baik');
    } else{
        console.log('Angkot No. ' + angkot + ' tidak beroperasi dengan baik');
    }
}