// var fruit1 = "apples";
// var fruit2 = "oranges";

// fruit2 = fruit1;
// fruit1 = fruit2;

// console.log(fruit1 + " and " + fruit2);

// var fruit1 = "apples";
// var fruit2 = "oranges";

// var temp = fruit1;
// fruit1 = fruit2;
// fruit2 = temp;

// console.log(fruit1 + " and " + fruit2);

// var start = 0;
// var end = 12;

// while(start < end){
//     console.log(`start: ${start}, end: ${end}`);
//     start += 2;
//     end -= 2;
// }

function reverse(arr){
    //your code here!!
    //try to reverse the arr "in place", meaning don't make a new array!
    return arr;
}

var testArr = [4,8,15,16,23,42];
console.log(reverse(testArr));//should print out [42,32,16,15,8,4]

var testArr2 = ["vanilla","chocolate","pistachio","strawberry"];
console.log(reverse(testArr2));//should print out ["strawberry","pistachio","chocolate","vanilla"]