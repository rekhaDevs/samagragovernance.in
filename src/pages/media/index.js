import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import MediaRoll from "../../components/MediaRoll";

export default class MediaIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <div className={'home-top-slider-wrapper media-page-banner'}
                     style={{height: '600px', backgroundImage: `url(https://api.samagragovernance.in/blog/blog-header-bg.jpg)`}}>
                    <div className="translucent-dark-overlay" style={{height: 'auto'}}>
                    </div>
                    <div className=" container content-section">
                        <div className="title">
                            Samagra in News
                        </div>
                    </div>
                </div>
                <section className="section">
                    <div className="container-fluid">
                        <div className="content">
                            <MediaRoll/>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
