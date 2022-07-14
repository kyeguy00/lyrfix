import { showData } from ".//data"

const apiURL = 'https://genius.p.rapidapi.com'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1fa6db7fe2msh415c32b0b771597p1c71fejsnc06f3b3776ef',
		'X-RapidAPI-Host': 'genius.p.rapidapi.com'
	}
};

export async function searchSong(searchValue) {
	const searchResult = await fetch(`${apiURL}/search?q=${searchValue}`, options)
    const data = await searchResult.json();
    console.log(data.response)
    showData(data)

}





