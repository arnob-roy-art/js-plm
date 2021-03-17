function calculation(){
    var side1=Number(document.getElementById("first").value);
    var side2= Number(document.getElementById("second").value);
    var side3= Number(document.getElementById("third").value);
    var sum= (side1+side2+side3)/2;
    var area =Math.sqrt(sum*(sum-side1)*(sum-side2)*(sum-side3));
    console.log(area);
}