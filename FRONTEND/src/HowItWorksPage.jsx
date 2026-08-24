import {
  BadgeCheck,
  CircleDollarSign,
  Compass,
  Flag,
  HandCoins,
  ImagePlus,
  LockKeyhole,
  MessageSquare,
  Search,
  ShieldCheck,
  UserPlus,
} from 'lucide-react';
import CampusFooter from './CampusFooter';
import CampusNavbar from './CampusNavbar';
import { Component } from './components/ui/gradient-backgrounds';

const buyerSteps = [
  {
    icon: UserPlus,
    title: 'Sign up with your college email',
    description: 'Verify your student identity in seconds so you know every listing comes from someone on your own campus.',
  },
  {
    icon: Search,
    title: 'Browse or search the marketplace',
    description: 'Filter by category, price, and condition, or search for exactly what you need.',
  },
  {
    icon: MessageSquare,
    title: 'Express interest in an item',
    description: 'Let the seller know you want it. They can accept or decline your request directly on the platform.',
  },
  {
    icon: HandCoins,
    title: 'Pay and complete the transaction',
    description: 'Once the seller accepts, complete payment securely through CampusMarket to confirm the purchase.',
  },
];

const sellerSteps = [
  {
    icon: ImagePlus,
    title: 'Create a listing',
    description: 'Add photos, a description, condition, and category for the item you want to sell.',
  },
  {
    icon: CircleDollarSign,
    title: 'Set a fair price',
    description: 'Use our price guidance to see what similar items have sold for, then choose your asking price.',
  },
  {
    icon: BadgeCheck,
    title: 'Review buyer requests',
    description: 'Interested buyers reach out through the platform. Accept the offer that works for you.',
  },
  {
    icon: HandCoins,
    title: 'Get paid, item marked sold',
    description: 'Once the sale completes, a small commission is deducted and the rest is yours. Your listing is marked SOLD automatically.',
  },
];

const safetyFeatures = [
  {
    icon: ShieldCheck,
    title: 'Verified student accounts',
    description: 'Every user signs up with a college email address, keeping the marketplace within your campus community.',
  },
  {
    icon: LockKeyhole,
    title: 'Secure, tracked payments',
    description: 'Payments are processed and verified through the platform, never taken on trust from a screenshot.',
  },
  {
    icon: Flag,
    title: 'Easy reporting',
    description: 'See something suspicious? Report a listing in a click and our admin team will review it.',
  },
];

function StepList({ steps }) {
  return (
    <ol className="space-y-6">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <li
            key={step.title}
            className="flex gap-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl shadow-blue-500/5 sm:p-6"
          >
            <div className="flex shrink-0 flex-col items-center">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-sm shadow-blue-600/25">
                {index + 1}
              </span>
              {index < steps.length - 1 ? (
                <span className="mt-2 h-full w-px flex-1 bg-slate-100" aria-hidden="true" />
              ) : null}
            </div>
            <div className="pb-2">
              <div className="flex items-center gap-2 text-blue-600">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <h3 className="mt-1.5 text-base font-bold text-brand-navy">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-500">{step.description}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

export default function HowItWorksPage({ user, onLogin, onNavigate, onLogout }) {
  return (
    <div className="relative min-h-screen">
      <Component />

      <div className="relative z-10 font-sans text-brand-navy">
        <CampusNavbar user={user} onLogin={onLogin} onNavigate={onNavigate} onLogout={onLogout} />

        <main>
          <section className="overflow-hidden bg-transparent">
            <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-24">
              <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-500">
                <Compass className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
                <span>How It Works</span>
              </div>

              <h1 className="text-5xl font-extrabold leading-[1.05] tracking-normal text-brand-navy sm:text-6xl">
                Buying and selling,
                <span className="block text-blue-700">made simple.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-brand-muted sm:text-lg">
                Whether you're clearing out your dorm room or furnishing it, here's exactly what
                happens from the moment you sign up to the moment an item changes hands.
              </p>
            </div>
          </section>

          <section id="buying" className="bg-transparent py-14 sm:py-20">
            <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                  For Buyers
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-normal text-brand-navy sm:text-3xl">
                  Find what you need on campus
                </h2>
              </div>

              <StepList steps={buyerSteps} />
            </div>
          </section>

          <section id="selling" className="bg-slate-50 py-14 sm:py-20">
            <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                  For Sellers
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-normal text-brand-navy sm:text-3xl">
                  Turn your used items into cash
                </h2>
              </div>

              <StepList steps={sellerSteps} />

              <p className="mt-6 text-center text-xs leading-5 text-slate-500 sm:text-sm">
                CampusMarket keeps a small commission from each completed sale to keep the
                platform running — you'll always see the exact amount before you confirm a sale.
              </p>
            </div>
          </section>

          <section id="safety" className="bg-transparent py-14 sm:py-20">
            <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-2xl font-bold tracking-normal text-brand-navy sm:text-3xl">
                  Built-in safety at every step
                </h2>
                <p className="mt-4 text-base leading-7 text-brand-muted">
                  We designed CampusMarket so you never have to guess whether a listing or a
                  buyer is legitimate.
                </p>
              </div>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {safetyFeatures.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl shadow-blue-500/5"
                    >
                      <div className="grid h-11 w-11 place-items-center rounded-full bg-blue-50 text-blue-600">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="mt-4 text-base font-bold text-brand-navy">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="bg-slate-50 py-16 sm:py-24">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <div className="rounded-3xl bg-blue-600 px-6 py-14 text-center shadow-softblue sm:px-12 sm:py-16">
                <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-normal text-white sm:text-5xl">
                  Ready to buy or sell on campus?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-blue-50 sm:text-base">
                  Join your campus community and start trading in minutes.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => onNavigate('/landing#browse')}
                    className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-lg shadow-blue-950/10 transition hover:bg-slate-50"
                  >
                    Explore Marketplace
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('/landing#sell')}
                    className="inline-flex items-center justify-center rounded-lg border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Sell an Item
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <CampusFooter onNavigate={onNavigate} />
      </div>
    </div>
  );
}
