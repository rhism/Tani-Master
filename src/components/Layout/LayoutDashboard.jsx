import React from 'react';
import Sidebar from '../../components/Layout/Sidebar';

const LayoutDahboard = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="fixed w-auto h-full md:w-0">
        <Sidebar />
      </div>

      {/* Konten Halaman */}
      <div className="ml-56 flex-1 px-3 py-3 gap-3 flex flex-col bg-slate-100 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default LayoutDahboard;