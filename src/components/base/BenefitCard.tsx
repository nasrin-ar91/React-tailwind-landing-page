import type { BenefitData } from "../../constatnce/benefitData";

type BenefitCardProbs = {
	item: BenefitData;
};

export default function BenefitCard({ item }: BenefitCardProbs) {
	return (
		<div
			className={`flex flex-col items-start  p-4 gap-4 rounded-2xl shadow-[0_0_30px_3px_var(--tw-shadow-color)] ${item.shadowColor}`}
		>
			<img src={item.img} alt="" className="w-15" />
			<h3 className="text-xl font-bold">{item.benefitText}</h3>
			<p className="text-sm font-normal">{item.benefitParagh}</p>
		</div>
	);
}
