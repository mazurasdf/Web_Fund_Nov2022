

function getFortune(){
    var question = document.querySelector("#question");

    if(question.value.length > 0){
        //change the image
        var conchImg = document.querySelector("#conchImg");
        conchImg.src = "img/conchAnimated.gif";

        setTimeout(finishFortune,4000)
    }
    else{
        alert("You have to ask a question!!");
    }
}

function finishFortune(){
    //change image back
    var conchImg = document.querySelector("#conchImg");
    conchImg.src = "img/conchStill.png";

    //set fortune
    var fortune = document.querySelector("#fortune");

    console.log(fortune);

    var arr = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    
    let index = Math.floor(Math.random() * arr.length);
    fortune.innerText = arr[index];
}