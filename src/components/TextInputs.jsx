
function TextInputs (props) {
  const arr = [
    {name: 'firstName', placeholder: 'First Name', props: props.firstName, error: props.errors.firstName },
    {name: 'lastName', placeholder: 'Last Name', props: props.lastName, error: props.errors.lastName },
    {name: 'displayName', placeholder: 'Display Name', props: props.displayName, error: props.errors.displayName },
    {name: 'email', placeholder: 'Email Address', props: props.email, error: props.errors.email }
  ]


  return (arr.map((result) => {
    return (
      <input 
        className= {"input" + (result.error ? " error" : "")}
        type="text" 
        placeholder={result.placeholder} 
        name={result.name}
        onChange={props.onChange} 
        value={result.props}
        />
    )
  } )
        
);
}

export default TextInputs