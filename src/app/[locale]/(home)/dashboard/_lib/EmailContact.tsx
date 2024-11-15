import TeamImage from "@/assets/images/team.png";
import InputEmailField from "@/components/CustomField/InputEmailField";
import { Button } from "flowbite-react";
import Image from "next/image";
const EmailContact = () => {
  return (
    <div className="flex border rounded-xl py-8 px-10 flex-col items-center">
      <Image src={TeamImage} alt="Image" />
      <p className="mb-6 text-center text-xl font-semibold">
        Add your team members’ email address <br /> to start collaborating. 📧
      </p>
      <div className="w-full flex flex-col gap-2">
        <InputEmailField />
        <Button className="bg-blue-500 hover:bg-blue-600 hover:translate-y-0.5 hover:shadow-none shadow-lg rounded-2xl !py-0">
          Mời bạn bè
        </Button>
      </div>
    </div>
  );
};

export default EmailContact;
