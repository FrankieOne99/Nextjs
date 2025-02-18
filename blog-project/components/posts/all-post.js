import classes from "./all-post.module.css";
import PostsGrid from "./posts-grid";

const AllPost = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All Post</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default AllPost;
