import { useEffect, useRef, useState } from 'react';
import {
  Bell,
  Bookmark,
  ChevronDown,
  LogOut,
  Package,
  Settings,
  ShoppingCart,
  Store,
  Tags,
  UserRound,
} from 'lucide-react';
import { getFullName, getInitials } from './authStorage';

const navLinks = ['Browse', 'Sell', 'Deals', 'My Orders'];

const accountOptions = [
  { label: 'My Profile', path: '/profile', icon: UserRound },
  { label: 'My Orders', path: '/orders', icon: Package },
  { label: 'My Listings', path: '/listings', icon: Tags },
  { label: 'Saved Items', path: '/saved-items', icon: Bookmark },
  { label: 'Account Settings', path: '/settings', icon: Settings },
];

export default function CampusNavbar({ user, onLogin, onNavigate, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const initials = getInitials(user);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isMenuOpen]);

  const handleOptionClick = (path) => {
    setIsMenuOpen(false);
    onNavigate(path);
  };

  const handleLogoutClick = () => {
    setIsMenuOpen(false);
    onLogout();
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12"
      >
        <a href="#" className="flex shrink-0 items-center gap-2 font-bold text-blue-700">
          <Store className="h-5 w-5 stroke-[2.4]" aria-hidden="true" />
          <span className="text-lg tracking-normal">CampusMarket</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className={`relative py-2 text-sm transition ${
                link === 'Browse'
                  ? 'font-semibold text-blue-700 after:absolute after:inset-x-0 after:-bottom-[17px] after:h-0.5 after:rounded-full after:bg-blue-600'
                  : 'font-medium text-slate-500 hover:text-brand-navy'
              }`}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5 sm:gap-4">
          <button
            type="button"
            aria-label="Open cart"
            className="grid h-9 w-9 place-items-center rounded-full text-brand-navy transition hover:bg-slate-50"
          >
            <ShoppingCart className="h-[18px] w-[18px]" aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-label="Open notifications"
            className="grid h-9 w-9 place-items-center rounded-full text-brand-navy transition hover:bg-slate-50"
          >
            <Bell className="h-[18px] w-[18px]" aria-hidden="true" />
          </button>

          {user ? (
            <div ref={menuRef} className="relative">
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((current) => !current)}
                className="flex h-10 items-center gap-2 rounded-full bg-blue-50 px-1.5 pr-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-sm shadow-blue-600/25">
                  {initials}
                </span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    isMenuOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                role="menu"
                className={`absolute right-0 top-full mt-3 w-72 origin-top-right rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-300/40 transition-all duration-200 ${
                  isMenuOpen
                    ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
                    : 'pointer-events-none -translate-y-1 scale-95 opacity-0'
                }`}
              >
                <div className="flex items-center gap-3 border-b border-slate-100 px-3 py-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-sm shadow-blue-600/25">
                    {initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-900">{getFullName(user)}</p>
                    <p className="truncate text-xs text-slate-500">{user.email}</p>
                  </div>
                </div>

                <div className="py-2">
                  {accountOptions.map((option) => {
                    const Icon = option.icon;

                    return (
                      <button
                        key={option.label}
                        type="button"
                        role="menuitem"
                        onClick={() => handleOptionClick(option.path)}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                        {option.label}
                      </button>
                    );
                  })}
                </div>

                <div className="border-t border-slate-100 pt-2">
                  <button
                    type="button"
                    role="menuitem"
                    onClick={handleLogoutClick}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-slate-700 transition hover:bg-red-50 hover:text-red-600"
                  >
                    <LogOut className="h-4 w-4" aria-hidden="true" />
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={onLogin}
              className="rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
            >
              Log In
            </button>
          )}
        </div>
      </nav>

      <div className="border-t border-slate-100 px-5 py-2 md:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className={link === 'Browse' ? 'font-semibold text-blue-700' : 'font-medium text-slate-500'}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
