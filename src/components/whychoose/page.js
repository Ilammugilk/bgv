import { ShieldCheck, Search, Users, FileText } from 'lucide-react';

export default function Whychoose() {
  const features = [
    {
      icon: <ShieldCheck size={40} className="text-bgv-teal text-dark mb-3" />,
      title: "Comprehensive Verification",
      description: "Multi-layered checks covering employment history, education, criminal records, and more to ensure thorough screening."
    },
    {
      icon: <Search size={40} className="text-bgv-teal text-dark mb-3" />,
      title: "Accurate & Fast Results",
      description: "Industry-leading accuracy with results delivered within days, not weeks, through our advanced verification technology."
    },
    {
      icon: <Users size={40} className="text-bgv-teal text-dark mb-3" />,
      title: "Candidate-Friendly Process",
      description: "Streamlined experience for candidates with transparent progress tracking and minimal information requests."
    },
    {
      icon: <FileText size={40} className="text-bgv-teal text-dark mb-3" />,
      title: "Compliance Guaranteed",
      description: "Stay compliant with all relevant regulations including GDPR, FCRA, and local privacy laws across jurisdictions."
    }
  ];

  return (
    <section className="py-16 px-28 bg-gray-100">
      <div className="container">
        <div className="text-center">
          <h2 className="text-dark font-extrabold text-3xl mb-3">Why Choose The Hiring Partner</h2>
          <p className="mx-auto text-lg text-gray-500" style={{ maxWidth: '800px' }}>
            Our platform combines cutting-edge technology with industry expertise to deliver reliable verification results.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white shadow-lg hover:shadow-xl rounded-lg p-5 flex flex-col items-center text-center">
              <div className="flex justify-center items-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

