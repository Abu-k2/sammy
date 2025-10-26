import React from 'react';

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.459L.057 24zM7.324 21.188L7.842 20.82c1.442.872 3.102 1.378 4.839 1.378 5.438 0 9.865-4.427 9.866-9.865 0-2.658-1.04-5.161-2.9-7.018-1.859-1.859-4.36-2.899-7.016-2.9-5.438 0-9.865 4.427-9.866 9.865 0 2.029.59 3.967 1.698 5.618l.353.568L5.232 21.8l-1.92-1.921z"/>
    </svg>
);

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Sammy B&D</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner in building construction and structural design, delivering excellence from foundation to finish.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Nairobi, Kenya</li>
              <li>
                <a href="mailto:info@sammybd.com" className="text-gray-400 hover:text-white transition-colors">info@sammybd.com</a>
              </li>
              <li>
                <a href="tel:+254758070144" className="text-gray-400 hover:text-white transition-colors">+254 758 070144</a>
              </li>
            </ul>
          </div>

          {/* Legal/Placeholder */}
           <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
               <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
               <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Sammy Builder and Designer. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://wa.me/254758070144" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;