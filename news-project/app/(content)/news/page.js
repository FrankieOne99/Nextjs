import NewList from "@/app/components/new-list";

import { DUMMY_NEWS } from "@/dummy-news";

const NewsPage = () => {
  return (
    <>
      <h1>News Page</h1>
      <NewList news={DUMMY_NEWS} />
    </>
  );
};
export default NewsPage;
