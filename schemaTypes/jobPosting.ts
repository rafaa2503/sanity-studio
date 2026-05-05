export const jobPosting = {
  name: "jobPosting",
  title: "Stellenangebot",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "pensum",
      title: "Pensum",
      type: "string",
    },
    {
      name: "description",
      title: "Beschreibung",
      type: "text",
    },
    {
      name: "requirements",
      title: "Anforderungen",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "publishedAt",
      title: "Veröffentlicht am",
      type: "datetime",
    },
    {
      name: "active",
      title: "Aktiv",
      type: "boolean",
      initialValue: true,
    },
  ],
};
