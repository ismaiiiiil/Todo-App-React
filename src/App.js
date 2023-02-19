import './index.css';

import React, { Component } from 'react'
import TodoItems from './components/TodoItems/TodoItems';
import AddItem from './components/AddItem/AddItem';

class App extends Component {
  state = {
    items : [
      {id:1, name:'Ismail', age: 20},
      {id:2, name:'Hamza', age: 27},
      {id:3, name:'Mourad', age: 24}
    ]
  }

  // -------- DELETE -------- 
  deleteItem = (id) => {

    // --------------** method 1  ( findIndex ) **---------------
    // let items = this.state.items;
    // //  (id clicker) === ( id  f array items)
    // let i = items.findIndex(item => item.id === id )
    // items.splice(i,1)
    // this.setState({items})

    // --------------** method 2 ( filter ) **---------------
    let items = this.state.items.filter(item => {
      // jib kolchi ila hadak li clicka 3lih 
      return item.id !== id
    })
    this.setState({items})
  }

  // ----------- ADD -----------------
  addItem = (item) => {
      let items = this.state.items;

      item.id = Math.random();
      items.push(item);

      this.setState({items});
  }





  render() {
    return (
      <div className='App container'>
        <h1 className='text-center'>
        <i className="fa-solid fa-graduation-cap"></i> List Etudiant
        </h1>
        <TodoItems items={this.state.items}  deleteItem={this.deleteItem}/>

        <AddItem addItem={this.addItem}/>
      </div>
    )
  }
}

export default App;
