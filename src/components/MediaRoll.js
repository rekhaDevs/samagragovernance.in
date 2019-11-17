import React from 'react'
import PropTypes from 'prop-types'
import {Link, graphql, StaticQuery} from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import {PrimaryButton} from "./PrimaryButton/PrimaryButton";

export class MediaRoll extends React.Component {
    render() {
        const {media} = this.props
        console.log(media);
        return (
            <div className={'row'}>
                {
                    media.map((m) => {
                        return <a href={m.link} target="_blank" className="col-sm-6 col-xs-12">
                            <div className="blog-wrapper">
                                <div className="image-wrapper" style={{
                                    backgroundImage: `url(${
                                        !!m.image.childImageSharp ? m.image.childImageSharp.fluid.src : ''
                                    })`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>

                                </div>
                                <div className="content-wrapper">
                                    <div className="heading" style={{minHeight: '48px'}}>
                                        {m.title}
                                    </div>
                                    <div className="posted-on">
                                        {m.mediaHouse} on {m.date}
                                    </div>

                                    <div className="read-more">
                                        Read More
                                    </div>

                                </div>
                            </div>
                        </a>
                    })
                }
            </div>
        )
    }
}
