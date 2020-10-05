class Hello extends React.Component{
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}

class App extends React.Component{
    render(){
        return (
            <div>
                <Hello name="Harry"/>
                <Hello name="Ron" />
                <Hello name="Hermione"/>
                <p>Welcome</p>
            </div>
        );
    }
    
}



ReactDOM.render(<App />, document.querySelector("#app"));