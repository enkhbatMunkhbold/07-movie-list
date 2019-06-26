// import movies from './data.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleChange(e) {
        const inputText = e.target.value;
        this.setState({inputText});
        // console.log(inputText);
    }

    handleSearch () {
        const movies = this.props.movies;
        console.log(movies)
        // const input = this.props.inputText;
        // const filteredMovies = movies.filter(movie => movie.title.includes(input));
        // console.log(filteredMovies);
        // console.log(this.props.inputText);
    }

    render () {
        return (
        <div> 
            <ul>
                <h3>Movie List</h3>
                <input value={this.state.inputText} onChange={this.handleChange} type="text"/>
                <button type="button" onClick={this.handleSearch}>Search</button>
                {/* {this.props.movies.map(movie => <li id={movie.id}>{movie.title}</li>)} */}
            </ul>
        </div>
        ); 
    }
}

export default App;
