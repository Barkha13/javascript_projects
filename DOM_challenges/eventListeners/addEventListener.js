let circle = document.getElementById('circle');
let note = document.getElementById('note');

note.textContent = "This is pure DOM manipulation.";

circle.addEventListener('click', getRandomColor);

function getRandomColor() {
    // You can also use below line to generate random hex code for color.
    // let color = '#' +  Math.floor(Math.random() * 16777216).toString(16);
    let colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',' A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += colors[Math.floor(Math.random() * colors.length)];
    }
    circle.style.backgroundColor = color;
}