export const faq = {
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    {
      name: "question",
      title: "Frage",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "answer",
      title: "Antwort",
      type: "text",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "order",
      title: "Reihenfolge",
      type: "number",
      initialValue: 0,
    },
    {
      name: "active",
      title: "Aktiv",
      type: "boolean",
      initialValue: true,
    },
  ],
};
