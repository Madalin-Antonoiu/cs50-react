class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            num1: 1,
            num2: 1,
            score: 0,
            response: ""
        }
    }

    render(){
        if(this.state.score === 5){
            return (
                <div id="winner">
                    You won!
                </div>
            )
        }
        
        return (
            <div>
                <div id="problem">{this.state.num1} + {this.state.num2}</div>
                <input onKeyPress={this.inputKeyPress} onChange={this.updateResponse} value={this.state.response}/>
                <div>Score: {this.state.score}</div>
            </div>
        );
    }

    updateResponse = (event) => {
       this.setState({
           response: event.target.value
       })
       
    }

    inputKeyPress = (event) =>{
        if(event.key === 'Enter'){
           const answer = parseInt(this.state.response);
           if(answer === this.state.num1 + this.state.num2){
               
               // user got question right
               this.setState( state => ({
                    score: state.score +1,
                    num1: Math.ceil(Math.random() * 10),
                    num2: Math.ceil(Math.random() * 10),
                    response: ""
               }));
           } else {
            // wrong
            this.setState( state => ({
                score: state.score -1, 
                response: ""
           }));
           }
        }
    }
    
}



ReactDOM.render(<App />, document.querySelector("#app"));
