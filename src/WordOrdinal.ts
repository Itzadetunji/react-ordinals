import {
	convertNumbersToWords,
	convertTensToWords,
	firstWordToTitle,
} from "./Cases";

interface WordOrdinalOptions {
	capitalizeFirstLetter: boolean;
}

export type WordOrdinalType = (number: number, options: WordOrdinalOptions) => string;

const WordOrdinal: WordOrdinalType = (number, options) => {
	const convertNumberToOrdinal = (number: number) => {
		let position: string;
		if (number > 90) return "Invalid range";
		if (number > 20 && number % 10 !== 0) {
			const firstPosition = convertTensToWords(Math.floor(number / 10) * 10);
			const secondPosition = `-${convertNumbersToWords(number % 10)}`;
			position = firstPosition + secondPosition;
		} else {
			position = convertNumbersToWords(number);
		}
		return position;
	};

	return options.capitalizeFirstLetter
		? firstWordToTitle(convertNumberToOrdinal(number))
		: convertNumberToOrdinal(number);
};

export default WordOrdinal;
