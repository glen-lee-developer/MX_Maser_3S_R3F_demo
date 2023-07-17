import { CardType } from "../../../types/cardType";

export const Card = ({
  title,
  subtitle,
  bullet1,
  bullet2,
  bullet3,
}: CardType) => {
  return (
    <div className="p-5 w-screen  relative ">
      <div className=" gap-4 flex-col flex text-white p-5  sticky top-5 mb-[100vh]">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold"> {title}</h2>
          <p className="ml-5 text-xl md:text-2xl">{subtitle}</p>
        </div>

        <ul className="flex flex-col gap-2 text-base md:text-lg">
          <li> - {bullet1}</li>
          <li> - {bullet2}</li>
          <li> - {bullet3}</li>
        </ul>
      </div>
      <div className="h-[500vh]" />
    </div>
  );
};

export default Card;
