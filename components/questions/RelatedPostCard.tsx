import Link from 'next/link';
import { RelatedPost } from '@/types/question';
import { HeartIcon, ChatIcon, ShareIcon } from '@/components/icons';

interface RelatedPostCardProps {
    post: RelatedPost;
}

export const RelatedPostCard = ({ post }: RelatedPostCardProps) => (
    <Link
        href={`/u/questions/${post.slug}`}
        className="block p-4 bg-white/2 rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/4 transition-all group"
    >
        <span className="text-white font-semibold text-sm">Question of the Day</span>
        <div className="flex justify-between items-center">
            <h4 className="text-white font-bold text-lg mt-2 transition-colors line-clamp-2">
                {post.title}
            </h4>
            <span className="text-gray-500 text-xs right-0">{post.date}</span>
        </div>
        <div className="flex items-center gap-4 mt-3 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
                <HeartIcon />
                <span>{post.likes}</span>
            </div>
            <div className="flex items-center gap-1">
                <ChatIcon />
                <span>{post.comments}</span>
                <ShareIcon />
            </div>
        </div>
    </Link>
);
