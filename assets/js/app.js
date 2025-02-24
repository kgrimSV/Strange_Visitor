// Include sticky menu
// ----------------------------------------------------------------------------
// var sticky = document.getElementsByClassName('js-sticky');
// if (sticky.length > 0) {
// 	var sticky_menu = new StickyMenu({ });
// 	sticky_menu.init();
// }




// Include drop downs
// ----------------------------------------------------------------------------
var dropdownsHover = document.getElementsByClassName('js-drop');
var dropdownsClick = document.getElementsByClassName('js-drop-click');

if (dropdownsHover.length > 0) {
	var menus = [];

	Array.prototype.forEach.call(dropdownsHover, function(el) {
		menus.push(new Dropdown({'hook': el.id, 'menu': el.dataset.menu}));	
	});

	Array.prototype.forEach.call(menus, function(m) {
		m.init();
	}); 
}

if (dropdownsClick.length > 0) {
	var menus = [];

	Array.prototype.forEach.call(dropdownsClick, function(el) {
		menus.push(new Dropdown({'hook': el.id, 'menu': el.dataset.menu, 'event': 'click'}));	
	});

	Array.prototype.forEach.call(menus, function(m) {
		m.init();
	}); 
}



// Include accordion
// ----------------------------------------------------------------------------
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].getElementsByTagName('h2')[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
} 


