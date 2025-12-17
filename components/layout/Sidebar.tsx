import Link from 'next/link';
import { universes } from '@/data/mocks/universes';

export const Sidebar = () => (
    <aside className="hidden lg:block w-80 shrink-0">
        <div className="sticky top-20 bg-black rounded-lg shadow-[0_4px_20px_rgba(255,255,255,0.15)] p-6">
            <h3 className="text-white text-base font-semibold mb-4">Universes</h3>
            <div className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
                {universes.map((universe) => (
                    <Link
                        key={universe.slug}
                        href={`/u/${universe.slug}`}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-black/95 transition-colors group"
                    >
                        <span className="inline-flex items-center bg-gray-400/10 px-2 py-1 text-xs rounded-3xl font-medium text-white inset-ring inset-ring-gray-400/20
                        border-white/10 transition-colors
                            shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(57,167,164,0.4)]
                        ">#{universe.name}</span>

                        <span className="text-white text-xs">{universe.souls} souls</span>
                    </Link>
                ))}
            </div>
        </div>
    </aside>
);
