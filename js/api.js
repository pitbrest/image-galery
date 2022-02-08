const url = 'https://api.unsplash.com/search/photos?query=осень&client_id=t6jI0SUjDZOoil0m3Lp3woSwPds8XvNJcun7qmxySN8';

async function getData() {
	const res = await fetch(url);
	const data = await res.json();	
	console.log(data);	
	let array = data.results.map(result => result.urls.regular)
	for(let item of array) {
		showData(item)
	}
	
}
getData()

// Генерация элементов

function showData(item) {

	const galleryContainer = document.querySelector('.main');
	const img = document.createElement('img');

	img.classList.add('gallery-img')
	img.src = item;
	img.alt = `image`;
	galleryContainer.append(img);
}






/* 
const img = `<img class="gallery-img" src="полученный от API адрес изображения" alt="image">`;
galleryContainer.insertAdjacentHTML('beforeend', img); 
*/