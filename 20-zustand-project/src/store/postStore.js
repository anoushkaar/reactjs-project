import { create } from "zustand";

export const usePostStore = create((set) => ({
  posts: [],
  loading: false,
  error: null,
  fetchPost: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5 "
      );
      const data = await res.json();
      set({ posts: data, loading: false });
    } catch (error) {
      set({ error: "failed to fetch posts", loading: false });
    }
  },
}));
