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
                                            }} text={a.text}/>
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
