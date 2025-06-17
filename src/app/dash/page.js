'use client';

import { useState } from 'react';
import { Building2, User, UserCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Footer from '@/components/Footer/page';
import Navbar from '@/components/navbar/page';


export default function DashboardSelector({ onClientTypeSelect, initialType }) {
    const [selectedType, setSelectedType] = useState(initialType || null);
  const router = useRouter();

  const handleTypeSelect = (type) => {
    setSelectedType(type);

    // Redirect to organization dashboard
    if (type === 'organization') {
      router.push('/dash/overview');
}


  };

  if (selectedType) return null;


    return (
        <>
            <Navbar/>
            <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-black mb-4">
                            Welcome to Background Verification Team
                        </h1>
                        <p className="text-xl text-gray-600">
                            Select your account type to access your dashboard
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Organization Card */}
                        <div
                            className="border-2 border-gray-200 hover:border-black cursor-pointer rounded-xl bg-white shadow-md"
                        >
                            <div className="text-center p-6">
                                <div className="mx-auto w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                                    <Building2 className="h-8 w-8 text-white" />
                                </div>
                                <h2 className="text-2xl font-semibold text-black mb-2">
                                    Organization Dashboard
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    Manage your team's verification process
                                </p>
                                <div className="space-y-2 text-sm text-left">
                                    <FeatureItem text="Employee management & tracking" />
                                    <FeatureItem text="Moonlighting detection & monitoring" />
                                    <FeatureItem text="Timeline & activity history" />
                                    <FeatureItem text="Organization settings & controls" />
                                </div>
                                <button className="mt-6 w-full bg-black hover:bg-gray-800 text-white py-2 rounded-md"
                                onClick={()=>handleTypeSelect('organization')}>
                                    Access Organization Dashboard
                                </button>
                            </div>
                        </div>

                        {/* Individual Card */}
                        <div
                            className="border-2 border-gray-200 hover:border-black cursor-pointer rounded-xl bg-white shadow-md"
                            onClick={() => handleTypeSelect('individual')}
                        >
                            <div className="text-center p-6">
                                <div className="mx-auto w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                                    <User className="h-8 w-8 text-white" />
                                </div>
                                <h2 className="text-2xl font-semibold text-black mb-2">
                                    Individual Dashboard
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    Manage your personal verification requests
                                </p>
                                <div className="space-y-2 text-sm text-left">
                                    <FeatureItem text="Personal verification tracking" />
                                    <FeatureItem text="Download verification reports" />
                                    <FeatureItem text="Request new verifications" />
                                    <FeatureItem text="Simple, user-friendly interface" />
                                </div>
                                <button className="mt-6 w-full bg-black hover:bg-gray-800 text-white py-2 rounded-md">
                                    Access Individual Dashboard
                                </button>
                            </div>
                        </div>

                        {/* End User Card */}
                        <div
                             className="border-2 border-gray-200 hover:border-black cursor-pointer rounded-xl bg-white shadow-md"
                            onClick={() => handleTypeSelect('enduser')}
                        >
                            <div className="text-center p-6">
                                <div className="mx-auto w-16 h-16 bg-black rounded-full flex items-center justify-center mb-4">
                                    <UserCheck className="h-8 w-8 text-white" />
                                </div>
                                <h2 className="text-2xl font-semibold text-black mb-2">
                                    End User Dashboard
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    Upload documents and manage your verification
                                </p>
                                <div className="space-y-2 text-sm text-left">
                                    <FeatureItem text="Upload required documents" />
                                    <FeatureItem text="Track verification progress" />
                                    <FeatureItem text="Manage work experience" />
                                    <FeatureItem text="Public profile management" />
                                </div>
                                <button className="mt-6 w-full bg-black hover:bg-gray-800 text-white py-2 rounded-md">
                                    Access End User Dashboard
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}


function FeatureItem({ text }) {
    return (
        <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span>{text}</span>
        </div>
    );
}

