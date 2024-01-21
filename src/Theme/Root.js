// https://docusaurus.io/docs/swizzling#wrapper-your-site-with-root
import '@near-wallet-selector/modal-ui/styles.css';

import React from 'react';
import { withRouter } from 'react-router-dom';

import { useInitWallet } from './Gateway/wallet-selector';

function Root({ children}) {
    useInitWallet({ createAccessKeyFor: 'near.social' , networkId: 'mainnet' });
    return <>{children}</>;
}

export default withRouter(Root);