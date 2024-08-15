window.onload = () => {
    let button = document.querySelector("#btn")
    button.addEventListener("click", calculateBMI);
}

function calculateBMI() {
    
    let weight = parseInt(document.querySelector("#weight").value);
    let height = parseInt(document.querySelector("#height").value);
    let result = document.querySelector("#result");
    

    if (weight === "" || isNaN(weight))
        result.innerHTML = "please enter a valid number!";
    else if (height === "" || isNaN(height))
        result.innerHTML = "please enter a valid number!";
    
    else {
        let bmi = (weight / ((height*height) / 10000)).toFixed(2);
        if (bmi < 18.5) result.innerHTML =
        `Under Weight : <span>${bmi}</span>`;
        
        
        else if (bmi >= 18.5 && bmi < 24.9) 
        result.innerHTML = 
        `<center>your BMI is <br><br><fontsize=""><b><span>${bmi}</span></b><br><br>NORMAL</center>
        <br>
        <br>
        Since you have normal BMI, you may keep your daily routine of workout and meal`
            
        
        else
        result.innerHTML =
        `Over Weight : <span>${bmi}</span>`;
    }
}