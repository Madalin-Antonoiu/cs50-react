class Hello extends React.Component{
    render() {
        return (
            <h1>Hello!</h1>
        );
    }
}

class App extends React.Component{
    render(){
        return (
            <div>
                <Hello />
                <Hello />
                <Hello />
                
                <p>Welcome</p>
            </div>
        );
    }
    
}



ReactDOM.render(<App />, document.querySelector("#app"));