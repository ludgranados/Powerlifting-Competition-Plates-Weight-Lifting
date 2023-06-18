// Kilograms
function kgPercentage() {

    let percentage = parseFloat(document.getElementById("percentage").value);
    let weight = parseFloat(document.getElementById("inputKilograms").value);

    let weightPercentage = (percentage / 100) * weight;

    document.getElementById("outputKg").innerHTML = weightPercentage;
    document.getElementById("outputLbs").innerHTML = weightPercentage * 2.2046;
    
  }
  