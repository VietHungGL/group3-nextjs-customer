import React from 'react';
import blog from '@/components/BlogNew/blognew.module.css'

function BlogNew(props) {
    return (
        <div>
            <BlogItem
                image="/assets/images/payment-1.jpg"
                title="Bật mí cách mình đang kiếm tiền hiện giờ"
                title2="Bật mí cách mình đang kiếm tiền hiện giờ"
                title3="Bật mí cách mình đang kiếm tiền hiện giờ"
                title4="Bật mí cách mình đang kiếm tiền hiện giờ"
                date="12/02/1998"
            />
        </div>
    );
}

export default BlogNew;

const BlogItem = ({ image, title, title2, title3, title4, date }) => {

    return (
        <>
            <div className={`${blog["item-article"]} clearfix`}>
                <div className="post-image">
                    <a href="/">
                        <img
                            className=" lazyloaded"
                            src={image}
                            alt={title}
                        />
                    </a>
                </div>
                <div className="post-content">
                    <h3>
                        <a href="/">
                            {/* Bật mí cách mình đang kiếm tiền hiện giờ */}
                            {title2}
                        </a>
                    </h3>
                    <p className="post-meta">
                        <span className="cate">
                            <a href="/">{title3}</a>
                        </span>
                        <span className="author hidden">
                            <a href="/">{title4}</a>
                        </span>
                        <span className="date">{date}</span>
                    </p>
                </div>
            </div>

        </>
    );
};