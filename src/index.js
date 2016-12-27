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
//retrieve videos and set selectedVideo to the first returned video
        YTSearch({key: API_KEY, term: 'Grumpy Cat'}, (data) =>{
            this.setState({
                videos: data,
                selectedVideo:data[0]
            })
        })
    }
//onVideoSelect is a callback function that gets passed from App to VideoList to VideoListItem. Takes in a video and updates App's state of selectedVideo

    render(){
        return (
            <div>
                <SearchBar />
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
