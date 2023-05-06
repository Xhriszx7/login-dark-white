const mode = document.getElementById('mode-icon');

mode.addEventListener('click', () => {
    
    const form = document.getElementById('login_form')
    
    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        
        form.classList.add('dark')
    }
    else if(mode.classList.contains('fa-sun')){
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
        
        form.classList.remove('dark')
    }
});