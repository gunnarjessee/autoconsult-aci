import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-[url('/hero_image.jpg')] bg-cover bg-center bg-no-repeat text-white section-padding text-center relative">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container-max relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Automative Consulting Inc
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Professional Pre-Purchase Vehicle Inspections
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-80">
            Protect your investment with comprehensive vehicle inspections before buying from private sellers.
            We use a standardized inspection checklist to ensure thorough, professional evaluations that give you peace of mind in consumer-to-consumer transactions.
          </p>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed opacity-75 italic">
            With over 50 years of experience as a mechanic
          </p>
          <button className="btn-primary">
            Schedule Your Inspection
          </button>
        </div>
      </header>

      {/* Inspection Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
            Our Inspection Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="service-card">
              <h3 className="text-slate-800 mb-4 text-xl font-semibold">Complete Vehicle Inspection</h3>
              <p className="text-gray-600 leading-relaxed">
                Full inspection using our standardized checklist, covering engine, transmission, brakes, suspension, electrical systems, and body condition.
              </p>
            </div>
            <div className="service-card">
              <h3 className="text-slate-800 mb-4 text-xl font-semibold">Safety Systems Check</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive evaluation of all safety features including airbags, ABS, stability control, and lighting systems.
              </p>
            </div>
            <div className="service-card">
              <h3 className="text-slate-800 mb-4 text-xl font-semibold">History & Documentation</h3>
              <p className="text-gray-600 leading-relaxed">
                VIN verification, title check, maintenance records review, and accident history assessment.
              </p>
            </div>
            <div className="service-card">
              <h3 className="text-slate-800 mb-4 text-xl font-semibold">Test Drive Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Professional road test to evaluate drivability, handling, and identification of any unusual noises or performance issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-slate-800">
            Why Choose Professional Pre-Purchase Inspections?
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl mb-4 text-gray-700 leading-relaxed">
              When buying a vehicle from a private seller, you don't have the protection of a dealership warranty.
              Our inspections use a standardized professional checklist, providing the peace of mind you need before making one of your largest investments.
            </p>
            <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed font-semibold">
              With over 50 years of experience as a mechanic, we bring unmatched expertise to every inspection.
            </p>
            <p className="text-base md:text-lg mb-8 text-gray-600 leading-relaxed italic">
              Note: We specialize in pre-purchase vehicle inspections. We do not perform state inspections.
            </p>
            <ul className="text-left max-w-2xl mx-auto space-y-3">
              <li className="flex items-center text-lg text-gray-600">
                <span className="text-blue-500 font-bold mr-3 text-xl">✓</span>
                Uncover hidden problems dealers might miss
              </li>
              <li className="flex items-center text-lg text-gray-600">
                <span className="text-blue-500 font-bold mr-3 text-xl">✓</span>
                Standardized professional inspection checklist used for every inspection
              </li>
              <li className="flex items-center text-lg text-gray-600">
                <span className="text-blue-500 font-bold mr-3 text-xl">✓</span>
                Independent third-party evaluation
              </li>
              <li className="flex items-center text-lg text-gray-600">
                <span className="text-blue-500 font-bold mr-3 text-xl">✓</span>
                Detailed report for negotiation leverage
              </li>
              <li className="flex items-center text-lg text-gray-600">
                <span className="text-blue-500 font-bold mr-3 text-xl">✓</span>
                50 years of experience as a mechanic
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-slate-800 text-white text-center">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Inspect Your Next Vehicle?
          </h2>
          <p className="text-lg md:text-xl mb-12 opacity-90">
            Don't buy blind. Get the facts before you buy with our comprehensive pre-purchase inspection service.
          </p>
          <button className="btn-secondary">
            Book Your Inspection Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-max">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            <a 
              href="https://facebook.com/your-page" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
              <span>Facebook</span>
            </a>
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(123) 456-7890</span>
            </a>
            <a 
              href="mailto:your-email@example.com" 
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>your-email@example.com</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
