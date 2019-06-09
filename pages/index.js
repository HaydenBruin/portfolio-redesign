import React, { Component } from 'react'

// Layout
import Layout from '../components/layouts/default'

// Components
import Hero from '../components/hero'
import Projects from '../components/projects'
import Blog from '../components/blog'

export default class Home extends Component {
    render() {
        return (
            <Layout>
                <Hero />
                <Projects />
                <Blog />
            </Layout>
        )
    }
}
