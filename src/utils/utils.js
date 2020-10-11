export const numberToReadableText = (num) => {
	const number = Math.abs(Number(num));
	return number >= 1.0e+9 ?
		number / 1.0e+9 + "B" : number >= 1.0e+6 ?
			Math.round( (number / 1.0e+6) * 10 ) / 10 + "M" : number >= 1.0e+3 ?
				number / 1.0e+3 + "K" : number;
};

export const secondsToTimeText = (num) => {
	let minutes = Math.floor(num / 60);
	let seconds = num - minutes * 60;

	return `${minutes}:${seconds}m`;
};
