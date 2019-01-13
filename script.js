//alert();
let t1,t2,t3,t4,t5,t6,t7,t8,t9;
let arrPoints = [t1,t2,t3,t4,t5,t6,t7,t8,t9];
let h1 = [t1,t2,t3];
let h2 = [t4,t5,t6];
let h3 = [t7,t8,t9];

let v1 = [t1,t4,t7];
let v2 = [t2,t5,t8];
let v3 = [t3,t6,t9];

let c1 = [t1,t5,t9];
let c2 = [t3,t5,t7];


let totalSelectionCount = 0;
let string = "not win";

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

let mesg = document.getElementById("mesg");
let mesg1 = mesg.querySelector("span");

b1.addEventListener("click",tic);

function tic () {

       if (num===0 && bs1.innerText==="1") {
           totalSelectionCount++;
           bs1.innerText = "x";
           bs1.style.color = "red";
           t1 = "x";
           arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
           console.log(h1);checkResult(h1);checkResult(h2);checkResult(h3);
           checkResult(v1);checkResult(v2);checkResult(v3);
           checkResult(c1);checkResult(c2);
           checkForTie(totalSelectionCount);
           num = 1;
           return;
       }
       if(num===1 && bs1.innerText==="1") {
           totalSelectionCount++;
           bs1.innerText = "o";
           bs1.style.color = "black";
           t1 = "o";
           arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
           console.log(arrPoints);checkResult(h1);checkResult(h2);checkResult(h3);
           checkResult(v1);checkResult(v2);checkResult(v3);
           checkResult(c1);checkResult(c2);
           checkForTie(totalSelectionCount);
           num = 0;
           return;
       }
};

b2.addEventListener("click",tic2);

function tic2 () {

    if (num===0 && bs2.innerText==="2") {
        totalSelectionCount++;
        bs2.innerText = "x";
        bs2.style.color = "red";
        t2 = "x";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 1;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        checkResult(c1);checkResult(c2);
        checkForTie(totalSelectionCount);
        return;
    }
    if(num===1 && bs2.innerText==="2") {
        totalSelectionCount++;
        bs2.innerText = "o";
        bs2.style.color = "black";
        t2 = "o";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        checkResult(c1);checkResult(c2);
        checkForTie(totalSelectionCount);
        num = 0;
        return;
    }
};

b3.addEventListener("click",tic3);

function tic3 () {

    if (num===0 && bs3.innerText==="3") {
        totalSelectionCount++;
        bs3.innerText = "x";
        bs3.style.color = "red";
        t3 = "x";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 1;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        checkResult(c1);checkResult(c2);
        checkForTie(totalSelectionCount);
        return;
    }
    if(num===1 && bs3.innerText==="3") {
        totalSelectionCount++;
        bs3.innerText = "o";
        bs3.style.color = "black";
        t3 = "o";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        checkResult(c1);checkResult(c2);
        num = 0;
        checkForTie(totalSelectionCount);
        return;
    }
};

b4.addEventListener("click",tic4);

function tic4 () {

    if (num===0 && bs4.innerText==="4") {
        totalSelectionCount++;
        bs4.innerText = "x";
        bs4.style.color = "red";
        t4 = "x";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 1;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        checkResult(c1);checkResult(c2);
        checkForTie(totalSelectionCount);
        return;
    }
    if(num===1 && bs4.innerText==="4") {
        totalSelectionCount++;
        bs4.innerText = "o";
        bs4.style.color = "black";
        t4 = "o";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 0;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        checkResult(c1);checkResult(c2);
        checkForTie(totalSelectionCount);
        return;
    }
};

b5.addEventListener("click",tic5);

function tic5 () {

    if (num===0 && bs5.innerText==="5") {
        totalSelectionCount++;
        bs5.innerText = "x";
        bs5.style.color = "red";
        t5 = "x";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 1;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        checkResult(c1);checkResult(c2);
        checkForTie(totalSelectionCount);
        return;
    }
    if(num===1 && bs5.innerText==="5") {
        totalSelectionCount++;
        bs5.innerText = "o";
        bs5.style.color = "black";
        t5 = "o";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 0;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        checkResult(c1);checkResult(c2);
        checkForTie(totalSelectionCount);
        return;
    }
};

b6.addEventListener("click",tic6);

