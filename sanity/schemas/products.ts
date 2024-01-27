import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'products',
  type: 'document',
  title: 'Produtos',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Nome do Produto',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Descrição do Produto',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Link do produto',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isAssigned',
      type: 'boolean',
      title: 'Produto assinado',
      initialValue: false,
    }),
    defineField({
      name: 'assignedName',
      type: 'string',
      title: 'Nome de quem assinou',
    }),
    defineField({
      name: 'assignedPhone',
      type: 'string',
      title: 'Telefone de quem assinou',
    }),
  ],
})
