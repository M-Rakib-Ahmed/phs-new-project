// 1 Fetch, Load and Show Categories on html

// create loadCategores

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

// show videos display
const displayVideso = (video) =>{
    const videoContainer = document.getElementById('videos')
    console.log(video);
    video.forEach(video =>{
        console.log(video);
        const card = document.createElement('div')
        card.classList ='card card-compact'
        card.innerHTML = `
        <figure class ="h-[200px] relative">
    <img class ="h-full w-full object-cover"
      src=${video.thumbnail} />
      <span class="absolute right-2 bottom-2 bg-black text-white p-2 rounded-md text-xs">${video.others.posted_date}
      </span>
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

    const button = document.createElement('button')
    button.classList = 'btn'
    button.innerText = item.category
    // add button to catagores
    categoresContainer.append(button)
    
  });  
    
}





loadCategores()
loadVideos()