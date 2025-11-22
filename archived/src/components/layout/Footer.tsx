export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="font-display text-2xl mb-2">STUDIO PHOTO 79</h2>
          <p className="text-white/50 text-sm">Capturing moments in time.</p>
        </div>

        <div className="flex gap-6 text-sm text-white/70">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Email</a>
        </div>

        <div className="text-xs text-white/30">
          © {new Date().getFullYear()} Studio Photo 79. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
