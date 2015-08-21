var React = require("react/addons");
var PerfTools = React.addons.Perf;
var Todo = require('./todo');

require("./style.css");

var Application = React.createClass({
	getInitialState: function() {
		return{
			todos : [
			],
			value: ''
		};
	},
	handleChange: function(e) {
		this.setState({
				value: e.target.value
		});
	},
	handleKeyUp: function(e) {
		if (e.key === 'Enter') {
			this.state.todos.push({
				name: this.state.value
			})
			this.setState({
				todos: this.state.todos,
				value: ''
			})
		}
	},
	deleteTodo: function(i) {
		this.state.todos.splice(i, 1);
		this.setState({
			todos: this.state.todos
		})
	},
	render: function() {
		return (
            <div className="application">
				<div>
						<input type="text" 
							value={this.state.value} 
							onChange={this.handleChange}
							onKeyUp={this.handleKeyUp} />
				</div>
				{
                	this.state.todos.map(function(todo, i, todoList){
						return (<Todo name={todo.name} onTodoDelete={this.deleteTodo.bind(this, i)} />);
					}, this)
				}
            </div>
          )
	}
});
module.exports = Application;
