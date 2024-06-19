import Header from './A_Header.jsx'
import Footer from './C_Footer.jsx';
import Food from './B_Food.jsx';
import Card from './D_Card.jsx';
import Button from './E_Button.jsx'
import Button2 from './F_Button/Button.jsx'
import Students from './G_Props.jsx';
import UserGreeting from './H_conditional_rendering.jsx'
import List from './I_rendering_list.jsx'


function App() {
  return (
    <>
    <Header/>
    <Footer/>
    <Food/>
    <Food/>
    <Card/>
    <Button/>
    <Button2/>

    {/* if value is not string - it has to be inside {}  */}
    <Students name="Tomy" age={12} isStudent={true} />
    <Students name="Rockey" age={16} isStudent={false} />
    <Students name="Sumo"  />

    <UserGreeting isLoggedIn={true} username="Rufus" />
    <UserGreeting isLoggedIn={false} username="Rufus" />

    <List/>


    </>
  );
}

export default App ;

// --------------------------
  /*
    <Header></Header>
    or
    <Header/>
    Same thing
  */
// --------------------------
  /*
    Jsx fragment :
      <> ... </> 
      Since we only can returning a single inclosing tag
      we going to enclose out components with fragment 
  */
// --------------------------

