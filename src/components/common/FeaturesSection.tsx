import {
  Box,
  Button,
  CardMedia,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";

import { DesignServices, SupportAgent, Security } from "@mui/icons-material";
import CircularProgressWithIcon from "./CircularProgressWithIcon";
import { Fade, Slide } from "react-awesome-reveal";

const services = [
  {
    icon: <DesignServices />,
    title: "UX/UI Design",
    description:
      "Sed porta sollicitudin eros, vel sagittis turpis consequat nec. Donec ac viverra ligula, in scelerisque leo. Proin massa quam, ornare.",
    value: 100,
  },
  {
    icon: <SupportAgent />,
    title: "Fast Support",
    description:
      "Sed porta sollicitudin eros, vel sagittis turpis consequat nec. Donec ac viverra ligula, in scelerisque leo. Proin massa quam, ornare.",
    value: 100,
  },
  {
    icon: <Security />,
    title: "Super Security",
    description:
      "Sed porta sollicitudin eros, vel sagittis turpis consequat nec. Donec ac viverra ligula, in scelerisque leo.",
    value: 100,
  },
];

const FeaturesSection = () => {
  return (
    <Box
    id="features"
      sx={[
        (theme) => ({
          mt: 10,
          backgroundColor: theme.vars.palette.grey[100],
          minHeight: "300px",
          padding: theme.spacing(4),
          ...theme.applyStyles("dark", {
            background: theme.vars.palette.grey[900],
          })
        }),
      ]}
    >
      <Box sx={{ width: "100%" }}>
        <Slide duration={1400} direction="left">
        <Typography
          variant="h2"
          sx={
            {
            fontWeight: 800,
            textAlign: "center",
            fontFamily: "'Montserrat', sans-serif",
            lineHeight: "1.3",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Why Choose us
        </Typography>
        </Slide>
        <Box sx={{ textAlign: "center", display: "block" }}>
          <IconButton color="warning" size="large">
            <DesignServicesOutlinedIcon />
          </IconButton>
        </Box>
        <Slide duration={1700} direction="right">
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            mb: 2,
            maxWidth: 500,
            margin: "0 auto",
            pb: 4,
          }}
        >
          Some of our recent work of the hundreds that we have for our customers
          around the world are displayed in Fusce lacinia arcu et nulla. Nulla
          vitae mauris non felis mollis faucipus.
        </Typography>
        </Slide>
        <Grid2 container spacing={2}>
          <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
            <CardMedia
              sx={{ height: 400, borderRadius: "5px" }}
              image="/feature1.jpg"
              title="Features Desktop"
            />
          </Grid2>
          <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
            <Slide duration={700} direction="right">
            <Typography
              variant="h3"
              sx={{
                fontWeight: 400,
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: "1",
                py: 4,
              }}
            >
              Bulding Brands on The Web
            </Typography>
            </Slide>
            <Slide duration={900} direction="left">
            <Typography variant="subtitle2" sx={{pb: 2}}>
              We Deliver High Quality Resolution Graphics
            </Typography>
            </Slide>
            <Slide duration={1100} direction="left">
            <Typography variant="subtitle1" sx={{pb: 2}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel
              turpis vel mauris faucibus hendrerit. Vestibulum et turpis non
              neque lobortis finibus.
            </Typography>
            </Slide>
            <Slide duration={1300} direction="left">
            <Typography variant="body2">
              Fatback pastrami meatball, spare ribs shoulder jowl pork belly
              t-bone andouille pork chop tenderloin tri-tip prosciutto biltong
              meatloaf. Pork loin frankfurter strip steak, cow pastrami beef
              pork belly leberkas landjaeger.
            </Typography>
            </Slide>
            <Slide duration={1500} direction="left">
            <Typography variant="body2">
              Pig prosciutto beef ribeye chuck, turducken short ribs capicola
              fatback kielbasa landjaeger leberkas shoulder sausage kevin.
              T-bone alcatra kevin beef ribs ham hock drumstick. T-bone ham beef
              boudin kielbasa turkey.
            </Typography>
            </Slide>
            <Fade duration={1700}>
            <Box sx={{ display: "block", textAlign: "center" }}>
              <Button variant="outlined">Learn More</Button>
            </Box>
            </Fade>
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2} mt={4}>
          <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
            <Grid2 container spacing={6} sx={{ width: "100%" }}>
              {services.map((item) => (
                <Grid2
                  key={item.title}
                  size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Slide duration={500}>
                  <Grid2 container>
                    <Grid2 size={{ lg: 2, md: 2, sm: 12, xs: 12 }}>
                      <CircularProgressWithIcon
                        value={item.value}
                        icon={
                          <IconButton color="warning" size="small">
                            {item.icon}
                          </IconButton>
                        }
                      />
                    </Grid2>
                    <Grid2 size={{ lg: 10, md: 10, sm: 12, xs: 12 }}>
                      <Box>
                        <Typography variant="h5">{item.title}</Typography>
                        <Typography>{item.description}</Typography>
                      </Box>
                    </Grid2>
                  </Grid2>
                  </Slide>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
          <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
            <CardMedia
              sx={{ height: 400, borderRadius: "5px" }}
              image="/features2.jpg"
              title="Features Desktop"
            />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default FeaturesSection;
