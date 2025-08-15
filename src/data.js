import HeroImage from "/assets/hero-image.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools9 from "/assets/tools/ai.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools8 from "/assets/tools/github.png";
import Tools6 from "/assets/tools/js.png";
import Tools12 from "/assets/tools/laravel.png";
import Tools15 from "/assets/tools/mysql.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools14 from "/assets/tools/photoshop.png";
import Tools13 from "/assets/tools/php.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools1 from "/assets/tools/vscode.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  // {
  //   id: 3,
  //   gambar: Tools3,
  //   nama: "Next JS",
  //   ket: "Framework",
  //   dad: "300",
  // },
  {
    id: 3,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "400",
  },
   {
    id: 5,
    gambar: Tools12,
    nama: "Laravel",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools13,
    nama: "PHP",
    ket: "Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools15,
    nama: "MySql",
    ket: "RDBMS",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "1100",
  },
   {
    id: 12,
    gambar: Tools14,
    nama: "Adobe Photoshop",
    ket: "Design App",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1400",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Frontend Engineering Camp",
    desk: "Membangun aplikasi web frontend interaktif dengan ReactJS. Menguasai JavaScript, TailwindCSS/ChakraUI, Git, dan RESTful API, dengan pengalaman deployment menggunakan Netlify/Vercel.",
    tools: ["HTML", "CSS", "Javascript", "React.js","Node.js","Http Method", "Git"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Web Sistem Pengambilan keputusan",
    desk: "Membangun aplikasi web untuk sistem pengambilan keputusan pemilihan laptop mahasiswa menggunakan Laravel dan MySQL.",
    tools: ["HTML", "CSS", "Javascript", "MySql", "Laravel", "PHP"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Freelance Clothing dan Logo Design",
    desk: "Mendesain pakaian dan logo untuk klien secara freelance dan memasarkannya melalui media sosial instagram.",
    tools: ["Photoshop", "Illustrator", "Canva"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Membangun Web Tugas Akhir Kuliah",
    desk: "Membangun website untuk tugas akhir kuliah, website penentuan rute tercepat pengangkutan sampah di kota lhokseumawe.",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap", "PHP", "MySql"],
    dad: "500",
  },
];

import Sertif1 from "/assets/sertif/sertif1.webp";
import Sertif2 from "/assets/sertif/sertif2.webp";
import Sertif3 from "/assets/sertif/sertif3.webp";


export const listSertif = [
  {
    id: 1,
    gambar: Sertif1,
    nama: "Cyber Security",
    desk: "Webinar Cyber Security dan peluang karirnya di prodi teknik informatika Universitas Malikussaleh",
    dad: "200",
  },
  {
    id: 2,
    gambar: Sertif2,
    nama: "HTML & CSS",
    desk: "Mempelajari dasar-dasar HTML dan CSS untuk pengembangan web di Progate.",
    dad: "300",
  },
  {
    id: 3,
    gambar: Sertif3,
    nama: "Frontend Engineering",
    desk: "Mempelajari dasar-dasar Frontend Engineering dan penerapannya dalam pengembangan web di PT. Ruang Raya Indonesia.",
    dad: "400",
  },
];




