'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Bell,
  Menu,
  X,
  Shield,
  FileText,
  Users,
  Settings,
  Home
} from 'lucide-react';

export default function BGVLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded hover:bg-gray-100"
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">BGV Platform</h1>
            </div>
          </div>
   
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded hover:bg-gray-100">
              <Bell className="h-5 w-5" />
            </button>
            <Link href="/" className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm rounded hover:bg-gray-100">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Link>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
          md:translate-x-0 md:static md:inset-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="flex flex-col h-full pt-16 md:pt-0">
            <nav className="flex-1 px-4 py-6 space-y-2">
              <SidebarItem icon={<FileText className="h-5 w-5" />} label="Dashboard" />
              <SidebarItem icon={<Users className="h-5 w-5" />} label="BGV Requests" />
              <SidebarItem icon={<Shield className="h-5 w-5" />} label="Documents" />
              <SidebarItem icon={<Settings className="h-5 w-5" />} label="Settings" />
            </nav>

            <div className="p-4 border-t">
              <div className="border rounded-lg p-4 bg-gray-50">
                <h4 className="text-sm font-medium">BGV Platform</h4>
                <p className="text-sm text-gray-600 mt-1">Background Verification System</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 md:ml-0 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label }) {
  return (
    <button className="flex items-center w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded">
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
}
