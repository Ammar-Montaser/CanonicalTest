import './App.scss'
import React, { useEffect, useState } from "react";

function App() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            return await fetch("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json")
                .then((response) => response.json())
                .then((data) => setPosts(data));
        }
        fetchData();
    })
    return (
        <div className="App background">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className="row">{

                posts.map((item, idx) => {

                    return (
                        <div className="col-4 cards" key={idx}>
                            <div className="p-card ">
                                <h6>{posts[idx]['_embedded']["wp:term"][1]["0"]["name"]}</h6>
                                <hr></hr>
                                <img className="p-card__image" src={posts[idx]['featured_media']}></img>
                                <div className="p-card__inner">
                                    <h3><a href={posts[idx]['link']}>{posts[idx]['title']["rendered"]}</a></h3>
                                    <p id="author">
                                        By <a href={posts[idx]['_embedded']["author"]["0"]["link"]}>{posts[idx]['_embedded']["author"]["0"]["name"]}</a> on {posts[idx]['date']}
                                    </p>
                                    <hr className="u-no-margin--bottom"></hr>

                                    <p>Article</p>
                                </div>

                            </div>
                        </div>

                    );
                })
            }
            </div>

        </div>

    )
}
export default App
