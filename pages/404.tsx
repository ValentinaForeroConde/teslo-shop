import { Box, Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts";

const Custom404 = () => {
  return (
    <ShopLayout
      title="Page Not Found"
      pageDescription="this page was not found"
    >
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        height="calc(100ch - 200px"
      >
        <Typography variant="h1" component="h1" fontSize={100} fontWeight={200}>
          400 |
        </Typography>
        <Typography>Page Not Found</Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custom404;
