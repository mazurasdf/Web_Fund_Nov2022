var count = 0;
function printMessage(){
    count++;
    // console.log(count);

    var countText = document.querySelector("#countText");
    console.log(countText.innerText);
    countText.innerText = "count: " + count;
}

function mouseOut(){
    console.log("the mouse left");
}

var otherCount = 0;
function mouseOverCount(element){
    otherCount++;
    console.log(element);
    element.innerText = "other count: " + otherCount;
}