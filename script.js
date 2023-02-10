const add=document.querySelector('.btn1')
const sub=document.querySelector('.btn2')
const text=document.getElementById('count')
let c=0;
let update= function () {
    c++;
    text.innerHTML=c.toString();
}
let update2= function () {
    if(c==0)
    {
        alert("Already Zero");
    }
    else {
        c--;
        text.innerHTML = c.toString();
    }
}

sub.addEventListener('click', update2)
add.addEventListener('click',update)
