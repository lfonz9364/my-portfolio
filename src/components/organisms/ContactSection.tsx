import { Button } from "@/components/atoms/Button";
import { SectionHeading } from "@/components/atoms/SectionHeading";

export const ContactSection = () => (
  <section className="py-16">
    <SectionHeading
      eyebrow="Contact"
      title="Let’s work together"
      description="I’m open to frontend, full-stack, and mobile engineering opportunities."
    />

    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <p className="max-w-2xl text-slate-600">
        Feel free to reach out if you’re hiring, collaborating, or want to chat
        about a project.
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <Button href="mailto:your-email@example.com">Email Me</Button>
        <Button href={process.env.LINKEDIN_LINK} variant="secondary" external>
          LinkedIn
        </Button>
        <Button href={process.env.GITHUB_LINK} variant="secondary" external>
          GitHub
        </Button>
      </div>
    </div>
  </section>
);
