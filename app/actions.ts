"use server";

import { feedList } from './constants';

export async function getFilteredMedia(filter: string = 'All') {
  // Using server-side filtering
  if (filter === 'All') {
    return feedList;
  }

  return feedList.filter(item => 
    item.tags.some(tag => tag.toLowerCase() === filter.toLowerCase())
  );
}
