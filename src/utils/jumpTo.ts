export default function jumpTo(id: string) {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
  const targetInput = document.getElementById('contact-input')
  setTimeout(() => targetInput?.focus(), 800)
}