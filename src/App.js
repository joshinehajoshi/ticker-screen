import './App.css';
import image from './images/arrow-right.png';
import image1 from './images/bitcoin.png';
import image2 from './images/letter-t.png';
import image3 from './images/cancel.png';

function App() {
  
  // const ws = new WebSocket('wss://localhost:3000/stg.clubdefy.io/to/ws');

  // ws.onmessage = (event) => {
  //   console.log(event.data)
  // }

  return (
    <div className="App row p-0 m-0">
      <div className="App-div1">
        <p className="App-p1">Hi Jhon,</p>
        <p className="App-p2">Complete your KYC</p>
        <p className="App-p3">and experience the world class <br /> bitcoin app defi</p>
        <p className="App-p4">Start KYC <img src={image} alt="arrow"></img></p>
      </div>



      <div className="App-div2">
      <p className="App-div2-p1">Ideal for new investors</p>
      <div className="App-div2-div">
        <img src={image1} />
        <p>Bitcoin</p>
        <p>1st Quantity</p>
        <p>2nd Quantity</p>
        <p>3rd Quantity</p>
      </div>
      <br />

      <div className="App-div2-div">
        <img src={image2} />
        <p>Ethereum</p>
        <p>1st Quantity</p>
        <p>2nd Quantity</p>
        <p>3rd Quantity</p>
      </div>
      <br />

      <div className="App-div2-div">
        <img src={image3} />
        <p>XRP</p>
        <p>1st Quantity</p>
        <p>2nd Quantity</p>
        <p>3rd Quantity</p>
      </div>
      <br />

      <div className="App-div2-div">
        <img src={image1} />
        <p>Bitcoin</p>
        <p>1st Quantity</p>
        <p>2nd Quantity</p>
        <p>3rd Quantity</p>
      </div>
      <br />

      </div>



      <div className="App-div2 App-div3">
      <p className="App-div2-p1">Trending coins</p>
      <div className="App-div2-div">
        <img src={image1} />
        <p>Bitcoin</p>
        <p>1st Quantity</p>
        <p>2nd Quantity</p>
        <p>3rd Quantity</p>
      </div>
      <br />

      <div className="App-div2-div">
        <img src={image2} />
        <p>Ethereum</p>
        <p>1st Quantity</p>
        <p>2nd Quantity</p>
        <p>3rd Quantity</p>
      </div>
      <br />

      <div className="App-div2-div">
        <img src={image3} />
        <p>XRP</p>
        <p>1st Quantity</p>
        <p>2nd Quantity</p>
        <p>3rd Quantity</p>
      </div>
      <br />

      <div className="App-div2-div">
        <img src={image1} />
        <p>Bitcoin</p>
        <p>1st Quantity</p>
        <p>2nd Quantity</p>
        <p>3rd Quantity</p>
      </div>
      <br />

      </div>


      <div className="App-div2 App-div3">
      <p className="App-div2-p1">Non trending coins</p>
      <div className="App-div2-div">
        <img src={image1} />
        <p>Bitcoin</p>
        <p>1st Quantity</p>
        <p>2nd Quantity</p>
        <p>3rd Quantity</p>
      </div>
      <br />

      <div className="App-div2-div">
        <img src={image2} />
        <p>Ethereum</p>
        <p>1st Quantity</p>
        <p>2nd Quantity</p>
        <p>3rd Quantity</p>
      </div>
      <br />

      <div className="App-div2-div">
        <img src={image3} />
        <p>XRP</p>
        <p>1st Quantity</p>
        <p>2nd Quantity</p>
        <p>3rd Quantity</p>
      </div>
      <br />

      <div className="App-div2-div">
        <img src={image1} />
        <p>Bitcoin</p>
        <p>1st Quantity</p>
        <p>2nd Quantity</p>
        <p>3rd Quantity</p>
      </div>
      <br />

      </div>
    </div>
  );
}

export default App;
