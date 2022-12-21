
import './App.css';
import { data } from './utils/data';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      students: data,
      selected: 'firstname',
      id:'',
      firstname:'',
      lastname:'',
      username:'',
     

   }
  }

  render(){

    const onDelete =(id)=>{

      const res =this.state.students.filter( value => value.id !== id);
      this.setState({students: res})
    }

    const onSearch = (e)=> {
      console.log(e)
      const search =data.filter(el=>el[this.state.selected].toLowerCase().includes (e.target.value.toLowerCase()))
      this.setState({students:search})
      console.log(search, 'search');
    }

    const onSelect=(e)=>{
      this.setState({selected: e.target.value})
    }

    const onChange =(e) => {
      const{ value, name} =e.target;
      this.setState({[name]:value})
    }


    const onAdd =() =>{
      let newUser ={
        id : this.state.students.length +1,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        username: this.state.username
      }
      this.setState({students:[...this.state.students, newUser],firstname:'',
      lastname:'',
      username:'' })
    }


    

    console.log(this.state.students,'students');
    // console.log(this.state.selected, 'selected');
    return(
      <div className='container'>
        <h1>Listing</h1>
        <input type="text" placeholder='Search' className="search" onChange={onSearch} />
        <select onChange={onSelect} className="select">
          <option value="Firstname">Firstname</option>
          <option value="Lastname">Lastname</option>
          <option value="username">Username</option>

        </select>

        <table className='table' >
          <thead className='thead'>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Username</th>
                     
          <th>Delete</th>
            </tr>
          </thead>
          <tbody className='tbody' >
          {
          this.state.students.map((value)=>{
            return(
              <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.firstname}</td>
              <td >{value.lastname}</td>
              <td >{value.username}</td>
              
              
              <td><button onClick={()=> onDelete (value.id)}>Delete</button></td>

            </tr>

            )
          })
        }

            
          </tbody>
        </table>
          <div className='footer'>
          <input value={this.state.firstname} name='firstname' type="text" placeholder='FirstName' onChange={onChange} />
          <input value={this.state.lastname} name='lastname' type="text" placeholder='Lastname' onChange={onChange}  />
          <input value={this.state.username}name='username' type="text" placeholder='username' onChange={onChange} />
            <button className='add-btn' onClick={onAdd}>Add</button>
          </div>

      </div>
    )
  }
}

export default App;
