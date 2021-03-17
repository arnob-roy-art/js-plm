 function showFunc(){
    var now = new Date();
var day = now.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
document.write("Today is : " + daylist[day] + "." );
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
var prepand = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
if (hour===0 && prepand===' PM ') 
{ 
if (minute===0 && second===0)
{ 
hour=12;
prepand=' Noon';
} 
else
{ 
hour=12;
prepand=' PM';
} 
} 
if (hour===0 && prepand===' AM ') 
{ 
if (minute===0 && second===0)
{ 
hour=12;
prepand=' Midnight';
} 
else
{ 
hour=12;
prepand=' AM';
} 
} 
document.write(" Current Time : "+hour + prepand + " : " + minute + " : " + second + ".");

}
function print_current_page()
{
window.print();
}

 function showdate(){
    var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
// if(dd<10) 
// {
//     dd='0'+dd;
// } 

// if(mm<10) 
// {
//     mm='0'+mm;
// } 
today = mm+'-'+dd+'-'+yyyy;
document.write(today);
}




