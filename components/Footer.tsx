export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-10 text-center text-xs text-muted">
      <p>© {new Date().getFullYear()} Rohith Katuku. Built with Next.js, Tailwind, and Framer Motion.</p>
      <div className="mt-3 flex justify-center gap-4">
        <a href="https://github.com/rohithkatuku" target="_blank" rel="noreferrer" className="hover:text-accent">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/rohithkatuku" target="_blank" rel="noreferrer" className="hover:text-accent">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
