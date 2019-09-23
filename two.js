function _(id) {
    return document.getElementById(id);
}

var droppedIn = false;




window.onload = function () {
    // Drag zone functionality



    var dropZone1 = _('replace1');//feilds
    var dropZone2 = _('replace2') ;   
    // var object1 = _('object1');
    //var object2 = _('object2');
    //ar object3 = _('object3');

    var activeEvent = '';
    var originalX = '';
    var originalY = '';
    // function myfunction(){
  //  function objectsbox(){
    for (i = 1; i < 5; i++) {
        var obj = document.createElement("div");// creating div blocks(topics)
        obj.className = "obj";
        obj.id = 'object';
        obj.textContent = 'object' + i;
        bottom_part.appendChild(obj);
    }
//}

var objts = document.getElementsByClassName("obj");

for (let i = 0; i < objts.length; i++) {
   
    objts[i].addEventListener('touchstart', handleTouchStart, false);
    objts[i].addEventListener('touchmove', handleTouchMove, false);
    objts[i].addEventListener('touchend', handleTouchEnd, false);
}
/*
object2.addEventListener('touchstart', handleTouchStart, false);
object2.addEventListener('touchmove', handleTouchMove, false);
object2.addEventListener('touchend', handleTouchEnd, false);


object3.addEventListener('touchstart', handleTouchStart, false);
object3.addEventListener('touchmove', handleTouchMove, false);
object3.addEventListener('touchend', handleTouchEnd, false);

object4.addEventListener('touchstart', handleTouchStart, false);
object4.addEventListener('touchmove', handleTouchMove, false);
object4.addEventListener('touchend', handleTouchEnd, false);*/








function handleTouchStart(e, item) {


   
    originalX = (e.target.offsetLeft-10 ) + "px";
    originalY = (e.target.offsetTop -10) + "px";
    activeEvent = 'start';

    dropZone1.style.backgroundColor = "#D3D3D3";
    dropZone2.style.backgroundColor = "#D3D3D3";
    
}

function handleTouchMove(e) {
    var touchLocation = e.targetTouches[0];
    var pageX = (touchLocation.pageX-50) + "px";
    var pageY = (touchLocation.pageY-50) + "px";

    e.target.style.position = "absolute";
    e.target.style.left = pageX;
    e.target.style.top = pageY;
    
    activeEvent = 'move';
    

}


function handleTouchEnd(e) {
    e.preventDefault();
    if (activeEvent === 'move') {
        var pageX = (parseInt(e.target.style.left-50));
        var pageY = (parseInt(e.target.style.top)-50 );


        if (detectTouchEnd(dropZone1.offsetLeft, dropZone1.offsetTop, pageX, pageY, dropZone1.offsetWidth, dropZone1.offsetHeight)) {
            dropZone1.appendChild(e.target);
            
            e.target.style.position = "initial";



            droppedIn = true;

           

        } else {
            e.target.style.left = originalX;
            e.target.style.top = originalY;
            
        }
    }
}

function detectTouchEnd(x1, y1, x2, y2, w, h) {
    //   Very simple detection here
    if (x2 - x1 > w)
        return false;
    if (y2 - y1 > h)
        return false;
    return true;
}
}