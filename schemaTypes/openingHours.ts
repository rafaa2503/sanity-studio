export const openingHours = {
  name: "openingHours",
  title: "Öffnungszeiten",
  type: "document",
  fields: [
    {
      name: "day",
      title: "Tag",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "from",
      title: "Von",
      type: "string",
      description: "z.B. 08:00",
    },
    {
      name: "to",
      title: "Bis",
      type: "string",
      description: "z.B. 17:00",
    },
    {
      name: "closed",
      title: "Geschlossen",
      type: "boolean",
      initialValue: false,
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
