const container = document.getElementById('progress-bars-container');

function createCircularProgressBar(name, score) {
    const progressBar = document.createElement('div');
    progressBar.classList.add('circular-progress');
    progressBar.style.setProperty('--progress', score);

    const svgNamespace = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNamespace, 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');

    const backgroundCircle = document.createElementNS(svgNamespace, 'circle');
    backgroundCircle.classList.add('background-circle');
    backgroundCircle.setAttribute('cx', '50');
    backgroundCircle.setAttribute('cy', '50');
    backgroundCircle.setAttribute('r', '40');

    const progressCircle = document.createElementNS(svgNamespace, 'circle');
    progressCircle.classList.add('progress-circle');
    progressCircle.setAttribute('cx', '50');
    progressCircle.setAttribute('cy', '50');
    progressCircle.setAttribute('r', '40');

    svg.appendChild(backgroundCircle);
    svg.appendChild(progressCircle);
    progressBar.appendChild(svg);

    const nameText = document.createElement('div');
    nameText.classList.add('name-text');
    nameText.textContent = name;

    const progressText = document.createElement('div');
    progressText.classList.add('progress-text');
    progressText.textContent = `${score}/10`;

    progressBar.appendChild(nameText);
    progressBar.appendChild(progressText);
    container.appendChild(progressBar);
}

createCircularProgressBar('HTML', 9);
createCircularProgressBar('CSS', 7);
createCircularProgressBar('JavaScript', 8);
createCircularProgressBar('Java', 7);
createCircularProgressBar('React', 6);
createCircularProgressBar('Tailwind', 7);
createCircularProgressBar('BootStrap', 7);
createCircularProgressBar('MongoDB', 4);
createCircularProgressBar('GIT', 9);
createCircularProgressBar('Node.js', 5);
createCircularProgressBar('Express.js', 7);
createCircularProgressBar('Next.js', 2);