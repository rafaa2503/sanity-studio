export const service = {
  name: "service",
  title: "Leistung",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "description",
      title: "Beschreibung",
      type: "text",
    },
    {
      name: "icon",
      title: "Icon (Lucide Name)",
      type: "string",
      description: "z.B. 'Heart', 'Shield', 'Smile'",
    },
    {
      name: "order",
      title: "Reihenfolge",
      type: "number",
    },
  ],
  orderings: [
    {
      title: "Reihenfolge",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};
