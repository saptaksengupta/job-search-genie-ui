import React from 'react';
import LocationsHelper from '../mock/locations';

export default class AutoCompleteList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            searchTerm: "",
            searchLoading: false,
            searchResults: []
        }
    }

    componentDidMount() {
        const locations = LocationsHelper.getLocations();
        this.setState({ locations });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.searchQuery !== this.props.searchQuery) {
            // just to trigger the search `300` ms delay from last key stroke...
            this.debounce(this.doSearch.bind(this.props.searchQuery), 300)();
        }
    }

    debounce = (fn, delay) => {
        let timer;
        return function () {
            let context = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(context, args);
            }, delay);
        }
    }

    doSearch = searchQuery => {
        this.setState({
            searchTerm: searchQuery,
            searchLoading: true
        }, () => this.filterLocations());
    }

    filterLocations = () => {
        const locations = [...this.state.locations];
        const regex = new RegExp(this.state.searchTerm, 'gi');
        const searchResults = locations.reduce((acc, location) => {
            if (location.locationText && location.locationText.match(regex)) {
                acc.push(location);
            }
            return acc;
        }, []);
        this.setState({ searchResults });
    }

    onLocationSelect = ( locationText ) => {
        
    }

    render() {
        if (!this.props.searchQuery) {
            return null;
        }
        const locationList = this.state.searchResults.map((elem) =>
            <li key={elem.id} onClick={this.onLocationSelect(elem.locationText)}> {elem.locationText} </li>
        );
        return (
            <div className="autocomplete-searchbox">
                <ul>{locationList}</ul>
            </div>
        )
    }

}