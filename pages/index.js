import React from 'react';
import FooterBanner from "../components/FooterBanner";
import HeroBanner from "../components/HeroBanner";
import { client } from '../lib/client';
import Products from "../components/Products";


function Home({ products, bannerData }) {

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {
          products?.map((product) => <Products key={product._id} product={product} />)
        }
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}


//Fetching Data from sanity.io using serversideProps.
export async function getServerSideProps() {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerDataQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerDataQuery);

  return {
    props: { products, bannerData }
  }
}


export default Home;