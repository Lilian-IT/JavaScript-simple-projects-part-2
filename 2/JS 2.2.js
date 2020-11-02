
var test = _ => {
  let a = document.getElementById("a").value.split(", ").map(x => parseInt(x));

  document.getElementById("result").innerHTML= "The length of the longest subarray is" + " " + numDistinct(a);
}

const numDistinct = list => [...new Set(list)].length;

window.onload = test();
