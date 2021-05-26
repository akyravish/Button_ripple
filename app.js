const circles = document.querySelectorAll('.button');

circles.forEach((circle) => {
	circle.addEventListener('click', (e) => {
		const xPostion = e.clientX;
		const yPostion = e.clientY;

		const elTopPostion = e.target.offsetTop;
		const elLeftPostion = e.target.offsetLeft;

		const inXPostion = xPostion - elLeftPostion;
		const inYPostion = yPostion - elTopPostion;

		const span = document.createElement('span');
		span.classList.add('circle');
		span.style.left = `${inXPostion}px`;
		span.style.top = `${inYPostion}px`;

		circle.appendChild(span);
		setTimeout(() => {
			circle.removeChild(span);
		}, 1000);
	});
});
