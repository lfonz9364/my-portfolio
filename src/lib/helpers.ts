import { SectionHeader } from "@/types/contenful";

export const formatDate = (d?: string) => {
  if (!d) return null;

  const date = new Date(d);

  const formatted = date.toLocaleDateString("en-AU", {
    month: "short",
    year: "numeric",
  });

  return formatted;
};

export const getHeaderContent = (
  headersContents: SectionHeader[],
  sectionName: string,
) => {
  return headersContents.find(
    (headerContent) => headerContent.fields.name === sectionName,
  );
};

export const convertToSnakeCase = (words: string) => words.split(" ").join("-");
