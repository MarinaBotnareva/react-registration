function Checkbox(props) {

    return (
        <label className="checkbox">
          <input 
            name="isAllow"
            type="checkbox"
            checked={props.isAllow}
            onChange={props.onChange} />
            Allow Squadhelp to send marketing/promotional offers from time to time
        </label>
    );
  }

export default Checkbox