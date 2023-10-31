//要素の取得を行う
let label = document.getElementById("text-result");
let button1 = document.getElementById("change-text1");
let button2 = document.getElementById("change-text2");
let button3 = document.getElementById("change-text3");

let count =0;

button1.addEventListener('click', () => {
    count = 0;
    label.innerHTML = "値:" + count;
});


button2.addEventListener('click', () => {
    count += 1;
    label.innerHTML = "値:" + count;
});


button3.addEventListener('click', () => {
    count -= 1;
    label.innerHTML ="値:" +  count;
});