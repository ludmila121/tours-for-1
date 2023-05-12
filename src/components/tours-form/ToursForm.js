import React, { Component } from 'react';
 import Rodal from 'rodal';

 // include styles
 import 'rodal/lib/rodal.css';
 import './style.scss';

 const continentOptions = [
 	'Asia',
 	'Africa',
 	'North America',
 	'South America',
	'Antarctica',
 	'Europe',
 	'Antarctica, Europe',
 	'Australia',
 ];

 const initialState = {
 	name: '',
 	price: '',
 	continent: '',
 	description: '',
 };

 class ToursForm extends Component {
 	state = {...initialState};

 	handleChangeValueInState = ({ target: { name, value } }) => {
 		this.setState({
 			[name]: value,
 		});
 	};
handleToggleCheckedContinents = (e, continent) => {
	const snapshot = [...this.state.selectedContinents];
	const value = e.target.checked;

	if (value) {
		//Add to arr

		snapshot.push(continent);
	} else {
         //Remove from arr

		 const index = snapshot.findIndex((el) => el === continent);
		 index >= 0 && snapshot.splice(index, 1);
	}

	this.setState({
		selectedContinents: snapshot,
	});
};
 	
handleSubmit = async(e) => {
 		e.preventDefault();

 		this.props.onAddFunc({...this.state});
 		this.setState(initialState);
 		this.props.onClose();
 	};

 	render() {
 		const { visible, onClose } = this.props;
 		const { name, price, continent, description} = this.state;

 		return (
 			<Rodal visible={visible} onClose={onClose} height={600}>
 				<div>
 					<h4>Tours form</h4>

 					<form onSubmit={this.handleSubmit}>
 						<input
 							type='text'
 							name='name'
 							className='default-input'
 							placeholder='tour name...'
 							value={name}
 							onChange={this.handleChangeValueInState}
 						/>
 						<input
 							type='number'
 							name='price'
 							className='default-input'
 							placeholder='tour price...'
 							value={price}
 							onChange={this.handleChangeValueInState}
 						/>

 						<select
 							className='default-input'
 							name='continent'
 							value={continent}
 							onChange={this.handleChangeValueInState}>
 							<option value='' disabled></option>
 							{continentOptions.map((el) => (
 								<option key={el} 
								value={el}>{el}
								</option>
 							))}
 						</select>

 						
						
						<textarea
 							column={10}
 							rows={3}
 							type='text'
 							name='description'
 							className='default-input'
 							placeholder='tour description...'
 							value={description}
 							onChange={this.handleChangeValueInState}
 						/>

 						<button type='submit'>Add</button>
 					</form>
 				</div>
 			</Rodal>
 		);
 	}
 }

 export default ToursForm;