import React, { useEffect } from "react";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "react-bootstrap-typeahead/css/Typeahead.bs5.css";
import BrowserOnly from '@docusaurus/BrowserOnly';

export function Game({ uuid, evaluator }) {
  return <BrowserOnly fallback={<div> Loading... </div>}>
    {() => {
      const { Widget, useInitNear } = require('near-social-vm');
      const { initNear } = useInitNear();

      // selector is a promise that resolves to a selector object
      const selector = Promise.resolve({ store: { observable: { subscribe: () => { } } } });

      useEffect(() => {
        initNear && initNear({ networkId: 'mainnet', selector });
      }, [initNear]);

      return <>
        <div class="bootstrap-scope">
          <Widget src={"gagdiez.near/widget/Darija.Lessons.Lesson"} props={{ uuid, evaluator }} />
        </div>
      </>
    }
    }
  </BrowserOnly>
}

export function Component({ src, props }) {
  return <BrowserOnly fallback={<div> Loading... </div>}>
    {() => {
      const { Widget, useInitNear } = require('near-social-vm');
      const { initNear } = useInitNear();
      const { selector } = useWallet();

      useEffect(() => {
        initNear && selector && initNear({ networkId: 'mainnet', selector });
      }, [initNear, selector]);

      return <>
        <div class="bootstrap-scope">
          <Widget src={src} props={props} />
        </div>
      </>
    }
    }
  </BrowserOnly>
}