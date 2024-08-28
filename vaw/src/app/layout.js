// src/app/layout.js
"use client";

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Dashboard />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
