import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
    // class가 생성될 때 호
    constructor(props) {
        super(props);
        console.log("constructor")
    }
    state = {
        count:0
    };

    add = () => {
        console.log("add");
        this.setState(current => ({
            count: current.count + 1
        }));
    };
    minus = () => {
        this.setState( (current) => ({
           count: current.count - 1
        }));
    };
    render() {
        console.log("rendering");
        return (
            <div>
                <h1>
                    The number is {this.state.count}
                </h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    };

    // 컴포넌트가 render후에 호출
    componentDidMount() {
        console.log("component rendered");
    }

    // props나 state가 변경되었을 때 호출
    // state -> render -> update
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("just updated");
    }

    // 컴포넌트가 종료되었을때 호출
    componentWillUnmount() {
        console.log("component unmount");
    }
}

export default App;