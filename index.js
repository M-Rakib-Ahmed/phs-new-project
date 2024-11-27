// 1 Fetch, Load and Show Categories on html

// create loadCategores
// time function state here
function getTimeString(time){
  const hour = parseInt(time / 3600)
  let remaingSecond = time % 3600
  let munute = parseInt(remaingSecond / 60)
  remaingSecond = remaingSecond % 60;
  return `${hour} hour ago ${munute} munute ${remaingSecond}second ago`
}
// time function state here


const removeActiveClas =() =>{
const buttons = document.getElementsByClassName("category-btn")
console.log(buttons);
for(let btn of buttons){
  btn.classList.remove('active')
}

}
const loadCategores =() =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => displayCategors(data.categories))
    .catch(erro => console.log(erro))
}
const loadVideos =() =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideso(data.videos)
    )
    .catch(erro => console.log(erro))
}

// button Container Id start
const loadCategoresVideos =(id) =>{
 
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
  .then(res => res.json())
  .then(data => {
    // sobaike active class remove koro
    removeActiveClas()
    // id er class k add koro
    const activeBtn = document.getElementById(`btn-${id}`)
    activeBtn.classList.add("active")
    console.log(activeBtn);
    
    displayVideso(data.category)
  })
  .catch(err => console.log(err))
  // fetch

  
}
const  ShowDetails = (videoId) =>{
console.log(videoId);
fetch('https://openapi.programming-hero.com/api/phero-tube/video/aaac')
.then(res => res.json())
.then(data => showDetailsDisplay(data.video))
.catch(err => console.log(err))


}


const showDetailsDisplay = (video) =>{
  console.log(video);
  const modalContainer = document.getElementById('modal-content')
  
  document.getElementById('showModal').click();
  
  modalContainer.innerHTML = `
  <img src ="${video.thumbnail}"/>
  <p>${video.description}</p>
  
  
  `

  
}



// button Container Id start

// show videos display
const displayVideso = (video) =>{
    const videoContainer = document.getElementById('videos')
    videoContainer.innerHTML = ""
    if(video.length == 0){
      videoContainer.classList.remove('grid')
      videoContainer.innerHTML = `
      <div class = "flex flex-col justify-center items-center gap-y-5">
      <span><img src ="images/Icon.png"/></span>
      <h2 class="text-4xl">Opns!! Sory, There is no content hete</h2>
      </div>
      
      `
    }
    else{
      videoContainer.classList.add('grid')
    }
    console.log(video);
    video.forEach(video =>{
        console.log(video);
        const card = document.createElement('div')
        card.classList ='card card-compact'
        card.innerHTML = `
        <figure class ="h-[200px] relative">
    <img class ="h-full w-full object-cover"
      src=${video.thumbnail} />
      ${video.others.posted_date? ` <span class="absolute right-2 bottom-2 bg-black text-white p-2 rounded-md text-xs">${getTimeString(video.others.posted_date)}
      </span>`:""}
     
  </figure>
  <div class="px-0 p-1 flex gap-2">
    <div>
     <img class ="size-10 rounded-full object-cover" src ="${video.authors[0].profile_picture}"/>
    </div>
    <div>
    <h2>${video.title}</h2>
   <div class="flex items-center gap-3">
    <p class ="text-xs">${video.authors[0].profile_name}
    </p>
   ${video.authors[0].verified? ' <img class="size-4" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>':""}
   </div>
    <p class="text-xs">${video.others.views} views</p>
    </div>
  </div>
  <div>
  <button onclick="ShowDetails('${video.video_id}')" class="btn btn-error btn-sm">ShowDetails</button>
  
  </div>
        
        
        `;
        videoContainer.append(card)
        
    } )
    
}



// reate displayCategors

const displayCategors = (categoris) =>{
    const categoresContainer = document.getElementById('categories')
  categoris.forEach(item => {
    console.log(item);
    // create a button

    const buttonContainer = document.createElement('div')
    buttonContainer.innerHTML = `
    <button id="btn-${item.category_id}" onclick="loadCategoresVideos(${item.category_id})" class="btn category-btn">
    ${item.category}
    </button>
    
    `
    // add button to catagores
    categoresContainer.append(buttonContainer)
    
  });  
    
}





loadCategores()
loadVideos()