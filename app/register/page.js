'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { db } from '@/lib/firebase'
import { doc, setDoc } from 'firebase/firestore'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nama, setNama] = useState('')
  const [role, setRole] = useState('mahasiswa')
  const [message, setMessage] = useState('')
  const router = useRouter()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await setDoc(doc(db, role, nama), {
        email,
        password,
        nama,
        role
      })

      setMessage('Pendaftaran berhasil!')
      setTimeout(() => {
        router.push('/login')
      }, 1500)
    } catch (err) {
      console.error(err)
      setMessage('Pendaftaran gagal.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 px-4">
      <form 
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm border border-green-100"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Daftar Akun</h2>

        {message && (
          <div className="mb-4 text-sm text-center px-4 py-2 rounded bg-blue-100 text-blue-700">
            {message}
          </div>
        )}

        <div className="mb-4">
          <label className="text-sm text-black">Role</label>
          <select
            className="w-full mt-1 p-2 text-sm border border-green-300 rounded text-black"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="admins">Admin</option>
            <option value="dosen">Dosen</option>
            <option value="mahasiswa">Mahasiswa</option>
            <option value="mitra">Mitra</option>
            <option value="wali">Wali</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="text-sm text-black">Nama</label>
          <input
            type="text"
            className="w-full mt-1 p-2 text-sm text-black border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="text-sm text-black">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-2 text-sm border border-green-300 rounded text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="text-sm text-black">Password</label>
          <input
            type="password"
            className="w-full mt-1 p-2 text-sm border border-green-300 rounded text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white text-sm font-semibold py-2 rounded hover:bg-green-700 transition duration-200"
        >
          Daftar
        </button>
      </form>
    </div>
  )
}
