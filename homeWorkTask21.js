(function(global) {
	
	function Message(arg) {
		this.str = arg;
	}

	Message.prototype.render = function() {
		var cross = document.createElement('div');
		cross.innerHTML = '&times;';
		cross.setAttribute('style','float: right; margin: 0; width: 24px; color: white; background-color: rgb(255, 56, 35); text-align: center; font-family: Arial, Helvetica, sans-serif; font-size: 24px; line-height: 24px; cursor: default;');
		var rectangle = document.createElement('div');
		rectangle.setAttribute('style','position: fixed; top: 0; right: 0; z-index: 1000; background-color: rgb(255, 56, 35); border: 2px solid rgb(230, 22, 16); width: 100%; height: 100px;')
		rectangle.appendChild(cross);
		document.body.appendChild(rectangle);
		var message = document.createElement('p');
		message.textContent = this.str;
		rectangle.appendChild(message);
		message.setAttribute('style','width: 100%; text-align: center; font-family: Arial, Helvetica, sans-serif; color: white; font-size: 26px; height: 96px; line-height: 96px; word-break: break-all;');
		cross.addEventListener('mouseover', crossColorLightgray);
		cross.addEventListener('mouseout', crossColorWhite);
		cross.addEventListener('click', destroy);

		function crossColorLightgray() {
			cross.style.color = 'lightgray';
		}

		function crossColorWhite() {
			cross.style.color = 'white';	
		}

		function destroy() {
			document.body.removeChild(rectangle);
		} 
	}

	Message.prototype.destroy = function() {
		var mess = document.body.lastChild;
		document.body.removeChild(mess);
	}

	Message.prototype.newMessage = function(newStr) {
		this.str = newStr;
		this.destroy();
		this.render();
	}

global.Message = Message;
	
})(this)
