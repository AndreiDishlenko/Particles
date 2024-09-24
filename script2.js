console.log('Start animation');

var canvas = document.createElement('canvas');
ctx = canvas.getContext('2d');
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

document.querySelector('body').appendChild(canvas);

// opacity = Number(1 - length / properties.lineLength).toFixed(1);
// opacity = 0.5;

// ctx.lineWidth = '0,5';

// function DrawRect(x,y,w,h) {
//     ctx.moveTo(x, y);
//     ctx.lineTo(x+w, y);
//     ctx.lineTo(x+w, y+h);                
//     ctx.lineTo(x, y+h);
//     ctx.lineTo(x, y); 
// }

function DrawAll(x,y,w,r,g,b) {
    let opacity = 1;
    for (let i=0;i<6;i++) {
        ctx.fillStyle = 'rgba(255, 255, 0, '+opacity+')'; // rgba(255, 255, 0, 1)a
        ctx.roundRect(x, y, w, w, 5); 
        ctx.fill();
        x = x + 15;
        y = y + 15;
        opacity = opacity - 0.17;
    }
}

// DrawAll(100, 100, 50, 0, 0, 225);

function Draw1() {
    ctx.strokeStyle = 'rgba(255, 255, 0, 0)';
    ctx.fillStyle = 'rgba(255, 255, 0, 1)'; 
    ctx.roundRect(50, 50, 100, 100, 5);       
    ctx.fill();
    
    ctx.fillStyle = 'rgba(255, 255, 0, 0.78)';
    ctx.roundRect(70, 70, 100, 100, 5);       
    ctx.fill();
    
    ctx.fillStyle = 'rgba(255, 255, 0, 0.56)';
    ctx.roundRect(90, 90, 100, 100, 5);       
    ctx.fill();
    
    ctx.fillStyle = 'rgba(255, 255, 0, 0.34)';
    ctx.roundRect(110, 110, 100, 100, 5);       
    ctx.fill();
    
    ctx.fillStyle = 'rgba(255, 255, 0, 0.12)';
    ctx.roundRect(130, 130, 100, 100, 5);   
    ctx.fill();

    ctx.stroke();
}

// Draw1()
function DrawRect(x, y) {
    ctx.fillStyle = 'rgba(255, 255, 0, 1)';
    ctx.roundRect(x, y, 50, 50, 5); 
    ctx.fill();
}

var x = 100;
var y = 100;

function StartMove() {

    // for (let i = 0; i<100; i++) {
        DrawRect(x, y);
        x = x + 5;

        setTimeout(() => {
            // ctx.clearRect(0, 0, canvas.width, canvas.height);

            requestAnimationFrame(StartMove);

            // (x+5, y);
        }, 100);
        
    // }
}

StartMove()

// DrawRect(x, y);
// ctx.clearRect(0, 0, canvas.width, canvas.height);
// StartMove(x+5, y);


console.log('End animation');










