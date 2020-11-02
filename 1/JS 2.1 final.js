// configurați testul html
var test = _ => {
  let a = document.getElementById("a").value.split(", ").map(x => parseInt(x));
  let b = parseInt(document.getElementById("b").value);
  document.getElementById("result").innerHTML=testSums(a, b);
}

var testSums = (list, sum) => {
  // de a seta potrivirea inițială la valoarea fals
  let match = false;
 
  
  //rulați  fiecare element din matrice 
  list.forEach((item, n) => {
    
    // buclă pentru fiecare element din matrice după element curent
    for (let i = n+1; i < list.length; i++) {
      
      // dacă elementul curent forEach(pentru fiecare) + elementul curent pentru bucla = 0, setați potrivirea la valoarea adevărat și creșteți numărătoarea cu 1
      list[i] + item == sum && (match = true) ;
    }
  })
  return ("match: " + match);
}

window.onload = test();