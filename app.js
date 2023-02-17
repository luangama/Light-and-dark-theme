//Create the button variable
const switcher = document.querySelector('.btn');

//Add events to the button
switcher.addEventListener('click', function(){

//Change body theme
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

//Change button text
    const className = document.body.className;
    if(className == 'light-theme'){
        this.textContent = 'Dark';
    }else{
        this.textContent = 'Light';
    }
});


