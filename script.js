const form = document.getElementById('registrationForm');
const participantList = document.getElementById('participantList');
const countDisplay = document.getElementById('count');
const message = document.getElementById('message');

let participants = [];
const MAX_QUOTA = 50;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const nohp = document.getElementById('nohp').value;
    const kategori = document.getElementById('kategori').value;

    // VALIDASI JAVASCRIPT
    if (!nama || !email || !nohp || !kategori) {
        updateMessage("Lengkapi semua data!", "#ff4b2b");
        return;
    }
    if (!email.includes('@')) {
        updateMessage("Format email salah!", "#ff4b2b");
        return;
    }
    if (isNaN(nohp)) {
        updateMessage("Nomor HP harus angka!", "#ff4b2b");
        return;
    }

    // LOGIKA KUOTA
    if (participants.length >= MAX_QUOTA) {
        updateMessage("Pendaftaran ditutup, kuota penuh!", "#ff4b2b");
        return;
    }

    // SIMPAN & TAMPILKAN (DOM MANIPULATION)
    const newParticipant = { nama, kategori };
    participants.push(newParticipant);
    
    addToTable(newParticipant);
    updateStats();
    
    updateMessage("Berhasil Terdaftar! ✨", "#00ff88");
    form.reset();
});

function updateMessage(txt, color) {
    message.innerText = txt;
    message.style.color = color;
}

function addToTable(data) {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${data.nama}</td><td><strong>${data.kategori}</strong></td>`;
    participantList.prepend(row); // Menambah ke paling atas
}

function updateStats() {
    countDisplay.innerText = participants.length;
}