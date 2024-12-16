function showSection(sectionId) {
    // Sembunyikan semua section
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Tampilkan section yang dipilih
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.remove('hidden');
}

// Data kabinet
const kabinet = [
    { name: "BUDIUTOMO", link: "BUDIUTOMO.html" },
    { name: "EDELWISE", link: "EDELWISE.html" },
    { name: "KABINET 2025", link: "#" },
    { name: "KABINET 2026", link: "#" },
    { name: "KABINET 2027", link: "#" },
    { name: "KABINET 2028", link: "#" },
];

// Elemen container
const buttonsContainer = document.getElementById("buttonsContainer");

// Fungsi untuk menambahkan tombol
function createCircularButtons() {
    const radius = 200; // Radius lingkaran
    const centerX = 250; // Pusat lingkaran X
    const centerY = 250; // Pusat lingkaran Y
    const angleStep = (2 * Math.PI) / kabinet.length; // Sudut antar tombol

    kabinet.forEach((item, index) => {
        // Hitung posisi dengan sin dan cos
        const angle = index * angleStep;
        const x = centerX + radius * Math.cos(angle) - 50; // -50 untuk mengatur tengah tombol
        const y = centerY + radius * Math.sin(angle) - 50;

        // Buat elemen tombol
        const button = document.createElement("a");
        button.href = item.link;
        button.className = "circular-button";
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
        button.innerText = item.name;

        // Tambahkan tombol ke container
        buttonsContainer.appendChild(button);
    });
}

// Panggil fungsi untuk membuat tombol
createCircularButtons();

