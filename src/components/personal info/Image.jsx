import { useState } from "react";

const Image = () => {
  let [visible, setVisible] = useState('none');
  let [scale, setScale] = useState(1);

  const zoomIn = () => {
    if(scale < 1.5) {
      setScale(scale + 0.1);
    }
  }

  const zoomOut = () => {
    if(scale > 0.75) {
      setScale(scale - 0.1);
    }
  }

  return(
    <div>
      <a href="https://www.0629.com.ua/" target="_blank">
          <img src="assets/images/mariupol.jpg" alt="Mariupol"></img>
      </a>

      <div style={{display: visible}} id="img-block">
        <img style={{transform: `scale(${scale})`}} id="image" src="assets/images/mariupol.jpg" alt="Mariupol"></img>
      </div>
      
      <div>
        <button onClick={() => setVisible('block')}>Додати</button>
        <button onClick={zoomIn}>Збільшити</button>
        <button onClick={zoomOut}>Зменшити</button>
        <button onClick={() => setVisible('none')}>Видалити</button>
      </div>
    </div>
  )
}

export default Image;