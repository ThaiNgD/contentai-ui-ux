"use client";

const Header = (): JSX.Element => {
  // const { t } = useTranslation();
  return (
    <header>
      <div className="shadow-sm">
        <div className="relative flex w-full items-center bg-white px-5 py-2.5 dark:bg-black">
          <div className="flex items-center justify-end gap-[5px] space-x-1.5 dark:text-[#d0d2d6] sm:flex-1 lg:space-x-2 ltr:ml-auto ltr:sm:ml-0 rtl:mr-auto rtl:space-x-reverse sm:rtl:mr-0">
            <div className="dropdown flex shrink-0 border-l-2 pl-2"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
