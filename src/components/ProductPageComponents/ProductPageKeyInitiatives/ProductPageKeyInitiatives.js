import React, {useState} from "react";
import visionImage from '../../../img/vision-image.jpg';
import {CustomPagerButtons} from "../../CustomPagerButtons/CustomPagerButtons";

export const ProductPageKeyInitiatives = ({project}) => {
    const keyObjectives = project.keyInitiatives;
    const [activeKeyObjectiveIndex, setKeyObjectiveIndex] = useState(
        0
    );
    return (
        <div className={'product-page-key-initiatives-section-wrapper'}>
            <div className={'title-big'}>
                Key Initiatives
            </div>
            <div className={'content-section'}>
                <div className="gray-background hide-for-small-only"/>
                <div className={'content-inner-section dummy'}>
                    <div className={'image-section'}>
                        <div className={'image-wrapper'} style={{backgroundImage: `url(${visionImage})`}}>

                        </div>
                    </div>
                    <div className={'text-section'}>
                        <div className={'sub-title'} style={{marginTop: '10px'}}>
                            Saksham Ghoshna
                        </div>

                        <div className={'description'}>
                            {keyObjectives[project.longestKeyInitiatives || 0].description}
                            <div style={{marginTop: '30px'}}>
                                <CustomPagerButtons/>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    keyObjectives.map((kO, index) => {
                        return <div
                            key={index}
                            className={`content-inner-section ${index === activeKeyObjectiveIndex ? 'active-section' : 'inactive-section'}`}>
                            <div className={'image-section'}>
                                <div className={'image-wrapper'} style={{backgroundImage: `url(${'http://luezoid.com:3399/' + kO.image})`}}>

                                </div>
                            </div>
                            <div className={'text-section'}>
                                <div className={'sub-title'} style={{marginTop: '10px'}}>
                                    {kO.title}
                                </div>

                                <div className={'description'}>
                                    {kO.description}
                                    <div style={{marginTop: '30px'}}>
                                        <CustomPagerButtons pageChanged={(index) => setKeyObjectiveIndex(index)}
                                                            pages={keyObjectives.length}
                                                            currentIndex={activeKeyObjectiveIndex}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    )
};

