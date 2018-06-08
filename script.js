function caly (i) {
  if( i%15 === 0 ){
    return "fizzbuzz"
  } else if( i%3 === 0){
    return "fizz"
  } else if( i%5 === 0){
    return "buzz"
  } else {
    return i
  }
}

function stry (k) {
  let str = ""
  for (let i = 1; i < k+1; i++){
    str = str + caly(i).toString() + "/  "
  }
  return str
}

document.querySelector(".btn").addEventListener("click", e => {
  document.querySelector(".content").textContent = stry(100)
})

