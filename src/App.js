import './App.css';
import NavigationBar1 from './Components/NavigationBar1'
import Card1 from './Components/Cards1'
import {Players} from './Players'
import PlayerList from './Components/PlayerList';
import PlayerCard from './Components/PlayerCard';


function App() {
  console.log(Players)
  return (
    <div className="App" style={{backgroundColor:'lilac'}}>
      <NavigationBar1/>
      <div style={{justifyContent:'center', alignContent:"center"}}><h1 style={{color:'red'}}> Poke </h1><h1 style={{color:'white'}}>mon</h1> <h1> Player Cards</h1> </div>
      <div className="Cards" style={{ display :'flex' , justifyContent :'space-around'}}>
        <PlayerList />
</div>
    </div>
  );
}

export default App;
