import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Sidebar } from '@/components/layout/Sidebar';
import { CommentCard } from '@/components/questions/CommentCard';
import { RelatedPostCard } from '@/components/questions/RelatedPostCard';
import { CommunitySidebar } from '@/components/questions/CommunitySidebar';
import { MeetPeopleBanner } from '@/components/questions/MeetPeopleBanner';
import { HeartIcon, ChatIcon } from '@/components/icons';
import { comments } from '@/data/mocks/comments';
import { relatedPosts } from '@/data/mocks/relatedPosts';

export default function QuestionPage() {
    const [sortBy, setSortBy] = useState<'best' | 'new'>('best');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <Head>
                <title>What would you choose: a relationship full of adventure | Questions Universe - Boo</title>
                <meta name="description" content="What would you choose: a relationship full of adventures or a peaceful one? Join the discussion on Boo." />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <main className="transition-all duration-300 ease-in-out" style={{ marginLeft: sidebarOpen ? '288px' : '0' }}>
                    <div className="max-w-7xl mx-auto px-4 pt-24 pb-8">
                        <div className="flex gap-8">
                            <Sidebar />

                            <div className="flex-1 min-w-0">
                                {/* Question Header */}
                                <div className="mb-8">
                                    <Link href="/u/questions" className="text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors">
                                        #questions
                                    </Link>
                                    <div className="flex items-center gap-4 mt-4 text-gray-500 text-sm">
                                        <span>11/7/2025</span>
                                        <div className="flex items-center gap-1.5">
                                            <HeartIcon />
                                            <span>595</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <ChatIcon />
                                            <span>4076</span>
                                        </div>
                                    </div>

                                    <button className="mt-4 px-6 py-2 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors flex items-center gap-2">
                                        <ChatIcon />
                                        Comment
                                    </button>
                                </div>

                                {/* Mobile Community Card */}
                                <div className="lg:hidden mb-6">
                                    <CommunitySidebar />
                                </div>

                                {/* Sort Tabs */}
                                <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
                                    <button
                                        onClick={() => setSortBy('best')}
                                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${sortBy === 'best'
                                            ? 'bg-white/10 text-white'
                                            : 'text-gray-500 hover:text-white'
                                            }`}
                                    >
                                        best
                                    </button>
                                    <button
                                        onClick={() => setSortBy('new')}
                                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${sortBy === 'new'
                                            ? 'bg-white/10 text-white'
                                            : 'text-gray-500 hover:text-white'
                                            }`}
                                    >
                                        new
                                    </button>
                                </div>

                                {/* Comments */}
                                <div className="space-y-4">
                                    {comments.map((comment) => (
                                        <CommentCard key={comment.id} comment={comment} />
                                    ))}
                                </div>

                                {/* Load More */}
                                <button className="w-full mt-6 py-3 border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-white/20 transition-all">
                                    Load more comments
                                </button>

                                {/* Related Posts */}
                                <section className="mt-12">
                                    <h2 className="text-xl font-semibold mb-6">Related Posts</h2>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {relatedPosts.map((post) => (
                                            <RelatedPostCard key={post.id} post={post} />
                                        ))}
                                    </div>
                                </section>

                                {/* Meet People Banner - Mobile */}
                                <div className="mt-8 lg:hidden">
                                    <MeetPeopleBanner />
                                </div>
                            </div>

                            {/* Right Sidebar */}
                            <aside className="hidden lg:block w-80 shrink-0">
                                <div className="sticky top-20 space-y-6">
                                    <CommunitySidebar />
                                    <MeetPeopleBanner />
                                </div>
                            </aside>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
