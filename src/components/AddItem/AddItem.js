import React, { Component } from 'react'
// import '.'

class AddItem extends Component {
    state = {
        name : '',
        age : ''
    }

    handleChange = (e) => {
        this.setState({
            //  [e.target.id] ==> name ou age
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        if(e.target.name.value === '' || e.target.age.value === '' ){
            alert('Le nom et age obligatoire')
        } else {
            // console.log(this.state)
            // nsift data ajouter
            this.props.addItem(this.state)
            // vider input
            this.setState({
                name : '',
                age : ''
            })
        }
    }

    
    render() {
        // const {condition}= e.target.name.value === '' || e.target.age.value === '';
        // const statut = condition ?( return  (<div> hello</div>)) : (return(  <div>  nn hello</div>) );
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Enter name..." id="name" onChange={this.handleChange} value={this.state.name}/>
                <input type="number" placeholder="Enter age..." id="age" onChange={this.handleChange} value={this.state.age}/>
                <button type="submit" >
                    <i className="fa-solid fa-user-plus"></i> Add
                </button>
            </form>
        </div>
        )
    }
}
export default AddItem;