import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="w-full px-4 py-1">
        <p className="w-full text-center text-[12px] font-sans">
          Designed and Developed by{" "}
          <Link
            href="https://www.edgenroots.com/"
            className="text-stone-200 hover:text-stone-400 transition-colors underline"
          >
            EdgeNroots
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
