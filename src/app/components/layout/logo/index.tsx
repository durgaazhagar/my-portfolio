import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/" className="flex items-center gap-2">
        <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/50">
          <span className="text-black font-bold text-lg">DA</span>
        </div>
        <span className="text-cyan-400 font-bold text-xl hidden sm:block">Durga A</span>
      </Link>
    </>
  );
};

export default Logo;
