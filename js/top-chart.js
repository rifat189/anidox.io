$(document).ready(function(){
    userDetails();
})

function userDetails() {
    var userIconContainer = document.querySelector('.userIconContainer');
    var userSettings = document.querySelector('.userSettings');

    userIconContainer.addEventListener('click',function(){
        if (userSettings.style.display === 'flex') {
            userSettings.style.display = 'none';
            userSettings.style.top = '110%';

        }
        else{
            userSettings.style.top = '130%';
            userSettings.style.display = 'flex';

        }
    })
    

}


