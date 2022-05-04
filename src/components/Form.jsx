import React, {Component} from 'react'
import {object, string, ref, boolean} from 'yup';
import Checkbox from './Checkbox'
import RadioList from './RadioList'
import TextInputs from './TextInputs'
import Passwords from './Passwords'

const loginSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  displayName: string().required(),
  email: string().required().email(),
  password: string().required().min(8),
  passwordConfirmation: string().required().oneOf([ref('password')]),
  choice: string().required().oneOf([ref('Join As a Buyer' || 'Join As a Creative or Marketplace Seller')]),
  isAllow: boolean(),
})

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
      errors: {},
    }
  }
  

  onSubmit = async (e) => {
    e.preventDefault();

    try{
    await loginSchema.validate(this.state);
    } catch(error){
      console.log(error.message)
      this.setState((state)=> {
        return{
          ...state,
          errors: {[error.path]:true}
        }
      })
      return;
    }

    console.log(this.state);

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

  // componentDidUpdate(){
  //   console.log(this.state);
  // }

  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <div className='inputHolder'>
        <TextInputs onChange = {this.onChange} firstName={this.state.firstName} lastName={this.state.lastName} displayName={this.state.displayName} email={this.state.email} errors={this.state.errors} />
        <Passwords onChange = {this.onChange} password={this.state.password} passwordConfirmation={this.state.passwordConfirmation} errors={this.state.errors}/>
        </div>
        <RadioList onChange = {this.onChange} choice = {this.state.choice}/>
       <Checkbox onChange = {this.onChange} isAllow = {this.state.isAllow}/>
        <input className='button' type="submit" value = 'Create Account' />
      </form>
    )
  }
}

export default Form