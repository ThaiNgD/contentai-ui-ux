"use client";
import BackgrounDashboard from "@/assets/images/bg-dashboard-v2.png";
import InfoCard from "@/components/DashboardComponent/InfoCard";
import ProgressBar from "@/components/DashboardComponent/ProgressBar";
import { useGetPathComponent } from "@/hook/useGetPathComponent";
import { useFetchUserInfo } from "@/service/auth/useFetchUserInfor";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaAddressBook } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";
import { Tooltip } from "react-tooltip";
const DashboardInfo = () => {
  const t = useTranslations("dashboard");
  const { data: info } = useFetchUserInfo();
  const { locale } = useGetPathComponent();
  const router = useRouter();
  const moveToUpdateApi = (): void => {
    router.push(`/${locale}/update-api`);
  };
  return (
    <>
      <div
        className="panel border overflow-hidden relative h-fit shadow-lg bg-white dark:bg-black dark:text-white flex py-3 px-9 flex-wrap mb-[60px] gap-x-[40px]"
        style={{
          borderRadius: "30px",
        }}
      >
        {info?.option === "FREE" && (
          <div className="ribbon-wrapper-green">
            <div className="ribbon-blue">NEWS</div>
          </div>
        )}
        {info?.option === "PRO" && (
          <div className="ribbon-wrapper-green">
            <div className="ribbon-blue">PRO</div>
          </div>
        )}
        {info?.option === "PREMIUM" && (
          <div className="ribbon-wrapper-green">
            <div className="ribbon-blue">PREMIUM</div>
          </div>
        )}

        <div className="text-left z-10 mt-[30px] w-full md:w-[35%] lg:w-[35%]">
          <h6 className="text-black dark:text-white text-lg md:text-[30px] leading-[32px] font-bold text-left">
            {t("welcome")},{" "}
            <span className="text-[#019de4] font-bold">
              {info && info.name ? info.name : info?.email}
            </span>
            <span className="">{}</span>
          </h6>
          <div className="flex justify-start gap-2 items-end">
            <div className="text-black dark:text-white text-sm md:text-base">
              <p className="mt-[10px] opacity-85 italic">
                {t("welcome_to_content_ai")}
              </p>
            </div>
          </div>
          <button
            role="button"
            className="font-bold text-sm md:!text-[20px] rounded-lg glow-bg-blue update px-7 py-2 -z-5 mt-3 hover:!transition-none duration-200 hover:animate-none hover:bg-sky-500"
            onClick={moveToUpdateApi}
          >
            UPGRADE NOW
          </button>
        </div>
        <div className="limit justify-between mt-[38px] mb-[40px] grid grid-cols-2 lg:grid-cols-4 w-full md:w-[50%] lg:w-[60%] divide-x-2 divide-black dark:divide-white-light">
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
          <div className="text-center flex flex-col items-center z-10">
            <span className="be-vietnam-pro-medium text-[#FFB951] text-base md:text-lg md:text-[16px] font-black shadow-custom items-center">
              {"Giới hạn token"}
            </span>
            <p className="shadow-number be-vietnam-pro-medium  text-blue-500 items-center text-base md:text-xl">
              {info && info.token_limit ? info.token_limit : 0}
            </p>
            <div className="w-fit token-limit-tooltip cursor-pointer border bg-black text-white rounded-full p-1 ">
              <FaQuestion size={12} />
            </div>
            <Tooltip anchorSelect=".token-limit-tooltip" place={"bottom"}>
              Số token tối đa được sử dụng
            </Tooltip>
          </div>
          <div className="text-center  z-10 ">
            <span className="be-vietnam-pro-medium text-[#FFB951] text-base md:text-lg md:text-[16px]  font-black shadow-custom items-center">
              {t("word_left")}
            </span>
            <p className="shadow-number be-vietnam-pro-medium text-blue-500 items-center text-base md:text-xl font-extrabold">
              {/* {formatNumberWithCommas(maxWordsUserUse)} */}
              10
            </p>
          </div>
          <div className="text-center z-10 !border-0 ">
            <span className="be-vietnam-pro-medium text-[#FFB951] text-base md:text-lg md:text-[16px] font-black shadow-custom items-center">
              {t("image_left")}
            </span>
            <p className="shadow-number be-vietnam-pro-medium font-weight-800  text-blue-500 items-center text-base md:text-xl font-extrabold">
              {info && info.max_images
                ? Number(info.max_images - info.images_used)
                : 0}
              {/* {maxImagesUser} */}
            </p>
          </div>
          <div className="text-center z-10 ">
            <span className="be-vietnam-pro-medium text-[#FFB951] text-base md:text-lg md:text-[16px] font-black shadow-custom items-center">
              {t("second_number")}
            </span>
            <p className="shadow-number be-vietnam-pro-medium font-extrabold text-blue-500 items-center text-base md:text-xl ">
              {info && info.max_minute ? Number(info.max_minute * 60) : 0}
              {/* {maxMinute} */}
            </p>
          </div>
        </div>

        <ProgressBar
          title="Tài liệu của bạn"
          className="border border-blue-500 w-full h-[25px]  z-10 rounded-xl"
          value={35}
          clsContainer="mt-[30px] mb-[45px] gap-1"
          size={"xl"}
        />

        <Image
          className="right-0 bottom-3 md:top-[10%] z-[0] absolute rotate-[30deg]"
          src={BackgrounDashboard}
          alt="dashboard"
        />
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-5 mb-[60px] gap-3 justify-around w-full">
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
