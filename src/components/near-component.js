import React, { useEffect } from "react";
import { useWallet } from '@theme/Gateway/wallet-selector';
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-bootstrap-typeahead/css/Typeahead.bs5.css";

export function Component({ src, args, id = 1 }) {
  const { Widget, useInitNear } = require('near-social-vm');
  const { initNear } = useInitNear();
  const { selector } = useWallet();

  useEffect(() => {
    initNear && selector && initNear({ networkId: 'testnet', selector });
  }, [initNear, selector]);

  return <div class="bootstrap-scope"> <Widget src={src} props={args} key={id} /> </div>
}