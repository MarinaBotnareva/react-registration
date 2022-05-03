  const data=[
     {joinAs: 'Join As a Buyer', text: 'I am looking for a Name, Logo or Tagline for my business, brand or product.'},
     {joinAs: 'Join As a Creative or Marketplace Seller', text: 'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.'}
   ]
  

function RadioList (props) {

  return (data.map((result) => {
    return (
      <label className="radioList">
      <input 
        type="radio" 
        name="choice" 
        value={result.joinAs} 
        checked={props.choice === result.joinAs} 
        onChange={props.onChange} />  
        {result.joinAs}
        <span>{result.text}</span>
        </label>                    
    );
})
);

}
export default RadioList
  
  
