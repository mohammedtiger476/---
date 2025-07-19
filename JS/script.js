const close = document.querySelector(".close");
const  modal = document.querySelector(".modal");
const day = document.querySelector(".btn button");
const img = document.querySelector(".img");
const btn = document.querySelectorAll(".modal button");
const days = document.querySelectorAll("section");
const container = document.querySelector(".container");
const back = document.querySelectorAll(".back");

close.onclick = function()
{
    modal.style.opacity = 0;
    setTimeout(function(){
        modal.style.display = "none";
    },500)
}
day.onclick = function()
{
    modal.style.display = "flex";
    
    setTimeout(function(){
        modal.style.opacity = 1;
    },200)
    
}

btn.forEach(function(btn){
    btn.onclick = function()
    {
        container.style.display = "none";
        modal.style.display = "none";
        if(btn.classList.contains("day1")){
            days[0].style.display = "flex";
            
        }
        else if(btn.classList.contains("day2")){
            days[1].style.display = "flex";
             
        }
        else if(btn.classList.contains("day3")){
            days[2].style.display = "flex";
        }
        else if(btn.classList.contains("day4")){
            days[3].style.display = "flex";
        }
        else{
            days[4].style.display = "flex";
        }
    }
});

back.forEach(function(back){
    back.onclick = function()
{
    days.forEach(function(day){
        day.style.display = "none";
    });
    container.style.display = "flex";
}
})




