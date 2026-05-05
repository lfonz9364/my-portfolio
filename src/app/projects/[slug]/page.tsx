import { notFound } from "next/navigation";
import { getProjectBySlug, getProjects } from "@/lib/contenful-queries";

export const revalidate = 60;

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project: any) => ({
    slug: project.fields.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-4xl font-bold">{`${project.fields.title}`}</h1>
      <p className="mt-4 text-gray-600">{`${project.fields.shortDescription}`}</p>
    </main>
  );
}
