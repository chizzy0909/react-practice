import { useRouter } from "next/router";

function BlogPostsPage() {
  const route = useRouter(); // http://localhost:3000/blog/1/2/3
  console.log(route.query); // slug: (3) ['1', '2', '3']
  return (
    <div>
      <h1>The BlogPosts Page </h1>
    </div>
  );
}
export default BlogPostsPage;
