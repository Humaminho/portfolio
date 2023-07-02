export default function jumpTo(id: string) {
	const element = document.getElementById(id.toLowerCase());
	element?.scrollIntoView({ behavior: 'smooth' });
}
