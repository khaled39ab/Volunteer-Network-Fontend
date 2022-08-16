import React from 'react';
import { Helmet } from 'react-helmet';

const PageTitle = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>{title}- Volunteer Network</title>
            </Helmet>
        </div>
    );
};

export default PageTitle;