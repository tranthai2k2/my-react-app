// var age = prompt('nhập tuoi', 'chưa được nhập');
// console.log('Enter your age: '+age);
// if(age>=18){
//     console.log('You are old enough to drive.    ')
//  } else {
//     console.log("You are left with " +(18-age)+ " years to drive. ")
//  }
// var myage = 21;
// var yourage = prompt('nhập tuoi', 'chưa được nhập');
// if(myage > yourage){console.log('i are '+ ( myage - yourage) + '  years older than you.')}
// else {console.log('you are '+ (  yourage -myage ) + '  years older than me.')  }

// let a,b; a =4, b=3;
// if( a > b ) { console.log( a , 'is greater than   ', b) } else if ( b > a ){ console.log(b , 'is greater than   ', a)} else {
//     b , 'equals than ', a
// }

// a > b ? console.log( a , 'is greater than   ', b) 
//       :  console.log(b , 'is greater than   ', a)
// var d = prompt('nhập số', 'chưa được nhập');
// console.log('Enter a number:'+ d);
// d%2 == 0 ?  console.log( d , 'is an even number')
//          :  console.log( d , ' is is an odd number.')
// var diem = prompt('nhập diem', 'chưa được nhập');
// console.log('Enter diem:'+ diem);
// if(diem<100 && diem >=90 )
// {
//     console.log("A")
// } else if( diem<90 && diem >=70  ){
//     console.log("B")
// } else if(diem<70 && diem >=60){
//     console.log("C")
// }else if(diem<60 && diem >=50){
//     console.log("D")
// } else {
//     console.log("F")
// }
// var thang = prompt('nhập thang', 'chưa được nhập');
// console.log('Enter a number:'+ thang);

// switch(thang){
//     case 9: console.log('mùa thu');
//     case 10: console.log('mùa thu');
//     case 11: console.log('mùa thu');
//     case 1: console.log(' mùa Đông');
//     case 2: console.log(' mùa Đông');
//     case 12: console.log(' mùa Đông');
//     case 6: console.log(' mùa hè');
//     case 7: console.log(' mùa hè');
//     case 8: console.log(' mùa hè');
//     case 3: console.log(' mùa xuân');
//     case 4: console.log(' mùa xuân');
//     case 5: console.log(' mùa xuân');
// }
// const now = new Date();
// var day = now.getDay();

// console.log(now.getDay());
// const daysOfWeek = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
// var today = daysOfWeek[day];
// console.log(  "What is the day  today? "  + today )

// if(day ==0 || day == 6) {
//     console.log( today +' is a weekend. ')
// } else {
//     console.log( today +' is a working day. ')
// }

var thang = prompt('nhập vào tháng ', 'chưa được nhập');

const daysOfmonth = ["t1", "T2", "t3", "T4", "T5", "T6", "T7","T8","T9","T10","T11","T12"];
var thangnayla = daysOfmonth[thang-1];

console.log( ' Enter a month: '+ thangnayla );
if(thang ==2 ){
    var namnhuan = prompt('nếu năm nhuận thì 1 nếu ko phải năm nhuận 0', 'chưa được nhập');
}
if(namnhuan==0 && thang == 2){
    console.log( thangnayla +' has 28 days.');
} else if( namnhuan==1 && thang == 2 ) {
    console.log( thangnayla +' has 29 days.');
} else if ([0, 2, 4, 6, 7, 9, 11].includes(thang - 1)) {
    console.log(thangnayla + ' có 31 ngày.');
}
// Các tháng có 30 ngày
else {
    console.log(thangnayla + ' có 30 ngày.');
}
