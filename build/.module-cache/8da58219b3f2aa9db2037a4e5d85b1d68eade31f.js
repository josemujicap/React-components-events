/** @jsx React.DOM */
var Greeting = React.createClass({displayName: "Greeting",
	getDefaultProps: function () {
		return {
			salutation: "Hello",
			name: "Guest"
		}
	},
	handleClick: function () {alert('SUCH REACT')
	},
	handleCopy: function () {alert(this.clipboardData)
	},
	handleScroll: function () {alert(this.detail)
	},
	render: function () {
		return React.createElement("h2", {onClick: this.handleClick, onCopy: this.handleCopy, onWheel: this.handleScroll}, 
				this.props.salutation, " ", this.props.name
		); 
	}
});
React.render(React.createElement(Greeting, {name: "Jose", salutation: "Hey"}), document.getElementById('Greeting'));  