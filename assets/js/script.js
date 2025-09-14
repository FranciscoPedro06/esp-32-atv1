import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import {
  getDatabase,
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCRezNi5c43Jv__VclfRNWdeLdt6vNL6Og",
  authDomain: "iot-esp32-web-d12ca.firebaseapp.com",
  databaseURL: "https://iot-esp32-web-d12ca-default-rtdb.firebaseio.com",
  projectId: "iot-esp32-web-d12ca",
  storageBucket: "iot-esp32-web-d12ca.firebasestorage.app",
  messagingSenderId: "861726541566",
  appId: "1:861726541566:web:b4b3df9df240eface647af",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

const loginContainer = document.getElementById("login-container");
const dashboard = document.getElementById("dashboard");
const authForm = document.getElementById("auth-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submit-btn");
const toggleAuthLink = document.getElementById("toggle-auth-mode");
const logoutBtn = document.getElementById("logout-btn");
const userIdDisplay = document.getElementById("user-id-display");
const loginError = document.getElementById("login-error");
const authHeaderText = document.getElementById("auth-header-text");

let isLoginMode = true;

onAuthStateChanged(auth, (user) => {
  if (user) {
    loginContainer.style.display = "none";
    dashboard.style.display = "block";
    userIdDisplay.textContent = user.email;
    startRealtimeListener();
  } else {
    loginContainer.style.display = "block";
    dashboard.style.display = "none";
  }
});

authForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  loginError.textContent = "";

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  try {
    if (isLoginMode) {
      await signInWithEmailAndPassword(auth, email, password);
    } else {
      await createUserWithEmailAndPassword(auth, email, password);
      toggleMode();
    }
  } catch (error) {
    loginError.textContent = error.message;
  }
});

toggleAuthLink.addEventListener("click", (e) => {
  e.preventDefault();
  toggleMode();
});

function toggleMode() {
  isLoginMode = !isLoginMode;
  submitBtn.textContent = isLoginMode ? "Entrar" : "Cadastrar";
  toggleAuthLink.textContent = isLoginMode ? "Cadastre-se" : "Faça Login";
  authHeaderText.textContent = isLoginMode
    ? "Acesse seu painel para ver os dados em tempo real"
    : "Crie sua conta para monitorar os dados";
  loginError.textContent = "";
}

logoutBtn.addEventListener("click", () => signOut(auth));

function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = start + (end - start) * progress;
    obj.textContent = value.toFixed(1);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// === Listener Realtime Database ===
function startRealtimeListener() {
  const readingsRef = ref(db, "leituras");
  onValue(readingsRef, (snapshot) => {
    const data = snapshot.val();
    if (!data) return;

    const keys = Object.keys(data);
    const lastKey = keys[keys.length - 1];
    const lastReading = data[lastKey];

    const currentTemp =
      parseFloat(document.getElementById("tempValue").textContent) || 0;
    const currentHum =
      parseFloat(document.getElementById("humValue").textContent) || 0;

    animateValue("tempValue", currentTemp, lastReading.temp, 800);
    animateValue("humValue", currentHum, lastReading.hum, 800);
  });
}
