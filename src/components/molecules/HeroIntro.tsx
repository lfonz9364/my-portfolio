import { HeroIntroProps } from "@/types/componentsCustomProps";
import { Button } from "../atoms/Button";

export const HeroIntro = ({ title, subtitle }: HeroIntroProps) => (
  <section className="py-20 md:py-28">
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-600">
        {process.env.JOB_TITLES}
      </p>

      <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
        {title}
      </h1>

      <p className="mt-6 text-lg leading-8 text-slate-600">{subtitle}</p>

      <div className="mt-8 flex flex-wrap gap-4">
        <Button href="/projects">View Projects</Button>
        <Button href="/contact" variant="secondary">
          Contact Me
        </Button>
      </div>
    </div>
  </section>
);
