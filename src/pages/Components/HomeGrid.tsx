import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Pagination } from "@mui/material";

const ITEMS_PER_PAGE = 12; // Change this to set the number of items per page
const cards = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28,
];
const GridWithPagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleCards = cards.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (
    _event: any,
    page: React.SetStateAction<number>
  ) => {
    setCurrentPage(page);
  };
  return (
    <>
      <Grid container spacing={2}>
        {visibleCards.map((card: React.Key | null | undefined) => (
          <Grid item key={card} xs={10} sm={5} md={3}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "0.5rem",
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  pt: "56%",
                }}
                image="https://source.unsplash.com/random?wallpapers"
              />
              <CardContent
                sx={{
                  flexGrow: 1,
                  maxHeight: "150px",
                  overflowY: "auto",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  sx={{
                    fontWeight: "bold",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "1rem",
                  }}
                >
                  Heading
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(0, 0, 0, 0.7)",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "0.9rem",
                  }}
                >
                  Medicinal Product, MRP : 10 Rs,
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button
                  size="small"
                  sx={{
                    size: "0.9rem",
                  }}
                  variant="outlined"
                >
                  More Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </>
  );
};

export default GridWithPagination;
