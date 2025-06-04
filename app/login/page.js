'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { loginUser } from '@/lib/auth'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await loginUser(email, password)

    if (result.success) {
      const { role, data } = result

      localStorage.setItem('user', JSON.stringify({
        role,
        nama: data.nama || 'Pengguna',
        email: data.email
      }))

      setMessage(`Login berhasil sebagai ${role}. Mengarahkan ke dashboard...`)
      setIsSuccess(true)

      setTimeout(() => {
        router.push(`/dashboard/${role}`)
      }, 1500)
    } else {
      setMessage('Email atau password salah.')
      setIsSuccess(false)
    }
  }

  const handleRegister = () => {
    router.push('/register')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#d0f4e4] via-white to-[#e6f9f2] px-4">
      <form 
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm border border-emerald-100"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-emerald-700">Login</h2>

        {/* Kotak info akun demo */}
        <div className="mb-5 p-4 border border-emerald-200 bg-emerald-50 rounded text-sm text-emerald-800">
          <p className="font-semibold mb-2">Akun Demo:</p>
          <ul className="space-y-1">
            <li><strong>Admin:</strong> ydisryna@gmail.com / admin123</li>
            <li><strong>Dosen:</strong> dosen.bimbingan@magang.id / Dosen123</li>
            <li><strong>Mahasiswa:</strong> mahasiswa001@magang.id / Mahasiswa123</li>
            <li><strong>Mitra:</strong> mitra.perusahaan@magang.id / Mitra123</li>
            <li><strong>Wali:</strong> ortu.mahasiswa001@magang.id / Ortu123</li>
          </ul>
        </div>

        {message && (
          <div
            className={`mb-4 text-sm text-center px-4 py-2 rounded ${
              isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'
            }`}
          >
            {message}
          </div>
        )}

        <div className="mb-5">
          <label className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-2 text-sm text-black border border-emerald-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            className="w-full mt-1 p-2 text-sm text-black border border-emerald-300 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white text-sm font-semibold py-2 rounded hover:bg-emerald-700 transition duration-200 mb-3"
        >
          Masuk
        </button>

        <button
          type="button"
          onClick={handleRegister}
          className="w-full bg-emerald-50 text-emerald-700 text-sm font-semibold py-2 rounded hover:bg-emerald-100 transition duration-200"
        >
          Daftar Akun
        </button>
      </form>
    </div>
  )
}
