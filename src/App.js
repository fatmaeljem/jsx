import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
   <div>

       <div style="border:solid 1px black;max-width:100vw" />
       <h1 class="title red">Your name here</h1>
        <br></br>
        <img src='/imageInSrc.jpg'></img>
         <br></br>
       <img src="/imageInPublic.jpg" ></img>
       <video width="320" height="240" controls >
       <source src="myVideo.mp4" type="video/mp4" />
       </video>

    </div>

  );
}
 
export default App;
