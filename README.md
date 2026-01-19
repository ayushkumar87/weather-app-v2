<!-- Force Vercel Rebuild: 2026-01-20 -->
# Weather Project

This is a full-stack weather application consisting of a React frontend and a Node./Express backend.

## Prerequisites

- [Node.js](https://nodejs.org/) (ensure it is installed and added to your PATH).
- 🚀 Live Demo -> https://weatherapp-frontend-dg8z.onrender.com/

## Project Structure

- `client/`: React application (Vite)
- `server/`: Node.js Express API

## Quick Start (Any Editor)

You will need to run the client and server in **separate terminals**.

### 1. Setup Backend (Server)

Open a terminal, navigate to the `server` folder, install dependencies, and start it:

```bash
cd server
npm install
# Create .env file
cp .env.example .env
# Open .env and add your MONGO_URI
npm run dev
```

*The server will typically run on `http://localhost:3000` or `http://localhost:5000` depending on configuration.*

### 2. Setup Frontend (Client)

Open a **second** terminal, navigate to the `client` folder, install dependencies, and start it:

```bash
cd client
npm install
npm run dev
```

*The client will typically run on `http://localhost:5173`.*

### 3. Open in Browser

Once both are running, open your browser and go to:
[http://localhost:5173](http://localhost:5173)

---

## Editor-Specific Tips

### VS Code 
1.  Open the root `weatherproject` folder.
2.  Open the integrated terminal (`Ctrl + ~`).
3.  Split the terminal (click the `+` or split icon).
4.  In the left terminal: `cd server` -> `npm run dev`.
5.  In the right terminal: `cd client` -> `npm run dev`.

### WebStorm / IntelliJ
1.  Open the project.
2.  Open the Terminal tool window.
3.  Open two terminal tabs.
4.  Run the commands as described above.

### Sublime Text / Atom / Notepad++
These editors might not have built-in terminals (or require plugins).
1.  Open the project files.
2.  Open your computer's standalone terminal app (Command Prompt, PowerShell, Terminal).
3.  Open two separate windows/tabs of your terminal app.
4.  Navigate to the project folder in both and follow the "Quick Start" steps.
 


## Deployment

### Frontend Deployment (Vercel)

1.  Push your code to GitHub.
2.  Go to [Vercel](https://vercel.com) and sign up with GitHub.
3.  Click **Add New** > **Project**.
4.  Select your weatherproject repository.
5.  Configure the project:
    *   **Root Directory**: Click 'Edit' and select client.
    *   **Framework Preset**: Vite.
    *   **Build Command**: 
pm run build (default).
    *   **Output Directory**: dist (default).
6.  Click **Deploy**.

### Backend Deployment (Render)

1.  Go to [Render](https://render.com) and sign up.
2.  Click **New +** > **Web Service**.
3.  Connect your GitHub repository.
4.  Configure the service:
    *   **Root Directory**: server.
    *   **Runtime**: Node.
    *   **Build Command**: 
npm install.
    *   **Start Command**: 
ode index.js.
5.  **Environment Variables**:
    *   Add MONGO_URI and any other secrets from your .env file.
6.  Click **Create Web Service**.

*Note: The free tier on Render spins down after inactivity, so the first request might be slow.*

### Local Production Build

To run the optimized production build locally:

**Client:**
\\\ash
cd client
npm run build
npm run preview
\\\

**Server:**
\\\ash
cd server
npm start
\\\

