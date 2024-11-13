export interface AISEOSelector {
  title: string;
  description: string;
  image?: string;
  isFavorite?: boolean;
  slug: string;
  category: string;
}

export const configAISEOSelector: AISEOSelector[] = [
  {
    title: "Nghiên cứu từ khóa",
    description:
      "Tìm kiếm và phân tích từ khóa tiềm năng, đánh giá mức độ cạnh tranh và đưa ra gợi ý từ khóa phù hợp, theo dõi thứ hạng từ khóa.",
    // image: "/images/writer_a.jpg",
    isFavorite: true,
    slug: "keyword-analysis",
    category: "analysis",
  },
  {
    title: "Viết tiêu đề",
    description:
      "Tạo tiêu đề hấp dẫn và tối ưu hóa SEO, thu hút người đọc và cải thiện thứ hạng trên kết quả tìm kiếm.",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "title-generate",
    category: "generate",
  },
  {
    title: "Viết outline",
    description:
      "Lập dàn ý chi tiết cho bài viết và tổ chức nội dung một cách logic và hiệu quả.",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "outline-generate",
    category: "generate",
  },
  {
    title: "Viết chi tiết",
    description:
      "Hỗ trợ viết nội dung chi tiết, đảm bảo nội dung tối ưu hóa SEO; cung cấp thông tin hữu ích và thu hút người đọc.",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "post-generate",
    category: "generate",
  },
  {
    title: "Viết bài theo 3 bước",
    description: "Tạo một bài viết hoàn chỉnh sau khi gộp cả 3 bước.",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "3-step-generate",
    category: "generate",
  },
];

export interface AISEOStep {
  title: string;
  step: number;
  isActive: boolean;
}

export const configAISEOStep: AISEOStep[] = [
  { title: "Viết tiêu đề", step: 1, isActive: true },
  { title: "Viết outline", step: 2, isActive: false },
  { title: "Viết chi tiết", step: 3, isActive: false },
];
