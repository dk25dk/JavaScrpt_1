let inputs = document.getElementById('taskInput');
let texts = document.querySelector('.text');

function Add() {
    if (inputs.value == "") {
        alert("Please enter a task");
    } else {
        let newText = document.createElement('ul');
        newText.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        texts.appendChild(newText);
        inputs.value = "";

        newText.querySelector("i").addEventListener("click", remove);

        function remove() {
            newText.remove();
        }
    }
}