/**
  * Dropdown
  *
  * @description
  *
  * @param  config         An object of configuration settings:
  *
  *
  * @return new instance of AppendText
  */





// Config defaults and init
// ----------------------------------------------------------------------------

var Dropdown = function (config) {
  this.hook = config.hook || 'js-drop';
  this.menu = config.menu;
  this.event = config.event || 'hover';
  this.pane = document.getElementById(this.menu);
  this.trigger = document.getElementById(this.hook); 
}


Dropdown.prototype.init = function() {
  this.modifyHooks(this.hook, this.addListener.bind(this, this.event));
}





// Shared methods
// ----------------------------------------------------------------------------

// grab element
Dropdown.prototype.modifyHooks = function(hook, func) {
  var elem = document.getElementById(hook); 
  func(elem);
}

Dropdown.prototype.addListener = function(event, elem) { 
  elem.addEventListener("click", function(e) { 
      this.toggleMenu(elem); 
      this.toggleTrigger(elem);
  }.bind(this), false);
  document.addEventListener('click', function(e) {
    if (!e.target.closest('#mobile-pane') && !e.target.closest('#toggle-mobile-pane') && this.pane.classList.contains('js-dropdown-visible')) {
      console.log('IN HERE');
      this.trigger.classList.replace('js-ddtrigger-open', 'js-ddtrigger-closed');
      this.pane.classList.replace('js-dropdown-visible', 'js-dropdown-hidden');
    }
  }.bind(this), false);
}

// toggle menu pane visibility
Dropdown.prototype.toggleMenu = function(elem) {
  if (this.pane.classList.contains('js-dropdown-hidden')) {
    this.pane.classList.replace('js-dropdown-hidden', 'js-dropdown-visible');
  } else if (this.pane.classList.contains('js-dropdown-visible')) {
    this.pane.classList.replace('js-dropdown-visible', 'js-dropdown-hidden');
  } 
  return false;
}

// toggle trigger classes
Dropdown.prototype.toggleTrigger = function(elem) {
  if (this.trigger.classList.contains('js-ddtrigger-closed')) {
    this.trigger.classList.replace('js-ddtrigger-closed', 'js-ddtrigger-open');
    document.body.addEventListener('touchmove', function(e){e.preventDefault()});
  } else if (this.trigger.classList.contains('js-ddtrigger-open')) {
    this.trigger.classList.replace('js-ddtrigger-open', 'js-ddtrigger-closed');
  } 
  return false;
}

