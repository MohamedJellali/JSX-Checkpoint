
import './App.css';
import React from "react";
import Vangogh from "./images/vg.jpeg"
import Video from "./videos/Video.mp4"
import "./style.css"

 function App() {
   return (
    <div>
    
<div style={{border:'solid 1px black',maxWidth:'100vw'}}>

<h1 className="title red">VAN GOGH WORLD</h1>

<br />

<img src={Vangogh} alt="van gogh" />
<br />

<img src="/vg2.jpeg" alt="vangogh" />

</div>

<video controls src={Video} type="video/mp4" width={320} height={240} />

    </div>
   );
 }

export default App;
