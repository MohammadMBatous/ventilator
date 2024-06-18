const btn_controller_speed = document.querySelectorAll('.btn-c-s');
const ventilaor = document.getElementById('ventilaor-value');
const btn_on = document.querySelector('.btn-on');
const btn_switch = document.querySelector('.btn-switch');
const swip_cn = document.querySelector('.swip-cn');
const btn_close = document.querySelector('.close');
const image_ventilaor = document.querySelectorAll('.image-ventilaor');
let onwork = false;
btn_controller_speed.forEach((btn)=> {
    btn.addEventListener('click',()=> {
        if(onwork){
            btn_controller_speed.forEach((button_cn)=>{button_cn.classList.remove('active')});
        // console.log(btn.innerText);
        switch(btn.innerText){
            case "1" : 
            ventilaor.style.animationDuration = 1 +"s";
            break;
            case "2" : 
            ventilaor.style.animationDuration = 900 +"ms";
            break;
            case "3" : 
            ventilaor.style.animationDuration = 800 +"ms";
            break;
            case "4" : 
            ventilaor.style.animationDuration = 700 +'ms';
            break;
            case "5" : 
            ventilaor.style.animationDuration = 500 +'ms';
            break;
            case "6" : 
            ventilaor.style.animationDuration = 300 +'ms';
            break;
        }
        btn.classList.add('active');
        }else {
            confirm('يرجى التشغيل حتى تعمل');
        }
    })
})
btn_on.addEventListener('click',()=>{
    onwork = !onwork;
    if(onwork){
        btn_controller_speed[0].classList.add('active');
        ventilaor.style.animationDuration = 1 +"s";
        
        btn_on.style.backgroundColor = 'rgb(202, 67, 67)';
        btn_on.innerHTML = ` <div class="icon"><img src="images/controller.png" alt="controller" srcset=""></div>
        إيقاف
        `;
        
    }else {
        btn_controller_speed.forEach((btnclick)=>{
            btnclick.classList.remove('active');
            ventilaor.style.animationDuration = 0 +"s";            
        })
        btn_on.style.backgroundColor = '#21E6C1';
        btn_on.innerHTML = ` <div class="icon"><img src="images/controller.png" alt="controller" srcset=""></div>
        تشغيل
        `;

    }
})

btn_switch.addEventListener('click',function openswip(){
swip_cn.classList.remove('hide');
})
btn_close.addEventListener('click',function(){
    swip_cn.classList.add('hide');
})
image_ventilaor.forEach((img,index)=> {
    img.addEventListener('click',()=>{
        
        ventilaor.src = `images/${index+1}.png`;
        swip_cn.classList.add('hide');
    })
})