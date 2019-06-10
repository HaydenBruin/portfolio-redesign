import React, { Component } from 'react'

export default class Blog extends Component {

    blogs = [{
        "title": "How to make use of react hooks",
        "slug": "how-to-make-use-of-react-hooks",
        "date": "10th June 2019",
        "media": "https://cdn-images-1.medium.com/max/2600/1*-Ijet6kVJqGgul6adezDLQ.png",
        "tags": [
            "React",
            "React Hooks"
        ]
    },
    {
        "title": "Creating a countdown with react hooks",
        "slug": "creating-a-countdown-with-react-hooks",
        "date": "10th June 2019",
        "media": "https://cdn-images-1.medium.com/max/2600/1*-Ijet6kVJqGgul6adezDLQ.png",
        "tags": [
            "React",
            "React Hooks"
        ]
    },
    {
        "title": "What's new in react 16.8",
        "slug": "whats-new-in-react-16-8",
        "date": "10th June 2019",
        "media": "https://cdn-images-1.medium.com/max/2600/1*-Ijet6kVJqGgul6adezDLQ.png",
        "tags": [
            "React",
            "React Hooks"
        ]
    }];

    render() {
        return (
            <div className="blog">
                <h2>What I've been thinking about...</h2>

                <div className="items-list">
                    {this.blogs && this.blogs.map((blog, index) => {
                        return <BlogPost key={index} blog={blog} />
                    })}
                </div>
            </div>
        )
    }
}

const BlogPost = (props) => {
    const blog = props.blog;
    return (
        <div className="items__item">
            <div className="items__item--imgwrapper">
                <img src={blog.media} alt={blog.title} />
            </div>
            <div className="items__item--content">
                <div className="date">{blog.date}</div>
                <div className="dash"></div>
                <div className="title">{blog.title}</div>
                <div className="role">{blog.role}</div>
                {
                    blog.tags && (
                        <div className="tags">
                            {
                                blog.tags.map((tag, index) => {
                                    return <div key={index} className={"tag " + tag.toLowerCase()}>{tag}</div>
                                })
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}
