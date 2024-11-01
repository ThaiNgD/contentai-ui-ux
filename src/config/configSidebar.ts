import { NavbarLinkComponentProps } from "@/components/SidebarComponent/NavbarLinkComponent";
import { BsFileRichtextFill } from "react-icons/bs";
import { FaFolderOpen, FaHome } from "react-icons/fa";
export const sidebarList: NavbarLinkComponentProps[] = [
  {
    link: "/",
    title: "Trang chủ",
    icon: FaHome,
  },
  {
    link: "/content-management",
    title: "Quản lý nội dung",
    icon: FaFolderOpen,
  },
  {
    link: "/ai-writer",
    title: "AI Writer",
    icon: BsFileRichtextFill,
  },
];
