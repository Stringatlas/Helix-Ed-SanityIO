import {defineField, defineType} from 'sanity'

export const instructorType = defineType({
  name: 'instructor',
  title: 'Instructor',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: rule => rule.required(),
    },
    {
      name: 'school',
      title: 'School',
      type: 'string',
      validation: rule => rule.required(),
    },
    {
        name: 'subject',
        title: 'Subject',
        type: 'string',
        validation: rule => rule.required(),
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'TA', value: 'TA' },
          { title: 'Instructor', value: 'Instructor' },
        ],
      },
      validation: rule => rule.required(),
    },
    {
      name: 'officer',
      title: 'Officer',
      type: 'boolean',
      initialValue: false, 
    },
    {
      name: 'additionalRole',
      title: 'Additional Role',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      validation: rule => rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: rule => rule.required(),
      
      options: {
        hotspot: true, // Enables image cropping in the Sanity Studio
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          options: {
            isHighlighted: true, // Marks as important
          },
        },
      ],
    },
  ],
});
