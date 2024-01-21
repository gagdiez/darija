import React, { useEffect } from "react";
import { useWallet } from '@theme/Gateway/wallet-selector';
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-bootstrap-typeahead/css/Typeahead.bs5.css";

export function Component({ src, args, id = 1 }) {
  const { Widget, useInitNear } = require('near-social-vm');
  const { initNear } = useInitNear();
  const { selector } = useWallet();

  useEffect(() => {
    initNear && selector && initNear({ networkId: 'mainnet', selector });
  }, [initNear, selector]);

  return <div class="bootstrap-scope"> <Widget src={src} props={args} key={id} /> </div>
}


export function Game({ uuid, evaluator }) {
  const { Widget, useInitNear } = require('near-social-vm');
  const { initNear } = useInitNear();
  const { selector } = useWallet();

  useEffect(() => {
    initNear && selector && initNear({ networkId: 'mainnet', selector });
  }, [initNear, selector]);

  return <>
    <div class="bootstrap-scope">
      <Widget src={"gagdiez.near/widget/Darija.Lessons.Lesson"} props={{uuid, evaluator}} /> 
    </div>
  </>
}