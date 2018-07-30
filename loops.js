
var a = ["a", "b", "c", "d", "e"];
// for..in
for (var idx in a){
	console.log(idx)
}
// for...of
for(var val of a){
	console.log(val)
}
//pre exist for..of
var k = Object.keys(a)
for(var val, i = 0; i < k.length; i++){
	val = a[ k[i] ];
	console.log(val)
}

for(var val, ret, it = a[Symbol.iterator](); (ret = it.next()) && !ret.done;){
	val = ret.value;
	console.log(val)
}

for (var c of "hello"){
	console.log( c )
}

var o = {};
for(o.a of [1,2,3]){
	console.log(o.a)
}

for({x: o.a} of [ {x:1}, {x:2}, {x:3}]){
	console.log( o.a );
}




