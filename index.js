// function button(){
//     console.log("save button clicked")
// }

let arry=[]
const tabarray= ["www.devesh.com"]
const inpt = document.getElementById("inp")
const ul = document.getElementById("ulli")
const inpuutbtn = document.getElementById("btn")
const deletebutton = document.getElementById("del")
// const tabc = document.getElementById("tab")
// tabc.addEventListener("click",function(){
// console.log(tabarray[0])
// })

let leadfromlocalstorage = JSON.parse(localStorage.getItem("MyLeads"))

if(leadfromlocalstorage){
    arry=leadfromlocalstorage
    storetext(arry)
}
function storetext(lead){
    let list =""
    for(let i=0; i<lead.length; i++){
        list+= `
        <li>
         <a target=_'blank' href='${lead[i]}'>${lead[i]}</a> 
         </li>
         `
         
    
    
}
ul.innerHTML=list 
}
deletebutton.addEventListener("click" , function(){
    localStorage.clear()
    arry=[]
    storetext(arry)
    console.log("btn clicked")
    })
    inpuutbtn.addEventListener("click" , function(){
        arry.push(inpt.value)
        
        inpt.value=""
        localStorage.setItem("MyLeads",JSON.stringify(arry))
        storetext(arry)
        console.log(arry)
      
    })
// we have used tempelate string in the given function to make the concatenation easy
// const recept ="devesh"
// const email = "hey"+" "+ recept +" "+ "how its going" 
// // now we can concanite by tempelate string
// const emaile = `hey ${recept} how its going
// `
// console.log(emaile)
// array as a parameter
// function arraynum(arr){
//     return arr[0]
// }
// console.log(arraynum([10,20,30,40]))