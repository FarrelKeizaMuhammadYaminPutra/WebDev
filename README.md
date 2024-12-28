
# THE FILM PROYEK

Proyek ini dibuat untuk memenuhi tugas mata kuliah Pengembangan Web, dengan tujuan untuk membuat sebuah aplikasi database film yang berfungsi sebagai platform penyedia informasi tentang film-film dari berbagai negara dan berbagai genre. Aplikasi ini menyediakan berbagai informasi terkait film, memungkinkan pengguna untuk mencari, melihat detail film, menambahkan ulasan, dan memberikan rating terhadap film. Aplikasi ini sangat dibutuhkan bagi penggemar film yang ingin mendapatkan informasi akurat dan terkini tentang film favorit mereka, layaknya platform IMDb.

## Langkah-langkah untuk melakukan proyek di komputer anda:
Jika Anda ingin menjalankan proyek ini di komputer Anda, ikuti langkah-langkah berikut:

1. Buka **Git Bash** di komputer Anda.
2. Arahkan ke GitHub ini dan salin repositori.
3. Ketik perintah berikut untuk meng-clone repositori:
   ```bash
   git clone https://github.com/FarrelKeizaMuhammadYaminPutra/WebDev.git
   ```
4. Masuk ke dalam folder proyek yang telah di-clone:
   ```bash
   cd Webdev
   ```
5. Buka proyek menggunakan Visual Studio Code:
   ```bash
   code .
   ```
6. Buat file `.env` di root folder dengan isi sebagai berikut:
   ```env
   PORT=5000
   JWT_SECRET=mysecretkey
   NODE_ENV=development
   MAILTRAP_TOKEN=de869588cb715776ed3b1fd242230c4a
   MAILTRAP_ENDPOINT=https://send.api.mailtrap.io/
   CLIENT_URL=http://localhost:5173

   DB_HOST=localhost
   DB_PORT=2306
   DB_USER=root
   DB_PASS=root
   DB_NAME=thefilm
   ```
7. Buka terminal, kemudian ketik perintah berikut untuk masuk ke folder frontend:
   ```bash
   cd frontend
   ```
8. Buat file `.env` dan `.env.production` dengan isi sebagai berikut:

   **File `.env`:**
   ```env
   VITE_API_URL=http://localhost:5000
   ```

   **File `.env.production`:**
   ```env
   VITE_API_URL=http://localhost:5000
   ```
9. Kembali ke folder root dengan mengetik perintah berikut:
   ```bash
   cd ..
   ```
10. Buka **Docker** di komputer Anda.
11. Ketik perintah berikut di terminal untuk menjalankan Docker Compose:
    ```bash
    docker compose up -d
    ```
12. Setelah proses build selesai, cek container yang berjalan.
13. Klik link localhost yang muncul di terminal untuk membuka aplikasi.
14. Untuk login sebagai **admin** (agar bisa mengakses CMS), gunakan email dan password berikut:
    - **Email:** enderisgod69@gmail.com
    - **Password:** Farrel123!
15. Untuk registrasi, hanya bisa menggunakan email yang tertera di nomor 15 karena akses terbatas.
16. **Selesai**.

## Jika ingin melihat lebih jelasnya bisa klik link tutorial di bawah ini:
https://youtu.be/YgYbiHptUYw

## Penutupan

Jika Anda mengalami kesulitan atau masalah dalam menjalankan proyek ini, pastikan Anda mengikuti semua langkah dengan benar. Jika masih ada kendala, Anda dapat membuka **Issue** di repositori ini untuk mendapatkan bantuan lebih lanjut.
