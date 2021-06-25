
let element = document.body;
let signature = document.getElementById("signature");

function darkMode() {

  let text = document.getElementById("label-text");


    element.classList.toggle("dark-mode");
  

    if (text.innerText === "Mode nuit"){
        text.innerText = "Mode jour";
      } else {
        text.innerText = "Mode nuit";
      }
}



  export default darkMode;
