import { defineField, defineType } from "sanity";

import customImage from "@/lib/schemas/customImage";

import { commonGroups, sectionMarginFields, themeField } from "../commonFields";

const featurePointStyles = [
  { title: "icon on the left", value: "icon-left" },
  {
    title: "icon with background on the left",
    value: "icon-left-with-background",
  },
  { title: "icon and title on the same line", value: "icon-title-inline" },
  { title: "icon on the top", value: "icon-top" },
  { title: "no icon", value: "no-icon" },
  {
    title: "icon on the left, separate title",
    value: "icon-left-separate-title",
  },
];

export const defaultCard = defineType({
  name: "defaultCard",
  type: "object",
  title: "Default card",
  options: {},
  groups: commonGroups,
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
      initialValue: "initial title",
    }),
    defineField({
      name: "description",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
      initialValue: "initial description",
    }),
    defineField({
      name: "style",
      type: "string",
      options: {
        list: featurePointStyles,
        layout: "dropdown",
      },
      group: "style",
      validation: (Rule) => Rule.required(),
      initialValue: "icon-left",
    }),
    defineField({
      name: "link",
      type: "customLink",
      group: "content",
    }),
    defineField({
      name: "image",
      type: customImage.name,
      group: "content",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      image: "image.image",
    },
    prepare({ title, subtitle, image }) {
      return {
        media: image,
        title,
        subtitle,
      };
    },
  },
});

export default {
  options: {},
  name: "section.cardsGrid",
  title: "Cards Grid",
  type: "object",
  groups: commonGroups,
  fields: [
    defineField({
      group: "style",
      name: "columns",
      type: "number",
      options: {
        list: [1, 2, 3],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "items",
      type: "array",
      group: "content",
      of: [{ type: "defaultCard" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    themeField,
    ...sectionMarginFields,
  ],
  preview: {
    select: {
      columns: "columns",
    },
    prepare: ({ columns }: any) => ({
      title: `Cards Grid - ${columns} cols`,
    }),
  },
};
