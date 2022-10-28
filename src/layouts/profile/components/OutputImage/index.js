/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// MUI
import { Card, Grid } from "@mui/material";
// React
import React from "react";
// Images
import welcome from "assets/images/welcome-profile.png";
// VUI
import VuiTypography from "components/VuiTypography/index";
import VuiBox from "components/VuiBox/index";
import VuiInput from "components/VuiInput/index";
import VuiButton from "components/VuiButton/index";
// Icons
import highResImage from "assets/images/high_res_main.jpg";
//Image magnifiers
import { GlassMagnifier } from "react-image-magnifiers";

const Welcome = () => {
  return (
    <Card
      sx={({ breakpoints }) => ({
        background: `url(${welcome})`,
        backgroundSize: "cover",
        borderRadius: "20px",
        height: "100%",
        [breakpoints.only("xl")]: {
          gridArea: "1 / 1 / 2 / 2",
        },
      })}
    >
      <VuiBox display="flex" flexDirection="column" sx={{ height: "100%" }}>
        <VuiBox display="flex" flexDirection="column">
          <VuiTypography color="white" variant="h3" fontWeight="bold" mb="3px">
            Output
          </VuiTypography>
        </VuiBox>
        <VuiBox sx={{ height: "25%" }}></VuiBox>
        <VuiBox display="flex" flexDirection="column">
          <GlassMagnifier imageSrc={highResImage} />
        </VuiBox>
      </VuiBox>
    </Card>
  );
};

export default Welcome;
