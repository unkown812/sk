import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../index.css'
import {
  LayoutDashboard,
  Users,
  BookOpen,
  CalendarCheck,
  TrendingUp,
  CreditCard,
  Settings,
  LogOut,
  X
} from 'lucide-react';
import { useUser } from '../../context/UserContext';
import './Layout.css';

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const { logout } = useUser();

  return (
    <div className="flex h-full flex-col bg-grey-500 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-4 lg:justify-center">
        <div className="flex items-center">
          <img src="/src/assets/logo.png" alt="" className="size-20 mt-4"/>
          <h1 className="ml-2 text-xl font-bold text-gray-900" >SK Tutorials</h1>
        </div>
        <button
          title='close'
          onClick={onClose}
          className="rounded-md p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <nav className="space-y-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                isActive
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
              }`
            }
          >
            <LayoutDashboard className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/students"
            className={({ isActive }) =>
              `flex items-center rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                isActive
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
              }`
            }
          >
            <Users className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            <span>Students</span>
          </NavLink>

          <NavLink
            to="/fees"
            className={({ isActive }) =>
              `flex items-center rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                isActive
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
              }`
            }
          >
            <CreditCard className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            <span>Fees</span>
          </NavLink>

          <NavLink
            to="/attendance"
            className={({ isActive }) =>
              `flex items-center rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                isActive
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
              }`
            }
          >
            <CalendarCheck className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            <span>Attendance</span>
          </NavLink>

          <NavLink
            to="/performance"
            className={({ isActive }) =>
              `flex items-center rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                isActive
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
              }`
            }
          >
            <TrendingUp className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            <span>Performance</span>
          </NavLink>

          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `flex items-center rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                isActive
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
              }`
            }
          >
            <BookOpen className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            <span>Courses</span>
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `flex items-center rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                isActive
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-primary'
              }`
            }
          >
            <Settings className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            <span>Settings</span>
          </NavLink>
        </nav>
      </div>

      <div className="border-t border-gray-200 p-4">
        <button
          onClick={logout}
          className="flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-300 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500/50"
        >
          <LogOut className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
