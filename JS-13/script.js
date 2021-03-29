//Напиши код, в котором ты спрашиваешь где живет пользователь, и потом выводишь это, В окне, в html и в консоле. \

const result = prompt('В каком городе вы проживаете?');

document.getElementById("name").innerHTML = result;
console.log(result);

//animation

$('.Button').on('click', function() {
    $('.Button').hide();
    $('.name').hide();

});
