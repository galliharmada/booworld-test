import { useState } from 'react';
import Link from 'next/link';
import { BurgerMenuIcon, CloseIcon, SearchIcon, HomeIcon, MatchIcon, MessageIcon, ProfileIcon, MenuIcon } from '@/components/icons';

interface HeaderProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

export const Header = ({ sidebarOpen, setSidebarOpen }: HeaderProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleCloseSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <>
            <header className="fixed top-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 transition-all duration-300 ease-in-out" style={{ left: sidebarOpen ? '288px' : '0' }}>
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="p-2 text-gray-400 hover:text-white transition-colors hover:bg-white/5 rounded-lg"
                            aria-label="Open menu"
                        >
                            <BurgerMenuIcon />
                        </button>

                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">B</span>
                            </div>
                            <span className="text-white font-semibold text-xl hidden sm:block">Boo</span>
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-6">
                        <input id="price" type="text" name="price" placeholder="Search" className="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6" />
                        <button className="p-2 text-gray-400 hover:text-white transition-colors">
                            <SearchIcon />
                        </button>
                        <button className="hidden sm:block px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                            SIGN IN
                        </button>
                        <button
                            className="md:hidden p-2 text-gray-400 hover:text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <MenuIcon />
                        </button>
                    </nav>
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
                                <button className="mt-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full text-sm font-medium">
                                    SIGN IN
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
                            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
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
                        <button className="w-full px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                            SIGN IN
                        </button>
                        <p className="text-center text-gray-500 text-xs mt-3">We stand for love.</p>
                    </div>
                </div>
            </aside>
        </>
    );
};
