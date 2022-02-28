# Asynchronous JavaScript, AJAX and APIs

## AJAX

- Asynchronous JavaScript And XML: Allows us to communicate with remote web servers in an asynchronous way. With AJAX calls, we can request data from web servers dynamically.

## API

- Application Programming Interface: Piece of software that can be used by another piece of software, in order to allow applications to talk to each other.

- **"Online" API:** Application running on a server, that receives requests for data, and sends data back as response;

---

## What happens when we access a web server

![2022-02-21_08-57](https://user-images.githubusercontent.com/67066348/154937629-197c50d9-79f3-49be-a91b-7a3b272b6df7.png)
![2022-02-21_11-13](https://user-images.githubusercontent.com/67066348/154937651-d4ed40c3-42c7-4d63-a9ed-6c4bce9ec9cd.png)

- **CORS:** Cross Origin Resource Sharing.

- **TCP:** Transmission Control Protocol.
- **IP:** Internet Protocol.
- **Promise:** An object that is used as a placeholder for the future result of an asynchronous operation. | A container for a future value.

---

### **Promise.all combinator function** | one error it will short circuit

### Promise.allSettled (es2020) | never will be short circuit

### Promise.any (es2021) | ignore rejected promise, fulfilled promise,

**Important:** Promise.all and Promise.race

- `(_)` = throw away variable.
