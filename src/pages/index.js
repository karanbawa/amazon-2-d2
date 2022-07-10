import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Shop</title>
      </Head>
      <Header />

      <main className="max-w-screen-xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed products={products}/>

      </main>
    </div>
  );
}

// for server side rendering
// this function - tell nextjs that this page is not a static page - so do server side rendering
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    }
  }
}