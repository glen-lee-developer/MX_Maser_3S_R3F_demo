const IntroText = () => {
  return (
    <div className="h-screen w-screen flex justify-center sticky">
      <div className="text-white mt-24 flex flex-col items-center gap-4 text-base">
        <h1 className="text-3xl sm:text-5xl font-semibold  text-center">
          MX MASTER 3S
        </h1>
        <p className="text-lg sm:text-2xl">By</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl">Logitech</h2>
      </div>
    </div>
  );
};

export default IntroText;
