
const num = 3;
function multBy2(input){
	const res = input * 2;
	return res
}
const out = multBy2(num);
const newOut = multBy2(10);

// Add code here
function limitedInterval(callback, wait, limit){
  //setInterval(callback, wait);
  var i = setInterval(callback ,wait);
  setTimeout(function(){
  	clearInterval(i)
  },limit);
}
// /* Uncomment the following line and click 'run' to test your work */
limitedInterval(() => console.log('repeating'), 100, 550); // should log 'repeating' once per 100 ms, five times.



























