// kg to lbs
function weightConverter(valNum) {
    document.getElementById("outputPounds").innerHTML=valNum*2.2046;
    document.getElementById("outputBarPounds").innerHTML=45+valNum*2.2046;
    document.getElementById("outputSide").innerHTML=valNum / 2;


    /** Distribute the total to the plates */

    // Retrieve the input value 
    let totalValue = parseInt(document.getElementById("inputKilograms").value / 2);

    // Calculate the number of times each element appears
    let amount25 = '';
    let remainingAfter25 = totalValue;
    let amount20 = '';
    let remainingAfter20 = totalValue;
    let amount15 = '';
    let remainingAfter15 = totalValue;
    let amount10 = '';
    let remainingAfter10 = totalValue;
    let amount5 = '';
    let remainingAfter5 = totalValue;
    let amount212 = '';
    let remainingAfter212 = totalValue;
    let amount2 = '';
    let remainingAfter2 = totalValue;
    let amount112 = '';
    let remainingAfter112 = totalValue;
    let amount1 = '';
    let remainingAfter1 = totalValue;
    let amount12 = '';
    let remainingAfter12 = totalValue;

    if (remainingAfter25 >= 25) {
        amount25 = Math.floor(remainingAfter25 / 25);
        remainingAfter25 = remainingAfter25 % 25;
    }
    if (remainingAfter20 >= 20) {
      amount20 = Math.floor(remainingAfter25 / 20);
      remainingAfter20 = remainingAfter25 % 20;
    }
    if (remainingAfter15 >= 15) {
      amount15 = Math.floor(remainingAfter20 / 15);
      remainingAfter15 = remainingAfter20 % 15;
    }
    if (remainingAfter10 >= 10) {
      amount10 = Math.floor(remainingAfter15 / 10);
      remainingAfter10 = remainingAfter15 % 10;
    }
    if (remainingAfter5 >= 5) {
      amount5 = Math.floor(remainingAfter10 / 5);
      remainingAfter5 = remainingAfter10 % 5;
    }
    if (remainingAfter212 >= 2.5) {
      amount212 = Math.floor(remainingAfter5 / 2.5);
      remainingAfter212 = remainingAfter5 % 2.5;
    }
    if (remainingAfter2 >= 2) {
      amount2 = Math.floor(remainingAfter212 / 2);
      remainingAfter2 = remainingAfter212 % 2;
    }
    if (remainingAfter112 >= 1.5) {
      amount112 = Math.floor(remainingAfter2 / 1.5);
      remainingAfter112 = remainingAfter2 % 1.5;
    }
    if (remainingAfter1 >= 1) {
      amount1 = Math.floor(remainingAfter112 / 1);
      remainingAfter1 = remainingAfter112 % 1;
    }
    if (remainingAfter12 >= 0.5) {
      amount12 = Math.floor(remainingAfter1 / 0.5);
      remainingAfter12 = remainingAfter1 % 0.5;
    }

    // Display the results
    let amount25Element = document.getElementById('amount25');
    amount25Element.textContent = amount25;
    let amount20Element = document.getElementById('amount20');
    amount20Element.textContent = amount20;

    let divAmount25Element = document.getElementById('divAmount25');
    if (amount25 > 0) {
        divAmount25Element.style.display = 'block';
    } else {
        divAmount25Element.style.display = 'none';
    }
    let divAmount20Element = document.getElementById('divAmount20');
    if (amount20 > 0) {
        divAmount20Element.style.display = 'block';
    } else {
        divAmount20Element.style.display = 'none';
    }
  }