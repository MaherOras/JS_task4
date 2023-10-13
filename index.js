
var btns= document.querySelectorAll("Button");
var sb="";
var sk="";

document.addEventListener('keyup', (event) => 
      {

      sk= event.key;
      screenV= document.querySelector("input").value
      if(isNaN(sk)&&(document.activeElement === document.querySelector("input")))
                {
                  screenV= document.querySelector("input").value;
                  screenV=screenV.slice(0,screenV.length-1);
                }
      document.querySelector("input").value=screenV
      })
      
       
    btns.forEach((item) =>
     {
    
       item.addEventListener("click",(target_Att)=>
            {
            
            screenV= document.querySelector("input").value  ;
            sb=target_Att.target.innerHTML ;
              switch(sb)
                {
                  case "del": screenV="";sb="";break;
                  case "="  : sb="";break;
                  case "C"  : screenV=screenV.slice(0,screenV.length-1);sb="";
                              break;
                  //default: 
                }
              screenV=screenV+sb;
              document.querySelector("input").value=screenV
              sb="";
              
              
           })
              
     })
  
