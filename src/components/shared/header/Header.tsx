import Button from "../../base/Button";

export default function Header() {
	const headerItems: { title: string; link: string }[] = [
		{
			title: "Home",
			link: "/home",
		},
		{
			title: "Features",
			link: "/features",
		},
		{
			title: "Tracking",
			link: "/tracking",
		},
		{
			title: "Community",
			link: "/community",
		},
	];
	return (
		<div className="flex flex-col items-center gap-8 bg-gradient-to-br from-teal-300 via-purple-300 to-rose-200 w-full h-fit px-10 py-3">
			<div className="flex items-center justify-between w-full">
				<img src="/images/logo.png" alt="logo" className="w-50" />
				<div className="flex items-center gap-6">
					{headerItems.map((headerItem) => (
						<a
							href={headerItem.link}
							className="text-blue-950 relative active:no-underline font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
						>
							{headerItem.title}
						</a>
					))}
				</div>
				<div className="flex gap-6 items-center">
					<a
						href="/login"
						className="text-blue-950 relative active:no-underline font-semibold after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full"
					>
						Log in
					</a>
					<Button
						text={"Sign Up"}
						bg={"bg-gradient-to-r from-purple-500 to-pink-500"}
					/>
				</div>
			</div>

			<div className="flex justify-between w-full gap-6">
				<div className="flex flex-col gap-4 w-[cal]">
					<h1 className="text-blue-900 font-bold text-4xl mb-2">
						Unlock Your Potential
					</h1>
					<h2 className="text-blue-900 font-bold text-2xl">
						with Flex Flow: Personalized Workouts, Anytime, Anywhere
					</h2>
					<p className="text-blue-950 text-xl font-semibold">
						Achieve your fitness goals with AI-driven plans and a supportive
						community.
					</p>
					<Button
						text={"Start Your 7-Day Trial"}
						bg={"bg-gradient-to-r from-purple-500 to-pink-500"}
					/>
				</div>
				<img
					src="/images/visualImage.png"
					alt="visualImage"
					className="w-100 rounded-lg"
				></img>
			</div>
		</div>
	);
}
