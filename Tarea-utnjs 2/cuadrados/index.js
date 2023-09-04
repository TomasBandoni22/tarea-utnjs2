const squares = document.querySelectorAll('.square');

squares.forEach((square, index) => {
    square.addEventListener('click', () => {
        const newColor = getRandomColor();
        square.style.backgroundColor = newColor;
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
