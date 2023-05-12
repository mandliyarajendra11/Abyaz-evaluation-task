const job = document.getElementById("job");
const jobType=document.getElementById('jobType').getElementsByTagName('button');
const jobArr = [
  {
    id: 1,
    header: "Senior Full Stack Developer",
    cat: "Web Developer",
    total: 0,
    location: "delhi",
    salary: "20lpa-50lpa",
    url:"web.html"
},
  {
    id: 2,
    header: "backend intern",
    cat: "Web Developer",
    total: 0,
    location: "remote",
    salary: "unpaid",
    url:"web.html"
  },
  {
    id: 3,
    header: "frontend intern",
    cat: "Web Developer",
    total: 0,
    location: "remote",
    salary: "unpaid",
    url:"web.html"
  },
  {
    id: 4,
    header: "react js developer",
    cat: "Web Developer",
    total: 0,
    location: "indore",
    salary: "3lpa-10lpa",
    url:"web.html"

  },
  {
    id: 5,
    header: "Technology Analyst ",
    cat: "Data Analyst",
    total: 0,
    location: "bhopal",
    salary: "5lpa-10lpa",
    url:"data.html"
  },
  {
    id: 6,
    header: "QA Engineer",
    cat: "Data Analyst",
    total: 0,
    location: "delhi",
    salary: "3lpa-10lpa",
    url:"data.html"
  },
  {
    id: 7,
    header: "Sales Specialist",
    cat: "Data Analyst",
    total: 0,
    location: "bangalore",
    salary: "12lpa-30lpa",
    url:"data.html"
  },
  {
    id: 8,
    header: "Technical Writer",
    cat: "Content Writer",
    total: 0,
    location: "delhi",
    salary: "3lpa-5lpa",
    url:"content.html"
  },
  {
    id: 9,
    header: "Technical Writer intern",
    cat: "Content Writer",
    total: 0,
    location: "remote",
    salary: "unpaid",
    url:"content.html"

  },
  {
    id: 10,
    header: "Freelance Writer",
    cat: "Content Writer",
    total: 0,
    location: "remote",
    salary: "no bound",
    url:"content.html"

  },
  {
    id: 11,
    header: "Junior Editor Intern",
    cat: "Content Writer",
    total: 0,
    location: "remote",
    salary: "unpaid",
    url:"content.html"

  },
  {
    id: 12,
    header: "SAP Sales and Distribution (SD) Application Developer",
    cat: "App Developer",
    total: 0,
    location: "pune",
    salary: "13lpa-20lpa",
    url:"app.html"
  },
  {
    id: 13,
    header: "android developer",
    cat: "App Developer",
    total: 0,
    location: "goa",
    salary: "3lpa-10lpa",
    url:"app.html"
  },
  {
    id: 14,
    header: "senior mobile application developer",
    cat: "App Developer",
    total: 0,
    location: "bangalore",
    salary: "10lpa-70lpa",
    url:"app.html"
  },
  {
    id: 15,
    header: "ios developer",
    cat: "App Developer",
    total: 0,
    location: "bangalore",
    salary: "3lpa-10lpa",
    url:"app.html"
  },
];
const total=document.getElementById('totalJob');
const ALL=jobType[0];
const Web =jobType[1];
const content = jobType[2];
const data = jobType[3];
const app=jobType[4];


function jobs(arr) {
    job.innerHTML=arr.map((ele)=>{
        
        return (`<div class="card" >
        <div class="card-header">
         Location- ${ele.location} / Salary- ${ele.salary}
        </div>
        <div class="card-body">
          <h5 class="card-title">${ele.header}</h5>
          <a  id="ap" href="${ele.url}?val=${ele.header}"  class="btn btn-primary m-3">read more</a>
        </div>
      </div>`
        )
    })
}


ALL.addEventListener('click',()=>
{
   total.innerText=`total job - ${jobArr.length}`
   
   jobs(jobArr);
   ALL.style.backgroundColor="black"
   ALL.style.color="white"
   Web.style.backgroundColor="#F0F0F0"
   Web.style.color="black"
   content.style.backgroundColor="#F0F0F0"
   content.style.color="black" 
   data.style.color="black" 
   data.style.backgroundColor="#F0F0F0"
   app.style.backgroundColor="#F0F0F0"
   app.style.color="black"
})
window.addEventListener('load',()=>{
   total.innerText=`total job - ${jobArr.length}`
   jobs(jobArr);
   
})
Web.addEventListener('click',()=>{
    let arr=jobArr.filter((ele)=>{
     return ele.cat==='Web Developer'   
    })
        
    jobs(arr);

    Web.style.backgroundColor="black"
    Web.style.color="white"
    ALL.style.backgroundColor="#F0F0F0"
    ALL.style.color="black"
    content.style.backgroundColor="#F0F0F0"
   content.style.color="black" 
    data.style.color="black" 
    data.style.backgroundColor="#F0F0F0"
    app.style.backgroundColor="#F0F0F0"
    app.style.color="black"
   total.innerText=`total job - ${arr.length}`
})
data.addEventListener('click',()=>{
    let arr=jobArr.filter((ele)=>{
     return ele.cat==='Data Analyst'   
    })
    jobs(arr);
   total.innerText=`total job - ${arr.length}`

   data.style.backgroundColor="black"
   data.style.color="white"
   Web.style.backgroundColor="#F0F0F0"
   Web.style.color="black"
   content.style.backgroundColor="#F0F0F0"
   content.style.color="black" 
   ALL.style.backgroundColor="#F0F0F0"
   ALL.style.color="black" 
    app.style.backgroundColor="#F0F0F0"
   app.style.color="black"
})
content.addEventListener('click',()=>{
    let arr=jobArr.filter((ele)=>{
     return ele.cat==='Content Writer'   
    }) 
       jobs(arr);

       content.style.backgroundColor="black"
       content.style.color="white"
       Web.style.backgroundColor="#F0F0F0"
       Web.style.color="black"
       ALL.style.backgroundColor="#F0F0F0"
       ALL.style.color="black" 
       data.style.color="black" 
       data.style.backgroundColor="#F0F0F0"
       app.style.backgroundColor="#F0F0F0"
       app.style.color="black"
   total.innerText=`total job - ${arr.length}`

})
app.addEventListener('click',()=>{
    let arr=jobArr.filter((ele)=>{
     return ele.cat==='App Developer'   
    })

    app.style.backgroundColor="black"
    app.style.color="white"
    Web.style.backgroundColor="#F0F0F0"
    Web.style.color="black"
    content.style.backgroundColor="#F0F0F0"
    content.style.color="black" 
    data.style.color="black" 
    data.style.backgroundColor="#F0F0F0"
    ALL.style.backgroundColor="#F0F0F0"
    ALL.style.color="black"
    jobs(arr);
   total.innerText=`total job - ${arr.length}`

})