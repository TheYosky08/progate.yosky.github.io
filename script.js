const button = document.getElementById('button');
const hasil = document.getElementById('jawaban');
const input = document.getElementById('masukanAngka');

button.addEventListener('click', function(){
    if (input.value === ""){
        alert("Anda belum mengisi angka");
    } else{
        hasil.innerHTML=`${input.value}`;
    }
    document.getElementById('jawaban').style.color="black";
    if (input.value % 3 == 0){
        hasil.innerHTML="FIZZ!";
    }

    if (input.value % 5 == 0){
        hasil.innerHTML="BUZZ!";
    }

    if ((input.value % 5 || input.value % 3) == 0){
        hasil.innerHTML="FIZZBUZZ!";
    }

    if (input.value  <= 0){
        hasil.innerHTML="INVALID INPUT!";
        document.getElementById('jawaban').style.color="red";
    }
})
