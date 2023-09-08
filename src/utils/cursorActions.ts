function throttle(func: () => void, delay: number) {
	let lastExecuted = 0;

	return function () {
		const now = Date.now();
		if (now - lastExecuted >= delay) {
			func();
			lastExecuted = now;
		}
	};
}

function expand() {
	const cursor = document.querySelector('.cursor');
	if (cursor) {
		cursor.setAttribute('id', 'expand');
	}
}

const expandCursor = throttle(expand, 100);

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

export { expandCursor, shrinkCursor, soonCursor, typeCursor, privateCursor };
