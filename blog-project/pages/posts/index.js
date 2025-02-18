import AllPost from "@/components/posts/all-post";
import { getAllPosts } from "@/lib/posts-util";

const PostsPage = (props) => {
  return <AllPost posts={props.posts} />;
};

export function getStaticProps() {
  const allPost = getAllPosts();

  return {
    props: {
      posts: allPost,
    },
  };
}

export default PostsPage;
