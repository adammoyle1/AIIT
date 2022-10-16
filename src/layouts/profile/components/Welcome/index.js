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
import {
  Card,
  Grid,
  Icon,
  FormControl,
  FormHelperText,
  Select,
  MenuItem,
  Image,
} from "@mui/material";
import SelectChangeEvent from "@mui/material/Select";
import React from "react";
import welcome from "assets/images/welcome-profile.png";
import VuiTypography from "components/VuiTypography/index";
import VuiBox from "components/VuiBox/index";
import VuiInput from "components/VuiInput/index";
import VuiButton from "components/VuiButton/index";

// Icons
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PlayArrow from "@mui/icons-material/PlayArrow";

// Images
import defaultImage from "assets/images/low_res_main.png";

const Welcome = () => {
  const handleModelChange = (event: SelectChangeEvent) => {
    setModel(event.target.value);
  };

  const handleFactorChange = (event: SelectChangeEvent) => {
    setFactor(event.target.value);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const [age, setAge] = React.useState("");
  const [model, setModel] = React.useState("");
  const [factor, setFactor] = React.useState("");
  const [image, setImage] = React.useState("");

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
        <VuiBox justify-content="center" display="flex" flexDirection="column" mb="auto">
          <VuiTypography color="white" variant="h3" fontWeight="bold" mb="3px">
            Upscaler
          </VuiTypography>
          <VuiTypography color="white" variant="button" fontWeight="regular">
            Configure the settings to reach your needs
          </VuiTypography>
        </VuiBox>

        <VuiBox display="flex" sx={{ height: "5%" }}></VuiBox>

        <Grid container spacing={0}>
          <Grid item xxs={6} xs={6} md={3} lg={3}>
            <FormControl>
              <Select
                value={model}
                onChange={handleModelChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                autoWidth
              >
                <MenuItem value="">
                  <em>EDSR</em>
                </MenuItem>
                <MenuItem value={20}>ESPCN</MenuItem>
                <MenuItem value={30}>FSRCNN</MenuItem>
                <MenuItem value={30}>LapSRN</MenuItem>
              </Select>
              <FormHelperText>
                <VuiTypography variant="caption" color="white" fontWeight="light">
                  Upscaling model
                </VuiTypography>
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <Select
                value={factor}
                onChange={handleFactorChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                autoWidth
              >
                <MenuItem value="">
                  <em>x2</em>
                </MenuItem>
                <MenuItem value={10}>x3</MenuItem>
                <MenuItem value={20}>x4</MenuItem>
                <MenuItem value={30}>x6</MenuItem>
                <MenuItem value={30}>x8</MenuItem>
              </Select>
              <FormHelperText>
                <VuiTypography variant="caption" color="white" fontWeight="light">
                  Upscaling Factor
                </VuiTypography>
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={5}></Grid>
        </Grid>

        <VuiBox display="flex" flexDirection="column" mb="auto">
          <VuiTypography color="white" variant="h3" fontWeight="bold" mb="3px">
            Select your image
          </VuiTypography>
        </VuiBox>
      </VuiBox>
      <VuiBox height="20px"></VuiBox>
      <VuiBox display="flex" flexDirection="column" sx={{ height: "100%" }}>
        <img src={image ? image : defaultImage} />
      </VuiBox>
      <Grid container rowSpacing={2}>
        <VuiInput
          type="file"
          accept="image/*"
          style={{ visibility: "hidden", display: "null" }}
          id="contained-button-file"
          onChange={onImageChange}
        />
        <Grid item xs={12} justifyContent="center" alignItems="center" display="flex">
          <label htmlFor="contained-button-file">
            <VuiTypography variant="h5" color="text" size="18px">
              <VuiButton
                htmlFor="contained-button-file"
                variant="contained"
                color="primary"
                component="span"
              >
                <Icon>upload</Icon>
              </VuiButton>
            </VuiTypography>
          </label>
        </Grid>
        <Grid item xs={12} justifyContent="center" alignItems="center" display="flex">
          <VuiButton color="success">
            <VuiTypography color="white">
              <PlayArrowIcon sx={{ fontSize: 40 }} />
            </VuiTypography>
          </VuiButton>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Welcome;
