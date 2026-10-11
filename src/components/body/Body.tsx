import { benefitData } from "../../constatnce/benefitData";
import BenefitCard from "../base/BenefitCard";

export default function Body() {
	return (
		<div className="flex flex-col w-full h-full gap-5 px-10 py-3 overflow-y-auto bg-purple-100">
			<div className="flex flex-col gap-5 mt-5">
				<h2 className="text-2xl font-bold text-black">Offer & Benefits</h2>
				<div className="grid grid-cols-3 gap-5">
					{benefitData.map((item) => (
						<BenefitCard item={item} />
					))}
				</div>
			</div>
			{/* <div className="flex justify-between items-center w-full bg-amber-400">
				<form className="flex flex-col items-center justify-center gap-8 w-[50%] bg-blue-100 p-4">
					<h3 className="text-blue-950 text-3xl text-center font-bold mb-5">
						READY TO TRANSFORM? Start FlexFlow Personalaized anykouts to hans.
					</h3>
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
					/>
				</form>
				<div>
					<h4 className="text-blue-950 text-xl font-bold">Offer & Benefits</h4>
				</div>
			</div> */}
		</div>
	);
}
