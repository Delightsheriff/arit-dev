// import Link from "next/link";
// import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-white border-t border-b border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="hidden md:flex justify-center space-x-8 pb-4 border-b border-gray-100">
          <a
            href="#"
            className="font-sans text-sm font-medium arit-text hover:bg-pink-100 hover:text-pink-500 rounded px-3 py-1 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#community"
            className="font-sans text-sm font-medium arit-text hover:bg-pink-100 hover:text-pink-500 rounded px-3 py-1 transition-colors duration-200"
          >
            Community
          </a>
          <a
            href="#hackathon"
            className="font-sans text-sm font-medium arit-text hover:bg-pink-100 hover:text-pink-500 rounded px-3 py-1 transition-colors duration-200"
          >
            Hackathon
          </a>
          <a
            href="#sessions"
            className="font-sans text-sm font-medium arit-text hover:bg-pink-100 hover:text-pink-500 rounded px-3 py-1 transition-colors duration-200"
          >
            Live Sessions
          </a>
          <a
            href="#faq"
            className="font-sans text-sm font-medium arit-text hover:bg-pink-100 hover:text-pink-500 rounded px-3 py-1 transition-colors duration-200"
          >
            FAQ
          </a>
        </nav>
        <div className="flex flex-col md:flex-row justify-between items-center pt-6">
          <p className="text-gray-400 text-sm">
            © 2025 Arit Developer Circle. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Built by the Arit Developer Circle Team
          </p>
        </div>
      </div>
    </footer>
    // <footer className="bg-slate-900 text-white py-16">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //       {/* Brand */}
    //       <div className="col-span-1 md:col-span-1">
    //         <h3 className="text-2xl font-bold text-white mb-4">
    //           Arit Developer Circle
    //         </h3>
    //         <p className="text-gray-300 mb-6">
    //           Empowering tech professionals through mentorship, community, and
    //           career growth.
    //         </p>
    //         <div className="flex space-x-4">
    //           <Link
    //             href="#"
    //             className="text-gray-400 hover:text-pink-500 transition-colors"
    //           >
    //             <Linkedin className="h-5 w-5" />
    //           </Link>
    //           <Link
    //             href="#"
    //             className="text-gray-400 hover:text-pink-500 transition-colors"
    //           >
    //             <Twitter className="h-5 w-5" />
    //           </Link>
    //           <Link
    //             href="#"
    //             className="text-gray-400 hover:text-pink-500 transition-colors"
    //           >
    //             <Instagram className="h-5 w-5" />
    //           </Link>
    //           <Link
    //             href="#"
    //             className="text-gray-400 hover:text-pink-500 transition-colors"
    //           >
    //             <Mail className="h-5 w-5" />
    //           </Link>
    //         </div>
    //       </div>

    //       {/* Newsletter Subscription */}
    //       <div>
    //         <h4 className="text-lg font-semibold text-white mb-4">
    //           Stay Updated
    //         </h4>
    //         <p className="text-gray-300 mb-4 text-sm">
    //           Get the latest updates, career tips, and community news delivered
    //           to your inbox.
    //         </p>
    //         <div className="flex flex-col sm:flex-row gap-2">
    //           <Input
    //             type="email"
    //             placeholder="Enter your email"
    //             className="bg-slate-800 border-slate-700 text-white placeholder-gray-400 focus:border-pink-500"
    //           />
    //           <Button className="bg-pink-600 hover:bg-pink-700 text-white whitespace-nowrap">
    //             Subscribe
    //           </Button>
    //         </div>
    //       </div>

    //       {/* Quick Links */}
    //       <div>
    //         <h4 className="text-lg font-semibold text-white mb-4">Community</h4>
    //         <ul className="space-y-2">
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-gray-300 hover:text-pink-500 transition-colors"
    //             >
    //               Join Circle
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-gray-300 hover:text-pink-500 transition-colors"
    //             >
    //               Hackathon
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-gray-300 hover:text-pink-500 transition-colors"
    //             >
    //               Live Sessions
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-gray-300 hover:text-pink-500 transition-colors"
    //             >
    //               Resources
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               href="#"
    //               className="text-gray-300 hover:text-pink-500 transition-colors"
    //             >
    //               About
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
    //       <p className="text-gray-400 text-sm">
    //         © 2025 Arit Circle. All rights reserved.
    //       </p>
    //       <p className="text-gray-400 text-sm mt-4 md:mt-0">
    //         Built by the Arit Circle Team
    //       </p>
    //     </div>
    //   </div>
    // </footer>
  );
}
