import {FEED_QUERY} from "@/sanity/lib/queries";
import {sanityFetch} from "@/sanity/lib/live";
import feed from "@/app/components/ui/feed";

//
// export const { data: feedList }  = await sanityFetch({query: FEED_QUERY, tags: []})

export const feedFilterBtnList = ['Masquerade', 'Dance', 'Music', 'FaceOfIdoma']
