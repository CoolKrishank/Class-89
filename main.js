canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
nasa_mars_images_array=["https://mars.nasa.gov/msl-raw-images/msss/01000/mcam/1000MR0044631220503682E01_DXXX.jpg" , "https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG","https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/rcam/RRB_486265291EDR_F0481570RHAZ00323M_.JPG"];
randomNumber=Math.floor(Math.random() * 3);
r_height=100;
r_width=70;
r_xposition=10;
r_yposition=10;
r_image="rover.png";
b_image=nasa_mars_images_array[randomNumber];
console.log("b_image="+ b_image);
function add()
{
    bg= new Image();
    bg.onload = uploadBackground;
    bg.src=b_image;
    r=new Image();
    r.onload=uploadrover;
    r.src=r_image;
}
function uploadBackground()
{
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
}
function uploadrover()
{
    ctx.drawImage(r,r_xposition,r_yposition,r_width,r_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    var keyPressed=e.keyCode;
    if(keyPressed== '37')
    {
        console.log("left");
        left();
    }
    if(keyPressed== '38')
    {
        console.log("up");
        up();
    }
    if(keyPressed== '39')
    {
        console.log("right");
        right();
    }
    if(keyPressed== '40')
    {
        console.log("down");
        down();
    }
}
function up()
{
    if(r_yposition >=0)
    {
        r_yposition=r_yposition-10;
        console.log("when up arrow is pressed,x="+ r_xposition + "| y=" + r_yposition);
        uploadBackground();
        uploadrover();
    }
}
function down()
{
    if(r_yposition <=500)
    {
        r_yposition=r_yposition+10;
        console.log("when down arrow is pressed,x="+ r_xposition + "| y=" + r_yposition);
        uploadBackground();
        uploadrover();
    }
}
function left()
{
    if(r_xposition >=0)
    {
        r_xposition=r_xposition-10;
        console.log("when left arrow is pressed,x="+ r_xposition + "| y=" + r_yposition);
        uploadBackground();
        uploadrover();
    }
}
function right()
{
    if(r_xposition <=700)
    {
        r_xposition=r_xposition+10;
        console.log("when right arrow is pressed,x="+ r_xposition + "| y=" + r_yposition);
        uploadBackground();
        uploadrover();
    }
}