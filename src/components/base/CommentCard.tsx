import type { CommentData } from "../../constatnce/commentData";

type CommentCardProbs = {
	item: CommentData;
};

export default function CommentCard({ item }: CommentCardProbs) {
	return (
		<div className="flex flex-col items-start justify-start bg-white p-4 gap-3 rounded-2xl">
			<img src={item.img} alt="" className="w-20" />
			<h3 className="text-lg font-bold">{item.cardTitle}</h3>
			<p className="text-sm font-medium">{item.cardParagh}</p>
		</div>
	);
}
