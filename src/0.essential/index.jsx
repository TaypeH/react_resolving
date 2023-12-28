import { Component } from 'react';

export default class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.button = null;
        this.state = { count: 0 }
    }


    add() {
        console.log("🚀 ~ file: index.jsx:8 ~ MyComponent ~ constructor ~ button:", this.button)
        const label = document.getElementById('count');
        label.innerHTML = +label.innerText + 1;
        this.setState({ count: this.state.count + 1 })
    }

    componentDidMount() {
        this.button = document.getElementById('btn');
        this.button.addEventListener('click', this.add);
    }

    componentDidUpdate() {
        console.log("updating")
    }

    shouldComponentUpdate() {
        console.log("updating-pre")

    }

    componentWillUnmount() {

        console.log("🚀 ~ file: index.jsx:24 ~ MyComponent ~ componentWillUnmount ~ add:", this.add)
        this.button.removeEventListener('click', this.add);
    }

    render() {
        console.log("updated");
        return (
            <div style={{}}>
                <button id="btn">+</button>
                <label id="count">0</label>
                <label id="count">{this.state.count}</label>
            </div>
        )
    }
}
