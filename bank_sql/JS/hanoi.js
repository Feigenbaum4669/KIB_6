var NoOfOper=0;
function outerhanoi(src,aux,dst){
var N=document.getElementById("varN").value;
NoOfOper=0;
document.getElementById("trace").innerHTML="Hanoi Algorithm for N="+N+":</br>";
hanoi(N,src,aux,dst);
document.getElementById("trace").innerHTML=document.getElementById("trace").innerHTML+"No of operations: "+NoOfOper;
};

var hanoi = function(disc,src,aux,dst) {
    if (disc > 0) {
        hanoi(disc - 1,src,dst,aux);
        document.getElementById("trace").innerHTML=document.getElementById("trace").innerHTML+"Move disc " + disc + " from " + src + " to " + dst+"</br>";
        NoOfOper=NoOfOper+1;
        hanoi(disc - 1,aux,src,dst);
    }
};




