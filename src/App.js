import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useState} from 'react';
function App() {

  const [email , setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handlesubmit = async (e) => {
    e.preventDefault();

    try{
        const response = await axios.get(`http://197.168.1.157:5000/valid?email=${email}`)

        setMessage(response.data);
    }catch (error){
      if (error.response && error.response.status === 401) {
        // Handle 401 error (unauthorized/mismatched email)
        setMessage(error.response.data.message); // Display error message
      } else {
        // Handle other errors
        setMessage('An error occurred. Please try again.');
      }
    }
  }
  return (
    <div className="App">
      <form action="#">
        <input type="text" placeholder="Enter Your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <button type="submit" onClick={handlesubmit}>Validate</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
