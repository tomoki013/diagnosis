import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <Link href="/terms" className="hover:text-white">
            利用規約
          </Link>
          <Link href="/privacy" className="hover:text-white">
            プライバシーポリシー
          </Link>
        </div>
        <div className="mt-6 text-center">
          <p>&copy; {currentYear} 占い・診断館. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
