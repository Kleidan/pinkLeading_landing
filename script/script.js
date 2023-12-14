const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (e) => {
  e.preventDefault;

  const name = document.getElementById('fname').value;

  alert(`Thank you ${name} this is only a demo website and no action was taken`);
})