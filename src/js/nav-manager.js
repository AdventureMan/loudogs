let screenHeight, screenWidth;
screenHeight = screen.height;
screenWidth = screen.width;

if (screenWidth <= 575) {
    document.getElementById('nav').style.transform = ('translateY(-200px)');
}

window.addEventListener('resize', () => {
    screenWidth = screen.width;
    setScreenSize(screenWidth);
});

function setScreenSize(width) {
    if (width <= 575) {
        document.getElementById('nav').style.transform = ('translateY(-200px)');
    } else {
        document.getElementById('nav').style.transform = ('translateY(0px)');
    }
}

function showMenu(isShowing) {
    screenWidth = screen.width;
    if (screenWidth > 575) { return; }
    if (isShowing === true) {
        document.getElementById('nav').style.transform = ('translateY(0px)');
    } else {
        document.getElementById('nav').style.transform = ('translateY(-200px)');
    }
}