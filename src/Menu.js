import React from 'react'
import { menuBody, close } from './style.js'

class Menu extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		//if no close icon is provided, we specifcy one so the closee button will work
		//else, use the user-provided button icon
		let closeIcon
		if (typeof this.props.closeIcon !== 'undefined') {
			closeIcon = this.props.closeIcon
		} else {
			closeIcon = 'X'
		}

		//if no style object is provided, we specifcy one so the style function
		//doesn't throw an error. else, use the user-provided style object
		let style
		if (this.props.style) {
			style = this.props.style
		} else {
			style = { backgoundColor: 'grey' }
		}

		let closeStyle
		if (this.props.closeStyle) {
			closeStyle = this.props.closeStyle
		} else {
			closeStyle = { color: 'black' }
		}

		return (
			<>
				<div id='menu-appco_body' style={menuBody(style, this.props.showMenu)}>
					<span style={close(closeStyle)} onClick={this.props.closeHandler}>
						{closeIcon}
					</span>
					{this.props.children}{' '}
					{/*there must be nested markup components passed in*/}
				</div>
			</>
		)
	}
}

export default Menu
