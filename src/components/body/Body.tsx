import { benefitData } from "../../constatnce/benefitData";
import BenefitCard from "../base/BenefitCard";
import Button from "../base/Button";

export default function Body() {
	return (
		<div className="flex flex-col w-full h-full gap-10 lg:gap-15 px-10 lg:px-30 py-3 lg:py-5 bg-purple-100">
			<div className="flex flex-col gap-5 lg:gap-8 mt-5">
				<h2 className="text-2xl font-bold text-black">Offer & Benefits</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-20">
					{benefitData.map((item) => (
						<BenefitCard item={item} />
					))}
				</div>
			</div>

			<div className="w-full bg-stone-300 px-5 md:px-10 py-3 rounded-2xl flex flex-col md:flex-row gap-2 md:gap-8 items-center">
				<div className="w-fit text-black text-xl font-bold">
					As featured in:
				</div>
				<div className="w-full md:w-[70%] flex items-center justify-around gap-3 lg:gap-12 overflow-x-auto">
					<img src="/images/Tech.png" alt="" className="w-30 lg:w-45" />
					<img src="/images/wired.png" alt="" className="w-20 lg:w-30" />
					<img src="/images/GQ.png" alt="" className="w-10 lg:w-20" />
					<img src="/images/green.png" alt="" className="w-30 lg:w-35" />
				</div>
			</div>

			<div className="flex flex-col md:flex-row justify-between items-center w-full bg-teal-200 rounded-2xl p-5 lg:px-10">
				<div className="flex flex-col gap-5 items-start justify-center p-2 md:p-3 w-full md:w-100">
					<h4 className="text-black text-lg md:text-xl font-bold ">
						READY TO TRANSFORM?
					</h4>
					<h3 className="text-black text-3xl md:text-4xl font-bold">
						Start FlexFlow Personalaized anykouts to hans.
					</h3>
				</div>
				<form className="flex flex-col items-start justify-center gap-5 p-4 w-full md:w-[calc(100%-400px)]">
					<h4 className="text-blue-950 text-xl md:text-3xl font-bold">
						JOIN THE CHALLENGE
					</h4>
					<input
						type="text"
						placeholder="Fisrt Name"
						className="border border-purple-600 outline-0 focus:border-purple-400 rounded-xl px-4 py-2 w-full"
					/>
					<input
						type="email"
						placeholder="Email Address"
						className="border border-purple-600 outline-0 focus:border-purple-400 rounded-xl px-4 py-2 w-full"
					/>
					<Button
						text={"Sign up now"}
						bg={"bg-gradient-to-r from-purple-500 to-pink-500"}
						w={"w-full"}
					/>
				</form>
			</div>

			<div className="bg-rose-300 p-7 lg:px-15 flex flex-col gap-5 md:flex-row items-center md:justify-between rounded-2xl ">
				<div className="flex flex-col gap-2 items-start justify-center">
					<h4 className="text-lg font-medium text-white">
						READY TO TRANSFORM?
					</h4>
					<h3 className="text-xl md:text-2xl font-bold text-white">
						Start FlexFlow With 25% Discount Today!
					</h3>
				</div>
				<Button
					text={"Get Started"}
					bg={"bg-gradient-to-r from-purple-500 to-pink-500"}
					w={"w-full md:w-45 lg:w-60"}
				/>
			</div>
		</div>
	);
}
