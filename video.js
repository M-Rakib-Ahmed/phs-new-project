// create a daynamick button and show display

// time function start here
function getTimeString(time){
    const hour = parseInt(time / 3600)
    let remaingSecond = time % 3600
    let munute = parseInt(remaingSecond / 60)
    remaingSecond = remaingSecond % 60;
    return `${hour} hour ago ${munute} munute ${remaingSecond}second ago`
}
// time function start end
const removeActiveBtn = () =>{
   const buttons = document.getElementsByClassName('categoris-btn')
   for(let btn of buttons){
    btn.classList.remove('active')
   } 
}

function loadCategories(){
    // fetch api 
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data => loadVideos(data.categories))
    .catch(err => console.log(err))

    
}
function loadDisplay(){
    // fetch api 
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => showDiplay(data.videos))
    .catch(err => console.log(err))

    
}

//  button fetch here start
const loadCategoriesVideos = (id) =>{
    const activeBtn = document.getElementById(`btn-${id}`)

    // sobaike remove koro 
    removeActiveBtn()

    // id k active koro
    activeBtn.classList.add('active')
    console.log(activeBtn);
    
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => showDiplay(data.category))
    .catch(err => console.log(err))


}


const loadDetails = (vidoeId) =>{
    console.log(vidoeId);
    fetch('https://openapi.programming-hero.com/api/phero-tube/video/aaac')
    .then(res => res.json())
    .then(data => displayDetails(data.video))
    .catch(error => console.log(error))
     
 }


 const displayDetails = (video) =>{
    console.log(video);
    const detailContainer = document.getElementById('modal-contain')
    detailContainer.innerHTML = `
    <img src ="${video.thumbnail}"/>
    <p>${video.description}</p>
    
    `
    // way 1 
    // document.getElementById('showModealData').click();
    // way 2 
    document.getElementById('coustomModal').showModal()
 }
 
 
//  button fetch here start

function showDiplay(video){
    const videoContainer = document.getElementById('videos')
    videoContainer.innerHTML = ""
    if(video.length===0){
        videoContainer.classList.remove('grid')
   videoContainer.innerHTML = `
   <div class="flex flex-col justify-center items-center gap-y-10">
   <h2 class="text-2xl">OOPS!! SORRY, THERE IS NO CONTENT</h2>
   <img src="images/Icon.png"/>
   </div>
   
   `
   
   return
    }
    else{
        videoContainer.classList.add('grid')
    }
    console.log(video);
    video.forEach(item => {
    console.log(item);
    // create a card and show display
    const card = document.createElement('div')
    card.classList = 'card card-compact '
    card.innerHTML = `
    <figure class="h-[200px] relative">
    <img class="h-full w-full object-cover"
      src=${item.thumbnail} />
      ${item.others.posted_date? `<span class="absolute bg-black text-white p-1 rounded text-xs right-2 bottom-2">${getTimeString(item.others.posted_date)}</span>`: ""}
  </figure>
  <div class="px-0 py-4 ">
    <div class ="flex items-center gap-4">
    <img class="size-10 rounded-full" src="${item.authors[0].profile_picture}"/>
   <h2 class ="text-xl font-semibold">${item.title}</h2>
   
    </div>
    <div class="flex items-center gap-3">
    <p>
    ${item.authors[0].profile_name}
    </p>
    ${item.authors[0].verified? `<span>
     <img class ="size-5 " src ="${'https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png'}"/>
    </span>`:""}
    </div>
    
 
   
    <span>${item.others.views} views</span>
    <button onclick="loadDetails('${item.video_id}')" class ="btn btn-sm btn-error">Shoe Detelis</button>
   
</div>

    
    `;
    videoContainer.append(card)
    
        
    });
    
}


// show diplay function
function loadVideos(creates){
    const categoresContainer = document.getElementById('categores') 
    console.log(creates);
    creates.forEach(video => {
       console.log(video)
 // create a duaynamick button
   const buttonContainer = document.createElement('div')
   buttonContainer.innerHTML = `
   <button id="btn-${video.category_id}" onclick="loadCategoriesVideos(${video.category_id})" class="btn categoris-btn">
   ${video.category}
   </button>
   `
 
  categoresContainer.append(buttonContainer)

        
    });
    
    
}





loadCategories()
loadDisplay()