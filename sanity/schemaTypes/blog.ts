import { Title } from "@radix-ui/react-dialog";
import { sources } from "next/dist/compiled/webpack/webpack";
import { defineField, defineType } from "sanity";

export default defineType ({
    name: "blog",
    title: "Blog",
    type: "document",
    fields:[
        defineField({
     name: "title",
     title: "Title",
     type: "string",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            }
        }),
        defineField({
            name: "date",
            title: "Date",
            type: "date"
        }),
       
        defineField({
            name: "author",
            title: "Author",
            type: "string"
        }),
        defineField({
            name: "content",
            title: "Content",
            type: "string",
        }),
        defineField({
            name:"image",
            title:"Image",
            type: "image",
            options: {
                hotspot: true
            }

        })
    ]
})