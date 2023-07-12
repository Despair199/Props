import './App.css';
import NavigationBar1 from './Components/NavigationBar1'
import Card1 from './Components/Cards1'
import Title1 from './Components/Title1'
import Players from './Players'

function App() {
  return (
    <div className="App" style={{backgroundColor:'lilac'}}>
      <NavigationBar1/>
      <div style={{justifyContent:'center', alignContent:"center"}}><h1 style={{color:'red'}}> Poke </h1><h1 style={{color:'white'}}>mon</h1> <h1> Player Cards</h1> </div>
      <div className="Cards" style={{ display :'flex' , justifyContent :'space-around'}}>
        <Card1 style={{width: '18rem', border:'6px solid #FFB5CB', backgroundColor:'#F8EADC'}} body={{ backgroundcolor:'#F8EADC'}} name="Sylveon" description="This Pokémon uses its ribbonlike feelers to send a soothing aura into its opponents, erasing their hostility." image='https://archives.bulbagarden.net/media/upload/thumb/d/d0/0700Sylveon.png/250px-0700Sylveon.png' type='Fairy' number='#0700'/>
        <Card1 style={{width: '18rem', border:'6px solid #726CAB', backgroundColor:'#D9BAD2'}} name="Espeon" description="The tip of its forked tail quivers when it is predicting its opponents next move." image='https://archives.bulbagarden.net/media/upload/thumb/6/67/0196Espeon.png/250px-0196Espeon.png' type="Psychic" number='#0196' />
        <Card1 style={{width: '18rem', border:'6px solid #020303', backgroundColor:'#F4D995'}} name="Umbreon" description="When darkness falls, the rings on the body begin to glow, striking fear in the hearts of anyone nearby." image='https://archives.bulbagarden.net/media/upload/thumb/e/e1/0197Umbreon.png/250px-0197Umbreon.png'type="Dark" number='#0197' />
      </div>
    </div>
  );
}

export default App;
