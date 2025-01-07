
    // JavaScript to handle the collapse feature
const toggleButton = document.getElementById('toggleCollapse');
const buttonContainer = document.getElementById('buttonContainer');

toggleButton.addEventListener('click', () => {
      // Toggle visibility classes
    buttonContainer.classList.toggle('hidden');
    buttonContainer.classList.toggle('visible');

      // Rotate the dropdown icon
    toggleButton.classList.toggle('rotated');
    });

function changeScr(){
    document.getElementById("imgid").classList.toggle("bounce");
    document.getElementById("imgid").src="garfwalker.png";
}
function changeScr2(){
    document.getElementById("imgid").classList.toggle("bounce");
    document.getElementById("imgid").src="toplogo.png";
}
function changeScr3(){
    document.getElementById("imgid").classList.toggle("bounce");
    document.getElementById("imgid").src="gintama2.png";
}
function changeScr4(){
    document.getElementById("imgid").classList.toggle("bounce");
    document.getElementById("imgid").src="garfstat.png";
}

function changeScr5(){
    document.getElementById("imgid").classList.toggle("bounce");
    document.getElementById("imgid").src="tankbotimg.png";
}

