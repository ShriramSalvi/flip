let log1=document.querySelector("#login")
let log2=document.querySelector(".l1")
let log3=document.querySelector(".l2")
let log4=document.querySelector(".fa-chevron-down")

let log5=document.querySelector(".fa-user")
log1.addEventListener("mouseover",()=>{
    log1.style. background=" blue";
    log2.style. background=" blue"; 
    log3.style.color=" white";
    log4.style.color=" white";
    log5.style.color=" white";
    gsap.to(".fa-chevron-down",{
        rotate:180,
        duration:0.3,
        repeat:0,
        
        
    })
    
})


log1.addEventListener("mouseout",()=>{
    log1.style. background=" white";
    log2.style. background=" white";
    log3.style.color=" black";
    log5.style.color=" black";
    
    gsap.to(".fa-chevron-down",{
        rotate:0,
        duration:0.3,
        background:

        
    })
    

    
})


