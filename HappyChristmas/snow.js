function makeSnow() {
    let snow=document.createElement('div');
    let size=Math.random() *4.5+3.5;
    snow.className='snow';
    snow.style.width=size+'px';
    snow.style.height = size + "px";
    document.body.appendChild(snow);
    snow.style.opacity=size/8;
    snow.style.left = Math.random()*window.innerWidth+'px';
    snow.style.animationDuration=Math.random()*3+3+'s'

}
setInterval(makeSnow,40);