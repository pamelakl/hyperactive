const dropDownButton = Array.from(document.getElementsByClassName('fa-arrow-circle-down'));

dropDownButton.forEach(button => {
    button.onclick = function(){
        if(button.classList.contains('fa-arrow-circle-down')){
            button.classList.remove('fa-arrow-circle-down');
            button.classList.add('fa-arrow-circle-up');
            const question = button.parentElement;
            const questionSection = question.parentElement;
            const answer = questionSection.getElementsByClassName('answer')[0];
            answer.classList.add('show');
        }
        else{
            button.classList.remove('fa-arrow-circle-up');
            button.classList.add('fa-arrow-circle-down');
            const question = button.parentElement;
            const questionSection = question.parentElement;
            const answer = questionSection.getElementsByClassName('answer')[0];
            answer.classList.remove('show');
        }
    }
});

const menuButton = Array.from(document.getElementsByClassName('menu-button'));

menuButton[0].addEventListener("click", function() {
    const navLinksContainer = Array.from(document.getElementsByClassName('nav-links-container'));
    if(navLinksContainer[0].classList.contains('open')){
        navLinksContainer[0].classList.remove('open');
        const navigationBar = Array.from(document.getElementsByClassName('navigation-bar'));
        navigationBar[0].classList.remove('open');
        navigationBar[0].classList.remove('open-careers');
        menuButton[0].classList.remove('open');
    }
    else{
        navLinksContainer[0].classList.add('open');
        const navigationBar = Array.from(document.getElementsByClassName('navigation-bar'));
        navigationBar[0].classList.add('open');
        menuButton[0].classList.add('open');
    }
})

const careeresButton = document.getElementById('careers');
careeresButton.addEventListener('click', function(){
    const mobileCareers = careeresButton.getElementsByClassName('mobile-careers-menu');
    if(mobileCareers[0].classList.contains('open')){
        mobileCareers[0].classList.remove('open');
        const navigationBar = Array.from(document.getElementsByClassName('navigation-bar'));
        navigationBar[0].classList.remove('open-careers');
    }
    else{
        mobileCareers[0].classList.add('open');
        const navigationBar = Array.from(document.getElementsByClassName('navigation-bar'));
        navigationBar[0].classList.add('open-careers');
        
    }
})

const plusButtons = Array.from(document.getElementsByClassName('plus-sign'));
plusButtons.forEach(plusButton => {
    plusButton.onclick = function(){
        if(plusButton.classList.contains('plus-sign')){
            plusButton.classList.add('close-sign');
            plusButton.classList.remove('plus-sign');
            const square = plusButton.parentElement.parentElement;
            const textSections = Array.from(square.getElementsByClassName('how-it-works-text'));
            textSections.forEach(element => {
                element.classList.add('show-text');
            });
        }
        else{
            plusButton.classList.add('plus-sign');
            plusButton.classList.remove('close-sign');
            const square = plusButton.parentElement.parentElement;
            const textSections = Array.from(square.getElementsByClassName('how-it-works-text'));
            textSections.forEach(element => {
                element.classList.remove('show-text');
            });
            
        }
    }
});

const modalExit = Array.from(document.getElementsByClassName('modal-exit-button'));
modalExit[0].addEventListener('click', function(){
    const modalBackground = modalExit[0].parentElement.parentElement;
    modalBackground.classList.remove('show');
})



