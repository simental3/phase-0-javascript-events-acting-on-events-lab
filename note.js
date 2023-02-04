// Moving Things with JavaScript by Acting on Events Lab Notes

// I. Lab:




// II. Lab Solution






// III. Notes

// grabs dodger &  saves a refernce to it in a variable: 
const dodger = document.getElementById("dodger");
dodger;
// => div#dodger


// changes the color:
dodger.style.backgroundColor = "#818589"; // Oslo Gray
// dodger.style.backgroundColor = "#454B1B"; // Army Green
// dodger.style.backgroundColor = "#808000"; // Olive
// dodger.style.backgroundColor = "#33FFBD"; // Turquoise


// moves the element up:
dodger.style.bottom = "100px";
// NOTE: Even though we're talking about numeric coordinates, note that we need to move the dodger by assigning a new string value.


// verifies the dodger's current position:
dodger.style.left; // LOG: 180px
dodger.style.bottom; // LOG: 0px


// resets the bottom attribute to return the dodger to its original position:
dodger.style.bottom = "0px";


// moves the dodger all the way to the bottom left corner:
dodger.style.left = "0px";


// logs (KeyboardEvent) by defining the event parameter in the parentheses, we give the body of the callback access to that event object:
document.addEventListener("keydown", function (event){
    console.log(event);
})
// arrow function:
document.addEventListener("keydown", (event) => console.log(event));


// moves the dodger left when the left arrow key is pressed (keydown event):
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {    // when our event listener detects a keydown event, we first check to see whether the key property of the event object has the value "ArrowLeft."
        const leftNumbers = dodger.style.left.replace("px", "");    // If it does, we get the current value of the dodger's style.left property and use the String replace() method to strip out the "px", then store the result in leftNumbers.
        const left = parseInt(leftNumbers, 10);     // Next, we parse leftNumbers as an integer and store that result in left.

        dodger.style.left = `${left -1}px`;     // Finally, we update the dodger's style.left property using string interpolation, injecting the current value minus 1.
    }                                           // If the key that's pressed is not the left arrow key, nothing will happen.
});

// Function that essentially does the same thing as above, but the dodger won't move past the left edge:
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}


// wires the function up to our event listener:
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {    // when our event listener detects a keydown event, we first check to see whether the key property of the event object has the value "ArrowLeft."
        moveDodgerLeft();
    }
});


// moves the dodger right when the right arrow key is pressed (keydown event):



// wires the function up to our event listener: