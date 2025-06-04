"use client";

import Link from "next/link";

const menuByRole = {
  admins: [
    { title: "Dashboard", href: "/dashboard" },
    { title: "Manajemen Mahasiswa", href: "/dashboard/mahasiswa" },
    { title: "Jadwal Magang", href: "/dashboard/jadwal" },
    { title: "Assign Dosen", href: "/dashboard/assign" },
    { title: "Validasi Laporan", href: "/dashboard/laporan" },
    { title: "Monitoring", href: "/dashboard/monitoring" },
    { title: "Manajemen Akun", href: "/dashboard/users" },
  ],
  dosen: [
    { title: "Dashboard", href: "/dashboard/dosen" },
    { title: "Log Mahasiswa", href: "/dashboard/dosen/log" },
    { title: "Validasi Laporan", href: "/dashboard/dosen/laporan" },
    { title: "Penilaian", href: "/dashboard/dosen/nilai" },
    { title: "Bimbingan", href: "/dashboard/dosen/bimbingan" },
  ],
  mahasiswa: [
    { title: "Dashboard", href: "/dashboard/mahasiswa" },
    { title: "Input Log", href: "/dashboard/mahasiswa/log" },
    { title: "Upload Laporan", href: "/dashboard/mahasiswa/laporan" },
    { title: "Request Bimbingan", href: "/dashboard/mahasiswa/bimbingan" },
    { title: "Status Evaluasi", href: "/dashboard/mahasiswa/evaluasi" },
  ],
  mitra: [
    { title: "Verifikasi Kehadiran", href: "/dashboard/mitra/kehadiran" },
    { title: "Form Evaluasi", href: "/dashboard/mitra/evaluasi" },
    { title: "Catatan Kinerja", href: "/dashboard/mitra/catatan" },
    { title: "Progres Mahasiswa", href: "/dashboard/mitra/progres" },
  ],
  wali: [
    { title: "Progres Mahasiswa", href: "/dashboard/wali/progres" },
    { title: "Laporan Mingguan", href: "/dashboard/wali/laporan" },
  ]
};

export default function Sidebar({ role }) {
  const menus = menuByRole[role] || [];

  return (
    <aside className="w-64 bg-gray-100 min-h-screen p-4">
      <h2 className="font-bold text-xl mb-4 capitalize">{role} Menu</h2>
      <ul className="space-y-2">
        {menus.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="block px-3 py-2 rounded hover:bg-gray-200">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
