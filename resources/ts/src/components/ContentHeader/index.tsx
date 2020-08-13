import React from "react";

interface ContentHeaderProps {
    title: String,

}

const ContentHeader: React.FC<ContentHeaderProps> = ({title, ...props}) => {
    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0 text-dark">
                            {title}
                        </h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                           {props.children}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentHeader;
