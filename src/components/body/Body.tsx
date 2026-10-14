import { benefitData } from "../../constatnce/benefitData";
import BenefitCard from "../base/BenefitCard";
import Button from "../base/Button";

export default function Body() {
	return (
		<div className="flex flex-col w-full h-full gap-10 px-10 py-3 bg-purple-100">
			<div className="flex flex-col gap-5 mt-5">
				<h2 className="text-2xl font-bold text-black">Offer & Benefits</h2>
				<div className="grid grid-cols-3 gap-5">
					{benefitData.map((item) => (
						<BenefitCard item={item} />
					))}
				</div>
			</div>

			<div className="bg-stone-300 px-5 py-2 rounded-2xl flex gap-2 items-center justify-between">
				<div className="text-black text-xl font-bold">As featured in:</div>
				<img src="/images/Tech.png" alt="" className="w-45" />
				<img src="/images/wired.png" alt="" className="w-30" />
				<img src="/images/GQ.png" alt="" className="w-20" />
				<img src="/images/green.png" alt="" className="w-35" />
			</div>

			<div className="flex justify-between items-center w-full bg-teal-200 rounded-2xl p-5">
				<div className="flex flex-col gap-5 items-start justify-center p-3 w-100">
					<h4 className="text-black text-xl font-bold ">READY TO TRANSFORM?</h4>
					<h3 className="text-black text-4xl font-bold">
						Start FlexFlow Personalaized anykouts to hans.
					</h3>
				</div>
				<form className="flex flex-col items-start justify-center gap-5 p-4 w-[calc(100%-400px)]">
					<h4 className="text-blue-950 text-3xl font-bold">
						JOIN THE CHALLENGE
					</h4>
					<input
						type="text"
						placeholder="Fisrt Name"
						className="border border-purple-600 rounded-xl px-4 py-2 w-full"
					/>
					<input
						type="email"
						placeholder="Email Address"
						className="border border-purple-600 rounded-xl px-4 py-2 w-full"
					/>
					<Button
						text={"Sign up now"}
						bg={"bg-gradient-to-r from-purple-500 to-pink-500"}
						w={"w-full"}
					/>
				</form>
			</div>

			<div className="bg-rose-300 p-7 flex items-center justify-between rounded-2xl ">
				<div className="flex flex-col gap-2 items-start justify-center">
					<h4 className="text-lg font-medium text-white">
						READY TO TRANSFORM?
					</h4>
					<h3 className="text-2xl font-bold text-white">
						Start FlexFlow With 25% Discount Today!
					</h3>
				</div>
				<Button
					text={"Get Started"}
					bg={"bg-gradient-to-r from-purple-500 to-pink-500"}
					w={"w-45"}
				/>
			</div>
		</div>
	);
}
