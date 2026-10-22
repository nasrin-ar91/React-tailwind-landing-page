export type ButtonProbs = {
	text: string;
	bg: string;
	w: string;
};
export default function Button({ text, bg, w }: ButtonProbs) {
	return (
		<button
			className={`${bg} text-white text-sm md:text-lg font-bold p-2 lg:p-3 rounded-full cursor-pointer ${w}`}
		>
			{text}
		</button>
	);
}
