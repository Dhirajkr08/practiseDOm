const canvas = document.getElementById('fireworks');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function Firecracker(x, y) {
  this.x = x;
  this.y = y;
  this.radius = 2;
  this.color = 'red';
  this.velocity = {
    x: (Math.random() - 0.5) * 2,
    y: (Math.random() - 0.5) * 2
  };
  this.opacity = 1;
}

Firecracker.prototype.draw = function() {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  ctx.fillStyle = this.color;
  ctx.globalAlpha = this.opacity;
  ctx.fill();
  ctx.closePath();
};

Firecracker.prototype.update = function() {
  this.x += this.velocity.x;
  this.y += this.velocity.y;
  this.opacity -= 0.02;
  this.draw();
};

const firecrackers = [];

function createFirecracker() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const firecracker = new Firecracker(x, y);
  firecrackers.push(firecracker);
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  firecrackers.forEach((firecracker, index) => {
    firecracker.update();
    if (firecracker.opacity <= 0) {
      firecrackers.splice(index, 1);
    }
  });

  createFirecracker();
}

// Initial creation of firecrackers
for (let i = 0; i < 50; i++) {
  createFirecracker();
}

animate();

// Function to handle button click
function celebrateCheers() {
  alert('Cheers!');
}
