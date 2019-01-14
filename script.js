//variable initialized for "x" and "0" selection and array created
let t1="z",t2="z",t3="z",t4="z",t5="z",t6="z",t7="z",t8="z",t9="z" ;
let arrPoints = [t1,t2,t3,t4,t5,t6,t7,t8,t9];
//following are the arrays of all possible winning resutl
let h1 = [t1,t2,t3];
let h2 = [t4,t5,t6];
let h3 = [t7,t8,t9];

let v1 = [t1,t4,t7];
let v2 = [t2,t5,t8];
let v3 = [t3,t6,t9];

let c1 = [t1,t5,t9];
let c2 = [t3,t5,t7];

//variable for count selection of click
let totalSelectionCount = 0;
//result shows messages
let string = "not win";
//num variable is decides players turn if num = 0 then moves for player "x"
let num = 0;
//select id of rectangle id  and its child "span"
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

let arr1 = [b1,b2,b3,b4,b5,b6,b7,b8,b9];
let arr2 = [bs1,bs2,bs3,bs4,bs5,bs6,bs7,bs8,bs9];
let arr3 = ["1","2","3","4","5","6","7","8","9"];

for (let i=0;i<arr1.length;i++){

    allEventListners(arr1[i],arr2[i],arr3[i],i);
}

function allEventListners(ent,st,ii,nn){
    ent.addEventListener("click",tic);
    function tic () {

        if (num===0 && st.innerText=== ii) {
            totalSelectionCount++;
            st.innerText = "x";
            st.style.color = "red";
            arrPoints[nn] = "x";
            arrUpdatePoint(arrPoints[0],arrPoints[1],arrPoints[2],arrPoints[3],arrPoints[4],arrPoints[5],arrPoints[6],
                arrPoints[7],arrPoints[8]);
            console.log(arrPoints);
            console.log(h1);checkResult(h1);checkResult(h2);checkResult(h3);
            checkResult(v1);checkResult(v2);checkResult(v3);
            checkResult(c1);checkResult(c2);
            checkForTie(totalSelectionCount);
            num = 1;
            return;
        }
        if(num===1 && st.innerText=== ii) {
            totalSelectionCount++;
            st.innerText = "o";
            st.style.color = "black";
            arrPoints[nn] = "o";
            arrUpdatePoint(arrPoints[0],arrPoints[1],arrPoints[2],arrPoints[3],arrPoints[4],arrPoints[5],arrPoints[6],
                arrPoints[7],arrPoints[8]);
            console.log(arrPoints);checkResult(h1);checkResult(h2);checkResult(h3);
            checkResult(v1);checkResult(v2);checkResult(v3);
            checkResult(c1);checkResult(c2);
            checkForTie(totalSelectionCount);
            num = 0;
            return;
        }
    };

}

//update arrayPoints
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
//check result for each possibilities if wins then calls the function resetting()
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

        setTimeout(function () {
            confirm("win "+ k[0]);
        },500);
        mesg1.innerText = "Game "+k[0] + " win!!!";
        resetting();
    }

};
//if there is tie than following function evokes
function checkForTie(total) {
    if (total === 9 && string === "not win" ){

        setTimeout(function () {
            confirm("Cats game!");
        },500);
        mesg1.innerText = "Game Tie !!";
        resetting();
    }
}
//resetting after finishing games after 2 minute
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
        arrPoints = [t1,t2,t3,t4,t5,t6,t7,t8,t9];
        mesg1.innerText = "Game starts";

    },2000);
}







