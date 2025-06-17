
import { Building2, User, UserCheck } from "lucide-react";

export const cardContent = [
  {
    icon: <Building2 className="h-8 w-8 text-[var(--white)]" />,
    title: "Organization Dashboard",
    subTitle: "Manage your team's verification process",
    content: [
      "Employee management & tracking",
      "Moonlighting detection & monitoring",
      "Timeline & activity history",
      "Organization settings & controls",
    ],
   buttonName:"Access Organization Dashboard" 
  },
  {
    icon: <User className="h-8 w-8 text-[var(--white)]" />,
    title: "Individual Dashboard",
    subTitle: "Manage your personal verification requests",
    content: [
      "Personal verification tracking",
      "Download verification reports",
      "Request new verifications",
      "Simple,user-friendly interface",
    ],
    buttonName:"Access Individual Dashboard"
  },
  {
    icon: <UserCheck className="h-8 w-8 text-[var(--white)]" />,
    title: "End User Dashboard",
    subTitle: "Upload documents and manage your verification",
    content: [
      "Upload required verification",
      "Track verification progress",
      "Manage work experience",
      "Public profile management",
    ],
   buttonName:"Access End User Dashboard"
  }
];
