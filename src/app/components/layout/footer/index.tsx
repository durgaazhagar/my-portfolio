import Logo from "../logo";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-14 flex items-center justify-center bg-gradient-to-t from-gray-900 to-black border-t border-cyan-500/20">
      <div className="container">
        <div className="flex flex-col gap-1.5 items-center sm:items-start">
          <div className="relative flex items-center w-full">
            <div className="flex-grow h-px bg-cyan-500/30" />
            <div className="mx-4">
              <Logo />
            </div>
            <div className="flex-grow h-px bg-cyan-500/30" />
          </div>
          <p className="text-gray-400 text-center">
            © 2025 Durga A. All rights reserved. | Cybersecurity Portfolio
          </p>
          <p className="text-cyan-400/60 text-sm text-center mt-2">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
