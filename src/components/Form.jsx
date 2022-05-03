import React, {Component} from 'react'
import Checkbox from './Checkbox'
import RadioList from './RadioList'
import TextInputs from './TextInputs'
import Passwords from './Passwords'

class Form extends Component {
  constructor(props){
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      displayName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      choice: '',
      isAllow: true,
    }
  }
  

  onSubmit = (e) => {
    e.preventDefault();

    this.setState({
      firstName: '',
      lastName: '',
      displayName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      choice: '',
    })
  }

  onChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const key = e.target.name;
    this.setState((state) => {
      return{
        ...state,
        [key]: value,
      }
    })
  }

  componentDidUpdate(){
    console.log(this.state);
  }

  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <div className='inputHolder'>
        <TextInputs onChange = {this.onChange} firstName={this.state.firstName} lastName={this.state.lastName} displayName={this.state.displayName} email={this.state.email} />
        <Passwords onChange = {this.onChange} password={this.state.password} passwordConfirmation={this.state.passwordConfirmation}/>
        </div>
        <RadioList onChange = {this.onChange} choice = {this.state.choice}/>
       <Checkbox onChange = {this.onChange} isAllow = {this.state.isAllow}/>
        <input className='button' type="submit" value = 'Create Account' />
      </form>
    )
  }
}

export default Form