import React from "react";
import {
  Card,
  Stack,
  Grid,
  Input,
  Icon,
  FormControl,
  InputLabel,
  FormHelperText,
  FormGroup,
  Switch,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import VuiButton from "components/VuiButton";
import VuiBox from "components/VuiBox";
import VuiInput from "components/VuiInput";
import VuiTypography from "components/VuiTypography";

const UpscaleInputCard = () => {
  return (
    <Card
      sx={({ breakpoints }) => ({
        [breakpoints.up("xxl")]: {
          maxHeight: "400px",
        },
      })}
      bgColor="primary"
    >
      <VuiInput
        type="file"
        accept="image/*"
        style={{ visibility: "hidden" }}
        id="contained-button-file"
      />
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
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="Label" />
            <FormControlLabel disabled control={<Switch />} label="Disabled" />
          </FormGroup>
          <FormLabel id="demo-row-radio-buttons-group-label" color="white">
            Method
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="EDSR" control={<Radio />} label="EDSR" />
            <FormControlLabel value="ESPCN" control={<Radio />} label="ESPCN" />
            <FormControlLabel value="FSRCNN" control={<Radio />} label="FSRCNN" />
            <FormControlLabel value="LapSRN" control={<Radio />} label="LapSRN" />
          </RadioGroup>
        </FormControl>
        <Grid item sx={12}>
          <VuiBox mb={5}>
            <label htmlFor="contained-button-file">
              <VuiTypography variant="h5" color="text" size="18px">
                Content image
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
          </VuiBox>
        </Grid>
      </Grid>
    </Card>
  );
};

export default UpscaleInputCard;
