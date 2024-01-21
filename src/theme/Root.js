
import React from 'react';
import { withRouter } from 'react-router-dom';

import '@near-wallet-selector/modal-ui/styles.css';
import { useInitWallet } from './Gateway/wallet-selector';

function Root({ children}) {
    useInitWallet({ createAccessKeyFor: 'near.social' , networkId: 'mainnet' });
    return <>{children}</>;
}

export default withRouter(Root);