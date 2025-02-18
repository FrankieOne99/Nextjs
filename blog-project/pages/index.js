import Hero from "@/components/home/hero";
import FeaturedPost from "@/components/home/featured-post";
import { getFeaturedPosts } from "@/lib/posts-util";

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}

const HomePage = (props) => {
  return (
    <div>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </div>
  );
};

export default HomePage;
