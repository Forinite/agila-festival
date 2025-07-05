import { type SchemaTypeDefinition } from 'sanity'
import {author} from "@/sanity/schemaTypes/author";
import {feed} from "@/sanity/schemaTypes/feed";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, feed],
}
