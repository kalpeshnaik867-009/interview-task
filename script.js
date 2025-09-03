function employes(){
    console.log("vsv")
    let info=document.querySelector(".employes-info")
    
    if(info.classList.contains("employes-cancle")==false){
      info.classList.add("employes-cancle")
   }
   else{
      info.classList.remove("employes-cancle")
   }
   


}
function department(){
    
    let info=document.querySelector(".department-info")
    
    if(info.classList.contains("department-cancle")==false){
      info.classList.add("department-cancle")
   }
   else{
      info.classList.remove("department-cancle")
   }
   


}
function saveInfo(){
    
}
