var dateDiffInDays = function (date1, date2) {
  //   write your code here
	let daydiff = Number(date2.slice(8))-Number(date1.slice(8));
	return daydiff;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
