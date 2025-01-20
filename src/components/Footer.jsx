import React from 'react';
import { MdMonitor } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 m-2">
      <div className="bg-primary border border-accent rounded-lg flex items-center justify-between px-6 py-2">
        <div className="flex items-center gap-2">
          <MdMonitor className="text-accent" size={20} />
          <span className="text-sm text-gray-300">Deskify</span>
        </div>
        
        <div className="flex items-center">
          <span className="text-sm text-gray-400">© Copyright 2025</span>
        </div>
        
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-300">Made With Love</span>
          <span className="text-accent">♥</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;