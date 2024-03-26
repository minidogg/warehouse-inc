
//index.js
//Its a break exception.
var BreakException = {};

var qquery = {
}
/**
 * QQuery config
 */
qquery.config = {}


//query.js
/**
 * Short hand query selector
 * @param {string} query - The query selector
 * @param {bool} multiple - Whether it should use querySelectorAll or not
 * @param {Element} el - The element to run the query selector on. Default value is the document
 */
function q(query,multiple=false,el=document){
    return multiple?el.querySelectorAll(query):el.querySelector(query);
};
/**
 * Short hand query selector from an element
 * @param {string} query - The query selector
 * @param {bool} multiple - Whether it should use querySelector or querySelectorAll. Default value is true.
 */
Element.prototype.q = function(query, multiple = false) {
    return q(query, multiple, this);
};


//rand.js
/**
 * Random object, contains a bunch of functions related to Math.random() Accessible by qquery.random
 */
qquery.random = {}
/**
 * Creates a random hex value string
 * @param {number} size - How many characters long the string should be. 
 */
qquery.random.hex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

/**
 * Returns a random integer based on the min and max params.
 * @param {number} min - Smallest number the result can be
 * @param {number} max - Biggest number the result can be
 */
qquery.random.int = (min,max)=>{return Math.floor(Math.random() * (max+1 - min) ) + min;}

/**
 * Returns a random float based on the min and max params.
 * @param {number} min - Smallest number the result can be
 * @param {number} max - Biggest number the result can be
 */
qquery.random.float = (min,max)=>{return Math.random() * (max - min)  + min;}

/**
 * Returns a random float/int based on the min and max params.
 * @param {number} min - Smallest number the result can be
 * @param {number} max - Biggest number the result can be
 */
qquery.rand = (min,max)=>{
    return Number.isInteger(min)&&Number.isInteger(max)?qquery.random.int(min,max):qquery.random.float(min,max)
}

//visibility.js
/**
 * Extends element prototype with a function to make an element hidden
 * @returns {Element} - Returns the element, allowing for chaining of other utils.
 * @param {ms} - The amount of time before it goes back to the previous state, if this value is 0 the state won't revert.
 */
Element.prototype.hide = function(ms=0) {
    let state = this.style.visibility
    this.style.visibility = "hidden";
    try{
        return this
    }finally{
        if(ms>0)setTimeout(()=>{this.style.visibility=state},ms)
    }
};

/**
 * Extends element prototype with a function to make an element visible
 * @returns {Element} - Returns the element, allowing for chaining of other utils.
 */
Element.prototype.show = function(ms=0) {
    let state = this.style.visibility
    this.style.visibility = "visible";
    try{
        return this
    }finally{
        if(ms>0)setTimeout(()=>{this.style.visibility=state},ms)
    }
};

/**
 * Extends element prototype with a function to toggle an elements visiblity style.
 * @returns {Element} - Returns the element, allowing for chaining of other utils.
 */
Element.prototype.toggle = function(ms=0) {
    let state = this.style.visibility
    this.style.visibility = this.style.visibility=="visible"?"hidden":"visible"
    try{
        return this
    }finally{
        if(ms>0)setTimeout(()=>{this.style.visibility=state},ms)
    }
};


//shorthand.js
/**
 * Allows easy getting and setting of an elements innerHTML
 * @returns {InnerHTML} - Returns an elements innerHTML
 */
Element.prototype.html = function(html=undefined) {
    if(html!=undefined)this.innerHTML = html
    return this.innerHTML
};

/**
 * Allows easy looping over a list of elements
 * @param {Function} - Function to be called for each iteration. This function is provided 2 params, element, iteration. It can be stopped by returning true.
 * @returns {NodeList} - Returns the resulting NodeList
 */
NodeList.prototype.each = function(func) {
    let i = 0;
    Array.from(this).forEach((el)=>{
        if(func(el,i)==true)throw BreakException
        i++
    })
};

//createEl.js

