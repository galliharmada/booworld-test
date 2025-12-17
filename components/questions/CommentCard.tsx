import { useState } from 'react';
import { Comment } from '@/types/question';
import { HeartIcon, ChatIcon, AwardIcon } from '@/components/icons';

interface CommentCardProps {
    comment: Comment;
}

export const CommentCard = ({ comment }: CommentCardProps) => {
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(comment.likes);

    const handleLike = () => {
        setLiked(!liked);
        setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    };

    return (
        <div className="p-4 bg-white/[0.02] rounded-xl border border-white/5 hover:border-white/10 transition-all">
            <div className="flex gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 ring-2 ring-white/10">
                    <img
                        src={comment.author.avatar}
                        alt={comment.author.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-medium text-white truncate">{comment.author.name}</span>
                        <span className="text-gray-500 text-sm">{comment.timeAgo}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <span className="px-2 py-0.5 bg-purple-500/20 text-purple-400 text-xs rounded-full font-medium">
                            {comment.author.mbti}
                        </span>
                        <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                            {comment.author.zodiac}
                        </span>
                        {comment.author.age && (
                            <span className="text-gray-500 text-xs">{comment.author.age}</span>
                        )}
                        {comment.author.awards && (
                            <div className="flex items-center gap-1">
                                <AwardIcon />
                                <span className="text-amber-500 text-xs">{comment.author.awards} Award</span>
                            </div>
                        )}
                    </div>

                    <p className="mt-3 text-gray-200 leading-relaxed">{comment.content}</p>

                    {comment.gif && (
                        <div className="mt-3 rounded-lg overflow-hidden max-w-xs">
                            <img src={comment.gif} alt="GIF" className="w-full" />
                        </div>
                    )}

                    <div className="flex items-center gap-4 mt-3">
                        <button
                            onClick={handleLike}
                            className="flex items-center gap-1.5 text-gray-400 hover:text-rose-500 transition-colors"
                        >
                            <HeartIcon filled={liked} />
                            <span className={`text-sm ${liked ? 'text-rose-500' : ''}`}>{likeCount}</span>
                        </button>
                        <button className="flex items-center gap-1.5 text-gray-400 hover:text-blue-400 transition-colors">
                            <ChatIcon />
                            <span className="text-sm">{comment.replies}</span>
                        </button>
                        <button className="text-gray-400 hover:text-white text-sm transition-colors">
                            Reply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
