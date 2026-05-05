import {
  getExperiences,
  getHeroSection,
  getProjects,
} from "@/lib/contenful-queries";
import { Experience, Project } from "@/types/contenful";

export const revalidate = 60;

export default async function HomePage() {
  const [hero, projects, experiences] = await Promise.all([
    getHeroSection(),
    getProjects(),
    getExperiences(),
  ]);

  const heroFields = hero?.fields as {
    title?: string;
    subtitle?: string;
    ctaText?: string;
  };

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold">
          {heroFields?.title ?? "My Portfolio"}
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          {heroFields?.subtitle ??
            "Frontend engineer building modern web apps."}
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project: Project) => (
            <article key={project.sys.id} className="rounded-xl border p-5">
              <h3 className="text-xl font-medium">{`${project.fields.title}`}</h3>
              <p className="mt-2 text-sm text-gray-600">
                {`${project.fields.shortDescription}`}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Experience</h2>
        <div className="space-y-4">
          {experiences.map((experience: Experience) => (
            <article key={experience.sys.id} className="rounded-xl border p-5">
              <h3 className="font-medium">
                {`${experience.fields.role} — ${experience.fields.company}`}
              </h3>
              <p className="text-sm text-gray-600">
                {`${experience.fields.startDate} - ${experience.fields.endDate || "Present"}`}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
