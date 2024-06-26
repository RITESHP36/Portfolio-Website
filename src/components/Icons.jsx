import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 512 512"
		{...rest}
		className={`w-full h-auto ${className}`}
	>
		<path fill="none" d="M0 0h512v512H0z" />
		<path
			fill="currentColor"
			d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
		/>
	</svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 256 209"
		{...rest}
		className={`w-full h-auto ${className}`}
	>
		<path fill="none" d="M0 0h256v209H0z" />
		<path
			fill="#55acee"
			d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
		/>
	</svg>
);
// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 256 256"
		{...rest}
		className={`w-full h-auto ${className}`}
	>
		<path fill="none" d="M0 0h256v256H0z" />
		<g fill="none">
			<rect width={256} height={256} fill="#fff" rx={60} />
			<rect width={256} height={256} fill="#0A66C2" rx={60} />
			<path
				fill="#fff"
				d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
			/>
		</g>
	</svg>
);

export const PinterestIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 256 256"
		{...rest}
		className={`w-full h-auto ${className}`}
	>
		<path fill="none" d="M0 0h256v256H0z" />
		<path
			fill="#CB1F27"
			d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239-.36-8.938-.064-19.668 2.228-29.393 2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136 11.643 0 17.268 8.745 17.268 19.217 0 11.704-7.465 29.211-11.304 45.426-3.207 13.578 6.808 24.653 20.203 24.653 24.252 0 40.586-31.149 40.586-68.055 0-28.054-18.895-49.052-53.262-49.052-38.828 0-63.017 28.956-63.017 61.3 0 11.152 3.288 19.016 8.438 25.106 2.368 2.797 2.697 3.922 1.84 7.134-.614 2.355-2.024 8.025-2.608 10.272-.852 3.242-3.479 4.401-6.409 3.204-17.884-7.301-26.213-26.886-26.213-48.902 0-36.361 30.666-79.961 91.482-79.961 48.87 0 81.035 35.364 81.035 73.325 0 50.213-27.916 87.726-69.066 87.726-13.819 0-26.818-7.47-31.271-15.955 0 0-7.431 29.492-9.005 35.187-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0 57.314 0 0 57.309 0 128.002Z"
		/>
	</svg>
);

export const DribbbleIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 256 256"
		{...rest}
		className={`w-full h-auto ${className}`}
	>
		<path fill="none" d="M0 0h256v256H0z" />
		<path
			fill="#E74D89"
			d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"
		/>
		<path
			fill="#B2215A"
			d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
		/>
	</svg>
);

export const SunIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		{...rest}
		className={`w-full h-auto ${className}`}
	>
		<g
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		>
			<g strokeDasharray="2">
				<path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
					<animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						dur="0.2s"
						values="4;2"
					/>
				</path>
				<path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
					<animate
						fill="freeze"
						attributeName="stroke-dashoffset"
						begin="0.2s"
						dur="0.2s"
						values="4;2"
					/>
				</path>
			</g>
			<path
				fill="currentColor"
				d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
				opacity="0"
			>
				<set attributeName="opacity" begin="0.5s" to="1" />
			</path>
		</g>
		<g fill="currentColor" fillOpacity="0">
			<path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
				<animate
					id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
					fill="freeze"
					attributeName="fill-opacity"
					begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
					dur="0.4s"
					values="0;1"
				/>
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
		</g>
		<mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
			<circle cx="12" cy="12" r="12" fill="#fff" />
			<circle cx="22" cy="2" r="3" fill="#fff">
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.1s"
					dur="0.4s"
					values="22;18"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.1s"
					dur="0.4s"
					values="2;6"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.1s"
					dur="0.4s"
					values="3;12"
				/>
			</circle>
			<circle cx="22" cy="2" r="1">
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.1s"
					dur="0.4s"
					values="22;18"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.1s"
					dur="0.4s"
					values="2;6"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.1s"
					dur="0.4s"
					values="1;10"
				/>
			</circle>
		</mask>
		<circle
			cx="12"
			cy="12"
			r="6"
			fill="currentColor"
			mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
		>
			<set attributeName="opacity" begin="0.5s" to="0" />
			<animate
				fill="freeze"
				attributeName="r"
				begin="0.1s"
				dur="0.4s"
				values="6;10"
			/>
		</circle>
	</svg>
);

