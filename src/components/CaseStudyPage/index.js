import React from 'react';
import Layout from '../../components/Layout';
import CaseStudiesRoll from '../CaseStudiesRoll';
export default class CaseStudyPage extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <Layout>
        <div
          className={'home-top-slider-wrapper media-page-banner'}
          style={{
            height: '600px',
            backgroundImage: `url(${content.bannerImage.childImageSharp.fluid.src || content.bannerImage.childImageSharp.fluid.srcSet})`,
          }}>
          <div
            className="translucent-dark-overlay"
            style={{ height: 'auto' }}></div>
          <div className=" container content-section">
            <div className="title">Case Studies</div>
          </div>
        </div>
        <div className={'container career-section-second'}>
          <div className="row">
            <div className="col-11 mx-auto">
              <div
                className={
                  'mt-4 py-5 text-center f-23 color-text-primary main-text'
                }>
                {content.description}
              </div>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container-fluid">
            <div className="content">
              <CaseStudiesRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
