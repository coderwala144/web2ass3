import logo from './logo.svg';
import './App.css';

function App() {
  const mydata = {
    name : "shafin asif kothiwale",
    email : "shaafinkothiwale@gmail.com",
    age : "19", bio :"Hi , I am student at D.Y.Patil ",
    skills:["cybersecurity","database","backend"],
  };
  return (
    <div className="App">
      <h1>My Profile</h1>
      <div className='info'>
        <p><strong>name : </strong>{mydata.name}</p>
        <p><strong>email : </strong>{mydata.email}</p>
        <p><strong>age : </strong>{mydata.age}</p>
        <p><strong>bio : </strong>{mydata.bio}</p>
      </div>
      <h3>skills :</h3>
      <ul>
          {mydata.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
    
  );
}

export default App;
