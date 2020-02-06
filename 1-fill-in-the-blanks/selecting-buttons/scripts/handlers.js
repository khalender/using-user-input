function identifyButton(event) {
  // read & process user input
  const buttonText = event.target.firstChild.data;

  // execute core logic
  const centerMessage = generateMessage(buttonText);

  // display results to user
  document.getElementById('center-text').innerHTML = centerMessage;

  // log action for developers
  console.log('\n-- identifyButton --');
  console.log('buttonText:', '(' + typeof buttonText + ')', buttonText);
  console.log('centerMessage:', '(' + typeof centerMessage + ')', centerMessage);

  // tell the browser everything is OK
  return true;
}

function clearOutput() {
  // execute core logic
  const centerMessage = "";

  // render results to user
  document.getElementById('center-text').innerHTML = centerMessage;

  // log action for developers
  console.log('\n-- clearOutput --');

  // tell the browser everything is OK
  return true;
}

function alertButtonName(e) {
  // process user event
  const keyPressed = e.keyCode;

  // execute core logic
  const isEnter = generateMessage(keyPressed);

  // render results to user
  if (isEnter) {
    alert(e.target.innerHTML);
  }

  // log action for developers
  console.log('\n-- alertButtonName --');
  console.log('keyPressed:', '(' + typeof keyPressed + ')', keyPressed);
  console.log('isEnter:', '(' + typeof isEnter + ')', isEnter);

  // tell the browser everything is OK
  return true;
}
