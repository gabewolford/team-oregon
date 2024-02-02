export default {
  name: "boardmember",
  title: "Board Members",
  type: "document",
  fields: [
    {
      name: "firstname",
      title: "First Name",
      type: "string",
      description: "The first name of the boardmember.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "lastname",
      title: "Last Name",
      type: "string",
      description: "The last name of the boardmember.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "position",
      title: "Position",
      type: "string",
      description: "The position held on the board.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "The image of the boardmember.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bio",
      title: "Bio",
      type: "text",
      description: "A short biography of the boardmember.",
      validation: (Rule) => Rule.required().min(25).max(350),
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Order to feature the boardmember",
      validation: (Rule) => Rule.required(),
    },
  ],
};
