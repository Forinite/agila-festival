import {defineQuery} from "next-sanity";

export const FEED_CHECK = defineQuery(`*[_type == 'feed'] `)
export const FEED_QUERY = defineQuery(`*[_type == 'feed' && defined(slug.current) || title match $search || category match $search] | order(_createdAt desc)

{
    _id,
    title,
    slug,
    _createdAt,
    views,
    description, 
    category, 
    image
}`)