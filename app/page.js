'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LandingPage() {
  const [year, setYear] = useState('')

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#f1fef9] via-white to-[#e8fff6] flex flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* Konten Tengah */}
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-800">
          Sistem Monitoring <br />
          <span className="bg-gradient-to-r from-emerald-500 to-lime-500 bg-clip-text text-transparent">
            Magang Mahasiswa
          </span>
        </h1>

        <p className="text-base md:text-lg text-gray-600 mb-6">
          Platform terintegrasi untuk mengelola dan memantau kegiatan magang mahasiswa secara efektif dan efisien.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link
            href="/login"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl shadow-lg transition duration-300"
          >
            Masuk Sistem
          </Link>
          <Link
            href="/pengajuan"
            className="bg-white border border-emerald-600 text-emerald-600 px-6 py-3 rounded-xl shadow-lg hover:bg-emerald-50 transition duration-300"
          >
            Ajukan Magang
          </Link>
        </div>
      </motion.div>

      {/* Ilustrasi Hero */}
      <motion.div
  className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 w-full max-w-5xl px-4"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6 }}
>
  <img
    src="/images/magang1.svg"
    alt="Magang 1"
    className="w-full h-auto object-contain"
  />
  <img
    src="/images/magang2.svg"
    alt="Magang 2"
    className="w-full h-auto object-contain"
  />
  <img
    src="/images/magang3.svg"
    alt="Magang 3"
    className="w-full h-auto object-contain"
  />
  <img
    src="/images/magang4.svg"
    alt="Magang 4"
    className="w-full h-auto object-contain"
  />
</motion.div>

      {/* Footer */}
      <footer className="mt-10 text-xs text-gray-500 text-center">
        &copy; {year} Sistem Monitoring Magang
      </footer>
    </main>
  )
}
