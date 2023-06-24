const button = document.getElementById('button');
button.addEventListener('click', addingEventListener);
function addingEventListener(){
    console.log( alert('I was clicked!'))
    button.addEventListener('click', addingEventListener);  
}
//addingEventListener()   




