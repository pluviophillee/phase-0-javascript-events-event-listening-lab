const btn = document.querySelector('#button');

function addingEventListener() {
    alert('I was clicked!');
    btn.addEventListener('click',addingEventListener);

}

