export type ButtonProbs = {
	text: string;
	bg: string;
	w: string;
};
export default function Button({ text, bg, w }: ButtonProbs) {
	return (
		<button
			className={`${bg} text-white text-lg font-bold px-8 py-2 rounded-full cursor-pointer ${w}`}
		>
			{text}
		</button>
	);
}
