export const formatDate = (d?: string) => {
  if (!d) return null;

  const date = new Date(d);

  const formatted = date.toLocaleDateString("en-AU", {
    month: "short",
    year: "numeric",
  });

  return formatted;
};
