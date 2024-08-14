console.log('linked success');

function formValidate() {
    
    let inputWeight = document.getElementById('input-weight').value;
    let inputHeight = document.getElementById('input-height').value;
    console.log(`isi inputan berat badan: ${inputWeight}`);
    console.log(`isi inputan tinggi badan: ${inputHeight}`);
    if (inputWeight == '' || inputHeight == '') {
        alert('inputan berat badan kosong!');
    } else {
        let convertCmToM = inputHeight / 100;
        let resultHeight = Math.pow(convertCmToM, 2);
        console.log(inputWeight / resultHeight);
        
    }
    console.log('form submitted');
}