import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import backgroundImage from "../../img/blog-header-bg.jpg";
export default class BlogIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <div className={'home-top-slider-wrapper media-page-banner'}
                     style={{height: '600px', backgroundImage: `url(${backgroundImage})`}}>
                    <div className="translucent-dark-overlay" style={{height: 'auto'}}>
                    </div>
                    <div className=" container content-section">
                        <div className="title">
                            Samvaad
                        </div>
                    </div>
                </div>
                <section className="section">
                    <div className="container-fluid">
                        <div className="content">
                            <BlogRoll/>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
