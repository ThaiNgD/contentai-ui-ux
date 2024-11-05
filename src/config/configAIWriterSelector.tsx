export interface AIWriterSelector {
  title: string;
  description: string;
  image?: string;
  isFavorite?: boolean;
  slug: string;
  category: string;
}

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
];
