import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-sm">
        &copy; {currentYear} Sandip Chavda. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold text-center">
          Made by Sandip Chavda 👨‍💻.
        </span>
      </p>
    </footer>
  );
}
