function $(str) {
    if(str.charAt(0) == "#") {
        return document.getElementById(str.substring(1));
    } else if(str.charAt(0) == ".") {
        return document.getElementsByClassName(str.substring(1));
    } else {
        return document.getElementsByTagName(str);
    }
}
function hide(){
    $("#logoImg").style.display = 'none';
    $("#start").style.display = 'none';
}
// let str1 = "2018-01-07";
// let b_year = str1.substr(0,4);
// let b_month = str1.substr(5,2);
// let b_date = str1.substr(8,2);
// console.log(b_year, b_month, b_date)
// let temp_end_month = Number(b_month) + 12
// console.log(temp_end_month)
// let end_year = b_year
// let end_date = b_date
// if (temp_end_month>12) {
//     end_year = Number(end_year) + 1
// } else {
//     end_year = end_year
// }
// if(temp_end_month%12 == 0){
//     temp_end_month = 12
// } else {
//     temp_end_month = temp_end_month%12
// }
// if (temp_end_month<10){
//     temp_end_month = '0' +temp_end_month;
// } else {
//     temp_end_month = temp_end_month;
// }
// console.log(temp_end_month)
// let end_month = temp_end_month
// console.log(end_year + '-' + end_month + '-' + end_date)
$("#start").onclick = function() {
    hide();
    let m = new Map({
        width:580,
        height:836,
        bgImg:"imgs/bg1.jpg"
    })
    m.creatUI();
}
