var n = 7 

// checks which button was pressed and pass the button's character
for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (event) {
        var buttonInnerHtml = this.innerHTML;
        playsound(buttonInnerHtml);
        pressedKey(buttonInnerHtml);
});

}

document.addEventListener("keydown", function (event) {
    playsound(event.key);
    pressedKey(event.key);
});


function playsound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3")
            tom1.play()
        break;
        
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3")
            tom2.play()
        break;

        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3")
            tom3.play()
        break;

        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3")
            tom4.play()
        break;

        case "j":
            var snare = new Audio("./sounds/snare.mp3")
            snare.play()
        break;

        case "k":
            var crash = new Audio("./sounds/crash.mp3")
            crash.play()
        break;

        case "l":
            var kickbass = new Audio("./sounds/kick-bass.mp3")
            kickbass.play()
        break;

        default: console.log(key + " was pressed")
            break;
    }
}


function pressedKey(currentKey) {
    var currentlyPressed = document.querySelector("." + currentKey);
    currentlyPressed.classList.add("pressed");
    setTimeout(function() {currentlyPressed.classList.remove("pressed");}, 100)
}
