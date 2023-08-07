import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { makeStyles, createTheme, ThemeProvider } from "@mui/material/styles";
import { ThumbsCarousel } from "@mui/components/ui/thumb-carousel";

const theme = createTheme({
  spacing: 8, // Set your desired spacing value here
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles(
  (theme: {
    spacing: (arg0: number) => any;
    breakpoints: { up: (arg0: string) => any; values: { md: number } };
  }) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      padding: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
        justifyContent: "space-around",
      },
    },
    imageContainer: {
      maxWidth: "100%",
      marginBottom: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        maxWidth: theme.breakpoints.values.md / 2,
      },
    },
    productImage: {
      width: "100%",
      height: "auto",
      objectFit: "contain",
    },
    productDetails: {
      [theme.breakpoints.up("md")]: {
        maxWidth: theme.breakpoints.values.md / 2,
      },
    },
    productDescription: {
      marginTop: theme.spacing(2),
    },
    buyButton: {
      marginTop: theme.spacing(2),
    },
  })
);

const ProductDetailsPage = () => {
  const classes = useStyles();

  const product = {
    name: "Sample Product",
    images: [
      "https://source.unsplash.com/random?wallpapers",
      "https://source.unsplash.com/random?wallpapers",
      "https://source.unsplash.com/random?wallpapers",
    ],
    description: "This is a sample product description.",
    price: "$99.99",
    rating: 4.5,
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.imageContainer}>
          <Card>
            <ThumbsCarousel gallery={product.images} hideThumbs={false} />
          </Card>
        </div>
        <div className={classes.productDetails}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {product.price}
              </Typography>
              <Rating
                name="product-rating"
                value={product.rating}
                precision={0.5}
                readOnly
              />
              <Divider />
              <Typography
                variant="body1"
                className={classes.productDescription}
              >
                {product.description}
              </Typography>
              <Divider />
              <Button
                variant="contained"
                color="primary"
                className={classes.buyButton}
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ProductDetailsPage;
