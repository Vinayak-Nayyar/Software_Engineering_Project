import { useEffect, useState } from 'react';
import {
  FallbackAccountPage,
  ListingsPage,
  OrdersPage,
  ProfilePage,
  SavedItemsPage,
  SettingsPage,
} from './AccountPages';
import AboutPage from './AboutPage';
import AuthModal from './AuthModal';
import HowItWorksPage from './HowItWorksPage';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import { clearCampusMarketUser, getCampusMarketUser, saveCampusMarketUser } from './authStorage';

const LANDING_PATH = '/landing';
const LOGIN_PATH = '/login';
const PROFILE_PATH = '/profile';
const ORDERS_PATH = '/orders';
const LISTINGS_PATH = '/listings';
const SAVED_ITEMS_PATH = '/saved-items';
const SETTINGS_PATH = '/settings';
const ABOUT_PATH = '/about';
const HOW_IT_WORKS_PATH = '/how-it-works';

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [user, setUser] = useState(() => getCampusMarketUser());

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
      setUser(getCampusMarketUser());
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigate = (targetPath) => {
    const targetUrl = new URL(targetPath, window.location.origin);
    const nextPath = `${targetUrl.pathname}${targetUrl.hash}`;

    window.history.pushState({}, '', nextPath);
    setPath(targetUrl.pathname);

    window.setTimeout(() => {
      if (targetUrl.hash) {
        document.querySelector(targetUrl.hash)?.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      window.scrollTo({ top: 0, left: 0 });
    }, 0);
  };

  const completeAuthFlow = (account) => {
    const nextUser = saveCampusMarketUser(account);
    setUser(nextUser);
    navigate(LANDING_PATH);
  };

  const logout = () => {
    clearCampusMarketUser();
    setUser(null);
    navigate(LANDING_PATH);
  };

  const sharedPageProps = {
    user,
    onLogin: () => navigate(LOGIN_PATH),
    onNavigate: navigate,
    onLogout: logout,
  };

  if (path === LANDING_PATH) {
    return <LandingPage {...sharedPageProps} />;
  }

  if (path === LOGIN_PATH) {
    return <LoginPage onLogin={completeAuthFlow} onSignUp={() => navigate('/')} />;
  }

  if (path === ABOUT_PATH) {
    return <AboutPage {...sharedPageProps} />;
  }

  if (path === HOW_IT_WORKS_PATH) {
    return <HowItWorksPage {...sharedPageProps} />;
  }

  if (!user && [PROFILE_PATH, ORDERS_PATH, LISTINGS_PATH, SAVED_ITEMS_PATH, SETTINGS_PATH].includes(path)) {
    return <LoginPage onLogin={completeAuthFlow} onSignUp={() => navigate('/')} />;
  }

  if (path === PROFILE_PATH) {
    return <ProfilePage {...sharedPageProps} />;
  }

  if (path === ORDERS_PATH) {
    return <OrdersPage {...sharedPageProps} />;
  }

  if (path === LISTINGS_PATH) {
    return <ListingsPage {...sharedPageProps} />;
  }

  if (path === SAVED_ITEMS_PATH) {
    return <SavedItemsPage {...sharedPageProps} />;
  }

  if (path === SETTINGS_PATH) {
    return <SettingsPage {...sharedPageProps} />;
  }

  if (path !== '/') {
    return <FallbackAccountPage {...sharedPageProps} />;
  }

  return <AuthModal onCreateAccount={completeAuthFlow} onLoginClick={() => navigate(LOGIN_PATH)} />;
}

export default App;
