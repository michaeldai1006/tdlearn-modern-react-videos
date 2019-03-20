import axios from 'axios';

const KEY = 'AIzaSyC7Y2r4YJIEXOGs-UMJjsJRP3-qJjQXBXQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});