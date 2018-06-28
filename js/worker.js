var i = 0, t=[1000,500,1500,600,1000];

function timedCount() {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount();