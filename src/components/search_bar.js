import React, {Component} from 'react';

//this is a class-based component (not a function component), and class-based to be able to save user's input STATE.
class SearchBar extends Component {
    //initializes the state
    constructor(props){
        //calls the parent class's super method
        super(props);
        //creates a new state object, and defines a new property 'term' that user updates. only EVER update state with this syntax inside of the constructor funct, here. otherwise use this.setState anywhere else!
        this.state = {term: ''};
    }
    //'render' is a method/function that will be run upon state change. below says "the value of the input is equal to the state's term property."
        render(){
        return (
        <div className='search-bar'>
            <input value={this.state.term} onChange={(event)=> this.onInputChange(event.target.value)}/>
              {/* Value of the input: {this.state.term} */}
        </div>
    )
    }

//helper function that defines what updating the input above will do
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }



    //this is a method to say "whenever the input changes, handle the code inside of here"...refactored to the arrow funct above
    // onInputChange(event){
    //     // console.log(event.target.value);
    //
    // }
}

export default SearchBar;
