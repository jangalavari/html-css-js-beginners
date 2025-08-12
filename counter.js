let dec = document.getElementById("dec");
let res = document.getElementById("res");
let inc = document.getElementById("inc");
let count = document.getElementById("count");
let count1 = 0;

dec.onclick = function(){
    count1 --;
    count.textContent = count1;
}
res.onclick = function(){
    count1 =0;
    count.textContent = count1;
}
inc.onclick = function(){
    count1 ++;
    count.textContent = count1;
}