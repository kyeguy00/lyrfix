import { searchSong } from "./search"

const form = document.getElementById('form')
const search = document.getElementById('search')
const lyrics = document.getElementById('lyrics')
const result = document.getElementById('result')
const resultsHeader = document.getElementById('resultsHeader')




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



