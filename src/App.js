import React, { useState } from 'react';
import classnames from 'classnames'
import './App.css';


import { GothamHTF, GothamCondensed } from './fonts/fonts.module.css'

const fonts = [
  { display: "Gotham HTF", font: GothamHTF },
  { display: "Gotham Condensed", font: GothamCondensed },
]

const displayText = [
  { tag: "h1", text: "Header 1" },
  { tag: "h2", text: "Header 2" },
  { tag: "h3", text: "Header 3" },
  { tag: "h4", text: "Header 4" },
  { tag: "h5", text: "Header 5" },
  { tag: "h6", text: "Header 6" },
  { tag: "p", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate vestibulum venenatis. Nulla eget diam et sem convallis aliquet. Sed dapibus vel mauris quis aliquet. Nulla accumsan metus vel nisl sodales maximus. Maecenas a sapien vitae odio maximus pulvinar sed eget eros. Mauris mollis nulla vel blandit dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed luctus ante at massa condimentum fringilla." },
]

const App = () => {
  const [font, setFont] = useState({ display: '', font: '' });

  return (
    <div className="App">
      <div className="button-container">
        {fonts.map((n, i) => (
          <button
            key={i}
            className={classnames(
              n.font,
              { "active": font.display === n.display }
            )}
            onClick={() => setFont(n)}>
            {n.display}
          </button>
        ))}
      </div>
      <hr />
      <div>
        {displayText.map((n, i) => {
          const Tag = n.tag
          return <Tag className={font.font} key={i}>{`${font.display} ${n.text}`}</Tag>
        })}
      </div>
    </div>
  )
}

export default App;
