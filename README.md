# Sticky Flow 📌

**Sticky Flow** is a premium, modern, and highly-aesthetic Sticky Notes Wall application designed for the **ACM SIGKDD Recruitment – Web Development Domain Task**. Built as a fast, client-side React application, it provides a seamless workspace for brainstorming, categorizing, and visually organizing ideas.

!

**Deployment Link :** https://sticky-notes-wall-henna.vercel.app/

## ✨ Core Features

*   **Fluid Drag-and-Drop:** Seamlessly reorder notes by dragging and dropping them across the wall.
*   **Persistent Storage:** Zero backend setup required. All notes instantly save to local browser storage (`localStorage`) and persist securely across reloads.
*   **Pastel Color Categorization:** Select from a curated palette of 6 minimal pastel colors (Amber, Rose, Emerald, Sky, Purple, and Teal) to categorize notes visually.
*   **Pinning System:** Pin critical notes to lock their importance and keep them visually tracked.
*   **Organic Aesthetic:** Notes feature a randomized slight mathematical rotation (-2° to 2°) to emulate a natural, physical bulletin board.
*   **Precision UI/UX:** Features a beautiful 40/60 split-pane design, custom Segoe UI typography.
*   **Smart Limits:** Built-in safeguards preventing empty submissions and enforcing a 20-note maximum capacity to maintain screen organization.

## 🛠️ Technology Stack

*   **Frontend Framework:** React 18.
*   **Build Tool:** Vite (for lightning-fast Hot Module Replacement building).
*   **Styling Engine:** Tailwind CSS v4 (utilizing the native Vite plugin and `@theme` native pipeline, completely eliminating PostCSS bloat).
*   **Icons:** Lucide React.
*   **Typography:** Custom ingested *Segoe UI Semibold*.

## 🚀 Quick Start (Local Development)

Because Sticky Flow leverages the newest Tailwind v4 bundler architecture, setup is extremely simple.

### Installation Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/sticky-flow.git
    cd sticky-flow
    ```

2.  **Install exactly the dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Vite Development Server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:5173` to interact with the wall!

## 🤝 Contributing
Contributions, issues, and feature requests are always welcome! Feel free to check the issues page if you want to contribute.

---
*Built with ❤️ for ACM SIGKDD by Rajdeep Shaw.*
