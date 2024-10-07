const numSnowflakes = 111;

for (let i = 0; i < numSnowflakes; i++) {
    let snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerText = '❄';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    snowflake.style.opacity = Math.random();
    snowflake.style.animation = `fall ${Math.random() * 10 + 5}s linear infinite`;

    document.body.appendChild(snowflake);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(110vh);
        }
    }
`;
document.head.appendChild(style);
