//alert();
let t1,t2,t3,t4,t5,t6,t7,t8,t9;
let arrPoints = [t1,t2,t3,t4,t5,t6,t7,t8,t9];
let h1 = [t1,t2,t3];
let h2 = [t4,t5,t6];
let h3 = [t7,t8,t9];
let num = 0;
let b1 = document.getElementById("b1");
let bs1 = b1.querySelector("span");

let b2 = document.getElementById("b2");
let bs2 = b2.querySelector("span");

let b3 = document.getElementById("b3");
let bs3 = b3.querySelector("span");

b1.addEventListener("click",tic);

function tic () {
       if (num===0 && bs1.innerText==="1") {
           bs1.innerText = "x";
           t1 = "x";
           arrUpdatePoint(t1,t2,t3);
           console.log(h1);checkResult(h1);
           num = 1;
           return;
       }
       if(num===1 && bs1.innerText==="1") {
           bs1.innerText = "o";
           t1 = "o";
           arrUpdatePoint(t1,t2,t3);
           console.log(arrPoints);checkResult(h1);
           num = 0;
           return;
       }
};

b2.addEventListener("click",tic2);

function tic2 () {
    if (num===0 && bs2.innerText==="2") {
        bs2.innerText = "x";
        t2 = "x";
        arrUpdatePoint(t1,t2,t3);
        console.log(arrPoints);
        num = 1;checkResult(h1);
        return;
    }
    if(num===1 && bs2.innerText==="2") {
        bs2.innerText = "o";
        t2 = "o";
        arrUpdatePoint(t1,t2,t3);
        console.log(arrPoints);checkResult(h1);
        num = 0;
        return;
    }
};

b3.addEventListener("click",tic3);

function tic3 () {
    if (num===0 && bs3.innerText==="3") {
        bs3.innerText = "x";
        t3 = "x";
        arrUpdatePoint(t1,t2,t3);
        console.log(arrPoints);
        num = 1;checkResult(h1);
        return;
    }
    if(num===1 && bs3.innerText==="3") {
        bs3.innerText = "o";
        t3 = "o";
        arrUpdatePoint(t1,t2,t3);
        console.log(arrPoints);
        num = 0;checkResult(h1);
        return;
    }
};
function arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9){
    arrPoints = [t1,t2,t3,t4,t5,t6,t7,t8,t9];
    h1 = [t1,t2,t3];
    h2 = [t4,t5,t6];
    h3 = [t7,t8,t9];
};
function checkResult(k){
    let count1 = 0;
    let count2 = 0;

    for(let i=0;i<k.length;i++){
        if(k[i]=="x"){
            count1++ ;
        }
        if(k[i]=="o"){
            count2++;
        }

    }
    if(count1===2 || count2 ===3){
        alert("win "+ k[0]);
    }

};






