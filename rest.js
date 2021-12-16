console.log('rest operator ');

function add(...a) {
  

var b=0;
for (const i of a ){
    b=b+i;
}
console.log(b)
}

add(1,2);
add(1,2,3,4);
add(1,2,3,4,5,6);