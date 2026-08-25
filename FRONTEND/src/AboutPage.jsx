import {
  GraduationCap,
  Heart,
  Leaf,
  Recycle,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import CampusFooter from './CampusFooter';
import CampusNavbar from './CampusNavbar';
import { Component } from './components/ui/gradient-backgrounds';

const stats = [
  { label: 'Students on the platform', value: '10,000+' },
  { label: 'Items given a second life', value: '25,000+' },
  { label: 'Campuses supported', value: '40+' },
  { label: 'Verified student sellers', value: '98%' },
];

const values = [
  {
    icon: ShieldCheck,
    title: 'Trust & Safety First',
    description:
      'Every account is verified with a college email, and every listing is visible to your own campus community, not the open internet.',
  },
  {
    icon: Leaf,
    title: 'Sustainability by Design',
    description:
      'Reusing a textbook or a bike keeps it out of a landfill. We make it effortless for students to buy and sell instead of throw away.',
  },
  {
    icon: Heart,
    title: 'Built for Students',
    description:
      'No hidden fees, no bots, no outside buyers. Just a simple, affordable way to trade with people who understand student budgets.',
  },
];

export default function AboutPage({ user, onLogin, onNavigate, onLogout }) {
  return (
    <div className="relative min-h-screen">
      <Component />

      <div className="relative z-10 font-sans text-brand-navy">
        <CampusNavbar user={user} onLogin={onLogin} onNavigate={onNavigate} onLogout={onLogout} />

        <main>
          <section className="overflow-hidden bg-transparent">
            <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-24">
              <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500">
                <GraduationCap className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
                <span>About CampusMarket</span>
              </div>

              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-normal text-brand-navy sm:text-6xl">
                A marketplace made
                <span className="block text-blue-700">for your campus.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-brand-muted sm:text-lg">
                CampusMarket started with a simple observation: every semester, students throw
                away or leave behind perfectly good textbooks, furniture, and electronics because
                there was no easy, trustworthy way to sell them to someone nearby. We built the
                platform we wished we'd had.
              </p>
            </div>
          </section>

          <section className="bg-transparent pb-14 sm:pb-20">
            <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
              <div className="grid grid-cols-2 gap-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl shadow-blue-500/5 sm:grid-cols-4 sm:p-10">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl font-extrabold text-blue-700 sm:text-4xl">{stat.value}</p>
                    <p className="mt-2 text-xs font-medium leading-5 text-slate-500 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-transparent py-14 sm:py-20">
            <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-2xl font-bold tracking-normal text-brand-navy sm:text-3xl">
                  Our Mission
                </h2>
                <p className="mt-4 text-base leading-7 text-brand-muted">
                  Make it easy, safe, and affordable for students to buy and sell second-hand
                  goods within their own college community — reducing waste and student costs at
                  the same time.
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {values.map((value) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={value.title}
                      className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-blue-500/5"
                    >
                      <div className="grid h-11 w-11 place-items-center rounded-full bg-blue-50 text-blue-600">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="mt-4 text-base font-bold text-brand-navy">{value.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="bg-slate-50 py-16 sm:py-24">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <div className="grid items-center gap-10 rounded-3xl border border-slate-100 bg-white p-8 shadow-2xl shadow-blue-500/5 sm:p-12 md:grid-cols-[1fr_auto]">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                    <Users className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Our Story</span>
                  </div>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                    CampusMarket was founded by a small group of students tired of watching move-out
                    day fill dumpsters with furniture and electronics that classmates down the hall
                    would gladly have bought. We built a place where a college email is your ID, your
                    neighbors are your marketplace, and every listing supports a more sustainable
                    campus.
                  </p>
                </div>
                <Sparkles className="hidden h-16 w-16 text-blue-200 md:block" aria-hidden="true" />
              </div>
            </div>
          </section>

          <section className="bg-transparent py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
              <div className="rounded-3xl bg-blue-600 px-6 py-14 shadow-softblue sm:px-12 sm:py-16">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white">
                  <Recycle className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold leading-tight tracking-normal text-white sm:text-4xl">
                  Join thousands of students trading smarter.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-blue-50 sm:text-base">
                  See how buying and selling on CampusMarket works, from listing to pickup.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigate('/how-it-works')}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-lg shadow-blue-950/10 transition hover:bg-slate-50"
                >
                  See How It Works
                </button>
              </div>
            </div>
          </section>
        </main>

        <CampusFooter onNavigate={onNavigate} />
      </div>
    </div>
  );
}
