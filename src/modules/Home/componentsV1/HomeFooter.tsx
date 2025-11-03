import Link from "next/link";

const HomeFooter = () => {
  const FooterLinks = [
    {
      label: "Work",
      href: "/gallery",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Privacy",
      href: "/privacy",
    },
  ];
  return (
    <nav className="flex flex-col items-center gap-3 text-gray-600 py-12">
      <div className="w-32 h-px bg-stone-400 mb-2"></div>
      {FooterLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-sm uppercase text-stone-700 hover:text-stone-400 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default HomeFooter;
