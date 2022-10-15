// @mui material components
import Tooltip from "@mui/material/Tooltip";
import { Icon } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiProgress from "components/VuiProgress";
import VuiButton from "components/VuiButton";

// Images
import AdobeXD from "examples/Icons/AdobeXD";
import Atlassian from "examples/Icons/Atlassian";
import Slack from "examples/Icons/Slack";
import Spotify from "examples/Icons/Spotify";
import Jira from "examples/Icons/Jira";
import Invision from "examples/Icons/Invision";
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";

// Icons
import { AiOutlineArrowUp } from "react-icons/ai";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <VuiAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { dark } }) =>
              `${borderWidth[2]} solid ${dark.focus}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "Date", align: "center" },
      { name: "Method", align: "left" },
      { name: "Original image", align: "center" },
      { name: "Processed image", align: "center" },
      { name: "completion", align: "center" },
    ],

    rows: [
      {
        companies: (
          <VuiBox display="flex" alignItems="center">
            <AdobeXD size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Chakra Vision UI Version
            </VuiTypography>
          </VuiBox>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              60%
            </VuiTypography>
            <VuiProgress value={60} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
        Date: (
          <VuiBox width="8rem" textAlign="center">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              14/10/2022
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        companies: (
          <VuiBox display="flex" alignItems="center">
            <Atlassian size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Add Progress Track
            </VuiTypography>
          </VuiBox>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              10%
            </VuiTypography>
            <VuiProgress value={10} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
        Date: (
          <VuiBox width="8rem" textAlign="center">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              14/10/2022
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        companies: (
          <VuiBox display="flex" alignItems="center">
            <Slack size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Fix Platform Errors
            </VuiTypography>
          </VuiBox>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiBox textAlign="center">
              <VuiButton variant="gradient" color="primary" iconOnly>
                <Icon>download</Icon>
              </VuiButton>
            </VuiBox>
          </VuiBox>
        ),
        Date: (
          <VuiBox width="8rem" textAlign="center">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              14/10/2022
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        companies: (
          <VuiBox display="flex" alignItems="center">
            <Spotify size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Launch our Mobile App
            </VuiTypography>
          </VuiBox>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              100%
            </VuiTypography>
            <VuiProgress value={100} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
        Date: (
          <VuiBox width="8rem" textAlign="center">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              14/10/2022
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        companies: (
          <VuiBox display="flex" alignItems="center">
            <Jira size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Add the New Pricing Page
            </VuiTypography>
          </VuiBox>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              25%
            </VuiTypography>
            <VuiProgress value={25} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
        Date: (
          <VuiBox width="8rem" textAlign="center">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              14/10/2022
            </VuiTypography>
          </VuiBox>
        ),
      },
      {
        companies: (
          <VuiBox display="flex" alignItems="center">
            <Invision size="20px" />
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Redesign New Online Shop
            </VuiTypography>
          </VuiBox>
        ),
        completion: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              40%
            </VuiTypography>
            <VuiProgress value={40} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
        Date: (
          <VuiBox width="8rem" textAlign="center">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              14/10/2022
            </VuiTypography>
          </VuiBox>
        ),
      },
    ],
  };
}
