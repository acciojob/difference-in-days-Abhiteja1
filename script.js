var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const diff= Number(date1.slice(9,11))-Number(date2.slice(9,11));
	return diff;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
