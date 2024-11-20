"use client";
import { allSetting, SelectedSetting } from "@/config/configSetting";
import { useTranslations } from "next-intl";
import { useState } from "react";
import APIContainer from "./_lib/APIContainer";
import SettingPicker from "./_lib/SettingPicker";

const Page = () => {
  const [selectedSetting, setSelectedSetting] =
    useState<SelectedSetting>("setting_api");
  const t = useTranslations("setting");
  return (
    <>
      <div className="rounded-full flex gap-2 p-3 px-4 shadow-md bg-white">
        {allSetting.map((setting, index) => {
          return selectedSetting === setting ? (
            <div
              key={index}
              className="bg-blue-500 hover:bg-blue- shadow-md py-2 px-3 text-white font-bold rounded-full pointer-events-none"
            >
              {t(setting)}
            </div>
          ) : (
            <div
              key={index}
              onClick={() => setSelectedSetting(setting)}
              className="bg-white hover:bg-blue-500 py-2 px-3 text-black font-bold hover:text-white shadow-md duration-200 rounded-full"
              role="button"
            >
              {t(setting)}
            </div>
          );
        })}
      </div>
      {selectedSetting === "setting_api" && <APIContainer />}
      {selectedSetting === "setting_running_config" && <SettingPicker />}
    </>
  );
};

export default Page;
