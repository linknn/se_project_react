# 👗 WTWR — What To Wear? (Frontend)

A React application that helps users decide what to wear based on the weather.
Includes user registration, authorization, protected routes, user-specific items, and full JWT-based authentication connected to a custom backend.

🔗 **Backend Repository:**
👉 https://github.com/linknn/se_project_express

<!-- 🔗 **Live Demo:**
👉 https://linknn.github.io/se_project_react/ -->

---

## ⚡ Features

🔐 JWT Authentication (sign up, sign in, auto-login)

👤 Current User Context

🔒 Protected Profile Route

🧥 User-Owned Clothing Items

🌤️ Live Weather Display

📸 Avatar with Initials Fallback

📦 Reusable Modal System

---

## 🚀 Getting Started

```
git clone https://github.com/YOUR_USERNAME/wtwr-frontend
cd wtwr-frontend
npm install
npm start
```

The app runs at: http://localhost:3000/

Backend expected at: http://localhost:3001/

---

## 🔗 API Endpoints Used

POST /signup – register

POST /signin – login

GET /users/me – validate token / get user

GET /items – fetch clothing items

POST /items – add item (auth required)

DELETE /items/:id – delete item (owner only)

---

## 👤 Authentication Flow

Register → auto-login → JWT saved to localStorage

Login → JWT saved → user loaded from /users/me

App checks token on page load

Logout clears token and user state

---

## 🧥 Clothing Items (Profile Page)

Only the logged-in user’s items are shown

Delete button appears only for item owners

Items load globally on the main page

---

## 🧑‍💻 Tech Stack

React

React Router

Context API

CSS (BEM)

Custom API wrappers (api.js, auth.js)

---

## 🙌 Acknowledgments

Part of the TripleTen Web Development Bootcamp.
