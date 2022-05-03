function Passwords (props) {
  const arr = [
    {name: 'password', placeholder: 'Password', props: props.password },
    {name: 'passwordConfirmation', placeholder: 'Password Confirmation', props: props.passwordConfirmation },
  ]


  return (arr.map((result) => {
    return (
      <input 
        className="input"
        type="password" 
        placeholder={result.placeholder} 
        name={result.name}
        onChange={props.onChange} 
        value={result.props}
        />
    )
  } )
        
);
}

export default Passwords