import StyledContent from "../../UI/ContentFlex";
import DashboardDaysChart from "./DashboardDaysChart";
import DashboardMonthChart from "./DashboardMonthChart";

export default function DashboardCharts() {
  return (
    <StyledContent flex="flex">
      <DashboardDaysChart />
      <DashboardMonthChart />
    </StyledContent>
  );
}
