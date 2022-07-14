import { searchSong } from "./input.js"

const form = document.getElementById('form')
const search = document.getElementById('search')




form.addEventListener('submit', e => {
    e.preventDefault();
    const searchValue = search.value.trim();

    if(!searchValue) {
        alert('Input empty')
    }
    else (
        searchSong(searchValue)
        
        
    )
    localStorage.setItem('Artist/Song Searched', searchValue)
})



