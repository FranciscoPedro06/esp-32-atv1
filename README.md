# 🌡️ IoT ESP32 + DHT22 + Firebase Dashboard

[![Arduino IDE](https://img.shields.io/badge/Arduino-IDE-00979D?logo=arduino&logoColor=white)](https://www.arduino.cc/en/software)  
[![ESP32](https://img.shields.io/badge/ESP32-Board-orange)](https://www.espressif.com/en/products/socs/esp32)  
[![Firebase](https://img.shields.io/badge/Firebase-Realtime%20Database-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/products/realtime-database)

Projeto de **Internet das Coisas (IoT)** que conecta um **ESP32** a um sensor **DHT22** para medir **temperatura e umidade em tempo real**, enviando os dados para o **Firebase Realtime Database** e exibindo-os em um **dashboard web estilizado**.

---

## 🚀 Tecnologias Utilizadas

- **Microcontrolador:** [ESP32](https://www.espressif.com/en/products/socs/esp32)  
- **Sensor:** [DHT22](https://learn.adafruit.com/dht)  
- **IDE:** [Arduino IDE](https://www.arduino.cc/en/software)  
- **Banco de dados:** [Firebase Realtime Database](https://firebase.google.com/products/realtime-database)  
- **Frontend:** HTML, CSS e JavaScript  

---

## 📡 Como Funciona

1. O **ESP32** conecta-se à rede Wi-Fi.  
2. O sensor **DHT22** coleta **temperatura (°C)** e **umidade (%)**.  
3. Os dados são enviados em **JSON** para o **Firebase**.  
4. O **Dashboard Web** consome os dados e atualiza automaticamente.

---

## 🔧 Configuração do ESP32

### 1️⃣ Configurar Wi-Fi
No código do ESP32, substitua pelos dados da sua rede:

```cpp
const char* ssid = "SEU_WIFI";
const char* password = "SUA_SENHA";
```

Configure também o seu firebae config e a url do seu banco.

```cpp
const String firebaseURL = "//Url do seu firebase";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  databaseURL: "https://SEU-PROJETO.firebaseio.com",
  projectId: "SEU_PROJETO",
  storageBucket: "SEU_PROJETO.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SUA_APP_ID"
};
```
👉 Assim você tem **tudo em um só lugar**, com espaço para colocar o **Firebase Config** e a **URL do Firebase**.
