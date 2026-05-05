export const testimonial = {
  name: "testimonial",
  title: "Bewertung",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "text",
      title: "Text",
      type: "text",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "rating",
      title: "Bewertung (1-5)",
      type: "number",
      validation: (Rule: {
        min: (n: number) => { max: (n: number) => unknown };
      }) => Rule.min(1).max(5),
    },
    {
      name: "approved",
      title: "Freigegeben",
      type: "boolean",
      initialValue: false,
    },
  ],
};
