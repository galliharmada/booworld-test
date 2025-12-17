import Link from 'next/link';

export const Footer = () => (
    <footer className="border-t border-white/5 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-600 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-sm">B</span>
                    </div>
                    <span className="text-gray-400 text-sm">We stand for love.</span>
                </div>
                <div className="flex items-center gap-6 text-gray-500 text-sm">
                    <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                    <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
                    <Link href="/safety" className="hover:text-white transition-colors">Safety Tips</Link>
                </div>
                <p className="text-gray-600 text-sm">© 2025 Boo Enterprises, Inc.</p>
            </div>
        </div>
    </footer>
);
