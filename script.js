//alert();
let t1,t2,t3,t4,t5,t6,t7,t8,t9;
let arrPoints = [t1,t2,t3,t4,t5,t6,t7,t8,t9];
let h1 = [t1,t2,t3];
let h2 = [t4,t5,t6];
let h3 = [t7,t8,t9];

let v1 = [t1,t4,t7];
let v2 = [t2,t5,t8];
let v3 = [t3,t6,t9];



let num = 0;
let b1 = document.getElementById("b1");
let bs1 = b1.querySelector("span");

let b2 = document.getElementById("b2");
let bs2 = b2.querySelector("span");

let b3 = document.getElementById("b3");
let bs3 = b3.querySelector("span");

let b4 = document.getElementById("b4");
let bs4 = b4.querySelector("span");

let b5 = document.getElementById("b5");
let bs5 = b5.querySelector("span");

let b6 = document.getElementById("b6");
let bs6 = b6.querySelector("span");

let b7 = document.getElementById("b7");
let bs7 = b7.querySelector("span");

let b8 = document.getElementById("b8");
let bs8 = b8.querySelector("span");

let b9 = document.getElementById("b9");
let bs9 = b9.querySelector("span");

b1.addEventListener("click",tic);

function tic () {
       if (num===0 && bs1.innerText==="1") {
           bs1.innerText = "x";
           t1 = "x";
           arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
           console.log(h1);checkResult(h1);checkResult(h2);checkResult(h3);
           checkResult(v1);checkResult(v2);checkResult(v3);
           num = 1;
           return;
       }
       if(num===1 && bs1.innerText==="1") {
           bs1.innerText = "o";
           t1 = "o";
           arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
           console.log(arrPoints);checkResult(h1);checkResult(h2);checkResult(h3);
           checkResult(v1);checkResult(v2);checkResult(v3);
           num = 0;
           return;
       }
};

b2.addEventListener("click",tic2);

function tic2 () {
    if (num===0 && bs2.innerText==="2") {
        bs2.innerText = "x";
        t2 = "x";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 1;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        return;
    }
    if(num===1 && bs2.innerText==="2") {
        bs2.innerText = "o";
        t2 = "o";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        num = 0;
        return;
    }
};

b3.addEventListener("click",tic3);

function tic3 () {
    if (num===0 && bs3.innerText==="3") {
        bs3.innerText = "x";
        t3 = "x";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 1;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        return;
    }
    if(num===1 && bs3.innerText==="3") {
        bs3.innerText = "o";
        t3 = "o";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        num = 0;checkResult(h1);
        return;
    }
};

b4.addEventListener("click",tic4);

function tic4 () {
    if (num===0 && bs4.innerText==="4") {
        bs4.innerText = "x";
        t4 = "x";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 1;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        return;
    }
    if(num===1 && bs4.innerText==="4") {
        bs4.innerText = "o";
        t4 = "o";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 0;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        return;
    }
};

b5.addEventListener("click",tic5);

function tic5 () {
    if (num===0 && bs5.innerText==="5") {
        bs5.innerText = "x";
        t5 = "x";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 1;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        return;
    }
    if(num===1 && bs5.innerText==="5") {
        bs5.innerText = "o";
        t5 = "o";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 0;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        return;
    }
};

b6.addEventListener("click",tic6);

function tic6 () {
    if (num===0 && bs6.innerText==="6") {
        bs6.innerText = "x";
        t6 = "x";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 1;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        return;
    }
    if(num===1 && bs6.innerText==="6") {
        bs6.innerText = "o";
        t6 = "o";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 0;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        return;
    }
};

b7.addEventListener("click",tic7);

function tic7 () {
    if (num===0 && bs7.innerText==="7") {
        bs7.innerText = "x";
        t7 = "x";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 1;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        return;
    }
    if(num===1 && bs7.innerText==="7") {
        bs7.innerText = "o";
        t7 = "o";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 0;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        return;
    }
};

b8.addEventListener("click",tic8);

function tic8 () {
    if (num===0 && bs8.innerText==="8") {
        bs8.innerText = "x";
        t8 = "x";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 1;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        return;
    }
    if(num===1 && bs8.innerText==="8") {
        bs8.innerText = "o";
        t8 = "o";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 0;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        return;
    }
};

b9.addEventListener("click",tic9);

function tic9 () {
    if (num===0 && bs9.innerText==="9") {
        bs9.innerText = "x";
        t9 = "x";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 1;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        return;
    }
    if(num===1 && bs9.innerText==="9") {
        bs9.innerText = "o";
        t9 = "o";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 0;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        return;
    }
};

function arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9){
    arrPoints = [t1,t2,t3,t4,t5,t6,t7,t8,t9];
    h1 = [t1,t2,t3];
    h2 = [t4,t5,t6];
    h3 = [t7,t8,t9];
    v1 = [t1,t4,t7];
    v2 = [t2,t5,t8];
    v3 = [t3,t6,t9];
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
    if(count1===3 || count2 ===3){
        alert("win "+ k[0]);
    }

};






