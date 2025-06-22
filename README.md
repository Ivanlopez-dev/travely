<div align="center">
  <br />
  <h1>✈️ Travely</h1>
    <!-- <a href="https://" target="_blank">
      <img src="public/readme/hero.png" alt="Project Banner">
    </a> -->
  <br />

  <div>
     <img src="https://img.shields.io/badge/-React-blue?style=for-the-badge&logoColor=white&logo=react&color=09f" alt="react" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Syncfusion-black?style=for-the-badge&logoColor=white&logo=syncfusion&color=181758" alt="syncfusion" />
  </div>

<h3 align="center">Travel Agency Platform 🌍</h3>

   <div align="center">
     A modern travel agency platform with an admin dashboard and public site.
    </div>
</div>

## 📝 <a name="table">Table of Contents</a>

1. 🤖 [**Introduction**](#introduction)
2. ⚙️ [**Tech Stack**](#tech-stack)
3. ⚡ [**Features**](#features)
4. 🚀 [**Quick Start**](#quick-start)

## <a name="introduction">🤖 Introduction</a>

Travely is an Admin Dashboard that allows users Generate AI-powered trip itineraries based on country, travel style, interests, group type, and budget — and book trips with ease.


## <a name="tech-stack">⚙️ Tech Stack</a>

- [**React 19**](https://react.dev)
- [**React Router v7**](https://reactrouter.com/home)
- [**TypeScript**](https://www.typescriptlang.org/)
- [**TailwindCSS v4**](https://tailwindcss.com/)
- [**Syncfusion**](https://www.syncfusion.com/)
- [**Vite**](https://vite.dev/)
- [**Appwrite**](https://appwrite.io)

## <a name="features">⚡ Features</a>

- **Admin dashboard** with **trip** and **user management**

- **AI-powered** trip itinerary generator

- **Detailed trip** overview

- **User growth metrics** chart and trip statistics

- **Secure user authentication** and data management

- **Responsive UI** with a modern design

- **Modular code architecture** with reusable components

### 🔨 Incoming features ( WIP )

- Trip booking functionality on the public website (Public Landing page)

<br>


## <a name="quick-start">🚀 Quick Start</a>

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [**Git**](https://git-scm.com/)
- [**Node.js**](https://nodejs.org/en)
- [**npm**](https://www.npmjs.com/) (Node Package Manager)

### Cloning the Repository

```bash
git clone https://github.com/Ivanlopez-dev/travely.git
cd travely
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Environment Variables

Create a new file named `.env` in the root of your project and add the following content:

```env
# Syncfusion
VITE_SYNCFUSION_LICENSE_KEY=

# Appwrite
VITE_APPWRITE_PROJECT_ID=
VITE_APPWRITE_API_ENDPOINT=
VITE_APPWRITE_API_KEY=
VITE_APPWRITE_DATABASE_ID=
VITE_APPWRITE_USERS_COLLECTION_ID=
VITE_APPWRITE_ITINERARY_COLLECTION_ID=
VITE_BASE_URL="http://localhost:5173"

# Gemini
GEMINI_API_KEY=

# Unsplash
UNSPLASH_ACCESS_KEY="
```
Replace the values with your actual credentials. You can obtain these credentials by each Syncfusion/Appwrite/Gemini/Unsplash dashboard page

### Running the Project

```bash
npm run dev
```

Open [**http://localhost:5173/**](http://localhost:5173/) in your browser to view the project.

### 📝 Notes:

- ❌ The root page ( **' / '** ) is empty for the moment. 
- 🔒 You must be logged in with Google first 
- 👑 And have an Admin role to actually access into the Dashboard

This can be annoying cause can not see anything at first instance, but I will be working on the public landing page.

Incoming features:
<br>
(🔨 Work in Progress)
- **Trip booking functionality** on the public website (Landing page)
