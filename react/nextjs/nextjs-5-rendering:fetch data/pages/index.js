import path from "path";
import fs from "fs/promises";
import Link from "next/link";

export default function HomePage(props) {
  const { products } = props;
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/product/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       products: [{ id: "p1", title: "Product 1" }],
//     },
//   };
// }

export async function getStaticProps(context) {
  console.log("(Re-)Generating...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/no-data", //重定向
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true }; // 404 Not Found
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10, //隔10秒重加载
  };
}
