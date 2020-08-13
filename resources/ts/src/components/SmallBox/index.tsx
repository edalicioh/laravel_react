import React from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IconBaseProps } from "react-icons/lib";

interface SmallBoxProps {
    title?: String;
    icon: React.Component<IconBaseProps>;
    boxClass?: String;

}

const SmallBox: React.FC<SmallBoxProps> = ({title, icon: Icons,boxClass , ...props}) => {
    return (
        <div className="col-lg-3 col-6">
            <div className={boxClass}>
                <div className="small-subbox" >
                    <div className="inner">
                    <h3>150</h3>

                    <p>New Orders</p>
                </div>
                <div className="icon">
                { <Icons size="6rem" /> }
                </div>
            </div>
            <a href="#" className="small-box-footer">More info <FaArrowAltCircleRight /></a>
        </div>
    </div>
    );
};

export default SmallBox;
