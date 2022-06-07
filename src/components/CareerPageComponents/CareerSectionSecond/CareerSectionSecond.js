import React from "react";
import {PrimaryButton} from "../../PrimaryButton/PrimaryButton";

const CareerSectionSecond = ({content, fromC4GT}) => {
    return (
        <div className={'container career-section-second'}>
            <div className="row">
                <div className="col-11 mx-auto">
                    <div className={'mt-4 py-5 text-center f-23 color-text-primary main-text'}>
                        {
                            content.mainContent.map((c) => {
                                return <p>
                                    {c.text}
                                </p>
                            })
                        }

                    </div>
                    <div className={'text-center mt-4'}>
                        <PrimaryButton classes={'py-3 text-uppercase'} click={() => {
                           if(fromC4GT){
                            window.open('https://www.codeforgovtech.in/apply');
                           }else{
                           window.location.href = '/joinus'
                           }
                        }} text={'Apply'}/>
                    </div>
                    {<div className={'fw-600 philosophy-title text-center mt-5 pt-4 mb-5'}>
                        {!fromC4GT ? 'People Philosophy' : ' '}
                    </div>}
                </div>
            </div>
        </div>
    )
};

export default CareerSectionSecond;
