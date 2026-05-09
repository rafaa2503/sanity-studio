export const teamMember = {
  name: "teamMember",
  title: "Team Mitglied",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "role",
      title: "Rolle",
      type: "string",
      options: {
        list: [
          { title: "Zahnarzt", value: "Zahnarzt" },
          { title: "Dentalhygienikerin", value: "Dentalhygienikerin" },
          { title: "Dentalassistentin", value: "Dentalassistentin" },
          {
            title: "Dentalassistentin in Ausbildung",
            value: "Dentalassistentin in Ausbildung",
          },
          { title: "Praxisassistentin", value: "Praxisassistentin" },
          { title: "Administration", value: "Administration" },
        ],
      },
    },
    {
      name: "qualification",
      title: "Qualifikation",
      type: "string",
    },
    {
      name: "photo",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "bio",
      title: "Biografie",
      type: "text",
    },
    {
      name: "order",
      title: "Reihenfolge",
      type: "number",
    },
    {
      name: "active",
      title: "Aktiv",
      type: "boolean",
      initialValue: true,
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
