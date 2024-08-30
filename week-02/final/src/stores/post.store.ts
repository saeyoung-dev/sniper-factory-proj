import { create } from "zustand";
import { TPost, TPostStore } from "../types/post";
import { api } from "../api/api";

export const usePostStore = create<TPostStore>((set) => ({
  posts: null, // 여러개 게시물
  post: null, // 단일 게시물
  fetchPosts: async (url?: string) => {
    // posts?id_ne=1
    // posts
    const data = await api(url !== undefined ? url : "posts");
    set({ posts: data });
  },
  fetchPostsOne: async (id: string) => {
    const data = await api(`posts/${id}`);
    set({ post: data });
  },
  addPosts: async (formData: TPost) => {
    const data = await api("posts", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    return data;
  },
}));
