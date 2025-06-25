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
      validation: (rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
        name: 'featured',
        title: 'Featured (Latest)',
        type: 'boolean',
        initialValue: false,
        description: 'Mark this as the featured/latest course for this subject.',
        validation: Rule =>
          Rule.custom(async (featured, context) => {
            if (!featured) return true;
            const { document, getClient } = context;
            if (!document || !document.subject) return 'Subject is required to check for featured uniqueness.';
            const client = getClient({ apiVersion: '2024-01-01' });
            const query = `*[_type == "course" && subject == $subject && featured == true && _id != $id][0]{_id}`;
            const params = { subject: document.subject, id: document._id };
            const existing = await client.fetch(query, params);
            return existing
              ? 'Another course for this subject is already featured: ' + existing.slug.current
              : true;
          }),
    },
    {
        name: 'instructors',
        title: 'Instructors',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Names of instructors for this course',
        validation: rule => rule.required().min(1),
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
      initialValue: true,
    },
  ],

  // add two fields for string refund policy and class format
  preview: {
    select: {
      title: 'slug.current', // Use the slug as the main label
      subtitle: 'title',     // Optionally show the title as a subtitle
      media: 'poster',       // Show the poster image in the preview
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: title || '(no slug)',
        subtitle: subtitle,
        media: media,
      }
    }
  }
});
