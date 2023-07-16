import { CardType } from "../../../types/cardType";


export const Card = ({ title, subtitle, bullet1, bullet2, bullet3 }:CardType) => {
	// z-[9999998]
	return (
		<div className="p-5 w-screen  relative ">  
			<div className="text-white flex flex-col gap-3 p-5 max-w-[50vw] sticky top-5 mb-[100vh]" >
				<h2 className="text-3xl font-semibold  p-3 rounded-md">	{title}</h2>
				<p className="ml-20 text-xl">{subtitle}</p>
				<ul className="flex flex-col gap-2 text-lg">
					<li>{bullet1}</li>
					<li>{bullet2}</li>
					<li>{bullet3}</li>
				</ul>
			</div>
			<div className="h-[500vh]" />
		</div>
	)
}

export default Card

