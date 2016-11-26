var names = ['Andrew', 'Julie', 'Jen'];

names.forEach(function(name){
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowFunc', name);
  console.log('something else');
  var x = 'something';
  console.log(x);
});

//Challenge Area//

function add(a, b){
  return a+b;
};

console.log(add(3,5));
console.log(add(9,0));

//add Statement
var addStatement = (a,b) => {
  return a+b;
}

console.log(addStatement(3,5));
console.log(addStatement(9,0));
//add Expression

var addExpression = (a,b) => a+b;
console.log(addExpression(3,5));
console.log(addExpression(9,0));
