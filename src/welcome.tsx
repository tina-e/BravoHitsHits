export const Welcome = () => {
  const logo = require("./logo_bravohitshits.png");
  return (
    <>
      <header className="w-full items-center flex flex-col gap-5">
        <span className="text-darkGreen font-extrabold text-8xl">
          Welcome to
        </span>
        <img src={String(logo)} className="App-logo" alt="logo" />
      </header>
      <div
        className="absolute bottom-[10vh] right-[50%] translate-x-[50%] bg-darkGreen hover:bg-vibrantGreen p-5 text-lightGreen hover:text-darkGreen rounded-lg text-xl"
        onClick={() => console.log("change component")}
      >
        Jetzt starten
      </div>
    </>
  );
};
