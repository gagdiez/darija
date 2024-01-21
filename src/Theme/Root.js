// https://docusaurus.io/docs/swizzling#wrapper-your-site-with-root
import '@near-wallet-selector/modal-ui/styles.css';

import React from 'react';
import { withRouter } from 'react-router-dom';

import { useInitWallet } from './Gateway/wallet-selector';

function Root({ children}) {
    useInitWallet({ createAccessKeyFor: 'v1.social08.testnet' , networkId: 'testnet' });
    return <>{children}</>;
}

export default withRouter(Root);