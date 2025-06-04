import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data.json');

// Baca data dari file JSON
const readData = () => {
  const fileContent = fs.readFileSync(dataFilePath, 'utf8');
  return JSON.parse(fileContent);
};

// Tulis data ke file JSON
const writeData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
};

// GET - ambil semua data
export async function GET() {
  const data = readData();
  return new Response(JSON.stringify(data), { status: 200 });
}

// POST - tambah data baru
export async function POST(request) {
  const newMahasiswa = await request.json();
  const data = readData();
  newMahasiswa.id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
  data.push(newMahasiswa);
  writeData(data);
  return new Response(JSON.stringify(newMahasiswa), { status: 201 });
}

// PUT - update data berdasarkan ID dari body
export async function PUT(request) {
  const updatedMahasiswa = await request.json();
  const data = readData();
  const index = data.findIndex((mhs) => mhs.id === parseInt(updatedMahasiswa.id));
  if (index !== -1) {
    data[index] = { ...data[index], ...updatedMahasiswa };
    writeData(data);
    return new Response(JSON.stringify(data[index]), { status: 200 });
  } else {
    return new Response(JSON.stringify({ message: 'Mahasiswa not found' }), { status: 404 });
  }
}

// DELETE - hapus data berdasarkan ID dari body
export async function DELETE(request) {
  const { id } = await request.json();
  const data = readData();
  const index = data.findIndex((mhs) => mhs.id === parseInt(id));
  if (index !== -1) {
    data.splice(index, 1);
    writeData(data);
    return new Response(null, { status: 204 });
  } else {
    return new Response(JSON.stringify({ message: 'Mahasiswa not found' }), { status: 404 });
  }
}
