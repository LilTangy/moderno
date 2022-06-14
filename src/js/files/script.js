// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

$(document).ready(function () {

	let mixer = mixitup('.products__box');
	$(".rate-star").rateYo({
		starWidth: "12px",
		readOnly: true,
		rating: 5,
	});
});