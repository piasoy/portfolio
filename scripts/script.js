let skillArr = document.getElementsByClassName("skill");
 let learnArr = document.getElementsByClassName("learn");
//  let begin = document.getElementById("scroll");
//   document.getElementById("enter").onscroll = function(){
//   begin.onclick = function() {
//         skills.scrollIntoView();
//         for(let i=0; i<skillArr.length; i++){
//             skillArr[i].classList.remove("none");  
//             skillArr[i].classList.add("roll-in-left")
//         }
//         for(let i=0; i<learnArr.length; i++){
//             learnArr[i].classList.remove("none");
//             learnArr[i].classList.add("roll-in-right");
//         }
    
//    }

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