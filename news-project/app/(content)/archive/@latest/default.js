import { getLatestNews } from "@/app/lib/news";
import React from "react";
import NewList from "@/app/components/new-list";

const LatestNews = () => {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>LatestNews</h2>
      <NewList news={latestNews} />
    </>
  );
};

export default LatestNews;
