import fs from "fs";
import path from "path";

import matter from "gray-matter";
const postsDirectory = path.join(process.cwd(), "myPosts");

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); //Remouve the file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content: content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  //   for (const postFile of postFiles) {
  //     const postData = getPostData(postFile);
  //   }
  const allPost = postFiles.map((postFile) => {
    return getPostData(postFile); //I create a const because map return a new array
  });

  const sortedPost = allPost.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  ); //I order the post by date
  return sortedPost;
}

export function getFeaturedPosts() {
  const allPost = getAllPosts();

  const featuredPost = allPost.filter((post) => post.isFeatured);
  return featuredPost;
}
