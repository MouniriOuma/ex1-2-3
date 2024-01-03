import logo from './logo.svg';
import './App.css';
import Avatar from './Avatar.js';
import logo512 from './logo512.png'
import Card from './Card';




function App() {
  return (
<div className="App">
    
      <div>
        <Card title='photo'>
          <img
          src={logo512}
          alt='aklilu lemma'
          width={70}
          height={70}
    
          />
        </Card>
      </div>
    
      <div>
        <Card title='about'>
          <p>
            Aklilu lemma was a distinguished ethiopian scientistwho disci=overed  a natural treatment to schis
          </p>
        </Card>
      </div>
      
      
    </div>

  );
}

export default App;


    ////exercice 1&2
    // <div className="App" style={{display:'Flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
    //   <Avatar title={"title 1"} pic={logo512} size={'80 px'}/>
    //   <Avatar title={"title 2"} pic={logo512} size={'80 px'}/>
    //   <Avatar title={"title 3"} pic={logo512} size={'80 px'}/>
    // </div>
    
    
    ////EXERCICE 3
    // <div className="App">
    
    //   <div>
    //     <Card title='photo'>
    //       <img
    //       src={logo512}
    //       alt='aklilu lemma'
    //       width={70}
    //       height={70}
    
    //       />
    //     </Card>
    //   </div>
    
    //   <div>
    //     <Card title='about'>
    //       <p>
    //         Aklilu lemma was a distinguished ethiopian scientistwho disci=overed  a natural treatment to schis
    //       </p>
    //     </Card>
    //   </div>
      
      
    // </div>
