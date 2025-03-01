"use client";

/* eslint-disable @next/next/no-img-element */
import { notFound, useRouter } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";

const InterceptedImagePage = ({ params }) => {
  const router = useRouter();

  const newsItemSlug = React.use(params).slug;
  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
