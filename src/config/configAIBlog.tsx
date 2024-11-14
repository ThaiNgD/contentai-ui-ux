export interface AIBlogSelector {
  title: string;
  description: string;
  image?: string;
  isFavorite?: boolean;
  slug: string;
  category: string;
}

export const configAIBlogSelector: AIBlogSelector[] = [
  {
    title: "Tối ưu nội dung theo SEO",
    description: "- Tối ưu nội dung có sẵn theo tiêu chuẩn SEO",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "optimize-content",
    category: "generate",
  },
  {
    title: "Phân tích nội dung đối thủ",
    description: "- Phân tích nội dung có sẵn theo ",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "analyze-content",
    category: "analysis",
  },
  {
    title: "Tạo ý tưởng",
    description: "- Brainstorming: Đề xuất ý tưởng chủ đề blog.\n ",
    // image: "/images/writer_a.jpg",
    isFavorite: true,
    slug: "generate-idea",
    category: "analysis",
  },
  {
    title: "Tạo dàn ý",
    description:
      "- Lập dàn ý chi tiết cho bài viết và tổ chức nội dung một cách logic và hiệu quả.",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "outline-generate",
    category: "generate",
  },
  {
    title: "Bài viết chi tiết",
    description:
      "- Hỗ trợ viết nội dung chi tiết, đảm bảo nội dung tối ưu hóa SEO; cung cấp thông tin hữu ích và thu hút người đọc.",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "post-generate",
    category: "generate",
  },
  {
    title: "Viết Blog theo 3 bước",
    description: "Tạo một bài viết hoàn chỉnh sau khi gộp cả 3 bước.",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "3-step-generate",
    category: "generate",
  },
];

export interface AIBlogStep {
  title: string;
  step: number;
  isActive: boolean;
}

export const configAIBlogStep: AIBlogStep[] = [
  { title: "Tạo ý tưởng", step: 1, isActive: true },
  { title: "Dàn ý", step: 2, isActive: false },
  { title: "Bài viết chi tiết", step: 3, isActive: false },
];
