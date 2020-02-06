const reverseTests = [
  { name: 'first', args: ['lower case words'], expected: 'sdrow esac rewol' },
  { name: 'second', args: ['1324 &*()'], expected: ')(*& 4231' },
  { name: 'third', args: [''], expected: '' },
  { name: 'fourth', args: ['UPPER CASE WORDS'], expected: 'SDROW ESAC REPPU' },
  { name: 'fifth', args: ['--""{}""--'], expected: '--""}{""--' },
  { name: 'sixth', args: ['String.prototype.toUpperCase'], expected: 'esaCreppUot.epytotorp.gnirtS' },
];

function reverse(str) {
  return str.split("").reverse().join("");
}

testing(reverse, reverseTests);


// function testing(fun,data){
//   data.forEach(a =>
//     {
//       res = fun(...a.args);
//       console.assert( res === a.expected, 
//       `${a.name}: expected: ${a.expected} result: ${res}`)
//     }
//     )
// }