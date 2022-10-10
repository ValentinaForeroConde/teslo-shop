import NextLink from "next/link";
import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ShopLayout } from "../../components/layouts";

const EmptyPage = () => {
  return (
    <ShopLayout title="Empty Cart" pageDescription="No items in the cart">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography>No items in the cart</Typography>
          <NextLink href="/" passHref>
            <Link typography="h4" color="secondary">
              Back
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};

export default EmptyPage;
