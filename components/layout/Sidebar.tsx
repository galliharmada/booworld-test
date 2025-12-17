import Link from 'next/link';
import { universes } from '@/data/mocks/universes';

export const Sidebar = () => (
    <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-20">
            <h3 className="text-gray-400 text-sm font-medium mb-4 px-2">Universes</h3>
            <div className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10">
                {universes.map((universe) => (
                    <Link
                        key={universe.slug}
                        href={`/u/${universe.slug}`}
                        className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                        <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">#{universe.name}</span>
                        <span className="text-gray-400 text-xs">{universe.souls} souls</span>
                    </Link>
                ))}
            </div>
        </div>
    </aside>
);
