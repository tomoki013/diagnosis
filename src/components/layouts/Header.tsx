import Link from "next/link";
import { Button } from "@/components/ui/Button";

const Header = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              占い・診断館
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {/* 将来的に検索機能などをここに配置 */}
            <Link href="/diagnosis/create">
              <Button variant="primary">診断を作成する</Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
