var d = new Date();
var container = $('._date');
var days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

container.text('Сегодня ' + d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear() + ' года, ' + days[d.getDay()]);