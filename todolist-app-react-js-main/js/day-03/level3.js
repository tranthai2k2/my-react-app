
var FristName,LastName,country, city,age, isMarried, year;
FristName ='nguyen';
LastName ='van B'
country ='thaibinh';
city ='thaibinh';
age = 21;
isMarried = false;
console.log(typeof(FristName));
console.log(typeof(LastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));

console.log("\'10\' == 10  chi so khop gia tri khong so sanh kieu du lieu ",'10'==10);
console.log("\'10\' === 10  so khop ca kieu du lieu va gia tri",'10'===10);
console.log( parseInt("9.8") == 10);
//-----c4-----
// trurtly value
//- các số khác 0
//- các chuỗi ngoại trừ chuỗi "" 
//- true
// falsy value
// - 0
// -false
// null
// undefined
// NAN
// '',"" các chuỗi rỗng
//---- c5------
4 > 3 // true
4 >= 3 // true
4 < 3 // false
4 <= 3 //false
4 == 4 // true
4 === 4 // true
4 != 4 //flase 
4 !== 4 // false
4 != '4'// false
4 == '4' //true
4 === '4'// false
console.log(
    4 > 3, 
    4 >= 3,
    4 < 3,
    4 <= 3,
    4 == 4,
    4 === 4,
    4 != 4,
    4 !== 4,
    4 != '4',
    4 == '4',
    4 === '4')
var Py = 'python';
var ja =' jargon';
console.log(Py.length >= ja.length )
///------c6-----
4 > 3 && 10 < 12 // true
4 > 3 && 10 > 12 //false
4 > 3 || 10 < 12 // true
4 > 3 || 10 > 12//true
!(4 > 3)//false
!(4 < 3)//true
!(false)// true
!(4 > 3 && 10 < 12)// false
!(4 > 3 && 10 > 12)//true
!(4 === '4') // truye
console.log(4 > 3 && 10 < 12,
    4 > 3 && 10 > 12,
    4 > 3 || 10 < 12,
    4 > 3 || 10 > 12,
    !(4 > 3),
    !(4 < 3),
    !(false),
    !(4 > 3 && 10 < 12),
    !(4 > 3 && 10 > 12),
    !(4 === '4'),
    )
    var word1 = "dragon";
    var word2 = "python";
    
    // Sử dụng phương thức indexOf để kiểm tra xem "on" có xuất hiện trong từ đầu tiên
    var isOnInWord1 = word1.indexOf("on") !== -1;
    
    // Sử dụng phương thức indexOf để kiểm tra xem "on" có xuất hiện trong từ thứ hai
    var isOnInWord2 = word2.indexOf("on") !== -1;
    
    if (isOnInWord1 && isOnInWord2) {
        console.log("có on trong '" + word1 + "' and '" + word2 + "'");
    } else {
        console.log("không có on trong'" + word1 + "' and '" + word2 + "'");
    }
    const now = new Date();
    console.log(now.getFullYear());
    console.log( now.getMonth());// 0-11 : tháng 1 == 0
    console.log( now.getDate());
    console.log(now.getDay()) 
    //  Sunday is 0, Monday is 1 and Saturday is 6
    // Getting the weekday as a number (0-6)
    console.log(now.getHours()) 
    console.log(now.getMinutes())
    console.log(now.getSeconds())
    console.log(now.getTime()) //số giấy từ 1/1/1970
    console.log("YYYY-MM-DD HH:mm  "+ now.getFullYear()+' - '+ now.getMonth()+" - "+now.getDate()+ " "+ now.getHours() +":"+ now.getMinutes() );
    console.log("dd-MM-YYYY HH:mm  "+ now.getMonth() +' - '+ now.getMonth()+" - "+now.getFullYear()+ " "+ now.getHours() +":"+ now.getMinutes() );
    console.log("dd/MM/YYYY HH:mm  "+ now.getMonth() +'/'+ now.getMonth()+"/"+now.getFullYear()+ " "+ now.getHours() +":"+ now.getMinutes() );
    console.log("YYYY-MM-DD HH:mm  "+ now.getFullYear()+' - '+ now.getMonth()+" - "+now.getDate()+ " "+ now.getHours() +":"+ now.getMinutes() );


var hours = ('0' + now.getHours()).slice(-2);
var minutes = ('0' + now.getMinutes()).slice(-2);
console.log("YYYY-MM-DD HH:mm  "+ now.getFullYear()+' - '+ now.getMonth()+" - "+now.getDate()+ " "+ hours +":"+ minutes );

//     var base = prompt('nhập đáy', 'số chưa được nhập')
//     console.log('Enter base: ' + base)
//     var height = prompt('nhập chiều cao', 'số chưa được nhập')
//     console.log('Enter height:' + height )
//     console.log('The area of the triangle is ' + 0.5 *base * height)

//     var a = prompt('a', 'số chưa được nhập')
//     console.log('Enter side a: ' + a)
//     var b = prompt('b', 'số chưa được nhập')
//     console.log('Enter side b: ' + b )
//     var c = prompt('b', 'số chưa được nhập')
//     console.log('Enter side c: ' + c )
//     var cv = a+b+c;
//     console.log('The perimeter of the triangle is ' + cv );

//     var length = parseFloat(prompt("Enter the length of the rectangle:"));
//     var width = parseFloat(prompt("Enter the width of the rectangle:"));
    
//     var area = length * width;
//     var perimeter = 2 * (length + width);
    
//     console.log("Area of the rectangle: " + area);
//     console.log("Perimeter of the rectangle: " + perimeter);

// var radius = parseFloat(prompt("Enter the radius of the circle:"));
// const pi = 3.14;

// var area = pi * radius * radius;
// var circumference = 2 * pi * radius;

// console.log("Area of the circle: " + area);
// console.log("Circumference of the circle: " + circumference);

// var sogio = prompt('nhập số giờ', 'số chưa được nhập');
// var rateperhour = prompt('nhập số giờ', 'số chưa được nhập');
// console.log('Enter hours:' + sogio)

// console.log('Enter rate per hour:' + rateperhour )
// console.log('Your weekly earning is: ' + sogio * rateperhour)

// var yourname = prompt('nhập tên bạn', 'chưa được nhập');
// if(yourname.length > 7) {
//     console.log('tên bạn dài')
// } else {
//     console.log('tên bạn ngắn')}


let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
if( firstName.length > lastName.length ){
    console.log('Your first name, '+ firstName + " is longer than your family name, "+ lastName)
}

// var namsinh = prompt('nhập năm sinh: ', 'số chưa được nhập');
// console.log('Enter birth year: '+ namsinh )
// if(now.getFullYear() - namsinh >= 18){
//    console.log('you are ' + (now.getFullYear() - namsinh) + '. You are old enough to drive' )
// }else {
//     console.log('you are ' + (now.getFullYear() - namsinh) + 'You will be allowed to drive after '+ (18-(now.getFullYear() - namsinh) )+ ' years')
// }
// var namsongduoc = prompt('năm sống được ', 'số chưa được nhập');
// console.log('Enter number of years you live: '+ namsongduoc );
// console.log('You lived ' + 31536000 *namsongduoc + ' seconds.');