function tic6 () {

    if (num===0 && bs6.innerText==="6") {
        totalSelectionCount++;
        bs6.innerText = "x";
        bs6.style.color = "red";
        t6 = "x";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 1;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        checkResult(c1);checkResult(c2);
        checkForTie(totalSelectionCount);
        return;
    }
    if(num===1 && bs6.innerText==="6") {
        totalSelectionCount++;
        bs6.innerText = "o";
        bs6.style.color = "black";
        t6 = "o";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 0;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        checkResult(c1);checkResult(c2);
        checkForTie(totalSelectionCount);
        return;
    }
};

b7.addEventListener("click",tic7);

function tic7 () {

    if (num===0 && bs7.innerText==="7") {
        totalSelectionCount++;
        bs7.innerText = "x";
        bs7.style.color = "red";
        t7 = "x";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 1;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        checkResult(c1);checkResult(c2);
        checkForTie(totalSelectionCount);
        return;
    }
    if(num===1 && bs7.innerText==="7") {
        totalSelectionCount++;
        bs7.innerText = "o";
        bs7.style.color = "black";
        t7 = "o";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 0;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        checkResult(c1);checkResult(c2);
        checkForTie(totalSelectionCount);
        return;
    }
};

b8.addEventListener("click",tic8);

function tic8 () {

    if (num===0 && bs8.innerText==="8") {
        totalSelectionCount++;
        bs8.innerText = "x";
        bs8.style.color = "red";
        t8 = "x";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 1;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        checkResult(c1);checkResult(c2);
        checkForTie(totalSelectionCount);
        return;
    }
    if(num===1 && bs8.innerText==="8") {
        totalSelectionCount++;
        bs8.innerText = "o";
        bs8.style.color = "black";
        t8 = "o";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 0;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        checkResult(c1);checkResult(c2);
        checkForTie(totalSelectionCount);
        return;
    }
};

b9.addEventListener("click",tic9);

function tic9 () {

    if (num===0 && bs9.innerText==="9") {
        totalSelectionCount++;
        bs9.innerText = "x";
        bs9.style.color = "red";
        t9 = "x";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 1;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        checkResult(c1);checkResult(c2);
        checkForTie(totalSelectionCount);
        return;
    }
    if(num===1 && bs9.innerText==="9") {
        totalSelectionCount++;
        bs9.innerText = "o";
        bs9.style.color = "black";
        t9 = "o";
        arrUpdatePoint(t1,t2,t3,t4,t5,t6,t7,t8,t9);
        console.log(arrPoints);
        num = 0;checkResult(h1);checkResult(h2);checkResult(h3);
        checkResult(v1);checkResult(v2);checkResult(v3);
        checkResult(c1);checkResult(c2);
        checkForTie(totalSelectionCount);
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
    c1 = [t1,t5,t9];
    c2 = [t3,t5,t7];
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
    if(count1===3 || count2 ===3 ) {
        string = "win";
        alert("win "+ k[0]);
        mesg1.innerText = "Game "+k[0] + " win!!!";
        resetting();
    }

};
function checkForTie(total) {
    if (total === 9 && string === "not win" ){
        alert("Cats game!");
        mesg1.innerText = "Game Tie !!";
        resetting();
    }
}
function resetting() {
    setTimeout(function () {
        totalSelectionCount = 0;
        bs1.innerText = "1";
        bs1.style.color = "#dfdada";
        t1 = undefined;

        bs2.innerText = "2";
        bs2.style.color = "#dfdada";
        t2 = undefined;

        bs3.innerText = "3";
        bs3.style.color = "#dfdada";
        t3 = undefined;

        bs4.innerText = "4";
        bs4.style.color = "#dfdada";
        t4 = undefined;

        bs5.innerText = "5";
        bs5.style.color = "#dfdada";
        t5 = undefined;

        bs6.innerText = "6";
        bs6.style.color = "#dfdada";
        t6 = undefined;

        bs7.innerText = "7";
        bs7.style.color = "#dfdada";
        t7 = undefined;

        bs8.innerText = "8";
        bs8.style.color = "#dfdada";
        t8 = undefined;

        bs9.innerText = "9";
        bs9.style.color = "#dfdada";
        t9 = undefined;

        mesg1.innerText = "Game starts";

    },2000);
}







