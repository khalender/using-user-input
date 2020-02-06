const filterColorsTests = [
  { name: 'first', args: ['red'], expected: 'red' },
  { name: 'second', args: ['orange'], expected: 'white' },
  { name: 'third', args: ['blue'], expected: 'white' },
  { name: 'fourth', args: ['green'], expected: 'green' },
  { name: 'fifth', args: ['yellow'], expected: 'yellow' },
  { name: 'sixth', args: ['grey'], expected: 'grey' },
  { name: 'seventh', args: ['black'], expected: 'black' },
];

function filterColors(color) {
  if (color === 'red'
    || color === 'green'
    || color === 'yellow'
    || color === 'black'
    || color === 'grey') {
    return color;
  } else {
    return 'white';
  }
}

testing(filterColors, filterColorsTests);
