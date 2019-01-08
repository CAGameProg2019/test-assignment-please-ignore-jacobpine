var last = 1;
var curr = 1;

console.log(last);
console.log(curr);
for(var i = 0; i < 13; i++) {
    curr += last;
    last = curr-last;
    console.log(curr);
}