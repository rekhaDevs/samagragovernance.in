import React from "react";

export const CustomPagerButtons = ({pages, currentIndex, pageChanged}) => {
    const previousActive = currentIndex !== 0;
    const nextActive = currentIndex < pages - 1;
    if (pages > 1)
        return (
            <div className={"custom-pager-buttons-wrapper"}>
                <div className={`action-wrapper ${previousActive ? 'active' : 'disabled'}`}
                     onClick={() => {
                         if (!previousActive)
                             return;
                         (currentIndex === 0) ? pageChanged(pages - 1) : pageChanged(currentIndex - 1)
                     }}>
                    <div className="action">
                        <i className="fa fa-arrow-left"/>
                    </div>
                </div>
                <div className={`action-wrapper ${nextActive ? 'active' : 'disabled'}`} onClick={() => {
                    if (!nextActive)
                        return;
                    (currentIndex < pages - 1) ? pageChanged(currentIndex + 1) : pageChanged(0)
                }}>
                    <div className="action">
                        <i className="fa fa-arrow-right"/>
                    </div>
                </div>
                <div className="pages">
                    {currentIndex + 1}/{pages}
                </div>
            </div>
        );
    return <span/>
};
