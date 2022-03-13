import './App.css';
import Profile from './profile/Profile';
import img from './profile/aa.jpg'

function App() {
  const handlename = () => {
    alert('the fullname is  {fullname}')
  }
    return (
    <div className="App">
      <Profile 
      fullname='najeh'
      bio='aaaaa'
      profession='qqqqqqq'
      handlename={handlename}
      >
      <img src={img} alt="" />

      </Profile>

    </div>
  );
}
export default App;
