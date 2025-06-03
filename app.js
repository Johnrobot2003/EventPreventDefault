const button = document.getElementById('btnSubmit');
const input = document.getElementById('catName');
const list = document.getElementById('petList');
const form = document.querySelector('form');
const error = document.createElement('p');
const toggleBtn= document.getElementById('toggleColor');
const body= document.getElementById('toggleBody');
var btnText = 'Enable Dark Mode';
toggleBtn.innerText = btnText;

button.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value.trim() === '') {
        form.appendChild(error);
        error.style.color = 'red';
        error.style.display = 'block';
        error.innerText = 'Please enter a name for your pet.';
        return;
    }

    const newList = document.createElement('li');
    newList.innerText = input.value;
    list.append(newList);
    input.value = '';
    error.style.display = 'none'; // hide error after successful input
});

toggleBtn.addEventListener('click', () =>{
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    toggleBtn.innerText = btnText;
  }
  else{
    body.classList.add('dark-mode');
    toggleBtn.innerText = 'Disable Dark Mode';
  }
})
