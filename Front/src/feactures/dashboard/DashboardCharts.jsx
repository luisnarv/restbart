import StyledContent from "../../UI/ContentFlex";
import DashboardDaysChart from "./DashboardDaysChart";
import DashboardMonthChart from "./DashboardMonthChart";
import DayChart from "./DayChart";

export default function DashboardCharts() {
  return (
    <StyledContent display="flex">
      <DashboardDaysChart />
      <DashboardDaysChart />

      <DayChart />
      {/* <DashboardMonthChart /> */}
    </StyledContent>
  );
}
