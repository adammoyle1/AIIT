import { Card, Grid, Icon } from "@mui/material";

// Vui Imports
import VuiTypography from "components/VuiTypography/index";
import VuiBox from "components/VuiBox/index";
import VuiButton from "components/VuiButton";

// Icons
import PsychologyIcon from "@mui/icons-material/Psychology";
import DoneIcon from "@mui/icons-material/Done";

const ImageTimeline = () => {
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
            Image Timeline
          </VuiTypography>
          <VuiTypography color="white" variant="button" fontWeight="regular">
            Track your image throughout its processing lifecycle
          </VuiTypography>
        </VuiBox>
        <VuiBox mb="auto" height="20px"></VuiBox>
        <VuiBox mb="auto">
          <Grid container direction={"column"} spacing={2}>
            <Grid item xs={12}>
              <Card style={{ backgroundColor: "blue" }}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                  <Grid item xs={2} md={2} xl={2} xxl={1}>
                    <VuiButton disabled iconOnly color="info">
                      <Icon>image</Icon>
                    </VuiButton>
                  </Grid>
                  <Grid item xs={10} md={10} xl={10} xxl={11}>
                    <VuiTypography color="white" variant="body2">
                      • Image received -{" "}
                      <VuiTypography color="white" variant="caption">
                        13:27, Sunday, 16 October 2022
                      </VuiTypography>
                    </VuiTypography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card style={{ backgroundColor: "gray" }}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                  <Grid item xs={2} md={2} xl={2} xxl={1}>
                    <VuiButton disabled iconOnly="true" color="info">
                      <PsychologyIcon />
                    </VuiButton>
                  </Grid>
                  <Grid item xs={10} md={10} xl={10} xxl={11}>
                    <VuiTypography color="white" variant="body2">
                      • Image processing started -{" "}
                      <VuiTypography color="white" variant="caption">
                        13:28, Sunday, 16 October 2022
                      </VuiTypography>
                    </VuiTypography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card style={{ backgroundColor: "#66bb6a" }}>
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                  <Grid item xs={2} md={2} xl={2} xxl={1}>
                    <VuiButton disabled iconOnly="true" color="info">
                      <DoneIcon />
                    </VuiButton>
                  </Grid>
                  <Grid item xs={10} md={10} xl={10} xxl={11}>
                    <VuiTypography color="white" variant="body2">
                      • Image processing completed -{" "}
                      <VuiTypography color="white" variant="caption">
                        13:30, Sunday, 16 October 2022
                      </VuiTypography>
                    </VuiTypography>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </VuiBox>
      </VuiBox>
    </Card>
  );
};

export default ImageTimeline;
