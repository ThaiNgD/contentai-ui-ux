"use client";
import BackgrounDashboard from "@/assets/images/bg-dashboard-v2.png";
import InfoCard from "@/components/DashboardComponent/InfoCard";
import ProgressBar from "@/components/DashboardComponent/ProgressBar";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaAddressBook } from "react-icons/fa";
const DashboardInfo = () => {
  const t = useTranslations("dashboard");
  return (
    <>
      <div
        className="panel border overflow-hidden relative h-fit shadow-lg bg-white dark:bg-black dark:text-white flex py-3 px-9 flex-wrap mb-[60px] gap-x-[40px]"
        style={{
          borderRadius: "30px",
        }}
      >
        <div className="text-left mt-[30px] w-[35%]">
          <h6 className="text-black dark:text-white text-[30px] leading-[32px] font-bold text-left">
            {t("welcome")}, {/* {name} */}
            <span className="">Thái</span>
          </h6>
          <div className="flex justify-start gap-2 items-end">
            <div className="text-black dark:text-white text-base">
              <p className="mt-[10px] opacity-85 italic">
                {t("welcome_to_content_ai")}
              </p>
            </div>
          </div>
          {/* <button className="text-black rounded-lg bg-[#FDB300] update px-7 py-2 cursor-default -z-5 mt-3">
            UPGRADE NOW
          </button> */}
        </div>
        <div className="limit justify-between mt-[38px] mb-[40px] grid grid-cols-4 w-[60%] divide-x-2 divide-black dark:divide-white-light">
          {/* <div className="z-50 text-center cursor-default">
            <span className="text-black text-base font-black shadow-custom items-center">
              {t("dashboard.character_left")}
            </span>
            <p className="shadow-number text-black items-center text-xl font-bold">
              1,000,000
            </p>
          </div>
          <div className="z-50 text-center cursor-default">
            <span className="text-black text-base font-black shadow-custom items-center">
              {t("Số phút còn lại")}
            </span>
            <p className="shadow-number text-black items-center text-xl font-bold">
              1,000,000
            </p>
          </div> */}
          <div className="text-center z-10">
            <span className="text-[#FFB951] text-base font-black shadow-custom items-center">
              {t("day_left")}
            </span>
            <p className="shadow-number font-weight-800 text-blue-500 items-center text-xl font-extrabold">
              81
            </p>
          </div>
          <div className="text-center  z-10 ">
            <span className="text-[#FFB951] text-base font-black shadow-custom items-center">
              {t("word_left")}
            </span>
            <p className="shadow-number font-weight-800 text-blue-500 items-center text-xl font-extrabold">
              {/* {formatNumberWithCommas(maxWordsUserUse)} */}
              10
            </p>
          </div>
          <div className="text-center z-10 ">
            <span className="text-[#FFB951] text-base font-black shadow-custom items-center">
              {t("image_left")}
            </span>
            <p className="shadow-number font-weight-800 text-blue-500 items-center text-xl font-extrabold">
              10
              {/* {maxImagesUser} */}
            </p>
          </div>
          <div className="text-center z-10 ">
            <span className="text-[#FFB951] text-base font-black shadow-custom items-center">
              {t("second_number")}
            </span>
            <p className="shadow-number font-extrabold text-blue-500 items-center text-xl ">
              10
              {/* {maxMinute} */}
            </p>
          </div>
        </div>

        <ProgressBar
          title="Tài liệu của bạn"
          className="border  border-blue-500 w-full h-[25px]  z-10 rounded-xl"
          value={35}
          clsContainer="mt-[30px] mb-[45px] gap-1"
          size={"xl"}
        />

        <Image
          className="right-0 z-[0] absolute rotate-[30deg]"
          src={BackgrounDashboard}
          alt="dashboard"
        />
        <div className="relative z-10 grid grid-cols-5 mb-[60px] gap-3 justify-around w-full">
          <InfoCard
            title={t("documents_created")}
            value={10}
            contents={t("contents")}
            icon={FaAddressBook}
          />
          <InfoCard
            title={t("documents_created")}
            value={10}
            contents={t("contents")}
            icon={FaAddressBook}
          />
          <InfoCard
            title={t("documents_created")}
            value={10}
            contents={t("contents")}
            icon={FaAddressBook}
          />
          <InfoCard
            title={t("documents_created")}
            value={10}
            contents={t("contents")}
            icon={FaAddressBook}
          />
          <InfoCard
            title={t("documents_created")}
            value={10}
            contents={t("contents")}
            icon={FaAddressBook}
          />
        </div>
      </div>
    </>
  );
};

export default DashboardInfo;
