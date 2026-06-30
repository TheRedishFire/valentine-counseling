import Link from "next/link";
import { CheckCircle2, ArrowLeft, Phone } from "lucide-react";

export default function InsurancePage() {
  // Array updated to match your exact .svg file names
  // I commented out ComPsych and MHNet for now since they are missing from your folder!
  const acceptedInsurances = [
    { name: "Aetna", logo: "/images/insurance/aetna.svg" },
    { name: "BlueCross and BlueShield", logo: "/images/insurance/bluecross.svg" },
    // { name: "ComPsych", logo: "/images/insurance/compsych.svg" }, 
    { name: "First Health", logo: "/images/insurance/first-health.svg" },
    { name: "GEHA", logo: "/images/insurance/geha.svg" },
    { name: "Humana", logo: "/images/insurance/humena.svg" }, 
    // { name: "MHNet Behavioral Health", logo: "/images/insurance/mhnet.svg" }, 
    { name: "Optum", logo: "/images/insurance/optum.svg" },
    { name: "SelectHealth", logo: "/images/insurance/selecthealth.svg" },
    { name: "United Medical Resources (UMR)", logo: "/images/insurance/umr.svg" },
  ];

  return (
    <div className="font-sans antialiased bg-[#f9f8f6] text-[#241f21] min-h-screen">
      
      {/* ============================================
          SIMPLE HEADER
          ============================================ */}
      <header className="bg-white border-b border-[#e5e0d8] px-8 py-6 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-2xl leading-none tracking-wide text-[#241f21]">VALENTINE</span>
          <span className="font-sans text-[0.55rem] tracking-[0.25em] uppercase mt-1 text-gray-500">Counseling</span>
        </Link>
        <Link href="/" className="flex items-center gap-2 text-sm font-bold text-[#ad8330] hover:text-[#8e6b27] transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </header>

      {/* ============================================
          PAGE CONTENT
          ============================================ */}
      <main className="max-w-[1000px] mx-auto px-6 py-16">
        
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-[#241f21] mb-4">Accepted Insurance</h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We believe therapy should be accessible. Valentine Counseling is proud to be in-network with a variety of major insurance providers. 
          </p>
        </div>

        {/* Insurance Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {acceptedInsurances.map((insurance, index) => (
            <div 
              key={index} 
              className="bg-white border border-[#e5e0d8] rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-[0_4px_15px_rgb(0,0,0,0.02)] hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-shadow duration-300 min-h-[160px]"
            >
              {/* Logo Area */}
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <img 
                  src={insurance.logo} 
                  alt={`${insurance.name} logo`} 
                  className="max-h-full max-w-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300"
                />
              </div>
              
              {/* Text Name (Always visible to ensure clarity) */}
              <h3 className="text-sm font-bold text-gray-800">{insurance.name}</h3>
            </div>
          ))}
        </div>

        {/* Out of Network / Contact Callout */}
        <div className="mt-16 bg-[#365010] rounded-2xl p-8 md:p-12 text-white text-center shadow-lg">
          <h2 className="font-serif text-3xl mb-4">Don't see your provider?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Insurance coverage can be confusing. If you don't see your specific plan listed, or if you have questions about your benefits and out-of-network options, please reach out. We are happy to help you verify your coverage.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="tel:4356190326" 
              className="flex items-center gap-2 bg-white text-[#365010] px-8 py-3.5 rounded-full text-[0.9rem] font-bold tracking-wide hover:bg-[#e5e0d8] transition-all"
            >
              <Phone className="w-4 h-4" /> (435) 619-0326
            </a>
            <a 
              href="mailto:jillevalentine@gmail.com" 
              className="flex items-center gap-2 border-[1.5px] border-white text-white px-8 py-3.5 rounded-full text-[0.9rem] font-bold tracking-wide hover:bg-white hover:text-[#365010] transition-all"
            >
              Email Us
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}