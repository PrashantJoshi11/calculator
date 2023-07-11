let data=" ";
var result;
var lngth= document.querySelectorAll("button").length;

console.log(lngth);

for(i=0; i<lngth; i++)
{
    let btn=document.querySelectorAll("button")[i];
    btn.addEventListener("click",function(){
       var btntext= this.innerHTML;
      keypressed(btntext);

    });
}
document.addEventListener("keypress",function(event){
      console.log(event.key);
      keypressed(event.key);
     
  })



function keypressed(btntext)
{

  if(btntext== "AC" || btntext== "Delete" )
  {
       document.getElementById("inputBox").style.outline="none";
       data=" ";
       document.getElementById("inputBox").value=data;
  }
  else if(btntext== "="){
 
       document.getElementById("inputBox").style.outline="4px solid green";
       result=eval(data);
       
       if(result==undefined)
       {
         result=0;
       }
      
         document.getElementById("inputBox").value=result;
       data=" ";
       data=data+result;
  }
  else if(btntext== "DEL" || btntext==="Backspace" ){
          document.getElementById("inputBox").style.outline="none";
          let stringlen=data.length;
          data=data.slice(0,stringlen-1);
          document.getElementById("inputBox").value=data;
  }
  else{
       if(result==0 ){
         data=" ";
         result++; 
       }
     
       document.getElementById("inputBox").style.outline="none";
       data = data + btntext;
       document.getElementById("inputBox").value=data;
  }

}
