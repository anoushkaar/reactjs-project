import { useEffect } from "react";
import { usePostStore } from "../store/postStore.js";

const Post = () => {
  const { posts, loading, error, fetchPost } = usePostStore();
  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  if (loading) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {posts.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
};

export default Post;
