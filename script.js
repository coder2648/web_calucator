let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Add this event listener to the backspace button
document.querySelector('.backspace').addEventListener('click', backspace);

