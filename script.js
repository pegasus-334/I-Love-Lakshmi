document.querySelector(".noBtn").onclick = function() {
    alert("Otha..!! Ivolo kasta pattu type panni pannirken. So sootha saathitu yes click pannu di punda.! ");
};

var audio = new Audio(src = "audio.mp3");

document.querySelector(".okayBtn").onclick = function() {
    alert("If you are 100% sure click okayy");
    alert("If you really Love me press okayy");
    alert("If you really wanna be with me give okay");

    let a = window.prompt("Now, Tell Me The Magical Words, Again:");

    if (a === "i love you" || a === "I Love You" || a === "I LOVE YOU" || a === "I love you") {
        alert("Alright..!! Now oficially you are my GIRLFRIEND..!!!! ");
        alert("I LOVE YOU IDIOT");
        alert("Now sit back and enjoy the music..!!!");
        alert("PS: The song is sung by my fav person. ");
        audio.play();
        

    }
    else{
        alert("You entered wrong..!!")
    }
}







