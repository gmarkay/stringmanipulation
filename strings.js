
let input = document.getElementById('input');
let btn = document.getElementById('button');

document.addEventListener('keydown', function(e){
  if(e.which == 13){
      btn.click();
  }
});

btn.addEventListener('click', function(){
  let rev = document.getElementById('rev');
  let alpha = document.getElementById('alpha');
  let palin = document.getElementById('palin');

  let inputVal = input.value;
  let reg = /^[a-zA-Z\s]*$/;  

  if (reg.test(inputVal)){
    rev.innerHTML = reversal(inputVal);
    alpha.innerHTML = alphabits(inputVal);
    palin.innerHTML = palindrome(inputVal);
  }else{
    alert('please only enter letters');
  }
});


function reversal(input) {
    let reversed = input.split('').reverse().join('');  
    return reversed;
  }

  function alphabits(input) {
    let alphaInput = input.split('').sort().join('');
    return alphaInput;
  }
  
  function palindrome(input) {
    let rmvSpace = input.replace(/\s/g, '');
    return (reversal(rmvSpace) === rmvSpace)?'This is a palindrome.': 'This is not a palindrome.';
  }
  
