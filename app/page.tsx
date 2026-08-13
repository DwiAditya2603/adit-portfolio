import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import {
  faEnvelope,
  faArrowUpRightFromSquare,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  return (
    <main>
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0D0D0D]/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tight text-white">
            MUH.ADITYA DWIJAYA<span className="text-[#FFD400]">.</span>
          </a>

          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#about"
              className="text-sm text-gray-400 transition hover:text-[#FFD400]"
            >
              Tentang Saya
            </a>

            <a
              href="#skills"
              className="text-sm text-gray-400 transition hover:text-[#FFD400]"
            >
              Keahlian
            </a>
            <a
              href="#projects"
              className="text-sm text-gray-400 transition hover:text-[#FFD400]"
            >
              Proyek
            </a>

            <a
              href="#experience"
              className="text-sm text-gray-400 transition hover:text-[#FFD400]"
            >
              Pengalaman
            </a>

            <a
              href="#contact"
              className="text-sm text-gray-400 transition hover:text-[#FFD400]"
            >
              Kontak
            </a>
          </div>

          {/* CV Button */}
          <a
            href="/documents/CV-MUH.ADITYA DWIJAYA.pdf"
            download
            className="inline-flex w-fit items-center rounded-lg border border-[#FFD400] px-5 py-2 text-sm font-medium text-[#FFD400] transition hover:bg-[#FFD400] hover:text-black"
          >
            Unduh CV ↗
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0D0D0D]">
        {/* Decorative yellow glow */}
        <div className="absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#FFD400]/15 blur-3xl" />

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-28 lg:grid-cols-2 lg:px-10">
          {/* Hero Text */}
          <div className="relative z-10">
            <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-[#FFD400]">
              Halo, Saya Aditya.
            </p>

            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-5xl">
              Project Manager,
              <br />
              <span className="text-[#FFD400]">UI/UX & Creative</span>
              <br />
              Designer.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
              Lulusan Informatika yang memiliki pengalaman dalam project
              management, UI/UX design, dan creative design untuk menciptakan
              produk digital yang fungsional dan menarik.
            </p>

            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg border border-[#FFD400] px-5 py-4.5 text-sm font-medium text-[#FFD400] transition hover:bg-[#FFD400] hover:text-black"
              >
                Lihat Proyek
              </a>

              <a
                href="#about"
                className="rounded-lg border border-[#FFD400] px-5 py-4.5 text-sm font-medium text-[#FFD400] transition hover:bg-[#FFD400] hover:text-black"
              >
                Tentang Saya
              </a>

              <div className="mt-8 flex flex-wrap gap-6 border-t border-white/10 pt-6"></div>
            </div>
          </div>

          {/* Photo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative h-[420px] w-[340px] overflow-hidden rounded-[1rem] border border-white/10 bg-[#171717] sm:h-[500px] sm:w-[400px]">
              {/* Yellow accent */}
              <div className="absolute left-0 top-0 h-3 w-100 bg-[#FFD400]" />
              <div className="absolute right-0 bottom-0 h-3 w-100 bg-[#FFD400]" />
              <img
                src="/images/profile.jpg"
                alt="Muh.Aditya Dwijaya"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section
        id="about"
        className="border-t border-white/10 bg-[#0D0D0D] py-24 sm:py-32"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          {/* Section Header */}
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#FFD400]">
              Tentang Saya
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              MUH.ADITYA DWIJAYA
            </h2>

            <div className="mx-auto mt-3 h-1 w-[60%] max-w-[508px] bg-[#FFD400]" />
          </div>

          {/* About Text */}
          <div className="mx-auto mt-12 max-w-3xl space-y-6 text-base leading-8 text-gray-400 sm:text-lg">
            <p className="text-left sm:text-justify">
              Saya memiliki ketertarikan pada pengembangan produk digital,
              khususnya dalam{" "}
              <span className="text-[#FFD400]">
                Project Management, UI/UX Design, dan Creative Design.
              </span>{" "}
              Selama masa studi, saya terlibat dalam berbagai proyek digital,
              mulai dari memahami kebutuhan pengguna, merancang antarmuka,
              hingga mengembangkan aplikasi berbasis web dan mobile. Saya senang
              bekerja dalam tim, memecahkan masalah, dan mengubah ide menjadi
              solusi digital yang fungsional serta memiliki pengalaman pengguna
              yang baik.
            </p>
          </div>

          {/* Education */}
          <div className="group mx-auto mt-16 max-w-3xl overflow-hidden rounded-2xl border border-[#FFD400]/40 bg-[#171717] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD400] hover:bg-[#FFD400]/5 hover:shadow-[0_0_35px_rgba(255,212,0,0.12)] sm:p-10">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#FFD400]">
                  Pendidikan
                </p>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  S1 Informatika
                </h3>

                <p className="mt-2 max-w-xl leading-6 text-gray-400">
                  Universitas Pembangunan Nasional “Veteran” Yogyakarta
                </p>
              </div>

              <div className="sm:text-right">
                <p className="text-2xl font-bold text-white">2021—2025</p>

                <p className="mt-1 text-sm text-gray-500">Yogyakarta</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section
        id="skills"
        className="border-t border-white/10 bg-[#111111] py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#FFD400]">
              Keahlian
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Tools & kemampuan utama.
            </h2>

            <div className="mx-auto mt-3 h-1 w-[60%] max-w-[508px] bg-[#FFD400]" />
          </div>

          {/* Skills Grid */}
          <div className="mx-auto mt-16 grid max-w-6xl gap-4 sm:grid-cols-2">
            {/* 01 */}
            <div className="group overflow-hidden rounded-2xl border border-[#FFD400]/40 bg-[#171717] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD400] hover:bg-[#FFD400]/5 hover:shadow-[0_0_35px_rgba(255,212,0,0.12)] sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#FFD400]">01</span>
              </div>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                Project Management
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Mengelola alur kerja proyek, berkoordinasi dengan tim, membagi
                tugas, serta memastikan proyek berjalan sesuai tujuan dan
                target.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Project Management",
                  "Team Collaboration",
                  "Time Management",
                  "Problem Solving",
                  "Trello",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="border border-white/10 px-3 py-1.5 text-xs text-gray-400 transition-colors group-hover:border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 02 */}
            <div className="group overflow-hidden rounded-2xl border border-[#FFD400]/40 bg-[#171717] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD400] hover:bg-[#FFD400]/5 hover:shadow-[0_0_35px_rgba(255,212,0,0.12)] sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#FFD400]">02</span>
              </div>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                UI/UX Design
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Merancang pengalaman dan antarmuka pengguna dengan pendekatan
                yang berfokus pada kebutuhan, kemudahan, dan kenyamanan
                pengguna.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "User Research",
                  "Design Thinking",
                  "Wireframing",
                  "Prototyping",
                  "Figma",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="border border-white/10 px-3 py-1.5 text-xs text-gray-400 transition-colors group-hover:border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 03 */}
            <div className="group overflow-hidden rounded-2xl border border-[#FFD400]/40 bg-[#171717] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD400] hover:bg-[#FFD400]/5 hover:shadow-[0_0_35px_rgba(255,212,0,0.12)] sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#FFD400]">03</span>
              </div>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                Creative Design
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Mengembangkan konsep visual dan konten kreatif untuk kebutuhan
                branding, media sosial, komunikasi visual, dan produk digital.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Visual Design",
                  "Social Media",
                  "Branding",
                  "Photoshop",
                  "Illustrator",
                  "CorelDRAW",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="border border-white/10 px-3 py-1.5 text-xs text-gray-400 transition-colors group-hover:border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* 04 */}
            <div className="group overflow-hidden rounded-2xl border border-[#FFD400]/40 bg-[#171717] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD400] hover:bg-[#FFD400]/5 hover:shadow-[0_0_35px_rgba(255,212,0,0.12)] sm:p-10">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#FFD400]">04</span>
              </div>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                Digital Development
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Memahami proses pengembangan aplikasi dan website, serta mampu
                menerjemahkan kebutuhan dan desain menjadi produk digital yang
                fungsional.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "PHP",
                  "Kotlin",
                  "MySQL",
                  "Git",
                  "GitHub",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="border border-white/10 px-3 py-1.5 text-xs text-gray-400 transition-colors group-hover:border-white/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section
        id="projects"
        className="border-t border-white/10 bg-[#0D0D0D] py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#FFD400]">
              Portfolio Proyek
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Beberapa Proyek Saya.
            </h2>

            <div className="mx-auto mt-3 h-1 w-[60%] max-w-[508px] bg-[#FFD400]" />
          </div>

          {/* Featured Technical Project — Skripsi */}
          <div className="group mt-20 overflow-hidden rounded-2xl border border-[#FFD400]/40 bg-[#171717] transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD400] hover:bg-[#FFD400]/5 hover:shadow-[0_0_40px_rgba(255,212,0,0.12)]">
            <div className="p-8 sm:p-10 lg:p-10">
              {/* Header */}
              <div className="max-w-4xl">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#FFD400]">
                  Tugas Akhir / Skripsi
                </p>

                <h3 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Implementasi YOLOv8 untuk Deteksi Cacat Fisik pada Citra Biji
                  Kopi
                </h3>

                <p className="mt-6 max-w-3xl text-base leading-7 text-gray-400 sm:text-lg">
                  Pengembangan sistem Computer Vision berbasis Deep Learning
                  untuk mendeteksi cacat fisik pada citra biji kopi menggunakan
                  YOLOv8, dengan fokus pada proses pengolahan data, pelatihan
                  model, dan evaluasi performa deteksi.
                </p>
              </div>

              {/* Metrics */}
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {/* Metric 1 */}
                <div className="rounded-2xl border border-white/10 bg-black/20 p-6 transition-all duration-300 group-hover:border-[#FFD400]/20">
                  <p className="text-3xl font-bold text-[#FFD400]">69,49%</p>

                  <p className="mt-2 text-xs uppercase tracking-wider text-gray-500">
                    Akurasi Model
                  </p>
                </div>

                {/* Metric 2 */}
                <div className="rounded-xl border border-white/10 bg-black/20 p-6 transition-all duration-300 group-hover:border-[#FFD400]/20">
                  <p className="text-3xl font-bold text-[#FFD400]">89,02%</p>

                  <p className="mt-2 text-xs uppercase tracking-wider text-gray-500">
                    Presisi
                  </p>
                </div>

                {/* Metric 3 */}
                <div className="rounded-xl border border-white/10 bg-black/20 p-6 transition-all duration-300 group-hover:border-[#FFD400]/20">
                  <p className="text-3xl font-bold text-[#FFD400]">75,93%</p>

                  <p className="mt-2 text-xs uppercase tracking-wider text-gray-500">
                    Recall
                  </p>
                </div>
              </div>

              {/* Contributions */}
              <div className="mt-10 border-t border-white/10 pt-10">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#FFD400]">
                  Kontribusi & Proses
                </p>

                <div className="mt-6 grid gap-8 md:grid-cols-2">
                  {/* Data */}
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      Data Preparation
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-gray-400">
                      Melakukan proses pengolahan dan persiapan dataset,
                      termasuk pembersihan data, preprocessing, serta
                      penyesuaian dataset untuk kebutuhan pelatihan model.
                    </p>
                  </div>

                  {/* Training */}
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      Model Training
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-gray-400">
                      Melatih model YOLOv8 dan melakukan pengujian terhadap
                      performa model untuk memperoleh hasil deteksi yang
                      optimal.
                    </p>
                  </div>

                  {/* Evaluation */}
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      Model Evaluation
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-gray-400">
                      Mengevaluasi performa model menggunakan metrik yang
                      relevan serta menganalisis hasil prediksi untuk mengetahui
                      tingkat keberhasilan deteksi.
                    </p>
                  </div>

                  {/* Analysis */}
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      Analysis & Implementation
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-gray-400">
                      Menganalisis hasil eksperimen dan mengidentifikasi
                      performa model berdasarkan data pengujian yang diperoleh.
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Computer Vision · Deep Learning · YOLOv8
                </p>

                <a
                  href="/documents/JURNAL-SKRIPSI-MUH.ADITYA DWIJAYA.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#FFD400]"
                >
                  Baca Jurnal
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Other Projects */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* FinTrack */}
            <div className="className=group overflow-hidden rounded-2xl border border-[#FFD400]/40 bg-[#171717] transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD400] hover:bg-[#FFD400]/5 hover:shadow-[0_0_35px_rgba(255,212,0,0.12)]">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A]">
                  <img
                    src="/images/projects/fintrack-cover.png"
                    alt="FinTrack"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-medium text-[#FFD400]">
                  02 / PROJECT MANAGER
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">FinTrack</h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Aplikasi mobile untuk membantu pengguna mencatat, mengelola,
                  dan memantau keuangan pribadi.
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Project Management · UI/UX
                  </span>

                  <a
                    href="https://bit.ly/PrototypeFinTrack"
                    className="group/link flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#FFD400]"
                  >
                    Lihat Project
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* NicFit */}
            <div className="className=group overflow-hidden rounded-2xl border border-[#FFD400]/40 bg-[#171717] transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD400] hover:bg-[#FFD400]/5 hover:shadow-[0_0_35px_rgba(255,212,0,0.12)]">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A]">
                  <img
                    src="/images/projects/nicfit-cover.jpg"
                    alt="NicFit"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-medium text-[#FFD400]">
                  03 / MOBILE APPLICATION
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">NicFit</h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Aplikasi mobile yang dirancang untuk membantu pengguna dalam
                  proses berhenti merokok.
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    UI/UX · Android Development
                  </span>

                  <a
                    href="https://bit.ly/PrototypeNicFit"
                    className="group/link flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#FFD400]"
                  >
                    Lihat Project
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* RFID */}
            <div className="className=group overflow-hidden rounded-2xl border border-[#FFD400]/40 bg-[#171717] transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD400] hover:bg-[#FFD400]/5 hover:shadow-[0_0_35px_rgba(255,212,0,0.12)]">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A]">
                  <img
                    src="/images/projects/rfid-cover.png"
                    alt="RFID"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-medium text-[#FFD400]">
                  04 / SYSTEM DEVELOPMENT
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  Sistem Absensi RFID
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Sistem absensi berbasis RFID Card untuk mencatat kehadiran
                  secara digital.
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    IoT · RFID · Attendance System
                  </span>

                  <a
                    href="/documents/JURNAL-RFID-MUH.ADITYA DWIJAYA.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#FFD400]"
                  >
                    Baca Jurnal
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Creative */}
            <div className="className=group overflow-hidden rounded-2xl border border-[#FFD400]/40 bg-[#171717] transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD400] hover:bg-[#FFD400]/5 hover:shadow-[0_0_35px_rgba(255,212,0,0.12)]">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1A]">
                  <img
                    src="/images/projects/creative-cover.png"
                    alt="Creative"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-medium text-[#FFD400]">
                  05 / CREATIVE DESIGN
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">Creative</h3>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  Kumpulan karya visual untuk kebutuhan media sosial, branding,
                  dan komunikasi digital.
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Creative Design · Social Media
                  </span>

                  <a
                    href="#"
                    className="group/link flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#FFD400]"
                  >
                    Lihat Project
                    <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section
        id="experience"
        className="border-t border-white/10 bg-[#0D0D0D] py-24 sm:py-32"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          {/* Section Header */}
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#FFD400]">
              Pengalaman & Peran
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Beberapa Pengalama & Peran Saya.
            </h2>

            <div className="mx-auto mt-3 h-1 w-[60%] max-w-[508px] bg-[#FFD400]" />
          </div>

          {/* Experience List */}
          <div className="mt-16 space-y-6">
            {/* 01 — Infinite Learning */}
            <div className="group rounded-2xl border border-[#FFD400]/40 bg-[#171717] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD400] hover:bg-[#FFD400]/5 hover:shadow-[0_0_35px_rgba(255,212,0,0.12)] sm:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                <div className="flex gap-5">
                  <span className="text-sm font-medium text-[#FFD400]">01</span>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                      Infinite Learning
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                      Android Mobile Development & UI UX Design
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                      Mengikuti program Magang dan Studi Independen
                      Bersertifikat (MSIB) yaitu program pengembangan produk
                      digital dan terlibat dalam perancangan serta pengembangan
                      aplikasi mobile melalui dua project, FinTrack dan NicFit.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {[
                        "Project Management",
                        "UI/UX Design",
                        "Android Development",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400 transition-colors duration-300 group-hover:border-[#FFD400]/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 lg:text-right">
                  <p className="text-sm font-semibold text-white">
                    Februari 2024 — Juni 2024
                  </p>

                  <p className="mt-1 text-xs text-gray-500">Batam, Indonesia</p>
                </div>
              </div>
            </div>

            {/* 02 — Step Up Project */}
            <div className="group rounded-2xl border border-[#FFD400]/40 bg-[#171717] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD400] hover:bg-[#FFD400]/5 hover:shadow-[0_0_35px_rgba(255,212,0,0.12)] sm:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                <div className="flex gap-5">
                  <span className="text-sm font-medium text-[#FFD400]">02</span>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                      Step Up Project
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                      Social Media Creative
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                      Mengembangkan kebutuhan visual dan konten kreatif untuk
                      media sosial, termasuk pembuatan materi visual yang
                      mendukung komunikasi dan branding digital project.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {[
                        "Social Media",
                        "Creative Design",
                        "Visual Content",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400 transition-colors duration-300 group-hover:border-[#FFD400]/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 lg:text-right">
                  <p className="text-sm font-semibold text-white">
                    Januari 2024 — Juni 2026
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Yogyakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* 03 — UKM Sepakbola UPNVYK */}
            <div className="group rounded-2xl border border-[#FFD400]/40 bg-[#171717] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD400] hover:bg-[#FFD400]/5 hover:shadow-[0_0_35px_rgba(255,212,0,0.12)] sm:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                <div className="flex gap-5">
                  <span className="text-sm font-medium text-[#FFD400]">03</span>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                      UKM Sepakbola UPNVYK
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                      Social Media Creative
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                      Membuat dan mengembangkan kebutuhan konten visual untuk
                      media sosial organisasi serta mendukung komunikasi
                      kegiatan melalui desain kreatif.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {[
                        "Social Media",
                        "Creative Design",
                        "Content Creation",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400 transition-colors duration-300 group-hover:border-[#FFD400]/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 lg:text-right">
                  <p className="text-sm font-semibold text-white">
                    Februari 2023 — November 2024
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Yogyakarta, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* 04 — SMAN 2 Kota Bima */}
            <div className="group rounded-2xl border border-[#FFD400]/40 bg-[#171717] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#FFD400] hover:bg-[#FFD400]/5 hover:shadow-[0_0_35px_rgba(255,212,0,0.12)] sm:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                <div className="flex gap-5">
                  <span className="text-sm font-medium text-[#FFD400]">04</span>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                      SMAN 2 Kota Bima
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                      Ketua OSIS
                    </h3>

                    <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
                      Memimpin organisasi siswa, mengoordinasikan anggota, serta
                      terlibat dalam perencanaan dan pelaksanaan berbagai
                      kegiatan sekolah.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {["Leadership", "Teamwork", "Project Coordination"].map(
                        (tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400 transition-colors duration-300 group-hover:border-[#FFD400]/30"
                          >
                            {tag}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 lg:text-right">
                  <p className="text-sm font-semibold text-white">
                    Agustus 2019 — Agustus 2020
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Kota Bima, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Achievement & Certification Section */}
      <section id="achievements" className="mt-4">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#FFD400]">
            Pencapaian & Sertifikasi
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Beberapa Pencapaian & Sertifikasi Saya.
          </h2>

          <div className="mx-auto mt-3 h-1 w-[60%] max-w-[508px] bg-[#FFD400]" />
        </div>

        {/* Achievement */}
        <div className="mx-auto mt-4 max-w-4xl space-y-3">
          <div className="pt-8 pb-2">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#FFD400]">
              PENCAPAIAN
            </p>
          </div>

          {/* Best Micro & Massive */}
          <div className="group flex items-center justify-between rounded-lg border border-white/10 bg-[#0D0D0D] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD400]/40 sm:px-6">
            <div className="flex items-center gap-5">
              <span className="text-xs font-medium text-[#FFD400]">2024</span>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  Best Micro & Massive Projects
                </h3>

                <p className="mt-1 text-xs text-gray-500">Infinite Learning</p>
              </div>
            </div>

            <a
              href="/documents/SERTIFIKAT1-MUH.ADITYA DWIJAYA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#FFD400]"
            >
              Lihat Sertifikat
              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* FLS2N */}
          <div className="group flex items-center justify-between rounded-lg border border-white/10 bg-[#0D0D0D] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD400]/40 sm:px-6">
            <div className="flex items-center gap-5">
              <span className="text-xs font-medium text-[#FFD400]">2020</span>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  JUARA 1 FLS2N KATEGORI DESAIN POSTER
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  Tingkat Kota dan Kabapten Bima
                </p>
              </div>
            </div>

            <a
              href="/documents/SERTIFIKAT2-MUH.ADITYA DWIJAYA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#FFD400]"
            >
              Lihat Sertifikat
              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Certification Label */}
          <div className="pt-8 pb-2">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#FFD400]">
              Sertifikasi
            </p>
          </div>
          {/* ANDROID */}
          <div className="group flex items-center justify-between rounded-lg border border-white/10 bg-[#0D0D0D] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD400]/40 sm:px-6">
            <div className="flex items-center gap-5">
              <span className="text-xs font-medium text-[#FFD400]">2024</span>
              <div>
                <h3 className="text-sm font-semibold text-white">Android Mobile Development & UI UX Design</h3>

                <p className="mt-1 text-xs text-gray-500">
                  Infinite Learning
                </p>
              </div>
            </div>
            <a
              href="/documents/SERTIFIKAT4-MUH.ADITYA DWIJAYA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#FFD400]"
            >
              Lihat Sertifikat
              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          </div>


          {/* TOEFLE */}
          <div className="group flex items-center justify-between rounded-lg border border-white/10 bg-[#0D0D0D] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD400]/40 sm:px-6">
            <div className="flex items-center gap-5">
              <span className="text-xs font-medium text-[#FFD400]">2025</span>
              <div>
                <h3 className="text-sm font-semibold text-white">TOEFL TEST</h3>

                <p className="mt-1 text-xs text-gray-500">
                  UPA Bahasa Univeritas Pembangunan Nasional Veteran Yogyakarta
                </p>
              </div>
            </div>
            <a
              href="/documents/SERTIFIKAT5-MUH.ADITYA DWIJAYA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#FFD400]"
            >
              Lihat Sertifikat
              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          </div>
          {/* COURSE */}
          <div className="group flex items-center justify-between rounded-lg border border-white/10 bg-[#0D0D0D] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#FFD400]/40 sm:px-6">
            <div className="flex items-center gap-5">
              <span className="text-xs font-medium text-[#FFD400]">2026</span>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  Microsoft Excel: Learn with Projects
                </h3>

                <p className="mt-1 text-xs text-gray-500">Coursera</p>
              </div>
            </div>
            <a
              href="/documents/SERTIFIKAT3-MUH.ADITYA DWIJAYA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-3 text-sm font-medium text-white transition-colors hover:text-[#FFD400]"
            >
              Lihat Sertifikat
              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="mt-8 bg-[#FFD400] text-[#0D0D0D]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-12">
          {/* Logo / Monogram */}
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.3em]">
              KERJA SAMA
            </p>

            <h2 className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Mari Berdikusi.
            </h2>

            <div className="mx-auto mt-2 h-px w-81 bg-[#0D0D0D]" />
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 opacity-70 sm:text-lg">
              Punya project, peluang kerja, atau ingin berdiskusi? Saya terbuka
              untuk berkolaborasi dan membangun sesuatu yang berdampak.
            </p>
          </div>

          {/* Contact Links */}
          <div className="mx-auto mt-4 grid max-w-4xl grid-cols-2 overflow-hidden rounded-2xl border border-[#0D0D0D]/100 sm:grid-cols-4">
            {/* Email */}
            <a
              href="mailto:dwi.aditya2603@gmail.com"
              className="group flex items-center gap-3 border-b border-[#0D0D0D]/15 p-4 transition-all duration-300 hover:bg-[#0D0D0D] hover:text-[#FFD400] sm:border-b-0 sm:border-r"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 shrink-0" />

              <div>
                <p className="text-xs font-semibold">Gmail</p>

                <p className="mt-0.5 text-[11px] opacity-50">Kirim email →</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/082115077243"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border-b border-[#0D0D0D]/15 p-4 transition-all duration-300 hover:bg-[#0D0D0D] hover:text-[#FFD400] sm:border-b-0 sm:border-r"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4 shrink-0" />

              <div>
                <p className="text-xs font-semibold">WhatsApp</p>

                <p className="mt-0.5 text-[11px] opacity-50">
                  Chat dengan saya →
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/muhadityadwijaya/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border-b border-[#0D0D0D]/15 p-4 transition-all duration-300 hover:bg-[#0D0D0D] hover:text-[#FFD400] sm:border-b-0 sm:border-r"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-4 w-4 shrink-0" />

              <div>
                <p className="text-xs font-semibold">LinkedIn</p>

                <p className="mt-0.5 text-[11px] opacity-50">Lihat profil →</p>
              </div>
            </a>

            {/* Location */}
            <div className="group flex items-center gap-3 p-4 transition-all duration-300 hover:bg-[#0D0D0D] hover:text-[#FFD400]">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="h-4 w-4 shrink-0"
              />

              <div>
                <p className="text-xs font-semibold">Lokasi</p>

                <p className="mt-0.5 text-[11px] opacity-50">
                  Mataram, Indonesia
                </p>
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="mt-8 border-t border-[#0D0D0D]/20 pt-8">
            <div className="flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-black tracking-tight">MUH.ADITYA DWIJAYA</p>

                <p className="mt-1 text-xs opacity-60">
                  Project Management · UI/UX · Creative
                </p>
              </div>

              <p className="text-xs opacity-50">© 2026 Muh.Aditya Dwijaya</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
