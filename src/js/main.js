let btn = document.querySelector('button');
let img = document.querySelector('input[name=foto]');

console.log(btn, img)

btn.addEventListener('click', ()=>{
let arrI = img.files;


if(arrI[0]){
    
    let file = new FileReader();

    file.onload = (e)=>{
        let rsp = e.target.result;
        console.log('aa: ',rsp);

        let img=document.createElement('img')
        img.src = rsp;
        console.log('llllll: \n\n',img);
        img.style.width='100px';

        document.querySelector('.body').appendChild(img);
    }

    file.readAsDataURL(arrI[0]);
}





 

});
