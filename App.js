import React, { Component } from 'react';
import './App.css';
import request from 'superagent';

export default class Fetch extends Component {

    state = {
        lacroixData: [],
        loading:true
    }

    componentDidMount = async () => {
        this.fetch.Lacroixs()
    }

    fetchLacroixs = async () => {
    
        this.setState({
            loading:true
        });
        const response = await request.get(`https://cheese-man.herokuapp.com/lacroixs`);
        this.setState({ lacroixData: response.body, loading:false})
    }


        render() {
            return (
                <div className='fetch-div'>
                    <div className='fetched-lacroixs-div'>
                        {
                            this.state.loading
                            ? <div class="tenor-gif-embed" data-postid="17678729" data-share-method="host" data-width="100%" data-aspect-ratio="1.0"><a href="https://tenor.com/view/la-croix-spinning-can-flavored-water-turd-essence-gif-17678729">La Croix Spinning GIF</a> from <a href="https://tenor.com/search/lacroix-gifs">Lacroix GIFs</a></div>

                            :this.state.lacroixData.map()
                        }
                    </div>
                </div>
            )
        }

}