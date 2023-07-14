function expandCursor() {
	const cursor = document.querySelector('.cursor');
	if (cursor) {
		cursor.setAttribute('id', 'expand');
	}
}

function shrinkCursor() {
	const cursor = document.querySelector('.cursor');
	if (cursor) {
		cursor.removeAttribute('id');
	}
}

function typeCursor() {
	const cursor = document.querySelector('.cursor');
	if (cursor) {
		cursor.setAttribute('id', 'type');
	}
}

function soonCursor() {
	const cursor = document.querySelector('.cursor');
	if (cursor) {
		cursor.setAttribute('id', 'soon');
	}
}

function privateCursor() {
	const cursor = document.querySelector('.cursor');
	if (cursor) {
		cursor.setAttribute('id', 'private');
	}
}

export { expandCursor, shrinkCursor, soonCursor, typeCursor, privateCursor};
