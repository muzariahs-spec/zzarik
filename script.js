let dataPramuka = [];

function tambahSiswa() {
    const nama = document.getElementById("nama").value;
    const kelas = document.getElementById("kelas").value;
    const jabatan = document.getElementById("jabatan").value;

    if (!nama || !kelas || !jabatan) {
        alert("Harap lengkapi semua data!");
        return;
    }

    dataPramuka.push({ nama, kelas, jabatan });
    tampilkanData();

    document.getElementById("nama").value = "";
    document.getElementById("kelas").value = "";
    document.getElementById("jabatan").value = "";
}

function hapusSiswa(index) {
    dataPramuka.splice(index, 1);
    tampilkanData();
}

function tampilkanData() {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";

    dataPramuka.forEach((item, i) => {
        tbody.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${item.nama}</td>
                <td>${item.kelas}</td>
                <td>${item.jabatan}</td>
                <td><button onclick="hapusSiswa(${i})">Hapus</button></td>
            </tr>
        `;
    });
}
