import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { BurgerMenuIcon, CloseIcon, SearchIcon, HomeIcon, MatchIcon, MessageIcon, ProfileIcon, MenuIcon } from '@/components/icons';
import { universes } from '@/data/mocks/universes';

interface HeaderProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

export const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const searchRef = useRef<HTMLDivElement>(null);

    const filteredUniverses = universes.filter(universe =>
        universe.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setSearchOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleCloseSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <>
            <header className="fixed top-0 right-0 left-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/5 transition-all duration-300 ease-in-out" style={{ left: sidebarOpen ? '288px' : '0' }}>
                <div className="w-full px-4 h-16 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="p-2 text-gray-400 hover:text-white transition-colors hover:bg-white/5 rounded-lg"
                            aria-label="Open menu"
                        >
                            <BurgerMenuIcon />
                        </button>

                        <Link href="/" className="flex items-center gap-2">
                            <span className="text-white font-semibold text-xl hidden sm:block">BOO</span>
                        </Link>
                    </div>

                    <div ref={searchRef} className="flex-1 mx-4 relative hidden md:block bg-black/95">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon />
                        </div>
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onFocus={() => setSearchOpen(true)}
                            className="block w-full bg-black/95 py-2 pl-10 pr-4 text-sm text-gray-400 placeholder:text-gray-500 focus:outline-none rounded-3xl border border-white/10 transition-colors
                            shadow-[0_0_15px_rgba(255,255,255,0.4)]
                            "
                        />

                        {searchOpen && (
                            <div className="absolute top-full mt-0 left-0 right-0 bg-black/95 border border-white/10 rounded-[10px] shadow-2xl max-h-96 overflow-y-auto z-50">
                                {filteredUniverses.length > 0 ? (
                                    <div className="py-2">
                                        {filteredUniverses.map((universe) => (
                                            <Link
                                                key={universe.slug}
                                                href={`/universe/${universe.slug}`}
                                                onClick={() => {
                                                    setSearchOpen(false);
                                                    setSearchQuery('');
                                                }}
                                                className="flex items-center justify-between px-4 py-3 hover:bg-[#4EDCD8]/5 transition-colors group"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div>
                                                        <p className="text-white font-xs group-hover:text-[#4EDCD8] transition-colors">
                                                            #{universe.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="px-4 py-8 text-center">
                                        <p className="text-gray-400">No universes found</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="hidden sm:block px-6 py-2 bg-[#4EDCD8] text-gray-900 rounded-full text-center w-fit font-semibold hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(78,220,216,0.6)] animate-pulse">
                            <p className="text-sm font-medium undefined text-black tracking-widest">SIGN IN</p>
                        </button>
                        <button
                            className="md:hidden p-2 text-gray-400 hover:text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <MenuIcon />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {
                    mobileMenuOpen && (
                        <div className="md:hidden bg-[#0a0a0a] border-t border-white/5 py-4">
                            <nav className="flex flex-col gap-2 px-4">
                                <Link href="/" className="text-gray-300 hover:text-white py-2 transition-colors">Home</Link>
                                <Link href="/match" className="text-gray-300 hover:text-white py-2 transition-colors">Match</Link>
                                <Link href="/database" className="text-gray-300 hover:text-white py-2 transition-colors">Personality Database</Link>
                                <Link href="/tests" className="text-gray-300 hover:text-white py-2 transition-colors">Personality Tests</Link>
                                <button className="hidden sm:block px-6 py-2 bg-[#4EDCD8] text-gray-900 rounded-full text-center w-fit font-semibold hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(78,220,216,0.6)] animate-pulse">
                                    <p className="text-sm font-medium undefined text-black tracking-widest">SIGN IN</p>
                                </button>
                            </nav>
                        </div>
                    )
                }
            </header>

            {/* Sidebar Navigation */}
            <aside
                className={`fixed top-0 left-0 h-full w-72 bg-[#0a0a0a]/98 backdrop-blur-md border-r border-white/10 z-[70] transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-4 border-b border-white/10">
                        <Link href="/" className="flex items-center gap-2" onClick={handleCloseSidebar}>
                            <div className="w-8 h-8 from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">B</span>
                            </div>
                            <span className="text-white font-semibold text-xl">Boo</span>
                        </Link>
                        <button
                            onClick={handleCloseSidebar}
                            className="p-2 text-gray-400 hover:text-white transition-colors hover:bg-white/5 rounded-lg"
                            aria-label="Close menu"
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 p-4">
                        <div className="space-y-2">
                            <Link
                                href="/"
                                onClick={handleCloseSidebar}
                                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all group"
                            >
                                <HomeIcon />
                                <span className="font-medium">Home</span>
                            </Link>
                            <Link
                                href="/match"
                                onClick={handleCloseSidebar}
                                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all group"
                            >
                                <MatchIcon />
                                <span className="font-medium">Match</span>
                            </Link>
                            <Link
                                href="/messages"
                                onClick={handleCloseSidebar}
                                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all group"
                            >
                                <MessageIcon />
                                <span className="font-medium">Messages</span>
                            </Link>
                            <Link
                                href="/profile"
                                onClick={handleCloseSidebar}
                                className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all group"
                            >
                                <ProfileIcon />
                                <span className="font-medium">Profile</span>
                            </Link>
                        </div>
                    </nav>

                    {/* Sidebar Footer */}
                    <div className="p-4 border-t border-white/10">
                        <button className="hidden sm:block px-6 py-2 bg-[#4EDCD8] text-gray-900 rounded-full text-center w-fit font-semibold hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(78,220,216,0.6)] animate-pulse">
                            <p className="text-sm font-medium undefined text-black tracking-widest">SIGN IN</p>
                        </button>
                        <p className="text-center text-gray-500 text-xs mt-3">We stand for love.</p>
                    </div>
                </div>
            </aside>
        </>
    );
};
