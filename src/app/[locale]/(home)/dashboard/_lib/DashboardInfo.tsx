"use client";
import BackgrounDashboard from "@/assets/images/bg-dashboard-v2.png";
import DataCard from "@/components/DashboardComponent/DataCard";
import ProgressBar from "@/components/DashboardComponent/ProgressBar";
import { useGetPathComponent } from "@/hook/useGetPathComponent";
import { useFetchUserInfo } from "@/service/auth/useFetchUserInfor";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaAddressBook, FaHandPointDown } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { MdFormatListNumbered, MdToken } from "react-icons/md";
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
        className="panel border overflow-hidden relative h-fit shadow-lg bg-white dark:bg-black dark:text-white flex justify-between py-3 px-9 flex-wrap mb-[60px] gap-x-[40px]"
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

        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="text-left z-10 mt-[30px] flex-auto">
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

            {/* <div className="relative mt-[20px] w-fit grid-cols-2 z-10 grid mb-[40px] gap-3 ">
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
            </div> */}
          </div>
          <div className="flex-col items-center gap-4 group justify-center">
            <FaHandPointDown
              className="justify-self-center opacity-0 duration-200 group-hover:opacity-0 md:opacity-100 translate-y-hand !z-[100]"
              size={20}
              color="#F8AF34"
            />
            <button
              role="button"
              className="font-bold justify-self-center h-fit text-sm md:!text-[20px] rounded-lg glow-bg-blue update px-[22px] py-[10px] z-5 duration-200 hover:animate-none whitespace-nowrap button hover:bg-[#019de4]"
              onClick={moveToUpdateApi}
            >
              UPGRADE NOW
            </button>
          </div>
        </div>
        <div className="limit w-full items-center justify-between mt-[38px] mb-[40px] flex gap-2 ">
          <DataCard
            title={t("word_left")}
            tooltip_id="test"
            info={10}
            tooltip="Test"
            icon={MdToken}
          />

          <DataCard
            title={t("word_left")}
            tooltip_id="test"
            info={10}
            tooltip="Test"
            icon={FaAddressBook}
          />

          <DataCard
            title={t("second_number")}
            tooltip_id="test"
            info={info && info.max_minute ? Number(info.max_minute * 60) : 0}
            tooltip="Test"
            icon={MdFormatListNumbered}
          />

          <DataCard
            title={t("image_left")}
            tooltip_id="test"
            info={
              info && info.max_images
                ? Number(info.max_images - info.images_used)
                : 0
            }
            tooltip="Test"
            icon={FaImage}
          />
        </div>
        <ProgressBar
          title="Tài liệu của bạn"
          className="border border-blue-500 w-full h-[25px]  z-10 rounded-xl"
          value={35}
          clsContainer="mb-[45px] gap-1"
          size={"xl"}
        />
        <Image
          className="right-0 bottom-3 md:top-[10%] z-[0] absolute rotate-[30deg]"
          src={BackgrounDashboard}
          alt="dashboard"
        />
      </div>
    </>
  );
};

export default DashboardInfo;
