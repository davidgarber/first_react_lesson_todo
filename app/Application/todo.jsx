var React = require('react');

var Todo = React.createClass({
	getDefaultProps: function() {
		return {
			name: '',
			onTodoDelete: function() {}
		};
	},
	render: function() {
		return (<div className="todo-item">
					{this.props.name} <div onClick={this.props.onTodoDelete}>Delete</div>
			    </div>)
	}

});

module.exports = Todo;