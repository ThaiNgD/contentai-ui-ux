import { SelectedType } from "@/app/[locale]/(home)/ai-writer/page";

export interface AIWriterSelector {
  title: string;
  description: string;
  image?: string;
  isFavorite?: boolean;
  slug: string;
  category: string;
}

export const AIWriterSelectorType: SelectedType[] = [
  "business",
  "seo-optimization",
];

export const configAIWriterSelector: AIWriterSelector[] = [
  {
    title: "Competitor Analysis",
    description:
      "Phân tích đối thủ cạnh tranh: tên công ty, quy mô, đối tượng mục tiêu, mô tả",
    // image: "/images/writer_a.jpg",
    isFavorite: true,
    slug: "competitor-analysis",
    category: "business",
  },
  {
    title: "Content Strategy",
    description: "A highly skilled writer",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "content-strategy",
    category: "business",
  },
  {
    title: "Phân tích ý định người dùng",
    description: "Phân tích ý định người dùng, từ khóa, ý định, tiêu đề",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "user-intent-analysis",
    category: "seo-optimization",
  },
  {
    title: "Viết lại nội dung",
    description:
      "Viết lại nôi dung để loại bỏ đạo văn, bảo đảm nội dung nguyên bản",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "rewrite-content",
    category: "seo-optimization",
  },
  {
    title: "FAQ SEO",
    description: "Tạo mục FAQ SEO: câu hỏi, câu trả lời, chi tiết từ khóa",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "faq-seo",
    category: "seo-optimization",
  },
];
