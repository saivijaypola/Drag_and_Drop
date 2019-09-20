function _(id) {
    return document.getElementById(id);
}

var droppedIn = false;




window.onload = function () {
    // Drag zone functionality
    var dropZone = _('replace1');
    
     
    var object1 = _('object1');
    //var object2 = _('object2');
    //ar object3 = _('object3');

    var activeEvent = '';
    var originalX = '';
    var originalY = '';
      
    for (i=0; i<6;i++){
        let obj =document.createElement("div");
        obj.className = "obj";
        bottom_part.appendChild(obj);
    }
    
    var objts = document.getElementsByClassName("obj")

    for( let i =0; i< objts.length; i++){
    objts[i].addEventListener('dragstart', handleDragStart, false);
    objts[i].addEventListener('dragend', handleDragEnd, false);
    objts[i].addEventListener('touchstart', handleTouchStart, false);
    objts[i].addEventListener('touchmove', handleTouchMove, false);
    objts[i].addEventListener('touchend', handleTouchEnd, false);
    }
    /*object2.addEventListener('dragstart', handleDragStart, false);
    object2.addEventListener('dragend', handleDragEnd, false);
    object2.addEventListener('touchstart', handleTouchStart, false);
    object2.addEventListener('touchmove', handleTouchMove, false);
    object2.addEventListener('touchend', handleTouchEnd, false);

    object3.addEventListener('dragstart', handleDragStart, false);
    object3.addEventListener('dragend', handleDragEnd, false);
    object3.addEventListener('touchstart', handleTouchStart, false);
    object3.addEventListener('touchmove', handleTouchMove, false);
    object3.addEventListener('touchend', handleTouchEnd, false);
    object4.addEventListener('dragstart', handleDragStart, false);
    object4.addEventListener('dragend', handleDragEnd, false);
    object4.addEventListener('touchstart', handleTouchStart, false);
    object4.addEventListener('touchmove', handleTouchMove, false);
    object4.addEventListener('touchend', handleTouchEnd, false);*/




    function handleDragStart(e) {
        e
            .target
            .getAttribute('id');
        e.dataTransfer.dropEffect = "move";
        e
            .dataTransfer
            .setData("text", e.target.getAttribute('id'));
    }

    function handleDragEnd(e) {
        if (droppedIn == false) {
            e
                .target
                .getAttribute('id') + " go.";
        }
        droppedIn = false;

    }




    function handleTouchStart(e) {

        e
            .target
            .getAttribute('id');
        originalX = (e.target.offsetLeft-50) + "px";
        originalY = (e.target.offsetTop-50) + "px";
        activeEvent = 'start';
    }

    function handleTouchMove(e) {
        var touchLocation = e.targetTouches[0];
        var pageX = (touchLocation.pageX-50) + "px";
        var pageY = (touchLocation.pageY-50) + "px";

        e.target.style.position = "absolute";
        e.target.style.left = pageX;
        e.target.style.top = pageY ;
        activeEvent = 'move';
    }


    function handleTouchEnd(e) {
        e.preventDefault();
        if (activeEvent === 'move') {
             var pageX = (parseInt(e.target.style.left)-50);
            var pageY = (parseInt(e.target.style.top) - 50);
            

            if(detectTouchEnd(dropZone.offsetLeft, dropZone.offsetTop, pageX, pageY, dropZone.offsetWidth, dropZone.offsetHeight)) 
            {
                dropZone.appendChild(e.target);
                e.target.style.position = "initial";
                

                droppedIn = true;

                e
                    .target
                //.getAttribute('id') + " into drop zone";

            } else {
            e.target.style.left = originalX;
            e.target.style.top = originalY;
            //e
            //  .target
            // .getAttribute('id') + " go.";
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