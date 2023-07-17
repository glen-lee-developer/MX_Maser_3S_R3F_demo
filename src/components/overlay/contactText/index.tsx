import { BsGithub, BsLinkedin } from "react-icons/bs";

const ContactText = () => {
  return (
    <div
      className={`text-white h-screen p-5 w-screen flex flex-col justify-between  items-center sticky `}
    >
      <div className="flex flex-col gap-3  items-center mt-24">
        <p className="text-3xl sm:text-5xl">MX MASTER 3S</p>
        <p className="text-2xl sm:text-4xl">DEMO</p>
      </div>
      <div className="flex items-center self-start gap-2">
        <p className="text-xl md:text-2xl">Glen Lee</p>
        <div className="flex gap-2">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/glen-lee-developer/"
          >
            <BsLinkedin className="h-5 w-5 hover:text-blue-600" />
          </a>
          <a target="_blank" href="https://github.com/glen-lee-developer">
            <BsGithub className="h-5 w-5 hover:text-green-600" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactText;
