import RecentLaunchComponent from "@/components/ContentComponent.tsx/RecentLaunchComponent";

const RecentlyLaunch = () => {
  return (
    <div className="my-[60px] dark:bg-black dark:text-white flex flex-col gap-6 rounded-xl border px-10 py-8">
      <p className="font-bold text-2xl">Recently Launched</p>
      <div className="flex gap-2 justify-between">
        <RecentLaunchComponent title="Nội dung" />
        <RecentLaunchComponent title="Nội dung" />
        <RecentLaunchComponent title="Nội dung" />
        <RecentLaunchComponent title="Nội dung" />
        <RecentLaunchComponent title="Nội dung" />
      </div>
    </div>
  );
};

export default RecentlyLaunch;
