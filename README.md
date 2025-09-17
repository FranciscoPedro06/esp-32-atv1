# 🌡️ IoT ESP32 + DHT22 + Firebase Dashboard

[![Arduino](https://img.shields.io/badge/Arduino-IDE-00979D?logo=arduino&logoColor=white)](https://www.arduino.cc/en/software)
[![ESP32](https://img.shields.io/badge/ESP32-Board-orange)](https://www.espressif.com/en/products/socs/esp32)
[![Firebase](https://img.shields.io/badge/Firebase-Realtime%20Database-FFCA28?logo=firebase&logoColor=black)](https://firebase.google.com/products/realtime-database)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Projeto de **Internet das Coisas (IoT)** usando um **ESP32** conectado a um sensor **DHT22** para medir **temperatura e umidade em tempo real**, enviando os dados para o **Firebase Realtime Database**.  
Os valores podem ser exibidos em um **dashboard web estilizado**, atualizando automaticamente a cada leitura.

---

## 🚀 Tecnologias Utilizadas

- [ESP32](https://www.espressif.com/en/products/socs/esp32)  
- [Sensor DHT22](https://learn.adafruit.com/dht)  
- [Arduino IDE](https://www.arduino.cc/en/software)  
- [Firebase Realtime Database](https://firebase.google.com/products/realtime-database)  
- **Frontend:** HTML, CSS e JavaScript  

---

## 📡 Fluxo de Funcionamento

1. O **ESP32** conecta ao Wi-Fi.  
2. O sensor **DHT22** coleta temperatura (°C) e umidade (%).  
3. Os dados são enviados em formato **JSON** para o **Firebase**.  
4. O **Dashboard Web** consome os dados e exibe em tempo real.  

---

## 🔧 Configuração do ESP32

No código do ESP32, configure seu **Wi-Fi**:

```cpp
const char* ssid = "SEU_WIFI";
const char* password = "SUA_SENHA";
```
Configure também o seu firebae config e a url do seu banc
