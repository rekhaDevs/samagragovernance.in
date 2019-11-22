import React from 'react'
import {Helmet} from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'
import {withPrefix} from 'gatsby'
import HeaderSmall from "./HeaderSmall";
import ReactGA from 'react-ga';

const TemplateWrapper = ({children}) => {
    const {title, description} = useSiteMetadata()

    ReactGA.initialize('UA-117691729-3');
    ReactGA.pageview(window.location.pathname);
    return (
        <div>
            <Helmet>
                <html lang="en"/>
                <title>Samagra Governance</title>
                <meta name="description" content={'Samagra Governance'}/>

                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={`${withPrefix('/')}img/apple-touch-icon.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/favicon-32x32.png`}
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix('/')}img/favicon-16x16.png`}
                    sizes="16x16"
                />

                <link
                    rel="mask-icon"
                    href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
                    color="#ff4400"
                />
                <meta name="theme-color" content="#fff"/>

                <meta property="og:type" content="business.business"/>
                <meta property="og:title" content={'Samagra Governance'}/>
                <meta property="og:url" content="/"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                      integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                      crossOrigin="anonymous"/>
                <link rel="stylesheet"
                      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                      crossOrigin="anonymous"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"/>
                <meta
                    property="og:image"
                    content={`${withPrefix('/')}img/logo-colored.png`}
                />
            </Helmet>
            <span className={'hide-for-small-only'}><Navbar/></span>
            <span className={'show-for-small-only'}><HeaderSmall/></span>
            <div>{children}</div>
            <Footer/>
        </div>
    )
}

export default TemplateWrapper
