import React from "react";
import { Link } from "react-router-dom";

import { Card, Icon } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";

import gif from "assets/images/cardimgfree.png";

function ToolCard({ name, description, img, button_text, button_link }) {
  return (
    <Card
      sx={() => ({
        height: "340px",
        py: "32px",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "50%",
      })}
    >
      <VuiBox height="100%" display="flex" flexDirection="column" justifyContent="space-between">
        <VuiBox>
          <VuiTypography color="white" variant="h3" fontWeight="bold" mb="18px">
            {name}
          </VuiTypography>

          <VuiTypography color="white" variant="h5" fontWeight="regular" mb="12px">
            {description}
          </VuiTypography>
        </VuiBox>

        <Link to={button_link} style={{ display: "contents" }}>
          <VuiButton variant="gradient" color="primary">
            {button_text}&nbsp;
            <Icon>upload</Icon>
          </VuiButton>
        </Link>
      </VuiBox>
    </Card>
  );
}

export default ToolCard;
