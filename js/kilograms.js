function weightConverter(valNum) {
  document.getElementById("outputPounds").innerHTML = valNum * 2.2046;
  document.getElementById("outputBarPounds").innerHTML = 45 + valNum * 2.2046;
  document.getElementById("outputSide").innerHTML = valNum / 2;

  /** Distribute the total to the plates */

  // Retrieve the input value
  let totalValue = parseInt(document.getElementById("inputKilograms").value / 2);

  // Calculate the number of times each element appears
  let amount25 = '';
  let amount20 = '';
  let amount15 = '';
  let amount10 = '';
  let amount5 = '';
  let amount212 = '';
  let amount2 = '';
  let amount112 = '';
  let amount1 = '';
  let amount12 = '';

  if (totalValue >= 25) {
    amount25 = Math.floor(totalValue / 25);
    totalValue = totalValue % 25;
  }
  if (totalValue >= 20) {
    amount20 = Math.floor(totalValue / 20);
    totalValue = totalValue % 20;
  }
  if (totalValue >= 15) {
    amount15 = Math.floor(totalValue / 15);
    totalValue = totalValue % 15;
  }
  if (totalValue >= 10) {
    amount10 = Math.floor(totalValue / 10);
    totalValue = totalValue % 10;
  }
  if (totalValue >= 5) {
    amount5 = Math.floor(totalValue / 5);
    totalValue = totalValue % 5;
  }
  if (totalValue >= 2.5) {
    amount212 = Math.floor(totalValue / 2.5);
    totalValue = totalValue % 2.5;
  }
  if (totalValue >= 2) {
    amount2 = Math.floor(totalValue / 2);
    totalValue = totalValue % 2;
  }
  if (totalValue >= 1.5) {
    amount112 = Math.floor(totalValue / 1.5);
    totalValue = totalValue % 1.5;
  }
  if (totalValue >= 1) {
    amount1 = Math.floor(totalValue / 1);
    totalValue = totalValue % 1;
  }
  if (totalValue >= 0.5) {
    amount12 = Math.floor(totalValue / 0.5);
    totalValue = totalValue % 0.5;
  }

  // Display the results
  document.getElementById('amount25').textContent = amount25;
  document.getElementById('amount20').textContent = amount20;
  document.getElementById('amount15').textContent = amount15;
  document.getElementById('amount10').textContent = amount10;
  document.getElementById('amount5').textContent = amount5;
  document.getElementById('amount212').textContent = amount212;
  document.getElementById('amount2').textContent = amount2;
  document.getElementById('amount112').textContent = amount112;
  document.getElementById('amount1').textContent = amount1;
  document.getElementById('amount12').textContent = amount12;

  // Show/hide elements based on the amount values
  let divAmount25Element = document.getElementById('amount25');
  let divImage25Element = document.getElementById('25');
  if (amount25 > 0) {
    divAmount25Element.style.display = 'block';
    divImage25Element.style.display = 'block';
  } else {
    divAmount25Element.style.display = 'none';
    divImage25Element.style.display = 'none';
  }

  let divAmount20Element = document.getElementById('amount20');
  let divImage20Element = document.getElementById('20');
  if (amount20 > 0) {
    divAmount20Element.style.display = 'block';
    divImage20Element.style.display = 'block';
  } else {
    divAmount20Element.style.display = 'none';
    divImage20Element.style.display = 'none';
  }

  let divAmount15Element = document.getElementById('amount15');
  let divImage15Element = document.getElementById('15');
  if (amount15 > 0) {
    divAmount15Element.style.display = 'block';
    divImage15Element.style.display = 'block';
  } else {
    divAmount15Element.style.display = 'none';
    divImage15Element.style.display = 'none';
  }

  let divAmount10Element = document.getElementById('amount10');
  let divImage10Element = document.getElementById('10');
  if (amount10 > 0) {
    divAmount10Element.style.display = 'block';
    divImage10Element.style.display = 'block';
  } else {
    divAmount10Element.style.display = 'none';
    divImage10Element.style.display = 'none';
  }

  let divAmount5Element = document.getElementById('amount5');
  let divImage5Element = document.getElementById('5');
  if (amount5 > 0) {
    divAmount5Element.style.display = 'block';
    divImage5Element.style.display = 'block';
  } else {
    divAmount5Element.style.display = 'none';
    divImage5Element.style.display = 'none';
  }

  let divAmount212Element = document.getElementById('amount212');
  let divImage212Element = document.getElementById('212');
  if (amount212 > 0) {
    divAmount212Element.style.display = 'block';
    divImage212Element.style.display = 'block';
  } else {
    divAmount212Element.style.display = 'none';
    divImage212Element.style.display = 'none';
  }

  let divAmount2Element = document.getElementById('amount2');
  let divImage2Element = document.getElementById('2');
  if (amount2 > 0) {
    divAmount2Element.style.display = 'block';
    divImage2Element.style.display = 'block';
  } else {
    divAmount2Element.style.display = 'none';
    divImage2Element.style.display = 'none';
  }

  let divAmount112Element = document.getElementById('amount112');
  let divImage112Element = document.getElementById('112');
  if (amount112 > 0) {
    divAmount112Element.style.display = 'block';
    divImage112Element.style.display = 'block';
  } else {
    divAmount112Element.style.display = 'none';
    divImage112Element.style.display = 'none';
  }

  let divAmount1Element = document.getElementById('amount1');
  let divImage1Element = document.getElementById('1');
  if (amount1 > 0) {
    divAmount1Element.style.display = 'block';
    divImage1Element.style.display = 'block';
  } else {
    divAmount1Element.style.display = 'none';
    divImage1Element.style.display = 'none';
  }

  let divAmount12Element = document.getElementById('amount12');
  let divImage12Element = document.getElementById('12');
  if (amount12 > 0) {
    divAmount12Element.style.display = 'block';
    divImage12Element.style.display = 'block';
  } else {
    divAmount12Element.style.display = 'none';
    divImage12Element.style.display = 'none';
  }

}


