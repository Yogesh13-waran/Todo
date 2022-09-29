//let globalResponse=0

(function () {
 var globalResponse=[]

  const container=document.querySelector(".todos")

fetch("https://jsonplaceholder.typicode.com/todos").then((Response)=>{
  Response.json().then((jsonData)=>{
    //document.querySelector(".todos").innerHTML=JSON.stringify(jsonData)
    globalResponse.push(jsonData)
    for(let todo of jsonData){
     createTodo(todo);
    }
  })
})
})();

const comb=document.querySelector("#c-btn")
const icomb=document.querySelector("#ic-btn")
const sl=document.querySelector("#sa-btn")
comb.addEventListener("click",function (event){
var icomb=document.querySelectorAll(".todos .incompleted")
var comb=document.querySelectorAll(".todos .completed")
comb.forEach((e,i)=>{
e.classList.remove("hid")
})
icomb.forEach((e,i)=>{
e.classList.add("hid")
})

})
icomb.addEventListener("click",function (event){
  var icomb=document.querySelectorAll(".todos .incompleted")
var comb=document.querySelectorAll(".todos .completed")
comb.forEach((e,i)=>{
  e.classList.add("hid")
  })
  icomb.forEach((e,i)=>{
  e.classList.remove("hid")
  })
})
var globalResponse=[]
sl.addEventListener("click",function (event){

  /*const container=document.querySelector(".todos")
  container.innerHTML=""
  globalResponse.push(jsonData)
    for(let todo of globalResponse){
     createTodo(todo);
    }*/
    (function () {
      var globalResponse=[]
     
       const container=document.querySelector(".todos")
container.innerHTML=""
     
     fetch("https://jsonplaceholder.typicode.com/todos").then((Response)=>{
       Response.json().then((jsonData)=>{
         //document.querySelector(".todos").innerHTML=JSON.stringify(jsonData)
         globalResponse.push(jsonData)
         for(let todo of jsonData){
          createTodo(todo);
         }
       })
     })
     })();
})
  
function createTodo(todo){
  const container=document.querySelector(".todos")
  var current=document.createElement("p")
  current.setAttribute("userid",todo["userId"])
  current.setAttribute("id",todo["id"])
  current.setAttribute("completed",todo["completed"])
current.innerHTML=todo["title"]
const isCom=todo["completed"] ? "completed" : "incompleted"
current.classList.add(isCom)
container.appendChild(current)
}