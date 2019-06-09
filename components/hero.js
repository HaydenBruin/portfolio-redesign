import React, { Component } from 'react'

export default class Hero extends Component {

    scrollToProjects = () => {
    }

    render() {
        return (
            <div className="hero">
                <div className="content">
                    <div className="title">Hi! I'm<br />Hayden Bruin<br />Front End Developer</div>
                </div>
                <img className="leaf-1" src="/static/images/leaf-pink.png" alt="Pink Leaf" draggable="false" />
                <img className="leaf-2" src="/static/images/leaf-yellow.png" alt="Yellow Leaf" draggable="false" />
                <img className="leaf-3" src="/static/images/leaf-cyan-2.png" alt="Second Cyan Leaf" draggable="false" />
                <img className="leaf-4" src="/static/images/leaf-cyan.png" alt="Cyan Leaf" draggable="false" />
                <img className="leaf-5" src="/static/images/leaf-pink-round.png" alt="Round Pink Leaf" draggable="false" />
                <img className="leaf-6" src="/static/images/leaf-orange.png" alt="Orange Leaf" draggable="false" />


                <img className="dots-1" src="/static/images/dots-orange.png" alt="Orange Dots" draggable="false" />
                <img className="dots-2" src="/static/images/dots-group-orange.png" alt="Orange Group Dots" draggable="false" />
                <div className="down">
                    <div className="previouswork" onClick={() => this.scrollToProjects()}>
                        <div className="text">Check out my awesome projects!</div>
                        <svg enableBackground="new 0 0 128 128" height="48px" width="48px" id="Layer_1" version="1.1" viewBox="0 0 128 128"><g><path d="M64.032,13.869c-27.642,0-50.129,22.489-50.129,50.131c0.002,27.643,22.49,50.131,50.131,50.131    c27.64,0,50.126-22.488,50.126-50.131C114.16,36.358,91.673,13.869,64.032,13.869z M64.034,110.131    C38.6,110.131,17.905,89.438,17.903,64c0-25.437,20.693-46.131,46.129-46.131c25.435,0,46.128,20.694,46.128,46.131    C110.16,89.438,89.468,110.131,64.034,110.131z M78.539,68.918L66.034,79.694V43.942c0-1.104-0.896-2-2-2s-2,0.896-2,2v35.752    L49.527,68.918c-0.837-0.721-2.101-0.627-2.821,0.21s-0.627,2.101,0.21,2.821l17.118,14.748L81.15,71.949    c0.837-0.722,0.931-1.984,0.209-2.821C80.639,68.291,79.376,68.197,78.539,68.918z"></path></g></svg>
                    </div>
                </div>
            </div >
        )
    }
}
