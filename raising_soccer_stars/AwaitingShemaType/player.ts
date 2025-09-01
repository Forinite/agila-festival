// import {defineField, defineType} from 'sanity'
// import {UserIcon} from "lucide-react";
//
//  export const player = defineType({
//     name: 'player',
//     title: 'Player',
//     type: 'document',
//     icon:  UserIcon,
//     fields: [
//         defineField({
//             name: 'id',
//             type: 'number',
//         }),
//         defineField({
//             name: 'name',
//             type: 'string',
//         }),
//          defineField({
//             name: 'role',
//             type: 'string',
//         }),
//         defineField({
//             name: 'age',
//             type: 'number',
//         }),
//         defineField({
//             name: 'club',
//             type: 'string',
//         }),
//          defineField({
//             name: 'achievement',
//             type: 'array',
//              of: [
//                  defineType({
//                      type: 'string',
//                  })
//              ]
//         }),
//         defineField({
//             name: 'image',
//             type: 'image',
//         }),
//         defineField({
//             name: 'document',
//             type: 'array',
//             of: [
//                 defineType({
//                     type: 'object',
//                     fields: [
//                         defineField({name: 'name', type: 'string'}),
//                         defineField({name: 'document', type: 'url'}),
//                     ]
//                 })
//             ]
//         }),
//         defineField({
//             name: 'videos',
//             type: 'array',
//             of: [
//                 defineType({
//                     type: 'url',
//                 })
//             ]
//         }),
//
//         defineField({
//             name: 'nationality',
//             type: 'string',
//         }),
//         defineField({
//             name: 'position',
//             type: 'string',
//         }),
//         defineField({
//             name: 'bio',
//             type: 'text',
//         }),
//
//     ]
//  })