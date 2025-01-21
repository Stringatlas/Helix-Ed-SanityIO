import {defineField, defineType} from 'sanity'

export const courseType = defineType({
  name: 'physicsCourse',
  title: 'Physics Course',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
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
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Open', value: 'open' },
          { title: 'Closed', value: 'closed' },
        ],
      },
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
