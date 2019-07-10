const menuBody = (style, showMenu) => {
	var finalStyle
	var initialStyle = style.closed
	if (showMenu === true) {
		var openStyle = Object.assign({}, initialStyle, style.transition)
		finalStyle = openStyle
	} else {
		finalStyle = initialStyle
	}

	return finalStyle
}

const close = (style) => {
	let styleObj = {
		float: style.float || 'right',
		padding: style.padding || '10px',
		fontSize: style.fontSize || '15px',
		cursor: style.cursor || 'pointer',
		color: style.color || 'black'
	}
	return styleObj
}

const menuButton = (style) => {
	let styleObj = {
		float: style.float || 'right',
		padding: style.padding || '10px',
		cursor: style.cursor || 'pointer'
	}
	return styleObj
}

const bar = (style) => {
	let styleObj = {
		width: style.width || '20px',
		height: style.height || '3px',
		backgroundColor: style.backgroundColor || 'black',
		margin: style.margin || '3px 0'
	}
	return styleObj
}

export { menuBody, close, menuButton, bar }