export const MoonIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		{...rest}
		className={`w-full h-auto ${className}`}
	>
		<rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
		<g
			fill="none"
			stroke="currentColor"
			strokeDasharray="2"
			strokeDashoffset="2"
			strokeLinecap="round"
			strokeWidth="2"
		>
			<path d="M0 0">
				<animate
					fill="freeze"
					attributeName="d"
					begin="1.2s"
					dur="0.2s"
					values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
				/>
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="1.2s"
					dur="0.2s"
					values="2;0"
				/>
			</path>
			<path d="M0 0">
				<animate
					fill="freeze"
					attributeName="d"
					begin="1.5s"
					dur="0.2s"
					values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
				/>
				<animate
					fill="freeze"
					attributeName="stroke-dashoffset"
					begin="1.5s"
					dur="1.2s"
					values="2;0"
				/>
			</path>
			<animateTransform
				attributeName="transform"
				dur="30s"
				repeatCount="indefinite"
				type="rotate"
				values="0 12 12;360 12 12"
			/>
		</g>
		<g fill="currentColor">
			<path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					dur="0.4s"
					values="1;0"
				/>
			</path>
			<path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
				<animate
					fill="freeze"
					attributeName="fill-opacity"
					begin="0.2s"
					dur="0.4s"
					values="1;0"
				/>
			</path>
		</g>
		<g
			fill="currentColor"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		>
			<path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
			<set attributeName="opacity" begin="0.6s" to="0" />
		</g>
		<mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
			<circle cx="12" cy="12" r="12" fill="#fff" />
			<circle cx="18" cy="6" r="12" fill="#fff">
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.6s"
					dur="0.4s"
					values="18;22"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.6s"
					dur="0.4s"
					values="6;2"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.6s"
					dur="0.4s"
					values="12;3"
				/>
			</circle>
			<circle cx="18" cy="6" r="10">
				<animate
					fill="freeze"
					attributeName="cx"
					begin="0.6s"
					dur="0.4s"
					values="18;22"
				/>
				<animate
					fill="freeze"
					attributeName="cy"
					begin="0.6s"
					dur="0.4s"
					values="6;2"
				/>
				<animate
					fill="freeze"
					attributeName="r"
					begin="0.6s"
					dur="0.4s"
					values="10;1"
				/>
			</circle>
		</mask>
		<circle
			cx="12"
			cy="12"
			r="10"
			fill="currentColor"
			mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
			opacity="0"
		>
			<set attributeName="opacity" begin="0.6s" to="1" />
			<animate
				fill="freeze"
				attributeName="r"
				begin="0.6s"
				dur="0.4s"
				values="10;6"
			/>
		</circle>
	</svg>
);

