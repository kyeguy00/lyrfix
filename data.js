export function showData(data){
    result.innerHTML = `
     <ul class = 'song-list'
     ${data.response.hits.map((e) => `<li>
                             <div class = "song">
                             <img class = "songImage" src="${e.result.header_image_url}">
                             <h1 class="songTitle">
                             ${e.result.full_title}
                             </h1> 
                             <span class = "releaseDate"> Release Date: ${e.result.release_date_for_display} </span>
                             <span class = "getLyrics"> <a href="${e.result.url}" target="_blank">Get Lyrics</a></span>
                             
                             </div>
                             </li>
     `).join('')
}
</ul>`

}