/* 
Через map оставляем от приходящего через map оставляем от приходящего
от сервера объекта данных массив объектов с адресами изображений с размером regular  
и для каждого элемента массива вызываем функцию создания изображения.
Все как в стартовом запросе при загрузке страницы но тут мы сразу не отправляем запрос на сервер 
и соответственно сразу не меняем изображения а запускаем этот процесс внутри функции search()
после eventa ENTER на странице
*/

let uRl
async function getData() {
	let res = await fetch(uRl);
	let data = await res.json();
	console.log(data);

	let array = data.results.map(result => result.urls.regular)
	for (let item of array) {
		console.log(item)
		showData(item)
	}
}

// Генерация элементов (создание изображения где item - это url изображения, который мы получаем в запросе выше)

function showData(item) {
	const galleryContainer = document.querySelector('.main');
	const img = document.createElement('img');

	img.classList.add('gallery-img')
	img.src = item;
	img.alt = `image`;
	galleryContainer.append(img);
}

/* Получаем значение поля ввода (поле input) чтобы использовать его в запросе на сервер по ключевым словам.
При наступлении события (нажатие enter) и если длина input.value.length больше 1 (чтобы исключить случайно нажатие 
с пробелом и вообще) очищаем наш контейнер от имеющихся изображений (galleryContainer.innerHTML = ''), изменяем значение переменной URl (в которой храниться адрес запроса на сервер) и вставляем в этот запрос в соответствующем месте 
содержимое поля ввода пользователя. После чего, там же внутри функции search() запускаем  getData(), которая отправит уже новый запрос на сервер и вернет новый массив по которму будут вставлены изображения на страницу.

*/

function search() {

	let input = document.getElementById('input')
	let images = document.querySelectorAll('.gallery-img')
	const galleryContainer = document.querySelector('.main');
	const searchButton = document.querySelector('.search-box i')

	searchButton.addEventListener('click', () => {
		if (input.value.length > 1) {
			galleryContainer.innerHTML = ''
			uRl = 'https://api.unsplash.com/search/photos?query=' + input.value + '&client_id=t6jI0SUjDZOoil0m3Lp3woSwPds8XvNJcun7qmxySN8';

			getData()
		}
	})

	window.addEventListener('keydown', function (event) {

		if (event.keyCode === 13 && input.value.length > 1) {
			galleryContainer.innerHTML = ''
			uRl = 'https://api.unsplash.com/search/photos?query=' + input.value + '&client_id=t6jI0SUjDZOoil0m3Lp3woSwPds8XvNJcun7qmxySN8';

			getData()
		}
	})
}
search()


// Опишем работу крестика из поля ввода, при клике по которому поле ввода будет очищаться

let clearSearch = document.getElementById('clearSearch')

clearSearch.addEventListener('click', () => {
	input.value = ''
})