
function TextInputs (props) {
  const arr = [
    {name: 'firstName', placeholder: 'First Name', props: props.firstName },
    {name: 'lastName', placeholder: 'Last Name', props: props.lastName },
    {name: 'displayName', placeholder: 'Display Name', props: props.displayName },
    {name: 'email', placeholder: 'Email Address', props: props.email }
  ]


  return (arr.map((result) => {
    return (
      <input 
        className="input"
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