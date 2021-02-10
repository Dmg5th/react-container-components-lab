import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
// import { ReactWrapper } from 'enzyme';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {

    state = {
        reviews: [],
        searchTerm: []
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        fetch(URL)
        .then(resp => resp.json())
        .then(data => this.setState({
            reviews: data.results
        }))

    }

    render(){
        return <div className="searchable-movie-reviews">SEARCH
            <MovieReviews reviews={this.state.reviews}/>
         <form onSubmit={this.handleSubmit} >
             <input type="text" onChange={this.handleChange} />
             <input type="submit"/>
         </form>
        </div>
    }
}

export default SearchableMovieReviewsContainer; 