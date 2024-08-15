//VALIDASI ID TOMBOL #BTN. JIKA TOMBOL CALCULATE BMI DITEKAN, MAKA FUNGSI-FUNGSI BERIKUT AKAN BERJALAN
window.onload = () => {
    let button = document.querySelector("#btn")
    button.addEventListener("click", calculateBMI);
}

//FUNGSI CALCULATEBMI INI AKAN MEMVALIDASI BERAT BADAN, TINGGI BADAN, DAN HASIL
function calculateBMI() {
    
    let weight = parseInt(document.querySelector("#weight").value);
    let height = parseInt(document.querySelector("#height").value);
    let result = document.querySelector("#result");
    
    //JIKA KOLOM BERAT BADAN TIDAK DIISI, MAKAN AKAN MUNCUL PERINGATAN AGAR DIISI
    if (weight === "" || isNaN(weight))
        result.innerHTML = "please enter a valid number!";

    //JIKA KOLOM TINGGI BADAN TIDAK DIISI, MAKAN AKAN MUNCUL PERINGATAN AGAR DIISI
    else if (height === "" || isNaN(height))
        result.innerHTML = "please enter a valid number!";
    
    //JIKA DATA YANG DIINPUT SUDAH LENGKAP, DATA INPUTAN AKAN DIHITUNG MENGIKUTI RUMUS BERIKUT
    else {
        let bmi = (weight / ((height*height) / 10000)).toFixed(2);
    
    //JIKA HASIL BMI KURANG DARI 18.5 AKAN DIKATEGORIKAN UNDERWEIGHT
        if (bmi < 18.5) result.innerHTML =
        `<center>your BMI is <br><br><fontsize=""><b><span>${bmi}</span></b><br><br>UNDERWEIGHT</center>
        <br>
        <br>
        Since you have lesser weight than the standard, we suggest you to eat more food and drink more milk.
        <br> You may need to contact your doctor for better recipes and what kind of workout you need to take.`;
        
    //JIKA HASIL BMI ANTARA 18.5-24.9 AKAN DIKATEGORIKAN NORMAL       
        else if (bmi >= 18.5 && bmi < 24.9) 
        result.innerHTML = 
        `<center>your BMI is <br><br><fontsize=""><b><span>${bmi}</span></b><br><br>NORMAL</center>
        <br>
        <br>
        Since you have normal BMI, you may keep your daily routine of workout and meal`;
            
    //JIKA HASIL BMI LEBIH DARI 24.9 AKAN DIKATEGORIKAN OVERWEIGHT  
        else
        result.innerHTML =
        `<center>your BMI is <br><br><fontsize=""><b><span>${bmi}</span></b><br><br>OVERWEIGHT</center>
        <br>
        <br>
        Since you have more weight than the standard, we suggest you to reduce your meal and take more workout.
        <br>You may need to contact your doctor for better recipes and what kind of workout you need to take.`;
    }
}