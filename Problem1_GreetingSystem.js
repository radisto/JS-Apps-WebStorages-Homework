$(function(){
    if (!localStorage.getItem('visits')){
        localStorage.setItem('visits', 1);
    } else {
        localStorage.setItem('visits', parseInt(localStorage.getItem('visits')) + 1);
    }
    if (!sessionStorage.getItem('visits')){
        sessionStorage.setItem('visits', 1);
    } else {
        sessionStorage.setItem('visits', parseInt(sessionStorage.getItem('visits')) + 1);
    }
    if (!localStorage.getItem('username')){
        localStorage.setItem('username', prompt('Enter your username.'));
    } else {
        alert('Greetings ' + localStorage.getItem('username') +
        '!\nSession visits: ' + sessionStorage.getItem('visits') +
        '\nTotal visits: ' + localStorage.getItem('visits'));
    }
});