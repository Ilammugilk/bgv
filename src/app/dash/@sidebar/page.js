"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Building2, Users, Clock, Settings } from 'lucide-react';

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Overview', href: '/organization', icon: <Building2 size={18} /> },
    { name: 'Employee Management', href: 'organization/employeelist', icon: <Users size={18} /> },
    { name: 'Timeline & History', href: '/timeline', icon: <Clock size={18} /> },
    { name: 'Organization Settings', href: '/orga_setting', icon: <Settings size={18} /> },
  ];

  return (
    <aside className="w-64 h-screen border-r bg-white p-5">
      <div className="mb-6">
        <div className="font-bold text-lg">TechCorp Solutions</div>
        <p className="text-sm text-gray-500">Organization Dashboard</p>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link href={item.href} key={item.name} passHref>
            <div className={`flex items-center px-3 py-2 rounded-md cursor-pointer 
              ${pathname === item.href ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
              {item.icon}
              <span className="ml-2 text-sm">{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;