export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  image?: string;
  videoUrl?: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "মোহাম্মদ রহিম",
    rating: 5,
    comment:
      "অসাধারণ মানের জালি টুপি। বগুড়ার ঐতিহ্যবাহী কারুকাজ দেখে মুগ্ধ হয়েছি।",
    date: "২০২৪-০১-১৫",
    image: "/satisfied-customer.png",
  },
  {
    id: "2",
    name: "আব্দুল করিম",
    rating: 5,
    comment: "দারুণ সার্ভিস এবং প্রোডাক্ট কোয়ালিটি। সময়মতো ডেলিভারি পেয়েছি।",
    date: "২০২৪-০২-০৮",
    videoUrl: "https://www.facebook.com/share/v/1CPbpV112k",
  },
  {
    id: "3",
    name: "নাসির উদ্দিন",
    rating: 4,
    comment: "ভালো মানের টুপি। দাম অনুযায়ী খুবই ভালো। আবার কিনব।",
    date: "২০২৪-০২-২০",
  },
  {
    id: "4",
    name: "সালাহউদ্দিন",
    rating: 5,
    comment: "বিয়ের জন্য কিনেছিলাম। সবাই প্রশংসা করেছে। ধন্যবাদ।",
    date: "২০২৪-০৩-০৫",
    image: "/wedding-customer.png",
  },
];
