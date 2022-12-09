//делаем карту кликабельной
let map = document.querySelector(".map");
map.addEventListener("click", function () {
	location.href = 'https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=77696736326'
}, false);

//popup
function openForm() {
	if (document.getElementById("myForm").style.display === "block") {
		document.getElementById("myForm").style.display = "none";
	} else {
		document.getElementById("myForm").style.display = "block";
	}
}

function closeForm() {
	document.getElementById("myForm").style.display = "none";
}

//отправка в телеграмм
const TOKEN = "5715123432:AAEyn06b0VEdS-IbhIRvEJV7yT9NY2gFZ2E";
const CHAT_ID = "-1001625196922";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const TGFORM = document.querySelector("#tg");
const success = document.getElementById("success");
TGFORM.addEventListener("submit", function (e) {
	e.preventDefault();

	let message = `<b>Bari у вас новый заказ!</b>\n`
	message += `<b>Отправитель:</b>${this.name.value}\n`;
	message += `<b>Телефон:</b>${this.phone.value}\n`;

	axios.post(URI_API, {
		chat_id: CHAT_ID,
		parse_mode: "html",
		text: message,
	})
		.then((res) => {
			this.name.value = "";
			this.phone.value = "";
			success.innerHTML = "<h4>Заявка отправлена!</h4>";
			success.style.display = "block";
		})
		.catch((err) => {
			console.warn(err)
		})
		.finally(() => {
			console.log("конец");
		})
})
