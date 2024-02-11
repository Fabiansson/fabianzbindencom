import Typewriter from "./Typewriter";

export default function HeroSection() {
  return (
    // <div className="before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-xl before:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-50 before:lg:h-[360px] z-[-1]">
    <div>
      <Typewriter text="Fabian Zbinden"></Typewriter>
      <div className="flex flex-row space-x-10 mt-20">
        <div className="basis-1/5">
          <img
            className="rounded-full fz-shadow"
            src="/profilbild.jpg"
            alt="Profile pciture"
          />
        </div>

        <p className="basis-4/5">
          Hello there! I'm a fullstack developer from Bern, Switzerland, here to
          make your digital dreams a reality. With a focus on crafting sleek
          user interfaces and robust backend systems, I bring a pragmatic
          approach to every project I undertake. If you're looking for a
          developer who gets the job done efficiently and effectively, let's
          connect. Together, we can bring your digital vision to life, one line
          of code at a time.
        </p>
      </div>
    </div>
  );
}
