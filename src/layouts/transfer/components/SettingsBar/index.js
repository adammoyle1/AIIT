import { Card, Grid, Icon, Stack, Item } from "@mui/material";
import Slider from "@mui/material/Slider";
// Vui Imports
import VuiTypography from "components/VuiTypography/index";
import VuiBox from "components/VuiBox/index";
import VuiButton from "components/VuiButton";

// Icons
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const marks = [
  {
    value: 0,
    label: "short",
  },
  {
    value: 0.5,
    label: "medium",
  },
  {
    value: 1,
    label: "long",
  },
];

const ImageTimeline = () => {
  const valuetext = (value) => {
    if (value == 0) {
      return "Short";
    } else if (value == 0.5) {
      return "Medium";
    } else {
      return "Long";
    }
  };

  return (
    <Card
      sx={({ breakpoints }) => ({
        borderRadius: "20px",
        height: "100%",
        [breakpoints.only("xl")]: {
          gridArea: "1 / 1 / 2 / 2",
        },
      })}
    >
      <VuiBox
        flexDirection="column"
        sx={{ height: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <VuiBox
          display="flex"
          flexDirection="column"
          mb="auto"
          justifyContent="center"
          alignItems="center"
        >
          <VuiTypography color="white" variant="h3" fontWeight="bold" mb="3px">
            Settings
          </VuiTypography>
        </VuiBox>
        <VuiBox mb="auto" height="20px"></VuiBox>
        <VuiBox mb="auto">
          <Grid container direction={"column"} spacing={2}>
            <Grid item xs={12}>
              <VuiTypography color="white" variant="body2">
                Style image strength
              </VuiTypography>
              <Slider
                aria-label="Small"
                valueLabelDisplay="auto"
                min={0}
                max={1}
                step={0.01}
                defaultValue={0.5}
              />
            </Grid>
            <Grid item xs={12}>
              <VuiTypography color="white" variant="body2">
                Runtime
              </VuiTypography>
              <Slider
                valueLabelDisplay="auto"
                min={0}
                max={1}
                step={0.5}
                defaultValue={0.5}
                valueLabelFormat={valuetext}
                sx={{ trackColor: "white", selectionColor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <VuiTypography color="white" variant="body2">
                Something else
              </VuiTypography>
              <Slider
                aria-label="Small"
                valueLabelDisplay="auto"
                min={0}
                max={1}
                step={0.01}
                defaultValue={0.5}
              />
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
      <VuiBox justifyContent="center" alignItems="center" display="flex">
        <VuiTypography color="white" variant="h3" fontWeight="bold" mb="3px">
          Run
        </VuiTypography>
      </VuiBox>
      <VuiBox justifyContent="center" alignItems="center" display="flex">
        <VuiButton color="success">
          <VuiTypography color="white">
            <PlayArrowIcon sx={{ fontSize: 40 }} />
          </VuiTypography>
        </VuiButton>
      </VuiBox>
    </Card>
  );
};

export default ImageTimeline;
