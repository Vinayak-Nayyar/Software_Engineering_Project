export const CAMPUS_MARKET_USER_KEY = 'campusMarketUser';

function titleCase(value) {
  return value
    .split(/[\s._-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(' ');
}

function getNamePartsFromEmail(email) {
  const localPart = email?.split('@')[0] ?? '';
  const parts = localPart.split(/[\s._-]+/).filter(Boolean);

  return {
    firstName: titleCase(parts[0] ?? 'Student'),
    lastName: titleCase(parts.slice(1).join(' ')),
  };
}

export function createCampusMarketUser(account) {
  const email = account.email?.trim() ?? '';
  const emailName = getNamePartsFromEmail(email);
  const firstName = account.firstName?.trim() || emailName.firstName;
  const lastName = account.lastName?.trim() || emailName.lastName;

  return {
    firstName,
    lastName,
    email,
    isLoggedIn: true,
  };
}

export function saveCampusMarketUser(account) {
  const user = createCampusMarketUser(account);
  localStorage.setItem(CAMPUS_MARKET_USER_KEY, JSON.stringify(user));
  return user;
}

export function getCampusMarketUser() {
  try {
    const rawUser = localStorage.getItem(CAMPUS_MARKET_USER_KEY);

    if (!rawUser) {
      return null;
    }

    const user = JSON.parse(rawUser);
    return user?.isLoggedIn ? user : null;
  } catch {
    return null;
  }
}

export function clearCampusMarketUser() {
  localStorage.removeItem(CAMPUS_MARKET_USER_KEY);
}

export function getFullName(user) {
  return [user?.firstName, user?.lastName].filter(Boolean).join(' ') || user?.email || 'Student';
}

export function getInitials(user) {
  const nameInitials = [user?.firstName, user?.lastName]
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase())
    .join('');

  if (nameInitials) {
    return nameInitials.slice(0, 2);
  }

  return (user?.email?.charAt(0) ?? 'S').toUpperCase();
}

export function getCollegeFromEmail(email) {
  const domain = email?.split('@')[1]?.toLowerCase() ?? '';

  if (!domain) {
    return 'Not provided';
  }

  const schoolName = domain.replace(/\.edu$/, '').split('.').filter(Boolean).pop();

  return schoolName ? `${titleCase(schoolName)} University` : domain;
}