import Link from 'next/link';
import { RelatedPost } from '@/types/question';
import { HeartIcon, ChatIcon } from '@/components/icons';

interface RelatedPostCardProps {
    post: RelatedPost;
}

export const RelatedPostCard = ({ post }: RelatedPostCardProps) => (
    <Link
        href={`/u/questions/${post.slug}`}
        className="block p-4 bg-white/[0.02] rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all group"
    >
        <span className="text-purple-400 text-xs font-medium">Question of the Day</span>
        <h4 className="text-white font-medium mt-2 group-hover:text-purple-300 transition-colors line-clamp-2">
            {post.title}
        </h4>
        <div className="flex items-center gap-4 mt-3 text-gray-500 text-sm">
            <span>{post.date}</span>
            <div className="flex items-center gap-1">
                <HeartIcon />
                <span>{post.likes}</span>
            </div>
            <div className="flex items-center gap-1">
                <ChatIcon />
                <span>{post.comments}</span>
            </div>
        </div>
    </Link>
);
