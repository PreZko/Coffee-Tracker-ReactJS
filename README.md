# ☕ Coffee Tracker

[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://react.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-10.0+-orange)](https://firebase.google.com/)

A modern web application for coffee enthusiasts to track caffeine intake and analyze habits. Built with a focus on frontend development and Firebase integration.

![Coffee Tracker Screenshot](/screenshot.png)

## Features

### Core Functionality

- **Firebase Authentication**: Secure email/password login system
- **Coffee Logging**:
  - Track coffee type, price, and caffeine content
  - Interactive history display with hover details
- **Real-time Stats**:
  - Current caffeine level calculation
  - Average price per coffee
  - Consumption timeline visualization

### UI/UX Highlights

- Custom CSS from FantaCSS library
- Responsive grid layouts
- Dynamic hover effects
- Mobile-first design principles
- Themed color variables using CSS custom properties

## Tech Stack

**Frontend:**

- React 19 + Vite
- Custom CSS architecture
- Firebase Authentication

**Services:**

- Firebase Auth

## Installation & Setup

1. **Clone Repository**
   ```bash
   git clone https://github.com/PreZko/Coffee-Tracker-ReactJS
   cd Coffee-Tracker-ReactJS
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Firebase Rules Configuration**

   Firebase Console (**Firestore > Rules** tab):

   ```javascript
   service cloud.firestore {
     match /databases/{database}/documents {
       // Default deny-all rule
       match /{document=**} {
         allow read, write: if false;
       }

       // User-specific data access
       match /users/{userId} {
         allow read, write: if
           request.auth != null &&
           request.auth.uid == userId;
       }
     }
   }
   ```

4. **Set Environment Variables**

   ```env
   VITE_FIREBASE_APIKEY=your_firebase_key
   VITE_FIREBASE_AUTHDOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECTID=your_project_id
   VITE_FIREBASE_STORAGEBUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGINGSENDERID=your_messaging_sender_id
   VITE_FIREBASE_APIID=your_api_id
   ```

5. **Run development server**
   ```bash
   npm run dev
   ```

## Live Demo

Experience Caffiend live: https://prezko-coffee-tracker.netlify.app

## Contact

If you'd like to connect or have any questions, feel free to reach out:

- **Email**: presiyan_bankov@gmail.com
- **LinkedIn**: [Presiyan Bankov](https://linkedin.com/in/presiyan-bankov)
- **GitHub**: [PreZko](https://github.com/prezko)
