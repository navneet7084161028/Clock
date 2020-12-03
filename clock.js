function show()
{
    var a = new Date();
   
         hour = 30 * (( a.getHours() % 12 ) + a.getMinutes() /60);
         min = 6 * a.getMinutes();
         sec = 6 * a.getSeconds();

        document.getElementById('sec-hand').style.cssText = "transform:rotate("+sec+"deg);";
        document.getElementById('min-hand').style.cssText = "transform:rotate("+min+"deg);";
        document.getElementById('hour-hand').style.cssText = "transform:rotate("+hour+"deg);";
        setTimeout(show, 1000);
        document.getElementById('digital').innerHTML=(a.getHours() + ":" + a.getMinutes()+ ":" +a.getSeconds());
    
}
window.onload=show;