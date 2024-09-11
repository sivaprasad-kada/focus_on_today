const checkboxlist=document.querySelectorAll('.checkbox')
const input_field_list=document.querySelectorAll('.input-field') //this return the nodelist of the elements
const error=document.querySelector('.red-line')
const progressvalue=document.querySelector('.progressValue')
tagline=document.querySelector('.tagline')


const goal_list=JSON.parse(localStorage.getItem("goal_list"))||{
    first: {
        name: '',
        completed: false,
      },
      second: {
        name: '',
        completed: false,
      },
      third: {
        name: '',
        completed: false,
      },
}
let completedlistlength=Object.values(goal_list).filter((list)=>list.completed).length
progressvalue.style.width=`${(completedlistlength/3)*100}%`
const quotes=[
    'Raise The Bar By Completeing Goals',
    'Good Begin Is Of Done',
    'Keep It Up One Step Ahead ',
    'All Goals Completed Time To Chill'
]
tagline.innnerText=quotes[completedlistlength]


checkboxlist.forEach((checkbox)=>{
    checkbox.addEventListener('click',()=>{
        const helloworld=[...input_field_list].every((input)=>{
            return input.value
        }) //every method works on only on arrays that's why we converted the object into array by using spread operator
        if(helloworld){
            checkbox.parentElement.classList.toggle('completed')
          const inputid=checkbox.nextElementSibling.id
         goal_list[inputid].completed= !goal_list[inputid].completed  // best logic
         completedlistlength=Object.values(goal_list).filter((list)=>list.completed).length
         progressvalue.style.width=`${(completedlistlength/3)*100}%`
         progressvalue.firstElementChild.innerText=`${completedlistlength}/3 completed`
         localStorage.setItem('goal_list',JSON.stringify(goal_list))
         tagline.innnerText=quotes[completedlistlength]

        }
        else{
          error.style.display='block'
        }
        
    })
})
input_field_list.forEach((input)=>{ 
   
    input.value=goal_list[input.id].input_value
    if(goal_list[input.id].completed){
        input.parentElement.classList.add('completed')
        // this code is responsible for to add the completed tag to the parent element of input element
    }
    
    
    input.addEventListener('input',function(){
        error.style.display='none'
    }) 
    

    input.addEventListener('input',(e)=>{
        goal_list[input.id]={
            input_value:e.target.value,
            completed:false
        }
        localStorage.setItem('goal_list',JSON.stringify(goal_list))
    })
    



    })
