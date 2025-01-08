import { SelectedType } from "@/app/[locale]/(home)/ai-writer/page";

export interface AIWriterSelector {
  title: string;
  description: string;
  image?: string;
  isFavorite?: boolean;
  slug: string;
  category: SelectedType;
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
  {
    title: "Meta description SEO",
    description: "Viết meta description SEO, từ khóa, emoji",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "meta-description-seo",
    category: "seo-optimization",
  },
  {
    title: "Meta title SEO",
    description: "Viết meta title SEO, 60 ký tự, từ khóa, emoji",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "meta-title-seo",
    category: "seo-optimization",
  },
  {
    title: "Từ khóa dài",
    description: "Tạo bảng từ khóa: từ khóa, lượt tìm kiếm, tiêu đề, ghi chú",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "long-tail-keyword",
    category: "seo-optimization",
  },
  {
    title: "Tạo bài Blog chi tiết",
    description:
      "Tạo bài blog dài và phần FAQ, bao gồm tiêu đề, bảng, hình ảnh (marksdown), với từ khóa chính",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "content-blog-long-form",
    category: "seo-optimization",
  },
  {
    title: "Tạo Outline SEO - Tối ưu từ khóa",
    description:
      "Tạo dàn bài với 9 tiêu đề phụ, mỗi tiêu đê phụ gồm 2-3 điểm phụ, sử dụng từ khóa để gg hiểu rõ cấu trúc nội dung",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "create-outline-seo",
    category: "seo-optimization",
  },
  {
    title: "Tạo tiều đề SEO - Tối ưu từ khóa",
    description:
      "Tạo 10 tiêu đề cho bài viết blog, sử dụng từ khóa mục tiêu, tuân thử nguyên tắc SEO",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "create-title-seo",
    category: "seo-optimization",
  },
  {
    title: "Chính sách giao hàng",
    description:
      "Viết chính sách giao hàng: phương thức, khu vực, thời gian, phí vận chuyển",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "delivery-policy",
    category: "write-web-content",
  },
  {
    title: "Thư cảm ơn",
    description: "Viết thư cảm ơn khi đã sử dụng sản phẩm, dịch vụ",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "thankyou-letter",
    category: "write-email",
  },
  {
    title: "Chính sách bảo mật",
    description:
      "Viết chính sách bảo mật cho thương hiệu, gồm các phần giời thiệu, thong tin, quyền người dùng",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "privacy-policy",
    category: "write-web-content",
  },
  {
    title: "Tiêu đề Web",
    description: "Viết tiêu đề web dưới 60 ký tự, có từ khóa, giá trị đặc biệt",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "web-title",
    category: "write-web-content",
  },
  {
    title: "Tiêu đề phụ Web",
    description: "Viết tiêu đề phụ cho Web với mô tả sản phẩm",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "web-subtitle",
    category: "write-web-content",
  },
  {
    title: "Mô tả Web",
    description: "Viết đoạn mô tả Web với Tagline và đoạn văn chi tiết",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "web-description",
    category: "write-web-content",
  },
  {
    title: "Giới thiệu Web",
    description:
      "Viết trang giới thiệu, tầm nhìn, sứ mệnh, giá trị, hoạt động xã hội",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "web-introduction",
    category: "write-web-content",
  },
  {
    title: "Lợi ích Web",
    description:
      "Viết đoạn mô tả lợi ích web với khung lợi ích, đặc tính giải pháp",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "web-benefit",
    category: "write-web-content",
  },
  {
    title: "Đánh giá khách hàng",
    description:
      "Tạo lòi đánh giá khách hàng: nêu rõ tính năng, giải pháp với mô tả sản phẩm",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "customer-testimonials",
    category: "write-web-content",
  },
  {
    title: "Câu hỏi thường gặp",
    description:
      "Tạo mục FAQ với từ khóa, chi tiết về chủ đề, thúc đẩy người đọc khám phá thêm",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "faq",
    category: "write-web-content",
  },
  {
    title: "Outline Trang chủ - Tăng thứ hạng SEO một cách hiệu quả",
    description:
      "Xây dụng cấu trúc SILO chi tiết cho trang web với từ khóa dành cho doanh nghiệp, tối ưu hóa SEO để leo vị trí hàng đầu trên Google",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "outline-homepage",
    category: "write-web-content",
  },
  {
    title: "Quảng cáo Facebook",
    description:
      "Tạo nội dung quảng cái trên Facebook 600 từ, tuyên tải giá trị thương hiệu và mô tả sản phẩm",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "facebook-ads",
    category: "write-advertisement",
  },
  {
    title: "Mô tả Instagram Bio",
    description:
      "Viết Instagram Bio với emoji, hasgtag, kêu gọi hành động, dưới 150 ký tự",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "instagram-bio-description",
    category: "write-advertisement",
  },
  {
    title: "Ý tưởng quảng cáo",
    description:
      "Viết ý tưởng quảng cáo sáng tạo, mục tiêu, khách hàng, thông điệp, kênh, kêu gọi",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "ad-idea",
    category: "write-advertisement",
  },
  {
    title: "Viết quảng cáo PAS",
    description:
      "Quảng cáo theo mô hình PAS: Vấn đề, kích thích, giải pháp với từ khóa",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "pas-advertising",
    category: "write-advertisement",
  },
  {
    title: "Tiêu đề quảng cáo Google",
    description:
      "Viết tiêu đề quảng cáo với mô tả sản phẩm, từ khóa dưới 30 ký tự",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "google-ad-title",
    category: "write-advertisement",
  },
  {
    title: "Meta description SEO cho Blog",
    description:
      "Viết meta description SEO cho blog: 130 ký tự, từ khóa, emoji",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "meta-blog-description",
    category: "write-blog",
  },
  {
    title: "Mở bài Blog",
    description: "Viết đoạn mở bài: đặt câu hỏi, nêu vấn đề, nhấn mạnh từ khóa",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "open-lesson-blog",
    category: "write-blog",
  },
  {
    title: "Luận điểm chính",
    description:
      "Viết đoạn luận điểm chính với 4 ý chính, 3 gach đầu dòng, từ khóa trong 400 ký tự",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "main-talking-points",
    category: "write-blog",
  },
  {
    title: "Kết bài Blog",
    description:
      "Viết đoạn kết bài blog: tóm tắt, nhấn mạnh, kêu gọi hành động, > 300 từ",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "blog-conclusion",
    category: "write-blog",
  },
  {
    title: "Tạo kêu gọi hành động",
    description:
      "Viết lời kêu gọi hành động cho bài viết blog, tiêu đề và từ khóa",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "call-to-action",
    category: "write-blog",
  },
  {
    title: "Bài viết Listicle",
    description:
      "Viết bài Listicle hấp dẫn với thông tin hữu ích, cấu trúc tốt, tiêu đề bắt mắt",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "listicle-writing",
    category: "write-blog",
  },
  {
    title: "Kịch bản Livestream",
    description: "Tạo kịch bản Live: thời gian, cảnh quay, nội dung, người dẫn",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "livestream-script",
    category: "video-script",
  },
  {
    title: "Kịch bản Video giới thiệu",
    description:
      "Viết kịch bản Video giới thiệu: câu chuyện, cảnh quay, lời dẫn, nhịp độ",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "introduction-video-script",
    category: "video-script",
  },
  {
    title: "Kịch bản Video quàng cáo",
    description:
      "Viết kịch bản video quảng cáo: câu chuyện, cảnh quay, lời dẫn, nhịp độ",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "ad-video-script",
    category: "video-script",
  },
  {
    title: "Tạo mô tả Video Youtube",
    description: "Tạo mô tả video Youtube bằng từ khóa và tên thương hiệu",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "youtube-video-script",
    category: "video-script",
  },
  {
    title: "Tiêu đề email thu hút",
    description: "Viết tiêu đề email hấp dẫn, có emoji, viết hoa chữ đầu",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "attractive-email-title",
    category: "write-email",
  },
  {
    title: "Email thông báo hủy đơn hàng",
    description: "Viết email thông báo đơn hàng bị hủy với nội dung cụ thể",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "cancel-order-notification",
    category: "write-email",
  },
  {
    title: "Soạn thảo Email",
    description: "Viết Email hoàn chỉnh về nội dung sản phẩm dịch vụ",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "dratf-email",
    category: "write-email",
  },
  // {
  //   title: "Tạo Email marketing HTML tùy chỉnh",
  //   description:
  //     "Tạo mẫu email marketing HTML, tùy chỉnh với màu sắc, font, hình ảnh, và nội dung đáp ứng với mobile, desktop",
  //   // image: "/images/writer_b.jpg",
  //   isFavorite: true,
  //   slug: "create-email-marketing-html",
  //   category: "write-email",
  // },
  {
    title: "Bài chào hàng hiệu quả",
    description:
      "Tạo bài chào hàng hiệu quả với mô tả sản phẩm, nhắm vào kh mục tiêu",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "sales-pitch",
    category: "write-sale-content",
  },
  {
    title: "Viết nội dung mô hình trước-sau",
    description:
      "Quảng cáo mô hinh trước - sau: tư vấn đề đến giải pháp với sản phẩm/dịch vụ",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "model-before-after-content",
    category: "write-sale-content",
  },
  {
    title: "Vấn đề - Giải pháp",
    description:
      "Viết quảng cáo mô hình vấn đề - giải pháp, làm nổi bật lợi ích của sản phẩm/dịch vụ",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "problem-solution",
    category: "write-sale-content",
  },
  {
    title: "Dàn ý Landing Page",
    description:
      "Tạo dan ý Landing Page giới thiệu, đặc điểm, đấnh giá, kêu gọi",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "landing-page-outline",
    category: "write-sale-content",
  },
  {
    title: "Lợi ích sản phẩm",
    description:
      "Viết mô tả sản phẩm theo mô hình lợi ích, đặc tính, ưu điểm và thương hiệu và mô tả",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "product-benefit",
    category: "write-sale-content",
  },
  {
    title: "Mô tả sản phẩm",
    description:
      "Viết mô tả sản phẩm với lợi ích, cách dùng, cam kết, kêu gọi, dùng markdown",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "product-description",
    category: "write-sale-content",
  },
  {
    title: "Tiêu đề sản phẩm",
    description:
      "Tạo tiêu đề sản phẩm: thương hiệu, mẫu mã, thông số,kích thước",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "product-title",
    category: "write-sale-content",
  },
  {
    title: "Tạo chân dung khách hàng",
    description:
      "Viết chi tiết chân dung khách hàng, gồm tên, tuổi, nghề nghiệp, sở thích,và lý do chọn sản phẩm",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "create-customer-portrait",
    category: "write-sale-content",
  },
  {
    title: "Hero's Journey",
    description:
      "Tạo bài viết kể chuyện, trên Facebook, và hương hiệu theo khung hình",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "hero-journey",
    category: "write-sale-content",
  },
  {
    title: "Công thức kể chuyện",
    description:
      "Viết bài Facebook với thường kể chuyện, về tương lai, về thương hiệu, bối cảnh,từ bối cảnh, xung đột, giải quyết đến bài học",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "storytelling-formula",
    category: "write-facebook-content",
  },
  {
    title: "HoneyComb_Tối ưu hóa bài viết",
    description:
      "Tạo bài đăng Facebook hấp dẫn, tối ưu Content Honeycomb, nhấn mạnh giá trị và độ tin cậy của sản phẩm",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "honeycomp-optimize-post",
    category: "write-facebook-content",
  },
  {
    title: "Công thức Kim tự tháp ngược",
    description:
      "Tạo bài viết fb theo khung kim tự tháp ngược, nhấn mạnh thông tin quan trọng về thương hiệu",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "inverted-pyramid-formula",
    category: "write-facebook-content",
  },
  {
    title: "Công thức FAB - Tối ưu hóa nội dung tiếp thị",
    description:
      "Tạo bài viết Facebook cho thương hiệu, nhấn mạnh đặc điểm, ưu điểm và lợi ích của sản phẩm/dịch vụ",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "fab-formula",
    category: "write-facebook-content",
  },
  {
    title: "Tạo câu Hook cho video Tiktok",
    description:
      "Đề xuất 10 câu Hook cho Video quảng cáo dựa trên thông tin thương hiệu và từ khóa mong muốn. Điều chỉnh các tiêu đề để thu hút và gây tò mò cho người xem thoe gợi ý đã cho",
    // image: "/images/writer_b.jpg",
    isFavorite: false,
    slug: "create-tiktok-video-hook",
    category: "write-tiktok-content",
  },
  {
    title: "Sáng tạo kịch bản",
    description:
      "Tạo kịch bản Tiktok 15-60 giây hấp dẫn, truyền tải thông điệp quảng cáo, nhanh chóng và thúc đẩy hành động ",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "script-creation",
    category: "write-tiktok-content",
  },
  {
    title: "Ý tưởng cho Video Tiktok",
    description:
      "Tạo ý tưởng video Tiktok: chuyện cá nhân, kết nối người theo dõi ",
    // image: "/images/writer_b.jpg",
    isFavorite: true,
    slug: "video-tiktok-idea",
    category: "write-tiktok-content",
  },
];

export const AIWriterSelectorType: SelectedType[] = [
  "all",
  ...new Set(configAIWriterSelector.map((selector) => selector.category)),
];
