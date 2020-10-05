// Step1 - Everything starts with defining a React "component", which is esentially a JavaScript Class
class App extends React.Component{
    render(){
        return (
            <div>
                <h1>Welcome!</h1>
                <p>Hello</p>
            </div>
        );
    }
    
}

// Now that i have this components, let`s render it into DOM
ReactDOM.render(<App />, document.querySelector("#app"));