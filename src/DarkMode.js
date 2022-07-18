


function darkMode() {

  let text = document.getElementById("label-text");
  let element = document.getElementById("canvas1");
  let signature = document.getElementById("signature");

  element.classList.toggle("dark-mode");
  signature.classList.toggle("dark-mode-signature");
  

    if (text.innerText === "Mode nuit"){
        text.innerText = "Mode jour";
      } else {
        text.innerText = "Mode nuit";
      }
}



  export default darkMode;
