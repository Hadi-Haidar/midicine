import { Link } from 'react-router-dom';
import { useState } from 'react';

function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl">💊</span>
              <span className="text-xl sm:text-2xl font-bold text-teal-700">MedFinder</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 lg:gap-8 items-center">
              <a href="#features" className="text-gray-700 hover:text-teal-600 font-medium transition text-sm lg:text-base">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-teal-600 font-medium transition text-sm lg:text-base">How It Works</a>
              <a href="#pharmacies" className="text-gray-700 hover:text-teal-600 font-medium transition text-sm lg:text-base">For Pharmacies</a>
              <Link to="/login" className="text-teal-600 hover:text-teal-700 font-semibold transition text-sm lg:text-base">Sign In</Link>
              <Link to="/register">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg font-bold transition shadow-md hover:shadow-lg text-sm lg:text-base">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a href="#features" className="block text-gray-700 hover:text-teal-600 font-medium py-2">Features</a>
              <a href="#how-it-works" className="block text-gray-700 hover:text-teal-600 font-medium py-2">How It Works</a>
              <a href="#pharmacies" className="block text-gray-700 hover:text-teal-600 font-medium py-2">For Pharmacies</a>
              <Link to="/login" className="block text-teal-600 hover:text-teal-700 font-semibold py-2">Sign In</Link>
              <Link to="/register" className="block">
                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2.5 rounded-lg font-bold transition shadow-md text-center">
                  Get Started
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-block bg-teal-100 text-teal-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                🇱🇧 Connecting Lebanon's Pharmacies
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Find Your Medicine{' '}
                <span className="text-teal-600">Instantly</span>{' '}
                <span className="text-yellow-500">in Lebanon</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Search nearby pharmacies, check real-time availability, and get notified when medicines become available. Stop wasting time visiting multiple pharmacies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link to="/register" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-lg transform hover:scale-105 transition">
                    Get Started Free
                  </button>
                </Link>
                <Link to="/login" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-white hover:bg-gray-50 text-teal-600 border-2 border-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition">
                    Sign In
                  </button>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 text-xs sm:text-sm text-gray-600 justify-center lg:justify-start">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free to use</span>
                </div>
              </div>
            </div>

            {/* Right: Illustration/Mockup */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition duration-300">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3 bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input 
                      type="text" 
                      placeholder="Search for medicine..." 
                      className="bg-transparent flex-1 outline-none text-sm sm:text-base text-gray-700"
                      disabled
                    />
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="bg-green-50 border-l-4 border-green-500 p-3 sm:p-4 rounded">
                      <div className="flex items-center justify-between gap-2">
                        <div className="min-w-0">
                          <p className="font-bold text-gray-800 text-sm sm:text-base truncate">Al-Shifa Pharmacy</p>
                          <p className="text-xs sm:text-sm text-gray-600">📍 0.5 km away</p>
                        </div>
                        <span className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
                          Available
                        </span>
                      </div>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 sm:p-4 rounded">
                      <div className="flex items-center justify-between gap-2">
                        <div className="min-w-0">
                          <p className="font-bold text-gray-800 text-sm sm:text-base truncate">Saida Pharmacy</p>
                          <p className="text-xs sm:text-sm text-gray-600">📍 1.2 km away</p>
                        </div>
                        <span className="bg-yellow-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap">
                          Low Stock
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              Trusted by Pharmacies Across Lebanon
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Connecting patients with medicines when they need them most
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-teal-50 rounded-xl">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Location Based</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Find pharmacies near you instantly</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-xl">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Real-Time Data</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Updated availability information</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-yellow-50 rounded-xl sm:col-span-2 lg:col-span-1">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Get Notified</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Alerts when medicine is available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Everything You Need to Find Medicines
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Powerful features designed to save your time and help you get the medications you need
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Feature Cards */}
            {[
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
                color: 'teal',
                title: 'Search Medicines',
                description: 'Find any medicine instantly across nearby pharmacies with real-time availability status'
              },
              {
                icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                color: 'blue',
                title: 'Real-Time Location',
                description: 'Get exact pharmacy locations with live stock status and distance from your current location'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />,
                color: 'yellow',
                title: 'Medicine Requests',
                description: 'Request unavailable medicines and get instant notifications when they\'re back in stock'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
                color: 'green',
                title: 'Fast & Reliable',
                description: 'Get instant results from our constantly updated pharmacy network across Lebanon'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                color: 'purple',
                title: 'Compare Prices',
                description: 'See prices from different pharmacies before you make the trip and save money'
              },
              {
                icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />,
                color: 'indigo',
                title: 'For Pharmacies',
                description: 'Pharmacies can update stock levels and reach more customers with ease'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition group">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition`}>
                  <svg className={`w-6 h-6 sm:w-8 sm:h-8 text-${feature.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              How It Works
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">Simple, fast, and effective</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              { num: '1', title: 'Search Your Medicine', desc: 'Type the medicine name and your location to start searching across pharmacies', color: 'teal' },
              { num: '2', title: 'Find Nearest Pharmacy', desc: 'See which pharmacies have your medicine in stock with real-time availability', color: 'blue' },
              { num: '3', title: 'Request If Unavailable', desc: 'Can\'t find it? Request it and get notified instantly when it\'s available', color: 'yellow' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className={`bg-gradient-to-br from-${step.color}-500 to-${step.color}-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-4 sm:mb-6 shadow-lg`}>
                  {step.num}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Stop Searching Pharmacy by Pharmacy
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90">
            Find what you need instantly and save hours of your time
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/register" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg shadow-lg transform hover:scale-105 transition">
                Start Now for Free
              </button>
            </Link>
            <button className="w-full sm:w-auto bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-2 border-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">💊</span>
                <span className="text-lg sm:text-xl font-bold">MedFinder</span>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">Making healthcare accessible for everyone in Lebanon</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
            <p>© 2025 MedFinder Lebanon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;