import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">404</h1>
          <h2 className="text-2xl font-semibold">পণ্য পাওয়া যায়নি</h2>
          <p className="text-muted-foreground">
            আপনি যে পণ্যটি খুঁজছেন তা পাওয়া যায়নি।
          </p>
          <Button asChild className="cursor-pointer">
            <Link href="/products">পণ্যের পাতায় ফিরে যান</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
