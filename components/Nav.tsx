const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold text-slate-100 focus-visible:outline-accent">
          RK
        </a>
        <ul className="flex flex-wrap gap-4 text-sm text-muted sm:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-accent focus-visible:outline-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
