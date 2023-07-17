import { BsGithub, BsLinkedin } from "react-icons/bs";

const ContactText = () => {
  return (
    <div
      className={` h-screen p-5 w-screen flex justify-center items-center sticky top-50 left-50 `}
    >
      <div className="flex flex-col gap-2 text-white items-center">
        <p className="text-3xl">MX MASTER 3S</p>
        <p className="text-2xl">DEMO</p>
        <p className="text-lg">By</p>
        <p className="text-3xl">Glen Lee</p>
        <div className="flex gap-5  mt-2">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/glen-lee-developer/"
          >
            <BsLinkedin className="h-7 w-7 hover:text-blue-600" />
          </a>
          <a target="_blank" href="https://github.com/glen-lee-developer">
            <BsGithub className="h-7 w-7 hover:text-green-600" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactText;
