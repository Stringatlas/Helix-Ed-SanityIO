import {defineField, defineType} from 'sanity'

export const courseType = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
        validation: (rule) => rule.required(),
    },
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    {
      name: 'season',
      title: 'Season',
      type: 'string',
    },
    {
      name: 'subject',
      title: 'Subject',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'registrationForm',
      title: 'Registration Form',
      type: 'url',
    },
    {
      name: 'syllabus',
      title: 'Syllabus',
      type: 'url',
    },
    {
      name: 'studentDescription',
      title: 'Student Description',
      type: 'string',
    },
    {
      name: 'tuition',
      title: 'Tuition',
      type: 'number',
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true, // Allows for cropping and focus
      },
    },
    {
      name: 'dates',
      title: 'Dates',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
    {
      name: 'registrationOpen',
      title: 'Registration Open',
      type: 'boolean',
      initialValue: true, // Default is checked (true)
    },
  ],
});
