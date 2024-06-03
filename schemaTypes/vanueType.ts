import {defineField, defineType} from 'sanity'
export const vanueType = defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  fields: [
    defineField({
      name: 'venue',
      type: 'string',
    }),
  ],
})
