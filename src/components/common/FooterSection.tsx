import {
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  Grid2,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const articles = [
  {
    title: "Introducing Our New 3D Printing Service",
    image: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nisl vel tellus ultricies condimentum. Sed faucibus, ipsum a malesuada fermentum, nisi ex varius neque, vel tincidunt nunc velit in felis. Donec vel ipsum at dolor eleifend consequat. Integer vel eros vel ex lobortis tincidunt.",
  },
  {
    title: "The Future of Robotics",
    image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nisl vel tellus ultricies condimentum. Sed faucibus, ipsum a malesuada fermentum, nisi ex varius neque, vel tincidunt nunc velit in felis. Donec vel ipsum at dolor eleifend consequat. Integer vel eros vel ex lobortis tincidunt.",
  },
  {
    title: "Ai is the Future of Humanity",
    image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nisl vel tellus ultricies condimentum. Sed faucibus, ipsum a malesuada fermentum, nisi ex varius neque, vel tincidunt nunc velit in felis. Donec vel ipsum at dolor eleifend consequat. Integer vel eros vel ex lobortis tincidunt.",
  },
];

const FooterSection = () => {
  return (
    <Box
      sx={[
        (theme) => ({
          mt: 4,
          minHeight: 500,
          backgroundColor: theme.vars.palette.grey[800],
          color: theme.vars.palette.common.white,
          ...theme.applyStyles("dark", {
            background: theme.vars.palette.grey[900],
          })
        }),
      ]}
    >
      <Container maxWidth="xl">
        <Grid2 container spacing={2} sx={{ pt: 2 }}>
          <Grid2 size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 400,
                  textAlign: "center",
                  fontFamily: "'Montserrat', sans-serif",
                  lineHeight: "1.3",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  py: 2,
                }}
              >
                About Us
              </Typography>
              <Divider variant="fullWidth" />
              <CardMedia
                sx={{ width: "100%" }}
                component="img"
                height="100%"
                image="/white_logo.svg"
                alt="logo"
              />
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "justify",
                  py: 2,
                }}
              >
                Some of our recent work of the hundreds that we have for our
                customers around the world are displayed in Fusce lacinia arcu
                et nulla. Nulla vitae mauris non felis mollis faucipus.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "justify",
                  py: 2,
                }}
              >
                Some of our recent work of the hundreds that we have for our
                customers around the world are displayed in Fusce lacinia arcu
                et nulla. Nulla vitae mauris non felis mollis faucipus.
              </Typography>
            </Box>
          </Grid2>
          <Grid2 size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 400,
                  textAlign: "center",
                  fontFamily: "'Montserrat', sans-serif",
                  lineHeight: "1.3",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  py: 2,
                }}
              >
                Articles
              </Typography>
              <Divider variant="fullWidth" />
              {articles.map((article, index) => (
                <Stack
                  key={index}
                  spacing={2}
                  direction={"row"}
                  sx={{ my: 1, alignItems: "center" }}
                >
                  <CardMedia
                    component="img"
                    height={120}
                    image={article.image}
                    alt={article.title}
                    sx={{
                      width: 120,
                      borderRadius: "2px",
                    }}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        textAlign: "justify",
                      }}
                    >
                      {article.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        textAlign: "justify",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                      }}
                    >
                      {article.content}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Box>
          </Grid2>
          <Grid2 size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 400,
                  textAlign: "center",
                  fontFamily: "'Montserrat', sans-serif",
                  lineHeight: "1.3",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  py: 2,
                }}
              >
                Contact Us
              </Typography>
              <Divider variant="fullWidth" />
              <Typography
                variant="h6"
                color="warning"
                sx={{
                  py: 0.5,
                }}
              >
                Canada
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                }}
              >
                No. 77 George Welsh Street
              </Typography>
              <Typography
                variant="h6"
                color="warning"
                sx={{
                  py: 0.5,
                }}
              >
                United States
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                }}
              >
                No. 34 John Doe Street
              </Typography>
              <Box sx={{ py: 2 }}>
               <Box sx={{ py: 1 }}>
               <TextField
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                  fullWidth
                  color="warning"
                />
               </Box>
                <Box sx={{ py: 1 }}>
                <TextField
                  
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  fullWidth
                  color="warning"
                />
                </Box>
                <Box sx={{ textAlign: "center", display: "block", my: 2 }}>
                    <Button variant="outlined" color="warning">Subscribe</Button>
                </Box>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
      <Box
      sx={[
        (theme) => ({
          py: 4,
          backgroundColor: theme.vars.palette.grey[900],
          color: theme.vars.palette.common.white,
          ...theme.applyStyles("dark", {
            background: theme.vars.palette.background.default,
          })
        }),
      ]}
    >
        <Container maxWidth="xl">
          <Stack direction={{ lg: "row", md: "row", sm: "column", xs: "column" }} spacing={2} justifyContent="space-between">
          <Typography
            variant="h6"
            sx={{
              py: 2,
              
            }}
          >
            &copy; {new Date().getFullYear()} DigiAgency Service. All rights reserved.
          </Typography>
          <Box>
            <Stack direction={{ lg: "row", md: "row", sm: "column", xs: "column" }} spacing={2}>
              <Button variant="text" color="inherit">Privacy Policy</Button>
              <Button variant="text" color="inherit">Terms of Service</Button>
              <Button variant="text" color="inherit">Contact Us</Button>
            </Stack>
          </Box>
          </Stack>
        </Container>
    </Box>
    </Box>
  );
};

export default FooterSection;
