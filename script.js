var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    componentWillMount: function () {
        console.log('counter willmount')
    },
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function(){
        return React.createElement('div', {className: 'container'},
            React.createElement('div', {className:'incr'},
            React.createElement('span', {}, 'Licznik: ' +this.state.counter),
			React.createElement('div', {className: 'buttonContainer'},
                React.createElement('button',{onClick: this.increment}, 'increment'),
                React.createElement('button',{onClick: this.decrement}, 'decrement')
            )
            ),
        )
    },
    componentDidMount: function () {
        console.log('counter didmount')
    },
    
    componentWillReceiveProps: function () {
    console.log('counter willreciveprops')
    },
    
    shouldComponentUpdate: function (nextProps, nextState) {
      console.log('counter shouldcomponentupdate')
      return nextState.count === this.state.count
    },
    
    componentWillUpdate: function () {
      console.log('counter componentwillupdate')
    },
    
    componentDidUpdate: function () {
      console.log('counter componentdidupdate')
    },
    
    componentWillUnmount: function () {
      console.log('counter componentwillunmout')
    }
});

var Multi = React.createClass({
    getInitialState: function() {
        return {
            counter: 1
        };
    },
    componentWillMount: function () {
        console.log('Multi willmount')
    },
    multi: function() {
        this.setState({
            counter: this.state.counter * 2
        });
    },
    divide: function() {
        this.setState({
            counter: this.state.counter / 2
        });
    },

    render: function(){
        return React.createElement('div', {className: 'container'},
            React.createElement('div', {className:'incr'},
            React.createElement('span', {}, 'Licznik: ' +this.state.counter),
			React.createElement('div', {className: 'buttonContainer'},
                React.createElement('button',{onClick: this.multi}, 'x2'),
                React.createElement('button',{onClick: this.divide}, '/2')
            )
            ),
        )
    },
    componentDidMount: function () {
        console.log('Multi didmount')
    },
    
    componentWillReceiveProps: function () {
    console.log('Multi willreciveprops')
    },
    
    shouldComponentUpdate: function (nextProps, nextState) {
      console.log('Multi shouldcopmonentupdate')
      return nextState.count === this.state.count
    },
    
    componentWillUpdate: function () {
      console.log('Multi componentWillupdate')
    },
    
    componentDidUpdate: function () {
      console.log('Multi componenetdidupdate')
    },
    
    componentWillUnmount: function () {
      console.log('Multi componentwillunmout')
    }
});
var element = React.createElement(Counter);
var mlt = React.createElement(Multi);
ReactDOM.render(element, document.getElementById('app'));
ReactDOM.render(mlt, document.getElementById('multi'));