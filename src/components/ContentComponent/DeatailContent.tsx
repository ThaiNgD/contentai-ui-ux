import Image from "next/image"

const DeatailContent = () => {
  return (
    <div className="flex p-4 gap-4">
      <Image src={''} alt="content" className="rounded-full border size-[50px]" />
      <div style={{
        display: "grid",
        gridTemplateColumns: "80% 20%",
        gap: 10,
      }} >
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold">
            Content
          </h3>
          <span className="opacity-45 block w-full overflow-hidden overflow-ellipsis whitespace-nowrap italic">
            Create an effective cold email to reach out to potential clients or partners.
          </span>
        </div>
        <span className="flex flex-col gap-1 whitespace-nowrap">
          in Workbook
          <span className=" opacity-45 italic">
            Jul 15, 2024
          </span>
        </span>
      </div>
    </div>
  )
}

export default DeatailContent
