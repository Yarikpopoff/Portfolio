const MAX_INPUT_SYMBOL_COUNT = 40;

$('[data-toggle="tooltip"]').tooltip();

function sidebarHeightSet() {

	if ($(document).width() > 767) {
  	var heightMain = document.querySelector('.main').offsetHeight;
  	document.querySelector('.sidebar').style.height = heightMain + 'px';
	} else {
		document.querySelector('.sidebar').style.height = 'auto';
	} 

}

window.onresize = sidebarHeightSet;
window.onload = sidebarHeightSet;

$('.modal-window').on('click', function (e) {
	e.preventDefault();
});

$('#e3 button').on('click', function (e) {
	// debugger;
	var newMessage = $('#e3 input').val();
	newMessage = newMessage.slice(0,40);
	var bar = new Message(newMessage);
	bar.render();	
});

function symbolProcess(e) {
	var counter = $('.symbol-count');
	var inputGroup = $('#e3 .input-group');
	var inputCount = +$(this).val().length;
	var inputSymbolCount = MAX_INPUT_SYMBOL_COUNT - inputCount;
	counter.text(inputSymbolCount);
	if (inputSymbolCount < 0) {
		inputGroup.addClass('has-error');
	} else {
		inputGroup.removeClass('has-error');
	};
};

$('#e3 input').on('change', symbolProcess).on('input', symbolProcess);

// debugger;

var mySource = [
	{ id: 1, name: 'at first blush'}, 
	{ id: 2, name: 'back up'}, 
	{ id: 3, name: 'Calm down'},
	{ id: 4, name: 'dead beat'},	
	{ id: 5, name: 'Easy!'},
	{ id: 6, name: 'fancy'},
	{ id: 7, name: 'go-go'},
	{ id: 8, name: 'hello world!'},
	{ id: 9, name: "I'm easy!"},
	{ id: 10, name: 'jazz up'},
	{ id: 11, name: 'kid'},
	{ id: 12, name: 'long hair man'},
	{ id: 13, name: 'move your ass'},
	{ id: 14, name: 'nut house'},
	{ id: 15, name: 'out in the left field'},
	{ id: 16, name: 'pickup'},
	{ id: 17, name: "Queen - Don't Stop Me Now"},
	{ id: 18, name: 'rape session'},
	{ id: 19, name: 'sow off'},
	{ id: 20, name: 'there you go!'},
	{ id: 21, name: 'uptight'},
	{ id: 22, name: 'Victory Day'},
	{ id: 23, name: "what's up?"},
	{ id: 24, name: 'carry away'},
	{ id: 25, name: 'X-ray photograph'},
	{ id: 26, name: 'you bet!'},
	{ id: 27, name: 'zero cool!'},
	{ id: 27, name: '0123456789йцукенгшщзхъфывапролджэячсмитьбю'}
];

$('#e3 input').typeahead({
	 source: mySource
});

$('.toggle').on('click', function (e) {
	debugger;
	$('.sidebar').toggleClass('toggled');
	$('.main').toggleClass('toggled');
})