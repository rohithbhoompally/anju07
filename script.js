function changeColor() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A2'];
    const message = document.getElementById('message');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    message.style.color = randomColor;
}
