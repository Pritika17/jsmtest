import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
	return (
		<section className="flex justify-between">
			<div className="flex w-1/2 flex-col h-screen items-center justify-start pt-22 bg-gradient-to-br from-primary_black via-[#101113] to-[#101113]">
				<h1 className="text-white mt-16 mb-10 text-4xl font-heebo font-bold tracking-wide">YTscripter</h1>
				<video
					width=""
					className="w-[40vw] h-auto overflow-x-hidden rounded-xl video"
					muted
					height="240"
					preload="auto"
					autoPlay
					loop
				>
					<source
						src="https://cdn.pika.art/entry.mp4"
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
			</div>
			<div className="bg-[#f8f8f8] flex w-1/2 justify-center items-center">
				<SignIn appearance={{
					elements: {
						formButtonPrimary: "bg-[#6722fa] text-[14px] hover:bg-black ease-in-out transition-all duration-250",
						headerTitle: "text-[25px] font-heebo",
						headerSubtitle: "text-[16px] font-heebo text-black",
						socialButtonsBlockButtonText__google: "text-[14px] font-heebo font-semibold",
						formFieldLabel__identifier: "text-[16px] font-heebo",
						footerActionText: "text-[16px] text-black font-heebo",
						footerActionLink: "text-[16px] text-[#6722fa] font-heebo",
					}
				}} />
			</div>

		</section>
	);
}