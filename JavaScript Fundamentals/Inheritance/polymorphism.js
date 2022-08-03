
function HtmlElement() { 
  this.click = function() { 
    console.log('clicked');
  }
}

HtmlElement.prototype.focus = function(){
  console.log('focued');
}

function HtmlSelectElement(items = []) { 
  this.items = items;
  
  this.addItem = function(item) { 
    this.items.push(item);
  }

  this.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  this.render = function() {
    return `
<select>${this.items.map(item => `
  <option>${item}</option>`).join('')}
</select>`;
  }  
}
HtmlSelectElement.prototype = new HtmlElement(); 
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) { 
  this.src = src; 
  
  this.render = function() {
    return `<img src="${this.src}" />`
  }
}
HtmlImageElement.prototype = new HtmlElement(); 
HtmlImageElement.prototype.constructor = HtmlImageElement;

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement('http://')
];

for (let element of elements) 
  console.log(element.render());