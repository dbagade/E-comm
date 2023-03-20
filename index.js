const bar = document.getElementById('bar'); 
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){ //this var 'bar' will store value as true if it is clicked that is if bar is clicked we want to do the foll functions
    bar.addEventListener('click',() => { //we want to add and eventlistner when a click func is performed the arrow func will execute
                                        //ie.our we add a class "active" to our navbar which will display that section
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.add('close_btn')
        //////////OR/////////////
        nav.classList.remove('active')
    })
}