import React from 'react';

const MainFooter = () => {
  return (
    <div className="w-full dark:bg-gray-900   bg-gray-100 dark:text-gray-300 text-gray-950 py-10 px-6 flex flex-col gap-10 relative z-10">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <h4 className="text-lg font-semibold ">Website</h4>
          <p className="text-sm text-gray-400">Information about your website or services.</p>
        </div>
        <div className="space-y-3">
          <h4 className="text-lg font-semibold ">Website</h4>
          <p className="text-sm text-gray-400">Another small description or link section.</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col md:flex-row items-center justify-between dark:bg-gray-800 bg-gray-300 p-6 rounded-lg gap-4">
        <div className="text-sm font-light">Next Category</div>
        <div className="flex flex-col items-center">
          <div className="font-bold text-2xl ">5</div>
          <div className="font-semibold text-sm text-gray-400">Bring the kids are</div>
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Links */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-400">
          <a href="#" className="hover:">Cookies Privacy</a>
          <a href="#" className="hover:">Legal Terms</a>
          <a href="#" className="hover:">Privacy Policy</a>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm text-gray-400">
          <span className="font-semibold ">Contact:</span>
          <a href="#" className="hover:">Instagram</a>
          <a href="#" className="hover:">TikTok</a>
          <a href="#" className="hover:">YouTube</a>
        </div>
      </div>

      {/* CopyRight */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © 2025 Yo-e-commerce. All Rights Reserved.
      </div>

    </div>
  );
};

export default MainFooter;