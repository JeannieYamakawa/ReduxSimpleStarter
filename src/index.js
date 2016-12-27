import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//create a new type of component. This component is a class, not instance. It should produce some HTML.
const API_KEY = 'AIzaSyBqXXddD49SGdv3mLbJtYm9Wb5YUc-fDAE';




class App extends Component {
    constructor(props){
        super(props);
        this.state = {  videos: [],
                        selectedVideo: null
                    };
//sets just an initial search term
    this.videoSearch('Grumpy Cat')
}
//retrieve videos and set selectedVideo to the first returned video
    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (data) =>{
            this.setState({
                videos: data,
                selectedVideo:data[0]
            })
        })
    }


//onVideoSelect is a callback function that gets passed from App to VideoList to VideoListItem. Takes in a video and updates App's state of selectedVideo.
    render(){
        //used lodash to "throttle" how often the new search term is rendered to every 300 milliseconds.
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
        //also gives a callback function to the SearchBar component to use called onSearchTermChange. what it does is defined in the SearchBar document.
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect = {(selectedVideo) => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}
//Take this component's generated HTML and put it on the DOM/page. It creates an instance of App when written with html open/close tags. The second arg is what node/where to render App to from index.html
ReactDOM.render(<App />, document.querySelector('.container'));
