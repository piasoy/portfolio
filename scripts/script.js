let skillArr = document.getElementsByClassName("skill");
let learnArr = document.getElementsByClassName("learn");


$(window).scroll(function(){
    console.log('passed div')
    console.log(skillArr)
    console.log(skillArr[0].className)
   if(skillArr[0].className === 'skill none'){
        mySkills()
   }
  });

function mySkills() {
            skills.scrollIntoView();
            for(let i=0; i<skillArr.length; i++){
                skillArr[i].classList.remove("none");  
                skillArr[i].classList.add("roll-in-left")
            }
            for(let i=0; i<learnArr.length; i++){
                learnArr[i].classList.remove("none");
                learnArr[i].classList.add("roll-in-right");
            }
        
       }