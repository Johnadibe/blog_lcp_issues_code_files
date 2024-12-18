// File: BlogHome.tsx
import React, { useState, useEffect, useRef, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { BlogPost, blogPostsHashMap } from './BlogPosts';
import BlogPostTile from './BlogPostTile';
import Button from '@mui/material/Button';
import './css/BlogHome.css';
import "./css/BlogPosts.css";
import { BLOG_PAGE_PATH } from '../utils/Constants';
import { logToBackendLogFile } from '../externalLayerAccessor/BackEndRequests';

import Sidebar from '../utils/SideBar';
import StateAccessor from '@/StateAccessor';
import { DiscountBannerButton } from '../utils/BannerButton';
import ShareButton, { ShareButtonContainer } from '../utils/ShareButton';

const arrayOfBlogPosts = Object.values(blogPostsHashMap);

const BlogHome: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
    const contentRef = useRef<HTMLDivElement>(null); // this is just a reference to the div that contains the blog post content
    const { postId, slug } = useParams(); // if no postId is provided, it will be undefined
    const navigate = useNavigate();
    const { userId } = useContext(StateAccessor);

    ////////////////////////////
    // useEffects
    ////////////////////////////


    useEffect(() => {
        if (postId) {
            const postIdInt = parseInt(postId, 10); // convert postId to an integer in base 10

            // Check if postId is a valid non-negative integer
            if (!isNaN(postIdInt) && postIdInt >= 0) {
                const post = blogPostsHashMap[postIdInt];
                const isSlugValid = slug ? post.slug.toLowerCase() === slug.toLowerCase() : true;

                if (post && isSlugValid) {
                    // if the post exists and the slug matches the slug in the URL, set the selected post
                    // if no slug provided, we know postId is valid, so just load the post
                    // So we support urls with postId only and postId + slug!
                    setSelectedPost(post);
                } else {
                    setSelectedPost(null); // reset the selected post if the postId is invalid
                }
            } else {
                setSelectedPost(null); // reset the selected post if the postId is not a valid non-negative integer
            }
        } else {
            setSelectedPost(null); // reset the selected post if no postId is provided
        }

        logToBackendLogFile(
            `Viewed Blog post with postId: ${postId}`,
            "info",
            userId);
    }, [postId]);


    const handleSelectPost = (post: BlogPost) => {
        // post is different from current selectedPost so navigate to the post
        if (selectedPost && post.id === selectedPost.id) {
            // post is the same as the current selectedPost so scroll to the content
            scrollBlogPostIntoView();
        } else {
            setSelectedPost(post);
            navigate(`${BLOG_PAGE_PATH}/${post.id}/${post.slug}`);
        }
    }

    const scrollBlogPostIntoView = () => {
        if (selectedPost !== null && contentRef.current) {
            contentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }
    useEffect(() => {
        scrollBlogPostIntoView();
    }, [selectedPost]);

    const currentPostUrl = window.location.href;

    return (
        <div>
            {/* <Sidebar enableMinification={true} userId={userId}/> */}
            {arrayOfBlogPosts && arrayOfBlogPosts.length > 0 && (
                <div className="featured-post">
                    <h1>Featured</h1>
                    <h2>{arrayOfBlogPosts[0].title}</h2>
                    <Button
                        variant="contained"
                        color="primary"
                        className="read-blog-post-button"
                        onClick={() => handleSelectPost(arrayOfBlogPosts[0])}
                    >
                        Click To Read
                    </Button>
                </div>
            )}

            <div className="blog-grid">
                {arrayOfBlogPosts.map((post) => (
                    <BlogPostTile
                        key={post.title}
                        title={post.title}
                        bgColor={post.bgColor}
                        titleFontColor={post.titleColor}
                        onClick={() => handleSelectPost(post)}
                    />
                ))}
            </div>

            <div className="blog-content" ref={contentRef}>
                {selectedPost && (
                    <>
                        <ShareButtonContainer url={currentPostUrl} title={selectedPost.title} centered />
                        <h1>{selectedPost.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                        <div className="share-button-container">
                            <ShareButton url={currentPostUrl} title={selectedPost.title} />
                        </div>
                    </>
                )}
            </div>

            {selectedPost && (
                <div className='blog-grid-bottom-container'>
                    <h2> Other Blog Posts</h2>
                    <div className="blog-grid-bottom">
                        {arrayOfBlogPosts.map((post) => (
                            <BlogPostTile
                                key={post.title}
                                title={post.title}
                                bgColor={post.bgColor}
                                onClick={() => handleSelectPost(post)}
                            />
                        ))}
                    </div>
                </div>
            )}
            <DiscountBannerButton appearAfterTimeInSec={null} />
        </div>
    );
};

export default BlogHome;
