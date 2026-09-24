const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/wilmarx-cayabyab/" },
  { label: "GitHub", href: "https://github.com/marx-wil" },
  { label: "Lab", href: "/lab" },
];

export default function Footer() {
  return (
    <footer className="bg-background px-page py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="text-foreground">Wilmarx</span>
          <span aria-hidden="true"> · </span>© {new Date().getFullYear()}
        </p>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#hero"
                className="transition-colors duration-200 hover:text-foreground"
              >
                Back to top ↑
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
