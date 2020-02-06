const generateMessageTests = [
  { name: 'first', args: [''], expected: '' },
  { name: 'second', args: [false], expected: '' },
  { name: 'third', args: [undefined], expected: '' },
  { name: 'fourth', args: [null], expected: '' },
  { name: 'fifth', args: ['yellow'], expected: 'selected: \nyellow' },
  { name: 'sixth', args: ['top'], expected: 'selected: \ntop' },
  { name: 'seventh', args: ['bottom'], expected: 'selected: \nbottom' },
  { name: 'eighth', args: [true], expected: 'selected: \ntrue' },
];

function generateMessage(text) {
  if (!text) {
    return "";
  } else {
    return "selected: \n"+text;
  }
}

testing(generateMessage, generateMessageTests);

const keyIsEnterTests = [
  { name: '1', args: ['red'], expected: false },
  { name: '2', args: ['13'], expected: false },
  { name: '3', args: ['thirteen'], expected: false },
  { name: '4', args: [13.0], expected: true },
  { name: '5', args: [13], expected: true },
  { name: '6', args: [1.3e1], expected: true },
  { name: '7', args: [true], expected: false },
];

function keyIsEnter(keyCode) {
  return keyCode === 13 ? true: false;
}

testing(keyIsEnter, keyIsEnterTests);
