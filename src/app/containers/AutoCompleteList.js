import React from 'react';
import { connect } from 'react-redux';

import LocationsHelper from '../mock/locations';
import { setLocation } from '../actions/jobSearch.action';

class AutoCompleteList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            searchTerm: "",
            searchLoading: false,
            searchResults: [],
            shouldShowSuggessionList: false
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

        if (!this.state.shouldShowSuggessionList) {
            return null;
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
            searchLoading: true
        }, () => this.filterLocations());
    }
    
    filterLocations = () => {
        const locations = [...this.state.locations];
        const regex = new RegExp(this.props.searchQuery, 'gi');
        const searchResults = locations.reduce((acc, location) => {
            if (location.locationText && location.locationText.match(regex)) {
                acc.push(location);
            }
            return acc;
        }, []);
        this.setState({ searchResults: searchResults, shouldShowSuggessionList: true });
    }

    onLocationSelect = (locationText) => {
        this.setState({
            shouldShowSuggessionList: false
        });
        // TODO: Dispatch event,
        // to set it into the global store
        this.props.setLocation(locationText);
    }

    render() {
        if (!this.props.searchQuery || this.state.shouldShowSuggessionList === false) {
            return null;
        }

        let locationList = '';
        if (this.state.searchResults.length === 0) {
            locationList = <li>No Matches found, try something else</li>
        } else {
            locationList = this.state.searchResults.map((elem) =>
                <li className="location-list" key={elem.id} onClick={(e) => this.onLocationSelect(elem.locationText)}> {elem.locationText} </li>
            );
        }

        return (
            <div className="autocomplete-searchbox">
                <ul>{locationList}</ul>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        setLocation: (location) => {
            dispatch(setLocation(location))
        }
    }
}

export default connect(null, mapDispatchToProps)(AutoCompleteList);
