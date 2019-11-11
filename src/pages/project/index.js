import React from 'react'

import Layout from '../../components/Layout'

export default class ProjectIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                <div className={'home-top-slider-wrapper media-page-banner'}
                     style={{height: '600px', backgroundImage: `url(https://api.samagragovernance.in/blog/blog-header-bg.jpg)`}}>
                    <div className="translucent-dark-overlay" style={{height: 'auto'}}>
                    </div>
                    <div className=" container content-section">
                        <div className="title">
                            Samvaad
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}
