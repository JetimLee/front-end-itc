console.log("working");
//creating an HtmlElement object
function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}
//telling the htmmlelement's prototype that it now has this function
HtmlElement.prototype.focus = function () {
  console.log("focused");
};

//defining a new htmlselectelement object
function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item);
  };
  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), i);
  };
}
//sayting the htmlselectelement's prototype is a new instance of HtmlElement

HtmlSelectElement.prototype = new HtmlElement();

const e = new HtmlSelectElement();
console.log(e);
//accessing click which is on the htmlelement instance
e.click();
//accessing focus which is on the prototype of htmlelement
e.focus();
e.render();
