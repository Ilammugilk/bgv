'use client';

import React from 'react';
import {
  FileText,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import BGVLayout from './BVLayout';

export default function BGVDashboard() {
  return (
    <BGVLayout>
      <div className="p-6 space-y-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">BGV Dashboard</h1>
            <p className="text-gray-600">Background Verification Management System</p>
          </div>
          <span className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm font-medium">
            Demo Mode
          </span>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Requests"
            value="12"
            icon={<FileText className="h-6 w-6" />}
            color="blue"
          />
          <StatsCard
            title="In Progress"
            value="5"
            icon={<Clock className="h-6 w-6" />}
            color="yellow"
          />
          <StatsCard
            title="Completed"
            value="7"
            icon={<CheckCircle className="h-6 w-6" />}
            color="green"
          />
          <StatsCard
            title="Pending Review"
            value="2"
            icon={<AlertTriangle className="h-6 w-6" />}
            color="red"
          />
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-1">Recent Activity</h2>
          <p className="text-sm text-gray-500 mb-4">Latest updates on BGV requests</p>
          <div className="space-y-4">
            <ActivityItem
              title="BGV Request BGV2501001 Completed"
              description="Background verification for John Doe has been completed"
              time="2 hours ago"
              status="completed"
            />
            <ActivityItem
              title="New Document Uploaded"
              description="Aadhaar card uploaded for BGV2501002"
              time="4 hours ago"
              status="pending"
            />
            <ActivityItem
              title="Verification In Progress"
              description="Employment verification started for BGV2501003"
              time="1 day ago"
              status="progress"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-1">Quick Actions</h2>
          <p className="text-sm text-gray-500 mb-4">Common tasks you can perform</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="bg-black text-white rounded-lg flex flex-col items-center justify-center p-4 h-24">
              <Users className="h-6 w-6 mb-1" />
              <span className="text-sm font-medium">New BGV Request</span>
            </button>
            <button className="border border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 h-24 hover:bg-gray-100">
              <FileText className="h-6 w-6 mb-1" />
              <span className="text-sm font-medium">View Reports</span>
            </button>
            <button className="border border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 h-24 hover:bg-gray-100">
              <AlertTriangle className="h-6 w-6 mb-1" />
              <span className="text-sm font-medium">Support</span>
            </button>
          </div>
        </div>
      </div>
    </BGVLayout>
  );
}

// === Reusable Components ===

const StatsCard = ({ title, value, icon, color }) => {
  const colorClasses = {
    blue: 'text-blue-600 bg-blue-100',
    yellow: 'text-yellow-600 bg-yellow-100',
    green: 'text-green-600 bg-green-100',
    red: 'text-red-600 bg-red-100',
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 flex justify-between items-center">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${colorClasses[color]}`}>
        {icon}
      </div>
    </div>
  );
};

const ActivityItem = ({ title, description, time, status }) => {
  const statusColors = {
    completed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    progress: 'bg-blue-100 text-blue-800',
  };

  return (
    <div className="flex items-start justify-between border-b pb-4 last:border-b-0">
      <div>
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
        {status}
      </span>
    </div>
  );
};
