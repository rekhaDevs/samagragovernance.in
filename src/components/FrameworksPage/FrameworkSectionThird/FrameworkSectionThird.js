import React from "react";
import {PrimaryButton} from "../../PrimaryButton/PrimaryButton";

const FrameworkSectionThird = ({content}) => {
    console.log(content)
    return (
        <div className={'frameworks-section'}>
            {
                content.frameworks.map((c) => {
                    return <div className={'items'}>
                        <div className={'item-image'} style={{
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundImage: `url(${
                                !!c.image.childImageSharp ? c.image.childImageSharp.fluid.src : c.image
                            })`
                        }}>

                        </div>
                        <div className="details">
                            <p>
                                {c.text}
                            </p>
                            <div className="actions">
                                {
                                    c.actions.map((a) => {
                                        return <div classNam={'action'}>
                                            <PrimaryButton classes={'py-2 text-uppercase'} click={() => {
                                                window.open(a.link, '_blank');
                                            }}>
                                                <div style={{display: 'flex', alignItems: 'center'}}>
                                                    {
                                                        a.icon &&
                                                        <img style={{marginRight: '5px'}} width={20} height={20}
                                                             src={!!a.icon.childImageSharp ? a.icon.childImageSharp.fluid.src : a.icon}/>
                                                    }
                                                    {a.text}
                                                </div>
                                            </PrimaryButton>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    )
};

export default FrameworkSectionThird;
