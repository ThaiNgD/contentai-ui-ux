"use client";
import BackgrounDashboard from "@/assets/images/bg-dashboard-v2.png";
import InfoCard from "@/components/DashboardComponent/InfoCard";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { FaAddressBook } from "react-icons/fa";
const DashboardInfo = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="panel border overflow-hidden relative shadow-lg bg-white flex py-3 px-9 flex-wrap mb-[60px] gap-x-[40px]"
        style={{
          height: "265px",
          borderRadius: "30px",
        }}
      >
        <div className="text-left w-[40%]">
          <h6 className="text-black text-3xl font-bold text-left">
            {t("Chào mừng,")}
            {/* {name} */}
            Thái
          </h6>
          <div className="flex justify-start gap-2 items-end">
            <div className="text-black text-base">
              <p className="mt-[10px]">
                {t("Chào mừng bạn đến với phần mềm Content AI")}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <p className="h-full">{t("Phần mềm của bạn còn lại")}</p>
                <div className="uppercase month text-base whitespace-nowrap border text-black w-auto rounded-3xl px-4 py-1 left-2">
                  {/* {remainingDay !== null
                  ? `${remainingDay} ${t("day")}`
                  : "Đang tải..."} */}
                  81 ngày
                </div>
              </div>
            </div>
          </div>
          <button className="text-black bg-[#FDB300] update px-7 py-2 opacity-0 cursor-default -z-5 mt-3">
            UPGRADE NOW
          </button>
        </div>
        <div className="limit justify-between mb-[60px] flex w-[55%]">
          <div className="z-50 text-center opacity-0 cursor-default">
            <span className="text-[#FFB951] text-base font-black shadow-custom items-center">
              {t("dashboard.character_left")}
            </span>
            <p className="shadow-number text-black items-center text-xl font-bold">
              1,000,000
            </p>
          </div>
          <div className="z-50 text-center opacity-0 cursor-default">
            <span className="text-[#FFB951] text-base font-black shadow-custom items-center">
              {t("Số phút còn lại")}
            </span>
            <p className="shadow-number text-black items-center text-xl font-bold">
              1,000,000
            </p>
          </div>
          <div className="text-center z-10">
            <span className="text-[#FFB951] text-base font-black shadow-custom items-center">
              {t("Số từ còn lại")}
            </span>
            <p className="shadow-number text-black items-center text-xl font-bold">
              {/* {formatNumberWithCommas(maxWordsUserUse)} */}
              10
            </p>
          </div>
          <div className="text-center z-10">
            <span className="text-[#FFB951] text-base font-black shadow-custom items-center">
              {t("Số ảnh còn lại")}
            </span>
            <p className="shadow-number text-black items-center text-xl font-bold">
              10
              {/* {maxImagesUser} */}
            </p>
          </div>
          <div className="text-center z-10">
            <span className="text-[#FFB951] text-base font-black shadow-custom items-center">
              {t("Số giây")}
            </span>
            <p className="shadow-number text-black items-center text-xl font-bold">
              10
              {/* {maxMinute} */}
            </p>
          </div>
        </div>

        <Image
          className="right-0 z-[0] absolute rotate-[30deg]"
          src={BackgrounDashboard}
          alt="dashboard"
        />
      </div>
      <div className="relative z-10 flex flex-wrap mb-[60px] gap-3 justify-around w-full">
        <InfoCard
          title={t("dashboard.documents_created")}
          value={10}
          contents={t("dashboard.contents")}
          icon={FaAddressBook}
        />
        <InfoCard
          title={t("dashboard.documents_created")}
          value={10}
          contents={t("dashboard.contents")}
          icon={FaAddressBook}
        />
        <InfoCard
          title={t("dashboard.documents_created")}
          value={10}
          contents={t("dashboard.contents")}
          icon={FaAddressBook}
        />
        <InfoCard
          title={t("dashboard.documents_created")}
          value={10}
          contents={t("dashboard.contents")}
          icon={FaAddressBook}
        />
        <InfoCard
          title={t("dashboard.documents_created")}
          value={10}
          contents={t("dashboard.contents")}
          icon={FaAddressBook}
        />
      </div>
    </>
  );
};

export default DashboardInfo;
