import ChartDisplay from "./_lib/ChartDisplay";
import DashboardInfo from "./_lib/DashboardInfo";
import DashboardTableDisplay from "./_lib/DashboardTableDisplay";
import Header from "./_lib/Header";
import RecentlyLaunch from "./_lib/RecentlyLaunch";

async function page() {
  return (
    <>
      <Header />
      <DashboardInfo />
      <ChartDisplay />
      <DashboardTableDisplay />
      {/* <div className="grid grid-cols-2 gap-8 mt-[60px]">
        <TokenPackage />
        <EmailContact />
      </div> */}
      <RecentlyLaunch />
    </>
  );
}

export default page;
