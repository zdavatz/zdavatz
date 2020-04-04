/**
 * 
 */

 import _ from 'lodash'
 import '../data/countries.js'

filters = {}




/** */
filters.checkStrArr = (str,arr)=>{
    var regex = new RegExp("\\b(?:" + arr.join("|") + ")\\b", "gi");
	var x = str.match(regex, 'gi')
	if (x && x.length) {
		return x;
	}
}


/**
 * Testing
 */


var str = 'A woman in her 20s in London, ON is Canada’s 4th case of Coronavirus. She had visited Wuhan, was originally'
console.log('Filtersed',filters.checkStrArr(str,countries))
console.log('Filtersed',filters.checkStrArr(str,['Case']))

module.exports = filters

