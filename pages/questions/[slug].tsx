import { ArrowLeftIcon, ChatIcon, HeartIcon, ShareIcon } from '@/components/icons';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { CommentCard } from '@/components/questions/CommentCard';
import { CommunitySidebar } from '@/components/questions/CommunitySidebar';
import { MeetPeopleBanner } from '@/components/questions/MeetPeopleBanner';
import { RelatedPostCard } from '@/components/questions/RelatedPostCard';
import { comments } from '@/data/mocks/comments';
import { questionsOfTheDay } from '@/data/mocks/questionoftheday';
import { relatedPosts } from '@/data/mocks/relatedPosts';
import Head from 'next/head';
import { useState } from 'react';

export default function QuestionPage() {
    const [sortBy, setSortBy] = useState<'best' | 'new'>('best');
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [questionOfTheDay, setQuestionOfTheDay] = useState(questionsOfTheDay[0]);

    return (
        <>
            <Head>
                <title>What would you choose: a relationship full of adventure | Questions Universe - Boo</title>
                <meta name="description" content="What would you choose: a relationship full of adventures or a peaceful one? Join the discussion on Boo." />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-black/95 text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                <main className="transition-all duration-300 ease-in-out" style={{ marginLeft: sidebarOpen ? '288px' : '0' }}>
                    <div className="w-full pt-24 pb-8">
                        <div className="flex">
                            <Sidebar />

                            <div className="flex-1 min-w-0 px-8">
                                {/* Question Header */}
                                <div className="mb-8">
                                    <div className="flex justify-between items-center gap-4">
                                        <a href="/u/questions">
                                            <div className="shadow rounded-full h-8 w-8 p-1.5 rotate-180 hover:scale-110 active:scale-99 duration-500">
                                                <ArrowLeftIcon />
                                            </div>
                                        </a>
                                        <div className="flex flex-wrap gap-2 items-center justify-center">
                                            <a href="/u/questions">
                                                <span className="inline-flex items-center bg-[#49D1CD] px-2 py-1 text-xs rounded-3xl font-medium text-black inset-ring inset-ring-gray-400/20 border-white/10 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(57,167,164,0.4)]">#questions</span>
                                            </a>
                                        </div>
                                        <div className="shadow rounded-full h-8 w-8 p-1.5 rotate-180 duration-500 invisible">
                                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="rgb(var(--primary-color-dark))">
                                                <path fill="rgb(var(--primary-color-dark))" fill-rule="evenodd" d="M5.28 2.498a.5.5 0 0 1 .707-.033l4.047 3.687a2.5 2.5 0 0 1 0 3.696l-4.047 3.687a.5.5 0 1 1-.673-.74L9.36 9.11a1.5 1.5 0 0 0 0-2.218L5.314 3.205a.5.5 0 0 1-.033-.707Z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>


                                    <div className="mt-6 bg-black/95 from-purple-900/30 to-pink-900/30 rounded-3xl p-5 border border-white/10 shadow-[0_2px_30px_rgba(255,255,255,0.15)]">
                                        <h3 className="font-semibold text-white text-sm">Questions Of the Day</h3>
                                        <div className="flex justify-between items-center gap-2">
                                            <p className="text-white font-bold mt-2">{questionOfTheDay.title}</p>
                                            <p className="text-white font-bold mt-2">{questionOfTheDay.date}</p>
                                        </div>
                                        <div className="flex items-center gap-1 mt-5">
                                            <HeartIcon />
                                            <span>{questionOfTheDay.likes}</span>
                                            <ChatIcon />
                                            <span>{questionOfTheDay.comments}</span>
                                            <div className="flex right-0 ">
                                                <ShareIcon />
                                            </div>
                                        </div>
                                        <p className='right-0 flex justify-end -mt-6'>
                                            <a href="#" className="hover:text-[#4EDCD8] transition-colors">Comment</a>
                                        </p>
                                    </div>

                                    <div className="mt-6 bg-black/95 from-purple-900/30 to-pink-900/30 rounded-3xl p-5 border border-white/10 shadow-[0_2px_30px_rgba(255,255,255,0.15)]">
                                        <h3 className="font-extrabold text-white text-2xl">Questions Community</h3>
                                        <p className="text-white font-bold mt-2">The questions community, chat, and discussion.</p>
                                        <button className="hidden mt-4 sm:block px-6 py-2 bg-[#4EDCD8] text-gray-900 rounded-full text-center w-fit h-12 font-semibold hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(78,220,216,0.6)] animate-pulse">
                                            <p className="text-sm font-medium text-black tracking-widest">JOIN NOW</p>
                                        </button>
                                    </div>
                                </div>

                                {/* Mobile Community Card */}
                                <div className="lg:hidden mb-6">
                                    <CommunitySidebar />
                                </div>

                                {/* Sort Tabs */}
                                <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4 justify-center -mt-5">
                                    <button
                                        onClick={() => setSortBy('best')}
                                    >
                                        <span className="inline-flex items-center bg-[#49D1CD] px-2 py-1 text-xs rounded-3xl font-medium text-black inset-ring inset-ring-gray-400/20 border-white/10 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(57,167,164,0.4)]">best</span>
                                    </button>
                                    <button
                                        onClick={() => setSortBy('new')}
                                    >
                                        <span className="inline-flex items-center bg-black/95 px-2 py-1 text-xs rounded-3xl font-medium text-white inset-ring inset-ring-gray-400/20 border-white/10 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_30px_rgba(57,167,164,0.4)]">new</span>
                                    </button>
                                </div>

                                {/* Comments */}
                                <div className="space-y-4">
                                    {comments.map((comment) => (
                                        <CommentCard key={comment.id} comment={comment} />
                                    ))}
                                </div>

                                {/* Load More */}
                                <button className="w-full mt-6 py-3 border border-white/10 rounded-3xl text-gray-400 hover:text-white hover:border-white/20 transition-all">
                                    Load more comments
                                </button>


                                {/* Meet People Banner - Mobile */}
                                <div className="mt-8 lg:hidden">
                                    <MeetPeopleBanner />
                                </div>
                            </div>

                            {/* Right Sidebar */}
                            <aside className="hidden lg:block w-150 shrink-0">
                                <div className="sticky top-20">
                                    <h2 className="text-xl font-semibold mb-4">Related Posts</h2>
                                    <div className="overflow-y-auto max-h-[calc(100vh-120px)] space-y-4 scrollbar-hide">
                                        {relatedPosts.map((post) => (
                                            <RelatedPostCard key={post.id} post={post} />
                                        ))}
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </main >

            </div >
        </>
    );
}
