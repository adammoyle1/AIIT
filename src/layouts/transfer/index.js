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

// @mui material components
import Grid from "@mui/material/Grid";
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import Footer from "examples/Footer";
import Projects from "layouts/dashboard/components/Projects/index.js";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// Overview page components

import Welcome from "./components/SourceImage/index";
import StyleImage from "./components/StyleImage/index";
import OutputImage from "./components/OutputImage/index";
import ImageTimeline from "./components/ImageTimeline/index.js";
import SettingsBar from "./components/SettingsBar/index";

function Overview() {
  return (
    <DashboardLayout>
      <DashboardNavbar light />
      <VuiBox mt={5} mb={3}>
        <Grid
          container
          spacing={3}
          sx={({ breakpoints }) => ({
            [breakpoints.only("xl")]: {
              gridTemplateColumns: "repeat(2, 1fr)",
            },
          })}
        >
          <Grid
            item
            xs={12}
            md={6}
            xl={6}
            xxl={6}
            sx={({ breakpoints }) => ({
              minHeight: "400px",
              [breakpoints.only("xl")]: {
                gridArea: "1 / 1 / 2 / 2",
              },
            })}
          >
            <Welcome />
          </Grid>

          <Grid item xs={12} md={6} xl={6}>
            <StyleImage />
          </Grid>
          <Grid item xs={0} md={4} xl={4} xxl={5}></Grid>
          <Grid item xs={12} md={4} xl={4} xxl={2}>
            <SettingsBar />
          </Grid>

          <Grid item xs={0} md={12} height="10%"></Grid>
          <Grid item xs={12} md={6} xl={6}>
            <ImageTimeline />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            xl={6}
            xxl={6}
            sx={({ breakpoints }) => ({
              minHeight: "400px",
              [breakpoints.only("xl")]: {
                gridArea: "1 / 1 / 2 / 2",
              },
            })}
          >
            <OutputImage />
          </Grid>
        </Grid>
      </VuiBox>

      <Projects />
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
