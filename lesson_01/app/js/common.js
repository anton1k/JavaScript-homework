// ДЗ 2:
// Создать приложение для ВКонтакте, которое загружает список ваших друзей и выводит их на страницу в следующем формате: Фото, ФИО, Возраст, Дата рождения.
// Друзья должны быть отсортированы по дате рождения в порядке убывания. То есть на самом верху списка расположен друг с ближайший датой рождения.
// Использование шаблонизатора приветствуется.

new Promise(function (resolve) {
	if (document.readyState ==='complete') {
		resolve();
	} else {
		window.onload = resolve;
	}
}).then(function () {
	return new Promise(function(resolve, reject) {
		VK.init({ 
			apiId: 6628603
		});
		VK.Auth.login(function(response) { 
			if (response.session) {    
					resolve(response);
				} else {   
					reject(new Error('Не удалось авторизоваться')); 
				} 
			}, 2);
	});
}).then(function() {
	return new Promise(function(resolve, reject){
		VK.api('users.get', {'name_case': 'gen', v:"5.80"}, function(response) {  
			
			if (response.error) {     
				reject(new Error(response.error.error_msg))  
			} else {  
				let res = response.response[0]; 
				h1.textContent = 'Друзья ' + res.first_name + ' ' + res.last_name;
				resolve(response); 
				} 
		});

	})
}).then(function() {
	return new Promise(function(resolve, reject){
		VK.api('friends.get', {'fields' : 'photo_50, bdate', v:"5.80"}, function(response) { 
			let arr =  response.response.items;
			if (response.error) {     
				reject(new Error(response.error.error_msg))  
			} else {  
				for (let key of arr) {
					let str = String(key.bdate);
					let arrData = str.split('.');
					
					let birthday = new Date(arrData[2], arrData[1], arrData[0]);
					let today = new Date();
					let ages = today.getFullYear() - birthday.getFullYear();

					birthday.setFullYear(today.getFullYear());
					if (today < birthday){
						ages--;
					}
					
					if (str != "undefined" && str.length > 5) {
						let decline = declOfNum(ages, ['год', 'года', 'лет']);
						key.age = ages + ' ' + decline;
					}	
					
				}
				
				listSorter(arr);
				
				let source = friendsTpl.innerHTML;
				let template = Handlebars.compile(source);
				let html = template({items: response.response.items});

				container.innerHTML = html;

				} 
		});

	});
})

.catch(function(e) {
	alert(`Ошибка ${e.message}`);
});

function listSorter(arr) {
    arr.sort(function(a,b){
        let newA;
		let newB;
		
        try {
            newA = getBday(a.bdate);
            newB = getBday(b.bdate);
        }
        catch(e) {
			r = 1;
			console.error(e.message);
			
        } finally {
			let c = newA;
			let d = newB;
			let r = c-d;
			if(!c && !d) {
				r = 1;
			}
			return r;
		}   
    }); 
}

function getBday(date) {
    let newDate = date.split('.')
    let now = new Date();
    let start = new Date(now.getFullYear(), (newDate[1] - 1), newDate[0]);
    let diff = start - now;
    let oneDay = 1000 * 60 * 60 * 24;
	let day = Math.floor(diff / oneDay);

    if (day < 0) {
        day += 365;
	}

    return day;
}
function declOfNum(number, titles) {  
    let cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}





