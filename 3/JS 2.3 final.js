var test = _ => {
  let a = document.getElementById("a").value.split(", ").map(x => parseInt(x));
  document.getElementById("result").innerHTML= "The greatest common denominator is" + " " + generalizedGCD(a);
}

 function generalizedGCD(list) {
  
  const lowest = Math.min(...list);

  for (let factor = lowest; factor > 0; factor--) {
      let isCommonDivisor = true;
let j = 0;
      for (let j = 0; j < list.length; j++) {
          if (list[j] % factor !== 0) {
              isCommonDivisor = false;
              break;
          }
      }
      if (isCommonDivisor) {
          return factor;
      }
  }
  }

window.onload = test();