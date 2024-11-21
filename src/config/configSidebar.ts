import { NavbarLinkComponentProps } from "@/components/SidebarComponent/NavbarLinkComponent";
import { BsFileRichtextFill } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { FaFilePdf, FaFolderOpen } from "react-icons/fa6";
import { GiBullseye } from "react-icons/gi";
import { ImBlog } from "react-icons/im";
import { IoImage } from "react-icons/io5";
import {
  MdEditDocument,
  MdMarkUnreadChatAlt,
  MdOutlinePostAdd,
} from "react-icons/md";
import { PiSpeakerHighFill } from "react-icons/pi";
import { RiMenuSearchFill, RiSeoFill } from "react-icons/ri";
export const sidebarList: NavbarLinkComponentProps[] = [
  {
    link: "dashboard",
    title: "Trang chủ",
    icon: FaHome,
  },
  {
    link: "content-management",
    title: "Quản lý nội dung",
    icon: FaFolderOpen,
    isDisable: true,
  },
  {
    link: "ai-writer",
    title: "AI Writer",
    icon: BsFileRichtextFill,
  },
  {
    link: "ai-seo",
    title: "AI SEO",
    icon: RiSeoFill,
  },
  {
    link: "ai-blog",
    title: "AI Blog",
    icon: ImBlog,
  },
  {
    link: "ai-chat",
    title: "AI Chat",
    icon: MdMarkUnreadChatAlt,
    isDisable: true,
  },
  {
    link: "ai-vision",
    title: "AI Vision",
    icon: GiBullseye,
    isDisable: true,
  },
  {
    link: "ai-chat-image",
    title: "AI Chat Image",
    icon: IoImage,
    isDisable: true,
  },
  {
    link: "ai-pdf-chat",
    title: "AI PDF Chat",
    icon: FaFilePdf,
    isDisable: true,
  },
  {
    link: "ai-rewriter",
    title: "AI Rewriter",
    icon: MdEditDocument,
  },
  {
    link: "generate-article",
    title: "Generate Article",
    icon: MdOutlinePostAdd,
  },
  {
    link: "speech-to-text",
    title: "Speech To Text",
    icon: PiSpeakerHighFill,
    isDisable: true,
  },
  {
    link: "ai-plagiarism",
    title: "AI Plagiarism",
    icon: RiMenuSearchFill,
    isDisable: true,
  },
  // {
  //   link: "/ai-detector",
  //   title: "AI Detector",
  //   icon: PiDetectiveFill,
  //   isDisable: true,
  // },
];
