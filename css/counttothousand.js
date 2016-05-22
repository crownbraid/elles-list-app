<script>
var count = 0

function ones() {
	var count = 0;
	count += 'one'.length;
	count += 'two'.length;
	count += 'three'.length;
	count += 'four'.length;
	count += 'five'.length;
	count += 'six'.length;
	count += 'seven'.length;
	count += 'eight'.length;
	count += 'nine'.length;
    return count;
}

function teens() {
	var count = 0;
    count += "ten".length;
	count += 'eleven'.length;
	count += 'twelve'.length;
	count += 'thirteen'.length;
	count += 'fourteen'.length;
	count += 'fifteen'.length;
	count += 'sixteen'.length;
	count += 'seventeen'.length;
	count += 'eighteen'.length;
	count += 'nineteen'.length;
    return count;
}

function twentyToHundred() {
	var count = 0;
	count += "twenty".length * 10;
	count += "thirty".length * 10;
	count += "forty".length * 10;
	count += "fifty".length * 10;
	count += "sixty".length * 10;
	count += "seventy".length * 10;
	count += "eighty".length * 10;
	count += "ninety".length * 10;
    return count;
}

function andPerTen() {
	return "and".length * 8;
}

function andPerHundred() {
	return "and".length * 99;
}

function Hundreds() {
	return "hundred".length * 100;
}

/*all 1-19's*/
count += ones() * 10;
count += teens() * 10;

/*all 20-99's*/
count += twentyToHundred() * 10;
count += ones() * 10 * 8;

/*all hundreds*/
count += ones() * 100;
count += Hundreds() * 9;
count += andPerHundred() * 9;

count += "onethousand".length;

document.write(count);


/*someone else's solution*/
var getName = (number, prefix) =>
    number === 0 ? '' : (
    number === 1000 ? 'one thousand' : (
    number < 20 ? prefix + [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'][number] : (
    number < 100 ? prefix + [ '', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ][Math.floor(number / 10)] + [ '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ][number % 10] :
    getName(Math.floor(number / 100), '') + ' hundred' + getName(number % 100, ' and '))));
console.log((new Array(1000)).fill(0).map((ignore, number) => getName(number + 1, '').replace(/[^a-z]/g, '').length).reduce((total, value) => total + value, 0));