import Head from "next/head";
import { Fragment } from "react";
import FeaturedPosts from "../components/homepage/featuredPosts";
import Hero from "../components/homepage/hero";
import { getFeaturedPosts } from "../lib/posts-util";

// export const DUMMU_POSTS = [
//   {
//     slug: "getting-started-with-nextjs",
//     title: "Getting Started with NextJS",
//     date: "2022-10-16",
//     image: "getting-started-nextjs.png",
//     excerpt:
//       "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
//     isFeatured: true,
//   },
//   {
//     slug: "mastering-javascript",
//     title: "Mastering JavaScript",
//     excerpt:
//       "JavaScript is the most important programming language for web development. You probably don't know it well enough!",
//     image: "mastering-js-thumb.png",
//     isFeatured: false,
//     date: "2021-10-30",
//   },
// ];

export default function HomePage(props) {
  const { posts } = props;
  return (
    <Fragment>
      <Head>
        <title>XYL'S Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 60,
  };
}
