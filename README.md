# CampusMarket

A secure, hyper-local peer-to-peer marketplace concept designed for university students to buy, sell, discover, and reuse campus essentials.

> **Current Project Status:** Frontend prototype / initial implementation.  
> The current version focuses on the user interface, navigation, account-flow prototype, and client-side user persistence. Backend authentication, database integration, real marketplace transactions, and server-side security are not implemented yet.

## 📌 Project Overview

CampusMarket is a campus-focused marketplace where students can buy, sell, and discover products within their university community.

The current implementation provides the frontend foundation for:

- Browsing marketplace products
- Viewing product information
- Creating a user account
- Logging in
- Maintaining basic user information
- Viewing a user profile
- Navigating through account sections
- Saving basic user session information locally
- Responsive campus marketplace UI

---

##  Current Features

###  Landing / Marketplace Page

The current landing page includes:

- CampusMarket branding
- Hero section
- "Explore Marketplace" button
- "Sell an Item" button
- Trending products
- Product cards
- Product names
- Prices
- Product conditions
- Seller information
- Product images
- Wishlist-style buttons
- Responsive navigation

The current marketplace products are **static demo data**.

---

###  User Registration

The registration page currently includes:

- First Name
- Last Name
- College / University Email
- Password
- Confirm Password
- Password visibility toggle
- `.edu` email warning
- Create Account button
- Login navigation

The current registration flow stores basic user information in browser `localStorage`.

---

###  Login

The login interface includes:

- College / University Email
- Password
- Password visibility toggle
- Login button
- Registration navigation

The current login system is a **frontend prototype** and does not yet verify credentials against a backend database.

---

##  Client-Side User Management

The project contains utility functions for managing the current user:

```javascript
createCampusMarketUser()
saveCampusMarketUser()
getCampusMarketUser()
clearCampusMarketUser()
getFullName()
getInitials()
getCollegeFromEmail()