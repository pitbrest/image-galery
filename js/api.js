// Запрос на API, где data - это данные от сервера (они доступны только внутри запроса т.е. функции getData, 
// поэтому чтобы использовать полученные запросом данные для создания элементов, функция создания элементов 
// должна либо полностью находиться внутри запроса либо вызываться внутри запроса, тут реализован второй вариант)

let url = 'https://api.unsplash.com/search/photos?query=осень&per_page=12&client_id=t6jI0SUjDZOoil0m3Lp3woSwPds8XvNJcun7qmxySN8';

async function getData() {
	let res = await fetch(url);
	let data = await res.json();
	console.log(data);

	let array = data.results.map(result => result.urls.regular)   // через map оставляем от приходящего
	for (let item of array) {												  // от сервера объекта данных массив объектов   
		showData(item)															  // с адресами изображений с размером regular
		// и для каждого элемента массива вызываем функцию
	}																				  // создания изображения

}
getData()

// Генерация элементов (создание изображения где item - это url изображения, который мы получаем в запросе выше)

function showData(item) {

	const galleryContainer = document.querySelector('.main');
	const img = document.createElement('img');

	img.classList.add('gallery-img')
	img.src = item;
	img.alt = `image`;
	galleryContainer.append(img);
}





