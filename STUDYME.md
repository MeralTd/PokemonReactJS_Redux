TOC

- [React's Portals](#reacts-portals)
- [copyStyles](#copystyles)

## React's Portals

When to use? Modals, Tooltips, Floating menus, Widgets.

https://codeburst.io/reacts-portals-in-3-minutes-9b2efb74e9a9

```
const Outsider = () => {
  ReactDOM.createPortal(<div>I'm outside!</div>, document.body)
}

class App extends Component {
  render = () => {
    return (
      <Outsider/>
    )
  }
}
```

#### Scope + Bubbling

A brilliant thing about portals is that a component rendered in a portal acts as if it is still in the React tree. It behaves like a normal React child. You can pass it props, it will react to updates etc.  
Events fired in a portal will also bubble up through the React tree!

https://hackernoon.com/using-a-react-16-portal-to-do-something-cool-2a2d627b0202

poketrade/components/Modal.js:

```
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { showModal } from '../actions';

const Modal = (props) => {
  const { showModal,openedModal } = props;

  const ModalElement = (
    <ModalStyled>
      <div className="modal-content">
        <button onClick={() => showModal(false)}>&times;</button>

        <h1>{openedModal.item.name}</h1>

        {
          openedModal.item.text && (
            openedModal.item.text.map((paragraph,i) => (
              <p key={i}>{paragraph}</p>
            ))
          )
        }
      </div>
    </ModalStyled>
  );

  // const element = document.createElement('div');
  // const tab = window.open('', '', 'width=600,height=400,left=200,top=200');

  return (
    ReactDOM.createPortal(
      ModalElement,
      document.body
      // tab.document.body.appendChild(element)
    )
  );
};

export default connect(
  state => ({
    openedModal: state.openedModal
  }),
  {
    showModal
  }
)(Modal);
```

## copyStyles

```
function copyStyles(sourceDoc, targetDoc) {
  Array.from(sourceDoc.styleSheets).forEach(styleSheet => {
    if (styleSheet.cssRules) { // for <style> elements
      const newStyleEl = sourceDoc.createElement('style');

      Array.from(styleSheet.cssRules).forEach(cssRule => {
        // write the text of each rule into the body of the style element
        newStyleEl.appendChild(sourceDoc.createTextNode(cssRule.cssText));
      });

      targetDoc.head.appendChild(newStyleEl);
    } else if (styleSheet.href) { // for <link> elements loading CSS from a URL
      const newLinkEl = sourceDoc.createElement('link');

      newLinkEl.rel = 'stylesheet';
      newLinkEl.href = styleSheet.href;
      targetDoc.head.appendChild(newLinkEl);
    }
  });
}
```
