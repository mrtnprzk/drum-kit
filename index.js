//select all buttons with class .drum
const buttons = document.querySelectorAll(".drum");


//Detecting Button Click for All Buttons with forEach
buttons.forEach(element => {
    element.addEventListener("click", function () {
        const buttonInnerHTML = this.innerHTML;
        //innerHTML connected with - switch case
        makeSound(buttonInnerHTML);
        animation(buttonInnerHTML);
    });
});
console.log(buttons) //all buttons I selected with forEach


//Detecting Keyboard Press (I can also use keydown ... maybe I should)
document.addEventListener("keypress", function(event){
    //in console log I can see what everything is in object
    console.log(event);
    //that is why I need .key ... it is connected with switch case
    makeSound(event.key);
    animation(event.key);
}) 


//function to create and play sound
const makeSound = (key) => {
    // console.log(key)

    switch (key) {

        case "a":
            const audioA = new Audio("sounds/kick-bass.WAV");
            audioA.play();
            break;

        case "s":
            const audioS = new Audio("sounds/snare.WAV");
            audioS.play();
            break;

        case "d":
            const audioD = new Audio("sounds/tom.WAV");
            audioD.play();
            break;

        case "f":
            const audioF = new Audio("sounds/rim.WAV");
            audioF.play();
            break;

        case "j":
            const audioJ = new Audio("sounds/cow.WAV");
            audioJ.play();
            break;

        case "k":
            const audioK = new Audio("sounds/crash.WAV");
            audioK.play();
            break;

        case "l":
            const audioL = new Audio("sounds/hat.WAV");
            audioL.play();
            break;

        default:
            console.log('Not key with Sound') //if I press key where is not sound added
    }
}

//creating animation after click or press
const animation = (currentKey) => {
    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add('pressed');
    
    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 100)
}