/** @jsx React.DOM */
var Greeting = React.createClass({
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
		return <h2 onClick={this.handleClick} onCopy={this.handleCopy} onWheel={this.handleScroll}>
				{this.props.salutation} {this.props.name}
		</h2>; 
	}
});
React.render(<Greeting />, document.getElementById('Greeting'));  