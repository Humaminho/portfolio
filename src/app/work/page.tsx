import Project from '@/components/work/project';
import '../../styles/index.css';
import Reveal from '@/components/common/reveal';

interface Project {
	src: string;
	title: string;
	description: string;
	features: string[];
	github: string;
	live: string;
	stack: JSX.Element[];
	hasGitRepo: boolean;
}

export default function Work() {
	const projects: Project[] = [
		{
			src: '/images/cozyshop.webp',
			title: 'Cozy shop',
			description:
				'Cozy Shop is an e-commerce website showcasing a fictional clothing brand, specializing in comfortable and fashionable clothes. Made using React.js and Sass CSS.',
			features: [
				'A functional cart for buying clothes, which allows users to add items to their cart and checkout.',
				'A search and filtering system for the products.',
				'A mobile-first approach for responsive design and a light and dark mode.',
			],
			github: 'https://github.com/Humaminho/store-website',
			live: 'https://cozy-shop.netlify.app/',
			stack: [
				<svg
					className="h-full w-auto"
					key={4}
					width="50"
					height="50"
					viewBox="0 0 31 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>typescript</title>
					<circle
						cx="15.6408"
						cy="14.9201"
						r="14.9201"
						fill="currentColor"
					/>
					<path
						className="text-white dark:text-black"
						d="M22.0208 10.0992C22.5929 10.2323 23.1128 10.5319 23.5148 10.9601C23.7363 11.1919 23.9286 11.4499 24.0875 11.7283C24.0949 11.7586 23.0565 12.4562 22.4267 12.8454C22.4039 12.8608 22.3131 12.762 22.2103 12.6101C22.0953 12.4124 21.932 12.247 21.7357 12.1295C21.5394 12.0119 21.3166 11.9461 21.0879 11.938C20.3641 11.8883 19.8977 12.2674 19.901 12.9011C19.8948 13.0568 19.9303 13.2114 20.0038 13.3487C20.1631 13.6781 20.4588 13.8757 21.3877 14.2782C23.0975 15.0142 23.8314 15.4994 24.2844 16.189C24.5404 16.6247 24.6981 17.1111 24.7464 17.6142C24.7947 18.1172 24.7325 18.6247 24.564 19.1012C24.3324 19.6237 23.9652 20.0747 23.5005 20.4074C23.0358 20.7401 22.4906 20.9423 21.9213 20.9931C21.3162 21.0625 20.7048 21.0562 20.1013 20.9743C19.1768 20.8224 18.3252 20.3787 17.671 19.7081C17.4238 19.4297 17.2146 19.1199 17.0487 18.7866C17.1184 18.7347 17.1919 18.688 17.2684 18.6468C17.3746 18.5864 17.7765 18.3552 18.1556 18.1354L18.8438 17.7321L18.9876 17.9418C19.2299 18.2882 19.5382 18.5833 19.895 18.8102C20.2552 19.0078 20.6633 19.1014 21.0737 19.0806C21.484 19.0599 21.8806 18.9255 22.2191 18.6925C22.3936 18.5224 22.5028 18.2962 22.5274 18.0536C22.5519 17.8111 22.4904 17.5676 22.3535 17.3658C22.168 17.1004 21.7889 16.8772 20.7116 16.4101C19.8668 16.1253 19.0973 15.6531 18.4607 15.029C18.1576 14.6835 17.9337 14.2759 17.8048 13.8347C17.7094 13.3321 17.6954 12.8174 17.7631 12.3104C17.8896 11.7269 18.1924 11.1964 18.6304 10.7908C19.0685 10.3851 19.6207 10.124 20.2122 10.0427C20.8145 9.97076 21.4242 9.98979 22.0208 10.0992ZM16.4135 11.0959L16.4209 12.0731H13.3091V20.9098H11.1148V12.0751H8.00298V11.1154C7.9947 10.7867 8.00368 10.4578 8.02986 10.1301C8.04129 10.1146 9.93323 10.1072 12.2271 10.1113L16.4014 10.1227L16.4135 11.0959Z"
						fill="currentColor"
					/>
				</svg>,
				<svg
					className="h-full w-auto"
					key={5}
					width="50"
					height="50"
					viewBox="0 0 31 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>react</title>
					<circle
						cx="15.3209"
						cy="14.9201"
						r="14.9201"
						fill="currentColor"
					/>
					<path
						className="text-white dark:text-black"
						d="M14.4184 13.2655C14.1106 13.4433 13.8624 13.7083 13.7052 14.0271C13.548 14.3459 13.4889 14.7041 13.5353 15.0565C13.5816 15.4089 13.7315 15.7396 13.9658 16.0069C14.2002 16.2741 14.5085 16.4659 14.8518 16.5579C15.1951 16.6499 15.558 16.6381 15.8946 16.5239C16.2312 16.4096 16.5264 16.1982 16.7428 15.9162C16.9592 15.6343 17.0872 15.2945 17.1105 14.9398C17.1338 14.5851 17.0514 14.2315 16.8738 13.9236C16.7558 13.7192 16.5987 13.54 16.4114 13.3962C16.2242 13.2525 16.0104 13.1471 15.7824 13.086C15.5544 13.0249 15.3166 13.0093 15.0826 13.0401C14.8485 13.0709 14.6228 13.1475 14.4184 13.2655ZM22.4738 15.2157C22.3557 15.0809 22.2313 14.9457 22.1005 14.8102C22.1917 14.7136 22.2803 14.6173 22.3661 14.5214C23.9812 12.706 24.6635 10.8846 24.0315 9.79079C23.4258 8.74123 21.6235 8.42827 19.3664 8.86701C19.1443 8.91062 18.9233 8.95959 18.7032 9.01393C18.6609 8.86903 18.6163 8.72479 18.5694 8.58123C17.8036 6.27379 16.5669 4.77341 15.3029 4.77441C14.0914 4.77441 12.92 6.18021 12.1724 8.35481C12.0986 8.56949 12.0305 8.7855 11.9681 9.00286C11.8212 8.96664 11.6736 8.93309 11.5253 8.90223C9.14442 8.41418 7.22743 8.7362 6.59649 9.83205C5.99171 10.8816 6.62366 12.5994 8.13411 14.3322C8.28438 14.5033 8.43868 14.671 8.597 14.8353C8.40983 15.0265 8.23373 15.2187 8.0687 15.4099C6.59448 17.1186 5.99875 18.8072 6.60253 19.8527C7.22643 20.9335 9.11625 21.2867 11.4176 20.8339C11.6041 20.797 11.7896 20.7554 11.9741 20.7091C12.0412 20.9446 12.1153 21.1784 12.1965 21.4105C12.9412 23.5408 14.1055 24.9003 15.313 24.9003C16.5608 24.9003 17.8106 23.4382 18.5684 21.2183C18.6287 21.0432 18.6841 20.861 18.7384 20.6739C18.9766 20.7329 19.2164 20.7852 19.4579 20.8308C21.6748 21.2505 23.4348 20.9214 24.0376 19.8749C24.6605 18.7931 24.0175 16.9798 22.4738 15.2157ZM7.34115 10.2607C7.72958 9.58651 9.29638 9.32286 11.3522 9.74551C11.4837 9.77234 11.6176 9.80253 11.7537 9.83607C11.5528 10.724 11.4109 11.6242 11.3291 12.5309C10.5877 13.0523 9.88082 13.621 9.21285 14.2336C9.06593 14.0813 8.9227 13.9253 8.78317 13.7657C7.48806 12.2824 6.97687 10.8937 7.34115 10.2607ZM11.2526 16.0248C10.7394 15.6353 10.2614 15.2369 9.8277 14.8364C10.2604 14.4379 10.7384 14.0414 11.2516 13.6529C11.2328 14.0481 11.2238 14.4436 11.2244 14.8394C11.2244 15.2352 11.2338 15.6303 11.2526 16.0248ZM11.2526 19.9896C10.3804 20.1838 9.47984 20.2159 8.59599 20.0842C8.35369 20.0652 8.11785 19.9968 7.90305 19.8831C7.68826 19.7693 7.49907 19.6128 7.34718 19.423C6.97989 18.7891 7.45888 17.4326 8.71977 15.9715C8.87809 15.7883 9.04178 15.6099 9.21084 15.4361C9.87911 16.0525 10.5874 16.6239 11.3311 17.1468C11.4137 18.0649 11.557 18.9766 11.7598 19.8759C11.5921 19.9181 11.4227 19.9564 11.2516 19.9906L11.2526 19.9896ZM18.3973 11.9C18.0599 11.6873 17.7184 11.4817 17.3729 11.2831C17.0321 11.0872 16.6876 10.8984 16.3394 10.7166C16.9118 10.4748 17.4959 10.2616 18.0894 10.0776C18.2226 10.6795 18.3254 11.2877 18.3973 11.9ZM12.9865 8.63355C13.6265 6.77191 14.5744 5.6348 15.305 5.6348C16.0828 5.63379 17.0931 6.86046 17.7543 8.85192C17.7972 8.98207 17.8375 9.11288 17.875 9.24437C17.0071 9.51335 16.158 9.83943 15.3331 10.2205C14.511 9.83476 13.6638 9.50495 12.7973 9.2333C12.8556 9.03205 12.9187 8.83213 12.9865 8.63355ZM12.5839 10.0665C13.1747 10.2525 13.7558 10.4681 14.3248 10.7126C13.6191 11.0762 12.9321 11.4723 12.2639 11.901C12.3444 11.259 12.4521 10.6441 12.5839 10.0665ZM12.2649 17.7747C12.5984 17.9887 12.9368 18.1944 13.2803 18.3916C13.6305 18.5928 13.985 18.7861 14.3439 18.9712C13.7708 19.2242 13.185 19.4475 12.589 19.6404C12.4505 19.0245 12.3423 18.4022 12.2649 17.7757V17.7747ZM17.7553 20.9405C17.4876 21.7929 17.0653 22.5887 16.5095 23.2882C16.3723 23.4887 16.1954 23.659 15.9898 23.7885C15.7841 23.9179 15.5542 24.0039 15.314 24.0409C14.5804 24.0409 13.6456 22.9491 13.0096 21.1267C12.9345 20.9113 12.8654 20.694 12.8023 20.4746C13.6729 20.1938 14.5235 19.8542 15.3482 19.4583C16.1801 19.8424 17.0363 20.1715 17.9113 20.4434C17.863 20.6105 17.811 20.7762 17.7553 20.9405ZM18.1196 19.6082C17.5183 19.4204 16.9266 19.2035 16.3465 18.9581C16.6879 18.779 17.0318 18.5895 17.3779 18.3896C17.7335 18.1843 18.0796 17.974 18.4164 17.7586C18.3492 18.3798 18.2501 18.9972 18.1196 19.6082ZM18.5694 14.8353C18.5694 15.4465 18.5503 16.057 18.512 16.6668C18.0159 17.0029 17.4926 17.331 16.9482 17.6449C16.4048 17.9579 15.8685 18.2457 15.3412 18.5063C14.7864 18.2406 14.2423 17.9542 13.709 17.6469C13.179 17.3417 12.6611 17.0167 12.1553 16.6718C12.1083 16.0613 12.0848 15.4502 12.0848 14.8384C12.0848 14.2272 12.1076 13.6164 12.1532 13.0059C13.1648 12.3153 14.2271 11.702 15.3311 11.1714C15.8785 11.4378 16.4162 11.7232 16.9442 12.0278C17.4742 12.3324 17.9941 12.654 18.504 12.9928C18.5476 13.606 18.5694 14.2202 18.5694 14.8353ZM19.5314 9.71029C21.4655 9.33494 22.9226 9.58752 23.2879 10.2205C23.6773 10.8947 23.1198 12.382 21.7241 13.9498C21.647 14.0363 21.5671 14.1232 21.4846 14.2104C20.8048 13.5959 20.084 13.0284 19.3271 12.5118C19.2509 11.6152 19.1147 10.7246 18.9196 9.84614C19.1275 9.79515 19.3315 9.74987 19.5314 9.71029ZM19.4006 13.6197C19.9113 13.9925 20.4024 14.3915 20.8718 14.8152C20.4046 15.2457 19.9152 15.6514 19.4056 16.0308C19.421 15.6323 19.4288 15.2338 19.4288 14.8353C19.4288 14.4301 19.4194 14.0249 19.4006 13.6197ZM23.2939 19.4452C22.9276 20.0802 21.5148 20.3448 19.6179 19.9866C19.4006 19.9456 19.1778 19.8967 18.9498 19.8396C19.1402 18.9498 19.2703 18.0481 19.3392 17.1408C20.0947 16.6155 20.8132 16.0389 21.4896 15.415C21.6084 15.5377 21.7211 15.6598 21.8278 15.7813C22.4326 16.4389 22.9112 17.2024 23.2396 18.0333C23.3447 18.2525 23.4037 18.4908 23.4131 18.7336C23.4224 18.9765 23.3819 19.2186 23.2939 19.4452Z"
						fill="currentColor"
					/>
				</svg>,
				<svg
					className="h-full w-auto"
					key={7}
					width="50"
					height="50"
					viewBox="0 0 31 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>sass</title>
					<path
						d="M15.3619 0C23.6015 0 30.282 6.68045 30.282 14.9201C30.282 23.1597 23.6015 29.8401 15.3619 29.8401C7.12235 29.8401 0.441895 23.1597 0.441895 14.9201C0.441895 6.68045 7.12235 0 15.3619 0ZM12.3966 19.8909C12.6142 20.6929 12.5905 21.4426 12.3667 22.119L12.2859 22.3428C12.2561 22.4186 12.2213 22.492 12.1889 22.5616C12.0149 22.9222 11.7836 23.2579 11.4989 23.5687C10.631 24.5124 9.42004 24.8705 8.90032 24.5696C8.34082 24.2438 8.61933 22.9097 9.62643 21.8467C10.7094 20.7053 12.2623 19.9705 12.2623 19.9705V19.9668L12.3966 19.8909ZM24.7193 6.38703C24.0454 3.73499 19.6502 2.86341 15.4913 4.34174C13.0183 5.22078 10.3389 6.60212 8.41293 8.40372C6.12146 10.5435 5.75716 12.4085 5.90761 13.1881C6.43851 15.9371 10.2058 17.735 11.755 19.0691V19.0765C11.2987 19.3003 7.95538 20.9776 7.17208 22.7133C6.33283 24.541 7.30263 25.8477 7.93673 26.0144C9.89499 26.5565 11.9092 25.5668 12.9909 23.9641C14.0353 22.3962 13.9433 20.382 13.4932 19.3936C14.1099 19.2257 14.836 19.1511 15.7685 19.2643C18.3808 19.5627 18.903 21.2039 18.7898 21.8753C18.6779 22.5454 18.1396 22.9371 17.9518 23.049C17.7653 23.1621 17.7094 23.1982 17.7268 23.274C17.7454 23.3859 17.8399 23.3859 17.9879 23.3673C18.193 23.33 19.3506 22.8078 19.4065 21.5383C19.4625 19.9344 17.9319 18.1453 15.2103 18.1813C14.0913 18.2012 13.3813 18.2945 12.879 18.4996C12.845 18.4476 12.8005 18.4031 12.7485 18.3691C11.0699 16.56 7.95538 15.2918 8.08593 12.886C8.12323 12.0094 8.44029 9.69803 14.054 6.90052C18.6605 4.60532 22.3358 5.24067 22.9699 6.63942C23.8813 8.63374 21.0104 12.3463 16.2174 12.886C14.3897 13.0911 13.4385 12.3836 13.1948 12.1213C12.935 11.8415 12.8977 11.8229 12.8044 11.8801C12.6552 11.9547 12.7485 12.1971 12.8044 12.3463C12.9536 12.7193 13.5318 13.3721 14.5401 13.7078C15.4154 13.9875 17.5614 14.1542 20.1351 13.1483C23.0246 12.0305 25.2813 8.91473 24.6285 6.30372L24.7193 6.38703Z"
						fill="currentColor"
					/>
				</svg>,
			],
			hasGitRepo: true,
		},
		{
			src: '/images/bluevies.webp',
			title: 'BLUEVIES',
			description:
				'Bluevies is a movie search web application powered by the The Movie Database (TMDB) API. Developed with React and styled using Vanilla CSS.',
			features: [
				'Email and Gmail authentication using Firebase.',
				'Cloud Firestore integration which allows users to save their favorite movies to their account and access them from any device.',
				'Search and suggestion functionality to look for movies provided by the TMDB API.',
			],
			github: 'https://github.com/Humaminho/movie-app',
			live: 'https://bluevies.netlify.app/',
			stack: [
				<svg
					className="h-full w-auto"
					key={4}
					width="50"
					height="50"
					viewBox="0 0 31 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>typescript</title>
					<circle
						cx="15.6408"
						cy="14.9201"
						r="14.9201"
						fill="currentColor"
					/>
					<path
						className="text-white dark:text-black"
						d="M22.0208 10.0992C22.5929 10.2323 23.1128 10.5319 23.5148 10.9601C23.7363 11.1919 23.9286 11.4499 24.0875 11.7283C24.0949 11.7586 23.0565 12.4562 22.4267 12.8454C22.4039 12.8608 22.3131 12.762 22.2103 12.6101C22.0953 12.4124 21.932 12.247 21.7357 12.1295C21.5394 12.0119 21.3166 11.9461 21.0879 11.938C20.3641 11.8883 19.8977 12.2674 19.901 12.9011C19.8948 13.0568 19.9303 13.2114 20.0038 13.3487C20.1631 13.6781 20.4588 13.8757 21.3877 14.2782C23.0975 15.0142 23.8314 15.4994 24.2844 16.189C24.5404 16.6247 24.6981 17.1111 24.7464 17.6142C24.7947 18.1172 24.7325 18.6247 24.564 19.1012C24.3324 19.6237 23.9652 20.0747 23.5005 20.4074C23.0358 20.7401 22.4906 20.9423 21.9213 20.9931C21.3162 21.0625 20.7048 21.0562 20.1013 20.9743C19.1768 20.8224 18.3252 20.3787 17.671 19.7081C17.4238 19.4297 17.2146 19.1199 17.0487 18.7866C17.1184 18.7347 17.1919 18.688 17.2684 18.6468C17.3746 18.5864 17.7765 18.3552 18.1556 18.1354L18.8438 17.7321L18.9876 17.9418C19.2299 18.2882 19.5382 18.5833 19.895 18.8102C20.2552 19.0078 20.6633 19.1014 21.0737 19.0806C21.484 19.0599 21.8806 18.9255 22.2191 18.6925C22.3936 18.5224 22.5028 18.2962 22.5274 18.0536C22.5519 17.8111 22.4904 17.5676 22.3535 17.3658C22.168 17.1004 21.7889 16.8772 20.7116 16.4101C19.8668 16.1253 19.0973 15.6531 18.4607 15.029C18.1576 14.6835 17.9337 14.2759 17.8048 13.8347C17.7094 13.3321 17.6954 12.8174 17.7631 12.3104C17.8896 11.7269 18.1924 11.1964 18.6304 10.7908C19.0685 10.3851 19.6207 10.124 20.2122 10.0427C20.8145 9.97076 21.4242 9.98979 22.0208 10.0992ZM16.4135 11.0959L16.4209 12.0731H13.3091V20.9098H11.1148V12.0751H8.00298V11.1154C7.9947 10.7867 8.00368 10.4578 8.02986 10.1301C8.04129 10.1146 9.93323 10.1072 12.2271 10.1113L16.4014 10.1227L16.4135 11.0959Z"
						fill="currentColor"
					/>
				</svg>,
				<svg
					className="h-full w-auto"
					key={5}
					width="50"
					height="50"
					viewBox="0 0 31 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>react</title>
					<circle
						cx="15.3209"
						cy="14.9201"
						r="14.9201"
						fill="currentColor"
					/>
					<path
						className="text-white dark:text-black"
						d="M14.4184 13.2655C14.1106 13.4433 13.8624 13.7083 13.7052 14.0271C13.548 14.3459 13.4889 14.7041 13.5353 15.0565C13.5816 15.4089 13.7315 15.7396 13.9658 16.0069C14.2002 16.2741 14.5085 16.4659 14.8518 16.5579C15.1951 16.6499 15.558 16.6381 15.8946 16.5239C16.2312 16.4096 16.5264 16.1982 16.7428 15.9162C16.9592 15.6343 17.0872 15.2945 17.1105 14.9398C17.1338 14.5851 17.0514 14.2315 16.8738 13.9236C16.7558 13.7192 16.5987 13.54 16.4114 13.3962C16.2242 13.2525 16.0104 13.1471 15.7824 13.086C15.5544 13.0249 15.3166 13.0093 15.0826 13.0401C14.8485 13.0709 14.6228 13.1475 14.4184 13.2655ZM22.4738 15.2157C22.3557 15.0809 22.2313 14.9457 22.1005 14.8102C22.1917 14.7136 22.2803 14.6173 22.3661 14.5214C23.9812 12.706 24.6635 10.8846 24.0315 9.79079C23.4258 8.74123 21.6235 8.42827 19.3664 8.86701C19.1443 8.91062 18.9233 8.95959 18.7032 9.01393C18.6609 8.86903 18.6163 8.72479 18.5694 8.58123C17.8036 6.27379 16.5669 4.77341 15.3029 4.77441C14.0914 4.77441 12.92 6.18021 12.1724 8.35481C12.0986 8.56949 12.0305 8.7855 11.9681 9.00286C11.8212 8.96664 11.6736 8.93309 11.5253 8.90223C9.14442 8.41418 7.22743 8.7362 6.59649 9.83205C5.99171 10.8816 6.62366 12.5994 8.13411 14.3322C8.28438 14.5033 8.43868 14.671 8.597 14.8353C8.40983 15.0265 8.23373 15.2187 8.0687 15.4099C6.59448 17.1186 5.99875 18.8072 6.60253 19.8527C7.22643 20.9335 9.11625 21.2867 11.4176 20.8339C11.6041 20.797 11.7896 20.7554 11.9741 20.7091C12.0412 20.9446 12.1153 21.1784 12.1965 21.4105C12.9412 23.5408 14.1055 24.9003 15.313 24.9003C16.5608 24.9003 17.8106 23.4382 18.5684 21.2183C18.6287 21.0432 18.6841 20.861 18.7384 20.6739C18.9766 20.7329 19.2164 20.7852 19.4579 20.8308C21.6748 21.2505 23.4348 20.9214 24.0376 19.8749C24.6605 18.7931 24.0175 16.9798 22.4738 15.2157ZM7.34115 10.2607C7.72958 9.58651 9.29638 9.32286 11.3522 9.74551C11.4837 9.77234 11.6176 9.80253 11.7537 9.83607C11.5528 10.724 11.4109 11.6242 11.3291 12.5309C10.5877 13.0523 9.88082 13.621 9.21285 14.2336C9.06593 14.0813 8.9227 13.9253 8.78317 13.7657C7.48806 12.2824 6.97687 10.8937 7.34115 10.2607ZM11.2526 16.0248C10.7394 15.6353 10.2614 15.2369 9.8277 14.8364C10.2604 14.4379 10.7384 14.0414 11.2516 13.6529C11.2328 14.0481 11.2238 14.4436 11.2244 14.8394C11.2244 15.2352 11.2338 15.6303 11.2526 16.0248ZM11.2526 19.9896C10.3804 20.1838 9.47984 20.2159 8.59599 20.0842C8.35369 20.0652 8.11785 19.9968 7.90305 19.8831C7.68826 19.7693 7.49907 19.6128 7.34718 19.423C6.97989 18.7891 7.45888 17.4326 8.71977 15.9715C8.87809 15.7883 9.04178 15.6099 9.21084 15.4361C9.87911 16.0525 10.5874 16.6239 11.3311 17.1468C11.4137 18.0649 11.557 18.9766 11.7598 19.8759C11.5921 19.9181 11.4227 19.9564 11.2516 19.9906L11.2526 19.9896ZM18.3973 11.9C18.0599 11.6873 17.7184 11.4817 17.3729 11.2831C17.0321 11.0872 16.6876 10.8984 16.3394 10.7166C16.9118 10.4748 17.4959 10.2616 18.0894 10.0776C18.2226 10.6795 18.3254 11.2877 18.3973 11.9ZM12.9865 8.63355C13.6265 6.77191 14.5744 5.6348 15.305 5.6348C16.0828 5.63379 17.0931 6.86046 17.7543 8.85192C17.7972 8.98207 17.8375 9.11288 17.875 9.24437C17.0071 9.51335 16.158 9.83943 15.3331 10.2205C14.511 9.83476 13.6638 9.50495 12.7973 9.2333C12.8556 9.03205 12.9187 8.83213 12.9865 8.63355ZM12.5839 10.0665C13.1747 10.2525 13.7558 10.4681 14.3248 10.7126C13.6191 11.0762 12.9321 11.4723 12.2639 11.901C12.3444 11.259 12.4521 10.6441 12.5839 10.0665ZM12.2649 17.7747C12.5984 17.9887 12.9368 18.1944 13.2803 18.3916C13.6305 18.5928 13.985 18.7861 14.3439 18.9712C13.7708 19.2242 13.185 19.4475 12.589 19.6404C12.4505 19.0245 12.3423 18.4022 12.2649 17.7757V17.7747ZM17.7553 20.9405C17.4876 21.7929 17.0653 22.5887 16.5095 23.2882C16.3723 23.4887 16.1954 23.659 15.9898 23.7885C15.7841 23.9179 15.5542 24.0039 15.314 24.0409C14.5804 24.0409 13.6456 22.9491 13.0096 21.1267C12.9345 20.9113 12.8654 20.694 12.8023 20.4746C13.6729 20.1938 14.5235 19.8542 15.3482 19.4583C16.1801 19.8424 17.0363 20.1715 17.9113 20.4434C17.863 20.6105 17.811 20.7762 17.7553 20.9405ZM18.1196 19.6082C17.5183 19.4204 16.9266 19.2035 16.3465 18.9581C16.6879 18.779 17.0318 18.5895 17.3779 18.3896C17.7335 18.1843 18.0796 17.974 18.4164 17.7586C18.3492 18.3798 18.2501 18.9972 18.1196 19.6082ZM18.5694 14.8353C18.5694 15.4465 18.5503 16.057 18.512 16.6668C18.0159 17.0029 17.4926 17.331 16.9482 17.6449C16.4048 17.9579 15.8685 18.2457 15.3412 18.5063C14.7864 18.2406 14.2423 17.9542 13.709 17.6469C13.179 17.3417 12.6611 17.0167 12.1553 16.6718C12.1083 16.0613 12.0848 15.4502 12.0848 14.8384C12.0848 14.2272 12.1076 13.6164 12.1532 13.0059C13.1648 12.3153 14.2271 11.702 15.3311 11.1714C15.8785 11.4378 16.4162 11.7232 16.9442 12.0278C17.4742 12.3324 17.9941 12.654 18.504 12.9928C18.5476 13.606 18.5694 14.2202 18.5694 14.8353ZM19.5314 9.71029C21.4655 9.33494 22.9226 9.58752 23.2879 10.2205C23.6773 10.8947 23.1198 12.382 21.7241 13.9498C21.647 14.0363 21.5671 14.1232 21.4846 14.2104C20.8048 13.5959 20.084 13.0284 19.3271 12.5118C19.2509 11.6152 19.1147 10.7246 18.9196 9.84614C19.1275 9.79515 19.3315 9.74987 19.5314 9.71029ZM19.4006 13.6197C19.9113 13.9925 20.4024 14.3915 20.8718 14.8152C20.4046 15.2457 19.9152 15.6514 19.4056 16.0308C19.421 15.6323 19.4288 15.2338 19.4288 14.8353C19.4288 14.4301 19.4194 14.0249 19.4006 13.6197ZM23.2939 19.4452C22.9276 20.0802 21.5148 20.3448 19.6179 19.9866C19.4006 19.9456 19.1778 19.8967 18.9498 19.8396C19.1402 18.9498 19.2703 18.0481 19.3392 17.1408C20.0947 16.6155 20.8132 16.0389 21.4896 15.415C21.6084 15.5377 21.7211 15.6598 21.8278 15.7813C22.4326 16.4389 22.9112 17.2024 23.2396 18.0333C23.3447 18.2525 23.4037 18.4908 23.4131 18.7336C23.4224 18.9765 23.3819 19.2186 23.2939 19.4452Z"
						fill="currentColor"
					/>
				</svg>,
				<svg
					className="h-full w-auto"
					key={10}
					width="50"
					height="50"
					viewBox="0 0 31 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>firebase</title>
					<ellipse
						cx="15.8822"
						cy="14.9203"
						rx="14.9203"
						ry="14.9203"
						fill="currentColor"
					/>
					<g clipPath="url(#clip0_0_1)">
						<path
							className="text-white dark:text-black"
							d="M21.7511 19.779L16.1236 22.9011C15.7382 23.1015 15.3528 23.1015 14.9673 22.9011L9.41699 19.779L19.477 9.64193L19.7468 9.56485C19.978 9.56485 20.1091 9.66506 20.1322 9.8732L21.7511 19.779ZM13.5412 9.79611L10.0337 15.6163L11.4984 6.40424C11.5215 6.1961 11.6525 6.09589 11.8838 6.09589C12.038 6.09589 12.1382 6.14214 12.1922 6.28861L13.8496 9.33358L13.5412 9.79611ZM17.0102 10.7674L9.64826 18.1602L15.2371 8.67833C15.3142 8.52416 15.4299 8.45478 15.584 8.45478C15.7382 8.45478 15.8384 8.52416 15.8924 8.67833L17.0102 10.7674Z"
							fill="currentColor"
						/>
					</g>
					<defs>
						<clipPath id="clip0_0_1">
							<rect
								width="18.5011"
								height="18.5011"
								fill="white"
								transform="translate(6.3335 5.37128)"
							/>
						</clipPath>
					</defs>
				</svg>,
			],
			hasGitRepo: true,
		},
		{
			src: '/images/artwise.webp',
			title: 'ARTWISE CREATIVE',
			description:
				"Artwise Creative is a digital agency website I developed for a client, using Next.js and Tailwind CSS. The website was customized to the client's preferences to ensure that it met their specific needs and requirements.",
			features: [
				'Responsive design with a modern landing page and a dark theme for a smooth user experience.',
				'Contact form that uses Pipedream to receive emails from potential clients.',
				'Use of Flowbite UI components and libraries such as Axios, Formik, and Yup.',
			],
			github: 'N/A',
			live: 'https://artwise-creative.vercel.app/',
			stack: [
				<svg
					className="h-full w-auto"
					key={4}
					width="50"
					height="50"
					viewBox="0 0 31 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>typescript</title>
					<circle
						cx="15.6408"
						cy="14.9201"
						r="14.9201"
						fill="currentColor"
					/>
					<path
						className="text-white dark:text-black"
						d="M22.0208 10.0992C22.5929 10.2323 23.1128 10.5319 23.5148 10.9601C23.7363 11.1919 23.9286 11.4499 24.0875 11.7283C24.0949 11.7586 23.0565 12.4562 22.4267 12.8454C22.4039 12.8608 22.3131 12.762 22.2103 12.6101C22.0953 12.4124 21.932 12.247 21.7357 12.1295C21.5394 12.0119 21.3166 11.9461 21.0879 11.938C20.3641 11.8883 19.8977 12.2674 19.901 12.9011C19.8948 13.0568 19.9303 13.2114 20.0038 13.3487C20.1631 13.6781 20.4588 13.8757 21.3877 14.2782C23.0975 15.0142 23.8314 15.4994 24.2844 16.189C24.5404 16.6247 24.6981 17.1111 24.7464 17.6142C24.7947 18.1172 24.7325 18.6247 24.564 19.1012C24.3324 19.6237 23.9652 20.0747 23.5005 20.4074C23.0358 20.7401 22.4906 20.9423 21.9213 20.9931C21.3162 21.0625 20.7048 21.0562 20.1013 20.9743C19.1768 20.8224 18.3252 20.3787 17.671 19.7081C17.4238 19.4297 17.2146 19.1199 17.0487 18.7866C17.1184 18.7347 17.1919 18.688 17.2684 18.6468C17.3746 18.5864 17.7765 18.3552 18.1556 18.1354L18.8438 17.7321L18.9876 17.9418C19.2299 18.2882 19.5382 18.5833 19.895 18.8102C20.2552 19.0078 20.6633 19.1014 21.0737 19.0806C21.484 19.0599 21.8806 18.9255 22.2191 18.6925C22.3936 18.5224 22.5028 18.2962 22.5274 18.0536C22.5519 17.8111 22.4904 17.5676 22.3535 17.3658C22.168 17.1004 21.7889 16.8772 20.7116 16.4101C19.8668 16.1253 19.0973 15.6531 18.4607 15.029C18.1576 14.6835 17.9337 14.2759 17.8048 13.8347C17.7094 13.3321 17.6954 12.8174 17.7631 12.3104C17.8896 11.7269 18.1924 11.1964 18.6304 10.7908C19.0685 10.3851 19.6207 10.124 20.2122 10.0427C20.8145 9.97076 21.4242 9.98979 22.0208 10.0992ZM16.4135 11.0959L16.4209 12.0731H13.3091V20.9098H11.1148V12.0751H8.00298V11.1154C7.9947 10.7867 8.00368 10.4578 8.02986 10.1301C8.04129 10.1146 9.93323 10.1072 12.2271 10.1113L16.4014 10.1227L16.4135 11.0959Z"
						fill="currentColor"
					/>
				</svg>,
				<svg
					className="h-full w-auto"
					key={6}
					width="50"
					height="50"
					viewBox="0 0 30 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>next</title>
					<g clipPath="url(#clip0_138_49)">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M4.31735e-07 15C9.66233e-05 12.4117 0.669958 9.86738 1.94445 7.61457C3.21895 5.36176 5.0547 3.47708 7.27321 2.14377C9.49172 0.810471 12.0175 0.0739251 14.6049 0.00575386C17.1924 -0.0624174 19.7534 0.540106 22.0391 1.75474C24.3247 2.96937 26.2572 4.75478 27.6485 6.93735C29.0399 9.11992 29.8428 11.6254 29.9792 14.2101C30.1156 16.7949 29.5808 19.3709 28.4269 21.6878C27.2729 24.0047 25.5391 25.9836 23.394 27.432L9.814 8.41999C9.69095 8.24756 9.51633 8.11866 9.3153 8.05187C9.11427 7.98507 8.89722 7.98385 8.69545 8.04836C8.49368 8.11287 8.31761 8.2398 8.19262 8.41083C8.06763 8.58186 8.00018 8.78816 8 8.99999V24H10V12.12L21.66 28.444C19.3728 29.5773 16.8342 30.1083 14.2845 29.9865C11.7348 29.8648 9.25841 29.0944 7.08962 27.7482C4.92082 26.4021 3.13143 24.5248 1.89081 22.2939C0.650192 20.0631 -0.000611924 17.5526 4.31735e-07 15ZM20 20V7.99999H22V20H20Z"
							fill="currentColor"
						/>
					</g>
					<defs>
						<clipPath id="clip0_138_49">
							<rect width="30" height="30" fill="white" />
						</clipPath>
					</defs>
				</svg>,
				<svg
					className="h-full w-auto"
					key={8}
					width="50"
					height="50"
					viewBox="0 0 30 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>tailwind</title>
					<circle
						cx="14.9201"
						cy="14.9201"
						r="14.9201"
						fill="currentColor"
					/>
					<g clipPath="url(#clip0_140_54)">
						<path
							className="text-white dark:text-black"
							d="M14.501 8.20001C11.701 8.20001 9.95098 9.60001 9.25098 12.4C10.301 11 11.526 10.475 12.926 10.825C13.7249 11.0245 14.2954 11.6038 14.928 12.246C15.9579 13.2908 17.1487 14.5 19.751 14.5C22.551 14.5 24.301 13.1 25.001 10.3C23.951 11.7 22.726 12.225 21.326 11.875C20.5271 11.6755 19.9566 11.0963 19.324 10.454C18.295 9.40926 17.1041 8.20001 14.501 8.20001ZM9.25098 14.5C6.45098 14.5 4.70098 15.9 4.00098 18.7C5.05098 17.3 6.27598 16.775 7.67598 17.125C8.47485 17.3245 9.04535 17.9038 9.67798 18.546C10.7079 19.5908 11.8987 20.8 14.501 20.8C17.301 20.8 19.051 19.4 19.751 16.6C18.701 18 17.476 18.525 16.076 18.175C15.2771 17.9755 14.7066 17.3963 14.074 16.754C13.045 15.7093 11.8541 14.5 9.25098 14.5Z"
							fill="currentColor"
						/>
					</g>
					<defs>
						<clipPath id="clip0_140_54">
							<rect
								width="21"
								height="21"
								fill="currentColor"
								transform="translate(4 4)"
							/>
						</clipPath>
					</defs>
				</svg>,
			],
			hasGitRepo: false,
		},
	];

	return (
		<div id="work">
			<main className="max-w-7xl mx-auto px-7 sm:px-10 md:px-12 lg:px-16">
				<section className="flex flex-col py-24 items-start">
					<div>
						<Reveal>
              <h2 className="text-2xl font-bold pb-8">PROJECTS</h2>
            </Reveal>
						<div className="flex flex-col gap-16">
							{projects.map((project) => {
								return (
									<Project
										key={project.title}
										src={project.src}
										title={project.title}
										description={project.description}
										features={project.features}
										github={project.github}
										live={project.live}
										stack={project.stack}
										hasGitRepo={project.hasGitRepo}
									/>
								);
							})}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
