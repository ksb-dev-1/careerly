// components
import LinkWithProgress from "@/components/shared/LinkWithProgress";
import AnimatedUnderline from "./AnimatedUnderline";

export default function Heading() {
  return (
    <div className="absolute z-20 h-full w-full flex flex-col items-center justify-center px-4 bg-hero">
      <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-center text-primary capitalize">
        Unlock your career potential
      </h1>
      <p className="text-xl md:text-3xl font-extrabold text-center max-w-2xl mt-4 md:mt-8 text-primary">
        Discover jobs that inspire you
      </p>
      <div className="mt-8 md:mt-12">
        <LinkWithProgress
          href="/jobs"
          className="btn-primary btn-primary-hover sm:text-xl px-8 py-4"
        >
          Start Exploring
        </LinkWithProgress>
      </div>
      <div className="text-center space-y-3 max-w-2xl w-full mt-8 md:mt-12">
        <p className="sm:text-xl text-slate-500 dark:text-slate-400">
          Discover jobs effortlessly with intelligent filtering, instant search
          results, and an elegant, modern UI.
        </p>
        <AnimatedUnderline />
      </div>
    </div>
  );
}
