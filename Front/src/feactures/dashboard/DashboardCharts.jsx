import StyledContent from "../../UI/ContentFlex";
import DashboardDaysChart from "./DashboardDaysChart";
import DayChart from "./DayChart";
import DashboardMonthChart from "./DashboardMonthChart";

export default function DashboardCharts() {
  return (
    <StyledContent flex="flex">
      <DayChart />
      <DashboardDaysChart />
      <DashboardMonthChart />
    </StyledContent>
  );
}
