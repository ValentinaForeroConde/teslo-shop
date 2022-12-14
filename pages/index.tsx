import type { NextPage } from "next";
import { Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts";
import { initialData } from "../database/products";
import { ProductList } from "../components/products";
import { IProduct } from "../interfaces";

const Home: NextPage = () => {
  return (
    <ShopLayout
      title={"Teslo Shop - Home"}
      pageDescription={"Find the best products of Teslo HERE!"}
    >
      <Typography variant="h1" component={"h1"}>
        Shop
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        All the products
      </Typography>

      <ProductList products={initialData.products as IProduct[]} />
    </ShopLayout>
  );
};

export default Home;
