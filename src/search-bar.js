import React from 'react';

class SearchBar extends React.Component{
	state = {term: ''};
	change = (e) => {
		this.setState({term: e.target.value});
	}
	formSubmit = (e) => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.term);
	};
	
	render(){
		return <div className="search-bar ui segment">
		<form className="ui form" onSubmit={this.formSubmit}>
			<label>Video Search</label>
			<input className="field" value={this.state.term} type="text" onChange={this.change} />
		</form>
		</div>
	}
}

export default SearchBar;