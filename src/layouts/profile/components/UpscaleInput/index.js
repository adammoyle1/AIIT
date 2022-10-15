import React from "react";
import { Card, Stack, Grid, Input } from "@mui/material";
import VuiButton from "components/VuiButton";
import VuiBox from "components/VuiBox";
import VuiInput from "components/VuiInput";
import VuiTypography from "components/VuiTypography";
import GreenLightning from "assets/images/shapes/green-lightning.svg";
import WhiteLightning from "assets/images/shapes/white-lightning.svg";
import linearGradient from "assets/theme/functions/linearGradient";
import colors from "assets/theme/base/colors";
import carProfile from "assets/images/shapes/car-profile.svg";
import LineChart from "examples/Charts/LineCharts/LineChart";
import { lineChartDataProfile1, lineChartDataProfile2 } from "variables/charts";
import { lineChartOptionsProfile2, lineChartOptionsProfile1 } from "variables/charts";
import CircularProgress from "@mui/material/CircularProgress";
import Label from "@mui/material";
const UpscaleInputCard = () => {
  return (
    <Card
      sx={({ breakpoints }) => ({
        [breakpoints.up("xxl")]: {
          maxHeight: "400px",
        },
      })}
    >
      <Grid
        container
        sx={({ breakpoints }) => ({
          spacing: "24px",
          [breakpoints.only("sm")]: {
            columnGap: "0px",
            rowGap: "24px",
          },
          [breakpoints.up("md")]: {
            gap: "24px",
            ml: "50px !important",
          },
          [breakpoints.only("xl")]: {
            gap: "12px",
            mx: "auto !important",
          },
        })}
      >
        <Grid item sx={6} lg={3}>
          <VuiInput
            type="file"
            accept="image/*"
            style={{ visibility: "hidden" }}
            id="contained-button-file"
          />
          <label htmlFor="contained-button-file">
            <VuiButton
              htmlFor="contained-button-file"
              variant="contained"
              color="primary"
              component="span"
            >
              Upload 
            </VuiButton>
          </label>
        </Grid>
      </Grid>
    </Card>
  );
};

export default UpscaleInputCard;
