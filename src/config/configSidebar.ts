import { NavbarLinkComponentProps } from "@/components/SidebarComponent/NavbarLinkComponent";
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
];