export const CircularText = ({ className, ...rest }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="496"
    height="496"
    className={`w-full h-auto ${className}`} viewBox="0 0 496 496" 
    xmlSpace="preserve" 
    {...rest}>
      <path
      d="m208.227 382.793 2.398.394 2.414.356C215 384 215 384 216 385c.376 2.98.707 5.95 1 8.938.163 1.655.33 3.31.5 4.964l.219 2.234c.196 1.952.196 1.952 1.281 3.864l10-18 10 2a332.35 332.35 0 0 1 3.125 21.313l.265 2.278c.494 4.5.694 8.882.61 13.409-7.875-.875-7.875-.875-9-2a100.045 100.045 0 0 1-.754-4.91l-.4-2.998-.409-3.154-.42-3.167c-.342-2.59-.681-5.18-1.017-7.771l-1.102 2.09c-3.322 6.21-6.873 12.13-10.898 17.91l-8-2-3-23c-2.874 5.459-2.874 5.459-5.744 10.92l-1.092 2.068-1.11 2.11c-.934 1.685-1.986 3.3-3.054 4.902l-9-1c2.946-6.912 6.339-13.442 10-20l1.39-2.559 1.298-2.378 1.136-2.09c3.524-5.912 3.524-5.912 6.403-6.18Z"
    />
    <path
      d="M277 63c5.232.518 5.232.518 8 2 1.883 3.134 2.619 6.459 3.438 10l1.433 5.5.592 2.469c.476 2.078.476 2.078 1.537 4.031l1.898-1.969 2.477-2.531 2.46-2.531C301 78 301 78 303 78l.813-1.813C305.966 72.22 305.966 72.22 308 71c1.933.328 1.933.328 4.117.93l2.199.593L316 73c-2.888 11.697-5.911 23.355-9 35l-8-2c.63-5.781 1.652-11.344 3-17l-2.125 2.188C291.973 99 291.973 99 286 99l-5-15-4 15c-6.152-.586-6.152-.586-8-1-1.557-3.114-.283-5.347.617-8.652l.535-1.988c.568-2.101 1.145-4.2 1.723-6.297l1.145-4.233c2.735-10.096 2.735-10.096 3.98-13.83Z"
    />
    <path
      d="M142 113c4.553 1.193 6.827 3.6 10 7 1.878 1.82 3.76 3.636 5.645 5.45C159 127 159 127 159 129a158.814 158.814 0 0 1-6 5l-2.082-1.898-2.73-2.477-2.708-2.46c-4.11-3.606-4.11-3.606-9.48-4.165-.946 2.75-.946 2.75-1 6 2.313 2.73 2.313 2.73 5 5l1 3c2 1.209 2 1.209 4 2 0 4.268-.376 4.939-3 8-4.908-.533-7.632-4.227-10.934-7.582-1.554-1.552-1.554-1.552-4.066-3.418-2.297.05-2.297.05-4 1-.96 2.195-.96 2.195-1 5 3.269 4.801 7.513 8.354 12 12-1.75 3-1.75 3-4 6-4.676 0-5.696-.88-9-4v-2c-.574-.26-1.147-.52-1.738-.79-2.436-1.303-4.355-2.785-6.45-4.585l-2.105-1.773c-1.854-2.011-2.49-3.137-2.707-5.852 1.75-2.25 1.75-2.25 4-4h3l.25-1.688c1.032-3.182 2.38-4.943 4.75-7.312 3.75-1.313 3.75-1.313 7-2l.625-3.688c1.875-7.383 6.74-10.284 14.375-9.312ZM125.625 318.938c3.942 3.061 6.278 7.198 8.797 11.44A65.537 65.537 0 0 0 139 337c-1.494 4.307-4.655 6.007-8.375 8.25-1.265.782-2.53 1.566-3.793 2.352l-1.935 1.196a146.89 146.89 0 0 0-5.385 3.6l-3.2 2.227-2.886 2.04L111 358c-4.25-1.416-5.708-4.534-8.063-8.125l-1.353-1.977c-3.986-6.005-6.33-11.72-5.123-18.98 1.488-5.295 5.034-8.984 9.539-11.918 6.94-2.936 13.276-1.963 19.625 1.938Zm-14.313 6.187L109 327l-2.313 1.75c-1.937 2.228-1.937 2.228-2.25 5.5.721 4.804 2.744 7.874 5.563 11.75 4.26-.58 7.352-3.124 10.75-5.563l1.824-1.287A911.784 911.784 0 0 0 127 336c-1.53-3.987-2.943-6.943-6-10-3.807-1.661-5.79-2.507-9.688-.875Z"
    />
    <path
      d="m304 372-1 7-2.484.078-3.266.172-3.234.14c-3.593.727-4.785 1.754-7.016 4.61l-1 3 2.875-2c4.605-2.616 8.947-2.844 14.125-2 3.517 1.695 5.346 2.93 7.375 6.25 1.088 4.785 1.409 8.935-.563 13.5-3.14 3.9-5.475 5.95-10.437 7.063C296 410 296 410 293 409v2l-8 2c-.697-2.055-1.39-4.11-2.066-6.172a415.576 415.576 0 0 0-2.024-5.969c-5.103-15.327-5.103-15.327-1.91-21.925 3.246-4.417 7.078-6.264 12.32-7.579 4.326-.573 8.403-.11 12.68.645Zm-13 20c-.854 3.306-.854 3.306-1 7 1.46 2.627 1.46 2.627 4 4 3.291 0 4.731-.802 7.375-2.75 1.864-2.134 1.864-2.134 1.688-4.813-1.383-3.17-2.99-3.977-6.063-5.437-2.084 0-4.098 1.22-6 2Z"
    />
    <path
      d="M154 353c3.598 1.34 5.542 2.424 7.938 5.438 2.66 3.305 5.313 4.616 9.062 6.562 0 3.997-1.44 5.232-3.875 8.375l-1.21 1.572a813.629 813.629 0 0 1-2.571 3.321 621.666 621.666 0 0 0-4.063 5.306l-2.656 3.488-1.261 1.66c-1.987 2.588-3.975 5.05-6.364 7.278-3.719-1.539-4.356-2.475-7-6l6-8-3.813-1.688c-3.723-1.881-5.607-3.316-7.187-7.312-1.516-5.358-.88-8.491 1.75-13.203 4.062-5.84 8.434-7.251 15.25-6.797Zm-8 12c-1.24 2.941-1.24 2.941-1 6 1.417 2.583 1.417 2.583 4 4 3.229-.066 5.184-.41 7.813-2.313 1.445-2.054 2.112-3.15 2.187-5.687-1.702-2.71-3.115-4.515-5.938-6.063-3.39.103-4.785 1.663-7.062 4.063Z"
    />
    <path
      d="M114 153c3.73 1.638 6.963 3.385 9.2 6.867 1.487 3.964 1.364 7.975.8 12.133-1.097 2.337-2.37 3.963-4 6v2l7 4c-.547 3.375-1.055 5.082-3 8-5.53-1.593-10.338-4.158-15.375-6.875a5635.65 5635.65 0 0 0-7.28-3.89C97.924 179.433 94.466 177.713 91 176c.547-3.375 1.055-5.082 3-8h2v-3.563c.622-4.849 2.91-7.2 6.688-10.14 3.869-2.17 7.04-2.367 11.312-1.297Zm-9.938 10.625c-1.466 3.279-1.213 4.995-.062 8.375 2.694 2.32 4.123 3.04 7.688 2.875 2.645-.745 2.645-.745 4.312-3.875-.082-3.572-.082-3.572-1-7-3.819-2.546-7.183-3.524-10.938-.375Z"
    />
    <path
      d="M380 115c2.993 1.098 3.846 1.677 5.25 4.625L386 122l-2.375 2.313c-2.698 2.596-2.698 2.596-4.625 5.687l2.313.75c3.04 1.414 4.07 2.34 5.687 5.25 1.35 4.339.95 7.054-.908 11.179-1.963 3.274-4.806 5.43-7.78 7.758l-1.837 1.495A423.721 423.721 0 0 1 372 160c-2.86-1.36-4.86-2.645-7-5 1.576-4.727 5.694-6.678 9.629-9.55 2.678-2.276 2.678-2.276 2.773-5.68-.106-2.673-.106-2.673-1.402-3.77-3.877-.492-5.476-.399-8.633 2.004l-2.492 2.559c-2.508 2.566-2.508 2.566-4.875 4.437-2.242-.035-2.242-.035-4-1l-1-3h-2c.844-4.731 3.803-6.77 7.375-9.688l1.895-1.585A829.596 829.596 0 0 1 368 125l3.34-2.75c1.878-1.54 3.76-3.076 5.648-4.605 1.888-1.488 1.888-1.488 3.012-2.645Z"
    />
    <path
      d="M93 229c1.65 3.3 1.383 6.991 1.563 10.625l.13 2.43c.107 1.981.207 3.963.307 5.945 2.744-4.116 1.714-6.68.996-11.406C96 234 96 234 97.473 232.156L99 231c2.611.957 3.792 1.656 5.25 4.063 1.733 6.788 1.359 12.802-2.25 18.937-3.493 3.323-6.295 4.28-11 4.5-5.722-.224-9.005-2.505-13-6.5-1.768-5.372-1.65-10.971.063-16.313C81.888 230.38 86.439 228.36 93 229Zm-7 9c-2.567 3.85-1.833 5.586-1 10l3 1v-11h-2Z"
    />
    <path
      d="M413.188 198.063c3.554 2.448 5.497 4.875 6.812 8.937.692 4.456 1.083 8.843-.988 12.969-2.197 2.774-4.624 4.972-8.012 6.031h-5l-4-18c-2.333 2.827-2.333 2.827-1.75 6.063.51 3.036.51 3.036 2.75 4.937-.125 2.5-.125 2.5-1 5-2.063 1.313-2.063 1.313-4 2-4.118-3.569-5.617-6.77-6.258-12.176-.275-5.46.591-8.546 4.258-12.824 5.171-4.545 10.688-5.104 17.188-2.938ZM408 206l2 11c2.166-1.665 2.166-1.665 4-4 .252-2.659.252-2.659-1-5l-5-2Z"
    />
    <path
      d="M171.813 96.188c2.461 2.04 4.306 4.234 6.187 6.812-4.777 3.981-9.89 7.467-15 11 2.916.209 2.916.209 6 0l2-2.5 2-2.5c3.25-.313 3.25-.313 6 0 1 3 1 3-.688 6.5-2.123 3.459-4.16 5.854-8.16 7.055-4.76.985-9.424 1.136-13.964-.68-3.48-2.982-5.826-5.625-6.575-10.277-.188-4.314.148-7.092 2.012-11.035 5.494-5.928 12.725-7.526 20.188-4.376Zm-12.625 7.062c-1.562 1.95-1.562 1.95-1.188 5.75 3.937-1.312 6.227-2.92 9-6-1.047-1.257-1.047-1.257-3.375-1.25-2.629.035-2.629.035-4.438 1.5Z"
    />
    <path
      d="M106 286c4.603 2.43 7.656 5.312 10 10 .403 4.811.615 9.395-1.125 13.938-3.825 4.207-7.106 6.314-12.813 6.687-4.781-.188-7.272-1.671-10.687-4.922-3.44-4.26-3.818-7.87-3.684-13.23.47-3.763 1.712-5.743 4.309-8.473 2.31-1.301 4.475-2.126 7-3 2.85 5.6 5.6 11.191 8 17 1.033-3.288 1.201-4.578-.313-7.75-1.491-2.339-1.491-2.339-3.687-3.25 1.875-5.875 1.875-5.875 3-7Zm-10 11c-1.137 4.846-1.137 4.846.25 9.438 1.732 1.895 1.732 1.895 4.75 1.562-.607-4.128-2.038-7.332-4-11h-1ZM172 371c9.73-.623 9.73-.623 14.438 1.688 4.447 4.013 7.245 6.93 7.718 13.19-.34 4.629-2.253 8.45-5.738 11.513-4.138 2.652-7.614 3.22-12.418 2.609-4.127-1.486-7.351-3.555-10.09-7.05-1.882-4.032-1.554-8.629-.91-12.95l2-3c5.92 1.76 11.416 4.397 17 7v-4l-11-2-1-7Zm0 14c.504 4.798.504 4.798 2.75 6.875 2.845 1.422 4.266 1.037 7.25.125v-2l-10-5Z"
    />
    <path
      d="M363 335c3.762 1.254 5.272 3.142 8 6l2.375 2.375L383 353a56.54 56.54 0 0 1-4 7h-3l-1.188 2.75c-1.98 3.55-3.299 5.22-6.812 7.25-4.853.704-7.63.605-11.688-2.188-2.981-2.398-5.678-5.036-8.312-7.812l-2.313-2.313L344 356c1.293-2.884 2.66-4.872 5-7 4.31 1.833 6.8 4.81 9.902 8.223 2.417 2.047 3.964 2.534 7.098 2.777 2-1 2-1 3-3-.243-4.908-2.603-7.028-6.063-10.313l-2.785-2.675L358 342c1.36-2.86 2.645-4.86 5-7Z"
    />
    <path
      d="M320 88c7.16-.37 11.08.665 16.813 5.25 2.761 3.472 3.048 5.323 3.187 9.75-.96 2.961-2.369 5.595-3.875 8.313l-1.145 2.166A500.04 500.04 0 0 1 332 119l-1 2c-2.929-.628-5.361-1.586-8-3v-2l-3.125-.125c-4.752-1.073-7.22-2.802-9.875-6.875-.621-3.882-.307-6.77 2-10 2.566-1.995 3.971-2.001 7.25-1.875 4.347 1.014 7.874 2.71 11.75 4.875l-1-5-10-2v-7Zm-1 16-1 3 1 2c2.322.407 4.657.744 7 1l2-3c-3.44-2.294-4.723-3-9-3Z"
    />
    <path
      d="M333 365c1.272 2.374 2.542 4.75 3.813 7.125l1.08 2.016c6.094 11.407 6.094 11.407 6.17 14.109-1.642 2.704-4.104 2.801-7.063 3.75-2.137 1.539-4.024 3.249-6 5-2.285 1.143-3.769 1.231-6.313 1.313l-2.3.113c-3.468-.619-4.905-1.925-7.387-4.426-1.66-2.652-2.993-5.416-4.313-8.25l-1.087-2.258A612.074 612.074 0 0 1 307 378c2.813-2.063 2.813-2.063 6-4 3.927 1.309 4.207 2.758 6.063 6.375 1.552 2.995 3.064 5.815 4.937 8.625 3.655-.348 3.655-.348 6.379-2.605.969-3.736-1.002-6.286-2.817-9.457A103.015 103.015 0 0 1 324 370c1-3 1-3 2.813-4.188C329 365 329 365 333 365ZM394 296c3.068 2.073 3.872 3.6 5 7.125 0 5.239-1.801 9.185-4 13.875 2.558-.879 2.558-.879 5-3 1.04-2.948 1.566-5.91 2-9h7c.544 7.62-1.234 12.404-5.875 18.438-2.78 2.043-4.689 2.283-8.125 2.562-6.83-1.815-13.392-4.674-19-9l3-7h2l.25-3.125c.816-4.216 2.117-6.524 4.75-9.875 2.84-1.42 4.855-1.315 8-1Zm-6 9c-1.196 2.837-1.196 2.837-2 6l2 3h2c1.858-3.135 2.201-5.375 2-9h-4Z"
    />
    <path
      d="M403 163c3.413 3.413 3.742 5.44 5 10 1.48 2.746 1.48 2.746 3 5 1.224 2.448 1.016 3.734.75 6.438l-.203 2.37c-.87 3.486-2.72 4.688-5.711 6.508-5.594 2.833-10.66 4.588-16.836 5.684-3-5.75-3-5.75-3-8l2.484-1.023 3.266-1.352 3.234-1.336A102.56 102.56 0 0 0 402 184v-7c-7.321-.851-13.35 2.2-20 5-3-5.625-3-5.625-3-9l24-10Z"
    />
    <path
      d="M102 184c4.408 2.164 7.231 4.382 9 9 .675 6.13.851 11.907-3 17-4.282 3.19-7.64 4.696-13.012 4.383-4.806-.926-8.075-3.087-10.925-7.133-1.793-5.484-1.586-9.536.062-14.938 4.4-7.774 9.168-9.841 17.875-8.312Zm-8.875 9.063c-2.294 2.09-2.94 2.88-3.125 5.937.076 2.138.076 2.138 1 4 3.151 2.334 6.175 2.488 10 2 2.098-1.519 2.098-1.519 3-4 .33-3.11.33-3.11-1-6-3.728-2.366-5.63-3.506-9.875-1.938Z"
    />
    <path
      d="M411.875 271.125c3.297 2.91 5.754 5.577 6.477 10.055.231 6.261-1.284 10.364-5.352 15.195-4.54 2.46-8.942 1.944-14 1.625-.978-3.056-1.008-4.853-.004-7.89l.693-2.15.748-2.21.737-2.258c.6-1.834 1.211-3.663 1.826-5.492-3.122 1.309-3.122 1.309-5 4a265.653 265.653 0 0 0-.188 4.438c-.226 2.43-.226 2.43-.812 4.562-3.063 2.063-3.063 2.063-6 3-2.371-6.06-2.167-10.842 0-17 4.554-7.684 12.807-9.032 20.875-5.875ZM408 279l-3 11 5-1c.765-3.355.765-3.355 1-7l-3-3ZM199 80c4.699 2.856 6.493 6.448 8.375 11.438l.824 1.986c1.526 3.902 2.118 6.555.801 10.576l-7 1c-1.004-2.29-2.004-4.582-3-6.875l-.867-1.973C196 91.227 196 91.227 196 89c-4.342.185-4.342.185-8 2 .311 4.432.945 8.173 2.563 12.313C192 107 192 107 192 110c-2.906 1.257-4.796 2-8 2l-3.375-8.188-.96-2.33c-.617-1.496-1.232-2.993-1.844-4.491-.662-1.606-1.35-3.2-2.048-4.792C175 90 175 90 175 86c2.513-1.077 4.8-1.965 7.5-2.438 2.595-.419 2.595-.419 4.75-2.124 3.816-1.995 7.531-2.355 11.75-1.438Z"
    />
    <path
      d="M359.848 108.11c2.823 2.247 5.127 4.404 6.152 7.89.078 2.332.09 4.668 0 7l-8-1-.688-2.875c-1.016-3.255-1.016-3.255-3.687-4.625-2.563-.656-2.563-.656-4.875-.063-2.095 1.578-2.095 1.578-2.625 5-.476 3.67-.476 3.67 1.875 6.563l3.5.813L355 128c1.438 3.125 1.438 3.125 2 6-3.25 1.625-6.487 1.546-10 1-5.096-2.194-8.203-5.863-10.41-10.883-1.295-4.647-.286-8.552 1.66-12.93 5.607-7.009 14.132-7.56 21.598-3.078Z"
    />
    <path
      d="m396 242 35 3v9c-9.478.306-18.595-.877-28-2l-1 17h-8c.142-3 .289-6 .438-9l.119-2.543.127-2.52.11-2.285c.276-3.562.763-7.106 1.206-10.652Z"
    />
    <path
      d="M78 260c4.271.81 8.542 1.623 12.813 2.438l3.681.697 3.526.674 3.253.618C104 265 104 265 107 266l1 9c-22.23 16-22.23 16-25 16-.653-3.024-1.113-5.9-1-9 2-2.313 2-2.313 5-4l1.86-1.086c1.701-.992 3.42-1.955 5.14-2.914l1-1-3.465-.84c-1.49-.366-2.982-.731-4.472-1.098l-2.288-.552c-5.662-1.397-5.662-1.397-6.775-2.51-.141-2.67-.042-5.324 0-8Z"
    />
    <path
      d="M216 68c1 1 1 1 1.063 3.563L217 74l7-1c.381 1.991.713 3.993 1 6l-1 1h-5l3 13 6-2 3 6c-2.012 2.892-3.328 3.069-6.875 3.813-3.586.296-6.064.286-9.125-1.813-2.954-5.169-3.613-10.115-4-16h-5l-1-7h4l-1-7c2.945-.982 4.935-1.161 8-1Z"
    />
    <path
      d="M69 214c12.495 1.015 24.73 2.397 37 5v8c-3.733 1.244-6.653.642-10.441.04l-2.193-.334c-1.528-.234-3.055-.471-4.582-.712-2.34-.368-4.682-.725-7.024-1.08-1.484-.228-2.968-.458-4.451-.687l-2.128-.326c-4.949-.785-4.949-.785-7.181-1.901l1-8Z"
    />
    <path
      d="M373 320c5.27 1.216 8.574 3.85 12.676 7.18 3.27 2.562 6.751 4.708 10.324 6.82-.376 2.782-.673 4.588-2.438 6.813C392 342 392 342 390 342l-.313 2.313c-.73 2.858-1.457 3.844-3.687 5.687l-2-1v-2l-4-1 1-1.688c1.209-2.795 1.46-4.29 1-7.312-2.336-2.323-2.336-2.323-5.375-4.25l-3.023-2.078c-2.455-1.643-2.455-1.643-4.602-2.672 1.75-5.75 1.75-5.75 4-8Z"
    />
    <path
      d="M342 357a118.03 118.03 0 0 1 4.813 6.063l1.356 1.795c3.012 4 5.966 8.036 8.831 12.142-1.293 2.884-2.66 4.872-5 7-3.275-1.092-3.75-1.635-5.7-4.309l-1.474-2.013-1.514-2.115-1.548-2.104C338 368.269 338 368.269 338 366h-2l-2-5c5.75-4 5.75-4 8-4ZM395.031 150c3.017 1.532 3.684 3.98 4.969 7l-3.29 2.047-4.335 2.703-2.16 1.344-2.13 1.328-2.102 1.307c-1.82 1.166-3.564 2.4-5.319 3.662-.88.53-1.758 1.062-2.664 1.609-3-1-3-1-4.75-3.375C372 165 372 165 373 162c2.441-1.648 2.441-1.648 5.563-3.375 4.387-2.452 8.605-4.988 12.718-7.875C393 150 393 150 395.031 150Z"
    />
    <path
      d="M252 88c2 2 2 2 2.313 5L254 96c-3.85 2.567-5.586 1.833-10 1-1.326-5.425-1.326-5.425.063-7.875C246.82 87.523 248.87 87.667 252 88Z"
    />
    <path
      d="M261 388c1.875 1.688 1.875 1.688 3 4-.188 2.688-.188 2.688-1 5-2.763 1.381-4.947 1.19-8 1-2-2-2-2-2.313-5l.313-3c3.221-2.148 4.26-2.561 8-2Z"
    />
    <path
      d="M403.438 143.75C406 144 406 144 409 146c.25 3.563.25 3.563 0 7-1 1-1 1-4.438 1.25L401 154c-2.15-3.224-2.383-4.267-2-8 2-2 2-2 4.438-2.25Z"
    />
    <path
      d="M360.688 382.563C363 384 363 384 364 386.438c0 2.562 0 2.562-1.063 4.375-2.777 1.702-4.747 1.594-7.937 1.187-2-3-2-3-1.875-5.563C354 384 354 384 355.75 382.563c2.25-.562 2.25-.562 4.938 0Z"
    />
    <path
      d="M115 134h1v5l-1.938.75c-2.25 1.066-2.25 1.066-2.812 3.375L111 145h-2c-.75-1.75-.75-1.75-1-4 1.75-2.25 1.75-2.25 4-4h3v-3Z"
    />
    <path
      d="m363 335 3 1c-1.642 3.283-4.829 4.27-8 6 1.293-2.884 2.66-4.872 5-7Z"
    />
    <path fill="#575757" d="m103 319 3 1-7 6c.96-3.837 1.236-4.597 4-7Z" />
    <path
      d="m261 388-1.875.875c-3.323 1.76-4.577 3.808-6.125 7.125-.188-2.875-.188-2.875 0-6 3.228-2.152 4.284-2.2 8-2Z"
    />
    <path  d="m84 230 2 1-7 7-1-2 6-6Z" />
    <path
      d="M96 163h1c.313 3.313.313 3.313 0 7-2.5 1.938-2.5 1.938-5 3l2-5h2v-5Z"
    />
    </svg>
  );

export const LinkArrow = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		className={`w-full h-auto ${className}`}
		{...rest}
	>
		<path fill="none" d="M0 0h24v24H0z" />
		<path
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={2}
			d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
		/>
	</svg>
);

export const GmailIcon = ({ className, ...rest }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		viewBox="0 0 48 48"
		className={`w-full h-auto ${className}`}
		{...rest}
	>
		<path fill="#4caf50" d="m45 16.2-5 2.75-5 4.75V40h7a3 3 0 0 0 3-3V16.2z" />
		<path
			fill="#1e88e5"
			d="m3 16.2 3.614 1.71L13 23.7V40H6a3 3 0 0 1-3-3V16.2z"
		/>
		<path
			fill="#e53935"
			d="m35 11.2-11 8.25-11-8.25-1 5.8 1 6.7 11 8.25 11-8.25 1-6.7z"
		/>
		<path
			fill="#c62828"
			d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859A4.298 4.298 0 0 0 3 12.298z"
		/>
		<path
			fill="#fbc02d"
			d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341A4.298 4.298 0 0 1 45 12.298z"
		/>
	</svg>
);
