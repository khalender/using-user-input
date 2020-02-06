const divs = document.getElementsByTagName("button");
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('focus', identifyButton);
  divs[i].addEventListener('keypress', alertButtonName);
  divs[i].addEventListener('blur', clearOutput);
}
