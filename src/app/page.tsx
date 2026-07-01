import Link from "next/link";
import { Menu, MapPin, Phone, Mail, CheckCircle2, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="font-sans antialiased bg-[#f9f8f6] text-[#241f21]">
      
      {/* ============================================
          ANNOUNCEMENT BAR
          ============================================ */}
      <div className="bg-[#241f21] text-white text-[13px] py-3 px-4 flex justify-center items-center gap-8 flex-wrap tracking-wider relative z-50">
        <span>Free 15-minute consultation available.</span>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[#ad8330]" />
            <a href="tel:4356190326" className="hover:text-[#ad8330] transition-colors font-bold">435.619.0326</a>
          </span>
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#ad8330]" />
            <a href="mailto:jillevalentine@gmail.com" className="hover:text-[#ad8330] transition-colors font-bold">jillevalentine@gmail.com</a>
          </span>
        </div>
      </div>

      {/* ============================================
          MAIN HERO SECTION
          ============================================ */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: "url('/images/bryce.jpg')", 
            backgroundSize: "cover", 
            backgroundPosition: "center" 
          }}
        >
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        {/* HEADER */}
        <header className="absolute top-0 left-0 w-full z-40 px-8 py-6 flex items-center justify-between text-white">
          <button className="flex items-center gap-3 text-lg font-medium hover:text-white/80 transition-colors">
            <Menu className="w-7 h-7" strokeWidth={1.5} />
            Menu
          </button>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-center flex flex-col items-center">
            <span className="font-serif text-[2.5rem] leading-none tracking-wide">VALENTINE</span>
            <span className="font-sans text-[0.6rem] tracking-[0.25em] uppercase mt-1 opacity-90">Counseling</span>
          </Link>

          <Link 
            href="mailto:jillevalentine@gmail.com" 
            className="hidden md:inline-block bg-[#ad8330] hover:bg-[#8e6b27] transition-colors text-white px-7 py-3 rounded-full text-[0.8rem] font-bold tracking-wide"
          >
            Request an Appointment
          </Link>
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 text-center text-white px-4 mt-12 max-w-4xl mx-auto">
          <h1 className="font-serif text-[3.5rem] leading-[1.1] mb-6 font-medium text-white drop-shadow-2xl">
            Clinical Social Work & Therapy <br />
            in Washington County
          </h1>
          
          <p className="font-sans text-[0.85rem] tracking-widest uppercase mb-10 max-w-2xl mx-auto leading-relaxed font-medium text-white/90">
            Assisting individuals in finding the tools they already possess to heal, create change, and find inner peace.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:4356190326" 
              className="border-[1.5px] border-white text-white px-8 py-3.5 rounded-full text-[0.85rem] font-bold tracking-wide hover:bg-white hover:text-[#241f21] transition-all"
            >
              Call for a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* ============================================
          CONTENT SECTION: ABOUT & INFO
          ============================================ */}
      <main className="max-w-[1200px] mx-auto px-6 py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left Column: Bio */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl mb-2 text-[#241f21]">Jill Valentine, LCSW</h2>
            <p className="text-[#ad8330] font-bold tracking-wide text-sm uppercase mb-8">Verified by Psychology Today • 26 Years in Practice</p>
            
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                I truly believe that every individual has the innate ability to heal and to find inner peace. My job is to assist in helping individuals find the tools they already possess, and to provide support for this process. I'm open to providing significant direction or gentle nudgings, depending on what you're ready for. 
              </p>
              <p>
                My ideal client is one that simply has the courage and desire to change. I work best with abuse issues, depression, anxiety, relationship issues, and grief. I have had experience working with individuals, couples, and adolescents, assisting them in dealing with a range of issues including post-traumatic stress/childhood abuse, sexual issues, and divorce.
              </p>
              <p>
                I have found some clients were initially embarrassed or felt shame at some of the feelings they had. You will find me to be open and accepting to all feelings and thoughts from within. One of my strengths is the ability to be empathetic and see the positives in people.
              </p>
            </div>
            
            {/* Specialties */}
            <div className="mt-12">
              <h3 className="text-2xl mb-6 border-b border-[#e5e0d8] pb-4">Top Specialties</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3"><CheckCircle2 className="text-[#365010] w-5 h-5" /> <span>Depression</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="text-[#365010] w-5 h-5" /> <span>Trauma and PTSD</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="text-[#365010] w-5 h-5" /> <span>Relationship Issues</span></div>
              </div>
            </div>

            {/* Expertise */}
            <div className="mt-10">
              <h3 className="text-xl mb-4 font-serif">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {["Anxiety", "Dissociative Disorders (DID)", "Divorce", "Domestic Abuse", "Domestic Violence", "Eating Disorders", "Grief", "Life Coaching", "Parenting", "Sex Therapy", "Spirituality"].map((item) => (
                  <span key={item} className="bg-white border border-[#e5e0d8] text-sm px-4 py-2 rounded-full text-gray-600">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar Info Cards */}
          <div className="space-y-8">
            
            {/* Location Card */}
            <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#e5e0d8]">
              <h3 className="text-xl mb-6 font-serif border-b border-[#e5e0d8] pb-4">Practice at a Glance</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#ad8330] shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900 mb-1">Available In-Person</p>
                    <p className="text-gray-600">321 North Mall Dr<br/>Suite F 202<br/>Saint George, UT 84790</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <Phone className="w-5 h-5 text-[#ad8330] shrink-0" />
                  <a href="tel:4356190326" className="font-bold hover:text-[#ad8330] transition-colors">(435) 619-0326</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#ad8330] shrink-0" />
                  <a href="mailto:jillevalentine@gmail.com" className="font-bold hover:text-[#ad8330] transition-colors break-all">jillevalentine@gmail.com</a>
                </div>
              </div>
            </div>

            {/* Finances Card */}
            <div className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#e5e0d8]">
              <h3 className="text-xl mb-6 font-serif border-b border-[#e5e0d8] pb-4">Finances & Insurance</h3>
              <div className="mb-6">
                <p className="text-2xl font-serif text-[#365010] mb-1">$105</p>
                <p className="text-xs tracking-wider uppercase text-gray-500 font-bold">Per Individual Session</p>
                <p className="text-sm mt-3 text-gray-600"><strong>Payment Methods:</strong> Cash, Check, Mastercard, Visa</p>
              </div>
              
              <p className="font-bold text-sm mb-3 text-gray-900">Accepted Insurance Plans:</p>
              <ul className="text-sm text-gray-600 space-y-1.5 list-disc pl-4 mb-5">
                <li>Aetna</li>
                <li>BlueCross and BlueShield</li>
                <li>ComPsych</li>
                <li>First Health</li>
                <li>GEHA</li>
                <li>Humana</li>
                <li>MHNet Behavioral Health</li>
                <li>Optum</li>
                <li>SelectHealth</li>
                <li>United Medical Resources (UMR)</li>
              </ul>
              
              {/* THE NEW LINK */}
              <Link 
                href="/insurance" 
                className="inline-flex items-center gap-2 text-[#ad8330] font-bold text-[0.9rem] hover:text-[#8e6b27] transition-colors group"
              >
                View All Accepted Insurance 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Qualifications Card */}
            <div className="bg-[#365010] text-white p-8 rounded-xl shadow-md">
              <h3 className="text-xl mb-4 font-serif border-b border-white/20 pb-4">Client Focus</h3>
              <ul className="text-sm space-y-2 text-white/90">
                <li><strong>Age:</strong> Teens, Adults</li>
                <li><strong>Participants:</strong> Individuals</li>
                <li className="pt-4 mt-4 border-t border-white/20">
                  <strong>License:</strong> State of Utah / 131973-3501
                </li>
              </ul>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}