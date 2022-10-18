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
import Icon from "@mui/material/Icon";
import { Card, LinearProgress, Stack } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";
import ToolCard from "layouts/dashboard/components/ToolCard";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import SatisfactionRate from "layouts/dashboard/components/SatisfactionRate";
import ReferralTracking from "layouts/dashboard/components/ReferralTracking";

// React icons
import { BsGlobe } from "react-icons/bs";
import { BsFilePerson } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiOutlineFileImage } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";

// Images
import colorize_img from "assets/images/colorize.jpg";
import gif from "assets/images/cardimgfree.png";
import style_transfer_img from "assets/images/style_transfer_img.jpg";
import hazy_fog_img from "assets/images/hazy_fog.jpg";

function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={6} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total users" }}
                count="20,321"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: <BsGlobe size="20px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={6} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Currently active users" }}
                count="12"
                icon={{ color: "info", component: <FiUsers size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={6} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total uploads" }}
                count="12"
                icon={{
                  color: "info",
                  component: <AiOutlineFileImage size="21px" color="white" />,
                }}
              />
            </Grid>
            <Grid item xs={6} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Total uploaded by you" }}
                count="2"
                icon={{
                  color: "info",
                  component: <BsFilePerson size="22px" color="white" />,
                }}
              />
            </Grid>
          </Grid>
        </VuiBox>

        <VuiBox mb={3}>
          <Grid container spacing="18px">
            <Grid item xs={12} md={6} lg={4} xl={3}>
              <ToolCard
                name="Upscaler"
                description="Improve the quality of your images in seconds using AI upscaling"
                button_text="Upscale"
                button_link="/upscale"
                img={gif}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
              <ToolCard
                name="Style transfer"
                description="Use neural style transfer to apply any style to a target image"
                button_text="Style transfer"
                img={style_transfer_img}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
              <ToolCard
                name="Colorizer"
                description="Use AI to bring old photos back to life"
                button_text="Colorize"
                img={colorize_img}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
              <ToolCard
                name="Object Remover"
                description="Remove objects using AI to perfect your photos and images"
                button_text="Remove objects"
                img={hazy_fog_img}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={3}>
              <ToolCard
                name="Object Detector"
                description="Detect and classify objects in your images"
                button_text="Detect objects"
                button_link="/detect"
                img={hazy_fog_img}
              />
            </Grid>
          </Grid>
        </VuiBox>

        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
          <Grid item xs={12}>
            <Projects />
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
