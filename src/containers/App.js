import React, {Component} from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Person';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
   console.log("app.js inside constructur",props);
    this.state = {
      persons: [
        {
          id: '1',
          name: 'Max',
          age: 28
        }, {
          id: '2',
          name: 'Manu',
          age: 29
        }, {
          id: '3',
          name: 'Stephanie',
          age: 26
        }
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }
componentWillMount(){
  console.log("app.js inside componentWillMount");
  
}
componentDidMount(){
  console.log("app.js inside componentDidMount ");

}

  

  switchNameHandler = (newName) => {
    // console.log('Was clicked!'); DON'T DO THIS: this.state.persons[0].name =
    // 'Maximilian';
    this.setState({
      persons: [
        {
          name: newName,
          age: 28
        }, {
          name: 'Manu',
          age: 29
        }, {
          name: 'Stephanie',
          age: 27
        }
      ]
    })
  }

  deletePersonHandler = (personIndex) =>{
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    //const person = Object.assign({},this.state.persons[personIndex]
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex]=person;

    this.setState({persons:persons})

  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});

  }

  render() {
    console.log("app inside render");
    
  let persons = null;

  if(this.state.showPersons){
    persons = (

        <div>
          <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
          
        </div>
    );
   
  }

  return <div className={classes.App}>
      <Cockpit
      appTitle={this.props.title}
      showPersons={this.state.showPersons}
      persons={this.state.persons}
      clicked={this.togglePersonHandler}
      />
      {persons}
    </div>;

  }
}

export default App;
