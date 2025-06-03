const button = document.getElementById('btnSubmit');
const input = document.getElementById('catName');
const list = document.getElementById('petList');
const form = document.querySelector('form');
const error = document.createElement('p');
const toggleBtn= document.getElementById('toggleColor');
const removeLastbtn = document.getElementById('removeLastList');
const enableDisable = document.getElementById('enableDisable');
let pWord = 'Enable Dark Mode';
enableDisable.innerText = pWord;
removeLastbtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (list.lastChild){
        list.removeChild(list.lastChild);  
    }
    else{
        error.style.display = 'block';
        error.innerText = 'No items to remove.';
    } 
});
const body= document.getElementById('toggleBody');
const resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    list.innerHTML = ''; 
    error.style.display = 'none'; 
    input.value = ''; 
});

var btnText = 'Enable Dark Mode';
toggleBtn.innerText = btnText;

button.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value === '') {
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
    error.style.display = 'none'; 
});

toggleBtn.addEventListener('click', () =>{
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    enableDisable.innerText = pWord;
  }
  else{
    body.classList.add('dark-mode');
    enableDisable.innerText = 'Disable Dark Mode';
  }
})
