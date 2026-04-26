export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-black/40 py-8 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          
          {/* Left Side: Name and Credits */}
          <div className="flex items-center gap-1 font-medium">
            <span>&copy; {currentYear} Saloni Kumari.</span>
            <span className="ml-1">Made with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>and React</span>
          </div>

          {/* Right Side: Links */}
          <div className="flex items-center gap-6 opacity-70">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

        </div>
      </div>
    </footer>
  );
}