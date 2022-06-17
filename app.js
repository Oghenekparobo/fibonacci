const input_box = document.querySelector(".input-box");
const output_box = document.querySelector(".output-box");
const submit = document.querySelector(".submit");






submit.addEventListener("click", (e) => {
  e.preventDefault();
  let arr = [];

const fib_check = parseInt(input_box.value);;
let n1 = 0, n2 = 1, fib_seq;


for (let i = 1; i <= fib_check; i++) {

  f_of_n = n1; 
  arr.push(fib_seq)

  output_box.textContent = arr

    fib_seq= n1 + n2;
    n1 = n2;
    n2 = fib_seq;
}

});
