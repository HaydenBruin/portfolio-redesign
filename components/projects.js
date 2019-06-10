import React, { Component } from 'react'

export default class Projects extends Component {

    projects = [{
        "title": "Contact Energy",
        "slug": "contact-energy",
        "role": "Front-end Developer",
        "company": "Cucumber",
        "companylogo": "/static/projects/cucumber-logo-new.png",
        "media": "/static/projects/contact.jpg",
        "medialarge": "/static/projects/contact-large.jpg",
        "date": "23rd Aug 2018",
        "description": [
            "<h2>Working together with a talented team to deliver excellent results</h2>"
        ],
        "tags": [
            "React",
            "SCSS",
            "Gulp",
            "Git",
            "HTML",
            "jQuery"
        ]
    },
    {
        "title": "Future Blossom",
        "slug": "future-blossom",
        "role": "Full stack PHP Developer",
        "company": "DotPerformance",
        "companylogo": "/static/projects/dotperformance-logo.png",
        "media": "/static/projects/futureblossom.jpg",
        "medialarge": "/static/projects/futureblossom-large.jpg",
        "date": "12th Aug 2015",
        "description": [
            "<h2>Building a safer online dating experience one tap at a time.</h2>",
            "<h3>At a Glance</h3>",
            "<p>From branding to build, we developed a <strong>bespoke mobile-first dating site</strong> built around member profile validation to provide an alternative dating option for London's gay community.</p>",
            "<h3>The Challenge</h3>",
            "<p>While online dating has many plus points, perhaps its biggest challenge is engendering trust. People want to be assured that the person they are communicating with is genuine.</p><p>The goal therefore for our clients was to create a dating site that could establish itself alongside the heavy hitters of the industry, while keeping member safety at its core.</p>",
            "<p>We had to ensure that the site encouraged members to validate their identity before contacting others and that doing so was as straightforward as possible.</p>",
            "<h3>Our Approach</h3>",
            "<p>After conducting <strong>research</strong> into potential markets in which to launch the site first, the London gay community stood out as a segment looking for a more secure, trusted dating experience.</p>",
            "<p>Beginning at the <strong>branding</strong> stage, our brief was to portray a more refined image for Future Blossom than its competitors, one that would reflect the concept of creating lasting relationships.</p>",
            "<p>Adopting a gold palette with plenty of white-space gives the site a feeling of class and maturity, while a logo incorporating hearts arranged in a flower pattern subtly&nbsp;references the blossoming of relationships.</p>",
            "<p>From a development perspective, responding to the popularity and prevalence of mobile dating apps, we adopted a <strong>mobile-first approach</strong> to the design, making use of the familiar swipe gesture to allow members to browse between profiles.</p>",
            "<p><img src='/static/projects/future_blossom_mobile_screen.jpg' alt='Future Blossom - mobile view' style='display: block; margin-left: auto; margin-right: auto;'></p><p>Our development of a bespoke <strong>user onboarding</strong> process reduces the barrier to sign up and captures member information in a less intrusive and tedious way to other websites.</p>",
            "<p>An intuitive profile search engine and <strong>an in-app payment system</strong> where members can buy credits via PayPal allows members to find and chat with other users in just a few swipes and taps.</p><p>Building on our initial research, we took Future Blossom to market via a series of targeted <strong>Google Adwords</strong> and <strong>email marketing</strong> campaigns.</p>",
            "<p>The end result is an elegant and easy-to-use new breed of online dating site, which our clients and we hope will help people build genuine lasting relationships.</p>"
        ],
        "tags": [
            "jQuery",
            "PHP",
            "MySQL",
            "Git",
            "PayPal",
            "CSS"
        ]
    },
    {
        "title": "Hair & Beauty IOM",
        "slug": "hair-and-beauty-iom",
        "role": "Full stack PHP Developer",
        "company": "DotPerformance",
        "companylogo": "/static/projects/dotperformance-logo.png",
        "media": "/static/projects/hairandbeauty.jpg",
        "medialarge": "/static/projects/hairandbeauty-large.jpg",
        "date": "12th Aug 2015",
        "description": [
            "<h2>An ecommerce website for a hair & beauty wholesaler on the IOM</h2>"
        ],
        "tags": [
            "jQuery",
            "PHP",
            "VendHQ",
            "API",
            "Git",
            "PayPal",
            "MySQL",
            "CSS"
        ]
    }];

    render() {
        return (
            <div className="projects">
                <h2>Three projects I'm proud of...</h2>
                <div className="items-list">
                    {this.projects && this.projects.map((project, index) => {
                        return <Project key={index} project={project} />
                    })}
                </div>
            </div>
        )
    }
}

const Project = (props) => {
    const project = props.project;
    return (
        <div className="items__item">
            <div className="items__item--imgwrapper">
                <img src={project.media} alt={project.title} />
            </div>
            <div className="items__item--content">
                <div className="date">{project.date}</div>
                <div className="dash"></div>
                <div className="title">{project.title}</div>
                <div className="role">{project.role}</div>
                {
                    project.tags && (
                        <div className="tags">
                            {
                                project.tags.map((tag, index) => {
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
