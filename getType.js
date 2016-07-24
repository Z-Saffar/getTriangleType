// Returns Triangle Type
var getTriangleType = function(...sides){
	let type = 'scalene';

	var [a, b, c] = sides;
	
	type = (a === b && b === c) && 'equilateral' || 
		((a === b && b != c) || (a === c && c != b) || (b === c && c != a))  && 'isosceles' ||
		'scalene';

	console.log('This is a <strong>"'+ type + '"</strong> triangle!');
	return type;
};
