import { Globe2, Share2, Store } from 'lucide-react';

const platformLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Safety Tips', path: '/how-it-works#safety' },
];

const supportLinks = ['Contact Support', 'Privacy Policy', 'Terms of Service'];

export default function CampusFooter({ onNavigate }) {
  const handleLinkClick = (event, path) => {
    event.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_0.8fr_0.8fr]">
          <div>
            <a
              href="/landing"
              onClick={(event) => handleLinkClick(event, '/landing')}
              className="flex items-center gap-2 font-bold text-brand-navy"
            >
              <Store className="h-5 w-5 text-blue-700" aria-hidden="true" />
              CampusMarket
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
              Built for students, by students. A safer, smarter way to trade on campus.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Platform
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.path}
                    onClick={(event) => handleLinkClick(event, link.path)}
                    className="transition hover:text-blue-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Support
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-500">
              {supportLinks.map((label) => (
                <li key={label}>
                  <a href="#" className="transition hover:text-blue-600">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-slate-200 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2024 CampusMarket. Built for students, by students.</p>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Language settings"
              className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white hover:text-blue-600"
            >
              <Globe2 className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#"
              aria-label="Share CampusMarket"
              className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-white hover:text-blue-600"
            >
              <Share2 className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
