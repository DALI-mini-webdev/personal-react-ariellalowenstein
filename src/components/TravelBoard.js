import React, { Component } from 'react';
import { Map } from 'immutable';
import TravelPosting from './TravelPosting';

class TravelBoard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            city: Map(),
            cityID: 0,
            newCityName: '',
            newCityCountryOrState: '',
            newCityImage: '',
        }
    }
    newCityNameFunction = (event) => {
        this.setState({
         newCityName:event.target.value
        });
    }
    newCityCountryOrStateFunction = (event) => {
        this.setState({ newCityCountryOrState: event.target.value 
        });
    }
    newCityImageFunction = (event) => {
        this.setState({ newCitymage: event.target.value 
        });
    }
    saveCityInfo = () => {
        let cityData = {
            name: this.state.newCityName,
            breed: this.state.newCityCountryorState,
            image: this.state.newCityImage,
            id: this.state.CityID
        }
        this.setState({
            cities: this.state.cities.set(this.state.cityID, cityData),
            cityID: this.state.cityID + 1
        });
    }
    deleteCityInfo = (event, id) => {
        // Find the id from the event 
        this.setState({cities: this.state.city.delete(id)})
    }
    updatedCityName = (id, field) => {
    }

    update = (id, field) => {
        this.setState({cities:this.state.cities.update(id, (n) => { return Object.assign({}, n, field); })})
    };
    
    render () {
        const allCities = this.state.cities.entrySeq().map(
            ([id,city]) => {
                return (
                    <TravelPosting
                        name={city.name}
                        where={city.countryorstate}
                        cityURL={city.image}
                        id={id}
                        key={id}
                        delete={this.deleteCityInfo}
                        save={this.updatedCityInfo}
                    />
                );
            });
            console.log(allCities)
        return (
            <div>
                <p>this is the travel board</p>
                {allCities}
                <p>Add a destination!</p>
                <p>Enter City:</p>
                <input type="text" value={this.state.newCityName} onChange={this.newCityNameFunction}/>

                <p>Enter State/Country:</p>
                <input type="text" value={this.state.newCityCountryOrState} onChange={this.newCityCountryOrStateFunction}/>

                <p>Enter Image URL:</p>
                <input type="text" value={this.state.newCityImage} onChange={this.newCityImageFunction}/>
                <button onClick={this.saveCityInfo}>Save</button>
            </div>
        );
    }
}

export default TravelBoard;