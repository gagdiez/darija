
import React from 'react';
import { withRouter } from 'react-router-dom';

function Root({ children}) {
    return <>{children}</>;
}

export default withRouter(Root);