export default function Navbar() {
  return (
    <nav className="py-4 md:py-6 text-white border-b border-white/0 bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between gap-4 px-4">
        <h3 className="text-2xl sm:text-3xl font-medium leading-8 sm:leading-10 tracking-[-0.5px] sm:tracking-[-0.64px]">
          Devtools
        </h3>
        <button className="py-3 px-6 sm:py-4 sm:px-8 text-sm sm:text-base md:text-[18px] rounded-full border border-[#3AB9DB] [background:linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)]">
          Get Extension
        </button>
      </div>
    </nav>
  );
}
