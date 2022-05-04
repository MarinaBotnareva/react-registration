function Passwords (props) {
  const arr = [
    {name: 'password', placeholder: 'Password', props: props.password, error: props.errors.password  },
    {name: 'passwordConfirmation', placeholder: 'Password Confirmation', props: props.passwordConfirmation, error: props.errors.passwordConfirmation },
  ]


  return (arr.map((result) => {
    return (
      <input 
        className={"input" + (result.error ? " error" : "")}
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