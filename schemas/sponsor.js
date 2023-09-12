export default {
    name: 'sponsor',
    title: 'Sponsors',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'The name of the sponsor.',
        validation: Rule => Rule.required()
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        description: "The image of the sponsor\'s logo.",
        validation: Rule => Rule.required()
      },
      {
        name: 'website',
        title: 'Website',
        type: 'url',
        description: 'The URL of the partner\'s website.',
        validation: Rule => Rule.required()
      },
      {
        name: 'facebook',
        title: 'Facebook',
        type: 'url',
        description: 'The URL of the partner\'s facebook.',
      },
      {
        name: 'instagram',
        title: 'Instagram',
        type: 'url',
        description: 'The URL of the partner\'s instagram.',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'A short description of the sponsor.',
        validation: Rule => Rule.required().min(25).max(350)
      },
    ],
  };
  