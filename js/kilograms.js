// kg to lbs
function weightConverter(valNum) {
    document.getElementById("outputPounds").innerHTML=valNum*2.2046;
    document.getElementById("outputBarPounds").innerHTML=45+valNum*2.2046;
    document.getElementById("outputSide").innerHTML=valNum / 2;
  }

function barWeight(valNum) {
  document.getElementById("outputPounds").innerHTML = -valNum;
  document.getElementById("outputSide").innerHTML = -valNum;
}
