// Modal login
const loginBtn = document.getElementById("loginBtn");
const modal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");

loginBtn.onclick = () => modal.style.display = "flex";
closeModal.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

// Login básico con "base de datos" JSON
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // En un proyecto real esto iría en Firebase o backend
  fetch("db.json")
    .then(res => res.json())
    .then(data => {
      if (user === data.admin.username && pass === data.admin.password) {
        alert("Bienvenido Admin");
        window.location.href = "admin.html"; // Página del admin
      } else {
        alert("Credenciales incorrectas");
      }
    });
}
