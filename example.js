// DOM MANIPULATION PART TWO

//

// document // gives use access to the DOM -- for manipulation or referencing
let myJumbo = document.getElementById("my-jumbo")
myJumbo.style = "background : red; color : white"
const colors = ["red", "blue", "yellow", "brown", "pink", "purple", "green", "orange", "black", "white"]


function ramdomBackgroundGenerator(){
    let randValueBtwTen = Math.random() * 10;
    let wholeNumberVal = Math.round(randValueBtwTen);   
    return colors[wholeNumberVal]
}

setInterval(function(){
//Code here
    myJumbo.style = `background : ${ramdomBackgroundGenerator()}`
}, 1000)


