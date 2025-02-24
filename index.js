// const hero=document.querySelector('.hero')

// for(let i=1;i<=100;i++){
//   let heading=document.createElement("div")
//   heading.innerText=`Heading ${i}`
//   heading.style.color=`red`
//   hero.appendChild(heading)
// }
let c=0;
const add =(function(){
  if(c===0){
    c+=1
  }
  return function(){
    c+=1
    console.log(c)
  }
})
add()
add()
add()