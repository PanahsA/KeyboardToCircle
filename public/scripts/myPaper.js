var header=document.getElementById("header");
var circleArray=[];

function onKeyDown(event) {
    header.style.visibility="hidden";
    var circle=makeCircle();
    circleArray.push(circle);
    circleArray.forEach(function (circle) {
        console.log(circle);
    });
    makeSound(event);

}


function onFrame(event) {
    for (var i=0; i<circleArray.length; i++){
        circleArray[i].fillColor.hue+=1;
        circleArray[i].scale(.96);
        if(circleArray[i].area<1){
            circleArray[i].remove();
            circleArray.splice(i,1);
            console.log(circleArray);
        }
    }
}

// LOGIC
//MAKE SOUND
function makeSound(event){
    if(event.key=="a"){ //paperjs
        var sound = new Howl({
            src: ['sounds/bubbles.mp3']
        });
        sound.play();
    }
}

function makeCircle () {
    var windowWidth=window.innerWidth;
    var windowHeight=window.innerHeight;
    var x=Math.floor(Math.random() * windowWidth);
    var y=Math.floor(Math.random() * windowHeight);
    var r= Math.random() ;
    var g= Math.random() ;
    var b= Math.random() ;
    var myCircle = new Path.Circle(new Point(x, y), 120);
    myCircle.fillColor = new Color(r,g,b);
    return myCircle;
}




//GENERATE GRID WITH CIRCLES, 2 WAYS
// var xx=30;
// var yy=-40;
// for (var i=0; i<100; i++){
//     var r= Math.random(1)/1 ;
//     var g= Math.random(1)/1 ;
//     var b= Math.random(1)/1 ;
//     if(i%3===0){yy+=100; xx=30}
//     new Path.Circle(new Point(xx, yy), 25).fillColor = new Color(r,g,b);
//     xx+=100;
// }
// for (var x=0; x<1000; x+=100){
//     for(var y=0; y<1000; y+=100){
//         var r= Math.random(1)/1 ;
//         var g= Math.random(1)/1 ;
//         var b= Math.random(1)/1 ;
//         var myCircle = new Path.Circle(new Point(x, y), 15);
//         myCircle.fillColor = new Color(r,g,b);
//
//     }
// }


