// Toggle Menu untuk Responsif
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
const contentArea = document.querySelector('.content-area');

// Fungsi untuk membuka/menutup sidebar
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    // Tambahkan class overlay atau efek lain jika perlu
});

// Tutup sidebar saat klik di luar (opsional, tapi bagus untuk UX)
contentArea.addEventListener('click', () => {
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});