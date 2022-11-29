import IT from '../images/img/IT.jpg'
import Desain from '../images/img/Design.jpg'
import Entertainment from '../images/img/Entertainment.jpg'
import kesehatan from '../images/img/Kesehatan.jpg'
import keuangan from '../images/img/Keuangan.jpg'
import pariwisata from '../images/img/Pariwisata.jpg'


let datas= [
    {
        id: "31754",
        job_title: "Backend Developer",
        experience_level: "5 tahun",
        education_level: "Tidak terspesifikasi",
        education_major: "Komputer/Teknologi Informasi,IT-Perangkat Lunak",
        company_industry: "IT",
        job_description: "Back end developer merancang perangkat lunak dari sisi server berhubungan dengan logika dan database dengan menggunakan bahasa pemrograman khusus. Mereka fokus pada database, scripting, dan arsitektur dari sebuah server sistem. Kode yang ditulis oleh mereka akan membantu mengomunikasi database informasi kepada aplikasi.",
        youtube: "https://www.youtube.com/embed/mRttyh1GQ5I",
        salary: 20000000,
        favorite: false,
        imageProfesi: `${IT}`
    },
    {
        id: "31827",
        job_title: "IT Project Manager",
        experience_level: "3 tahun",
        education_level: "Sarjana (S1)",
        education_major: "Komputer/Teknologi Informasi,IT-Perangkat Lunak",
        company_industry: "IT",
        job_description: "Manager Proyek IT bertugas merencanakan, memulai, dan mengelola proyek teknologi informasi (TI). Memimpin dan mengarahkan pekerjaan staf teknis hingga proyek terlaksana dengan baik. Berfungsi sebagai penghubung antara bisnis dan aspek teknis proyek.",
        youtube: "https://www.youtube.com/embed/ShB-vJbHc_I",
        salary: 14000000,
        favorite: true,
        imageProfesi: `${IT}`
    },
    // {
    //     id: "31837",
    //     job_title: "UI/UX Designer",
    //     experience_level: "2 tahun",
    //     education_level: "Sarjana (S1), Diploma Pascasarjana, Gelar Professional, Magister (S2)",
    //     education_major: "Komputer/Teknologi Informasi,IT-Perangkat Lunak",
    //     company_industry: "IT",
    //     job_description: "UI/UX designer merupakan profesi dalam pengembangan aplikasi dengan basis umpan balik pengguna serta tampilan visual antarmuka aplikasi. Peran UI/UX designer dalam proses pemasaran maupun branding sebuah aplikasi amat besar, sebab mereka menentukan bagaimana pengguna menilai suatu aplikasi. Suatu aplikasi yang dibangun dengan sinergi antara UI/UX designer dapat lebih konsisten dalam berkembang, pun lebih mudah diterima pengguna.",
    //     youtube: "https://www.youtube.com/embed/0n1E627CcBQ",
    //     salary: 7500000,
    //     favorite: true,
    //     imageProfesi: `${IT}`
    // },
    // {
    //     id: "31868",
    //     job_title: "Android Developer jr/mid",
    //     experience_level: "2 tahun",
    //     education_level: "SMA, SMU/SMK/STM, Sertifikat Professional, D3 (Diploma), D4 (Diploma), Sarjana (S1)",
    //     education_major: "Komputer/Teknologi Informasi,IT-Perangkat Lunak",
    //     company_industry: "IT",
    //     job_description: "Android Developer bisa dikatakan sebagai software developer yang memiliki spesialisasi merancang aplikasi untuk marketplace Android. Secara sederhana, mayoritas pekerjaan mereka adalah membuat aplikasi yang dapat digunakan di dalam smartphone ataupun tablet, baik itu berupa game maupun bentuk aplikasi lainnya.",
    //     youtube: "https://www.youtube.com/embed/DC3jl5L9su4",
    //     salary: 4550000,
    //     favorite: false,
    //     imageProfesi: `${IT}`
    // },
    // {
    //     id: "31890",
    //     job_title: "Technical Support Manager",
    //     experience_level: "5 tahun",
    //     education_level: "Tidak terspesifikasi",
    //     education_major: "Komputer/Teknologi Informasi,IT-Admin Jaringan/Sistem/Database",
    //     company_industry: "IT",
    //     job_description: "Technical Support Manager mengelola operasi terkait layanan teknis termasuk staf teknik, TI, atau pemeliharaan di suatu organisasi untuk memastikan semua pekerjaan diselesaikan tepat waktu, sesuai anggaran, dan sesuai spesifikasi pelanggan. Technical Support Manager memastikan tingkat inventaris fisik tetap dipantau dan diisi ulang bila diperlukan. Mereka bertanggung jawab untuk merancang dan menerapkan proses yang lebih baik atau kebijakan operasional di organisasi.",
    //     youtube: "https://www.youtube.com/embed/xCsKZEzDkPM",
    //     salary: 12000000,
    //     favorite: false,
    //     imageProfesi: `${IT}`
    // },

    // {
    //     id: "31808",
    //     job_title: "Sales Executive",
    //     experience_level: "1 tahun",
    //     education_level: "SMA, SMU/SMK/STM, Sertifikat Professional, D3 (Diploma), D4 (Diploma), Sarjana (S1)",
    //     education_major: "Penjualan / Pemasaran,Penjualan Ritel",
    //     company_industry: "Keuangan",
    //     job_description: "Sales executive adalah orang yang bertanggung jawab atas strategi penjualan perusahaan secara keseluruhan. Dalam peran ini, mereka juga dituntut dapat mengembangkan strategi dan melibatkan tim lain di luar sales. Secara umum, peran ini juga memungkinan setiap pelakunya untuk menjaga hubungan dengan pembeli besar.",
    //     youtube: "https://www.youtube.com/embed/bod-hV225WM",
    //     salary: 4500000,
    //     favorite: false,
    //     imageProfesi: `${keuangan}`
    // },
    // {
    //     id: "32499",
    //     job_title: "Accounting",
    //     experience_level: "2 tahun",
    //     education_level: "Tidak terspesifikasi",
    //     education_major: "Akuntansi / Keuangan,Akuntansi Umum / Pembiayaan",
    //     company_industry: "Keuangan",
    //     job_description: "Accounting tugasnya adalah untuk mengawasi semua aspek proyek yang terkait biaya keseluruhan. Termasuk di dalamnya menyiapkan dan mengumpulkan faktur, menyetujui biaya, melakukan verifikasi jam kerja karyawan, merencanakan dan memelihara anggaran, dan memastikan proyek bisa selesai tepat waktu.",
    //     youtube: "https://www.youtube.com/embed/BWItQzWjthU",
    //     salary: 5520000,
    //     favorite: false,
    //     imageProfesi: `${keuangan}`
    // },
    // {
    //     id: "32679",
    //     job_title: "Financial Advisor",
    //     experience_level: "2 tahun",
    //     education_level: "Sertifikat Professional, D3 (Diploma), D4 (Diploma), Sarjana (S1)",
    //     education_major: "Penjualan / Pemasaran,Penjualan - Jasa Keuangan",
    //     company_industry: "Keuangan",
    //     job_description: "Financial Advisor adalah seorang penasihat yang memberikan saran kepada penggunanya agar dapat merencanakan keuangan dengan matang. Pada umumnya, seorang financial advisor memberikan berbagai macam layanan, seperti manajemen investasi, perencanaan pajak, masalah keuangan, dan sebagainya.",
    //     youtube: "https://www.youtube.com/embed/F_HBArBxKe8",
    //     salary: 2875000,
    //     favorite: false,
    //     imageProfesi: `${keuangan}`
    // },
    // {
    //     id: "32983",
    //     job_title: "Marketing Officer",
    //     experience_level: "1 tahun",
    //     education_level: "Sarjana (S1)",
    //     education_major: "Penjualan / Pemasaran,Penjualan - Jasa Keuangan",
    //     company_industry: "Keuangan",
    //     job_description: "Marketing Officer memiliki lingkup dalam hal strategi pemasaran suatu produk dari perusahaan tempatnya bekerja. Melakukan kegiatan marketing aktif seperti door-to-door canvasing dan telemarketing. Menjaga hubungan baik dengan customer dan melakukan follow up atas perkembangan bisnis customer (financial advisor). Melakukan survey dan interview (Qualitative Credit Analysis) pada calon customer termasuk visit customer. Melengkapi dan memastikan keaslian dokumen identitas calon konsumen untuk keperluan entry order. Melakukan reminder pembayaran sebelum jatuh tempo sesuai penugasan. Melakukan penagihan atas konsumen overdue.",
    //     youtube: "https://www.youtube.com/embed/K5ti_zcuie8",
    //     salary: 5000000,
    //     favorite: false,
    //     imageProfesi: `${keuangan}`
    // },
    // {
    //     id: "33312",
    //     job_title: "Sales Fronting Bank",
    //     experience_level: "1 tahun",
    //     education_level: "SMA, SMU/SMK/STM, Sertifikat Professional, D3 (Diploma), D4 (Diploma), Sarjana (S1)",
    //     education_major: "Akuntansi / Keuangan,Perbankan / Jasa Finansial ",
    //     company_industry: "Keuangan",
    //     job_description: "Sales Fronting Bank melakukan penawaran produk-produk pegadaian kepada calon nasabah, seperti kredit kendaraan ( motor / mobil ), gadai emas, modal usaha dan lain sebagainya.",
    //     youtube: "https://www.youtube.com/embed/b7YnPm40-E4",
    //     salary: 6600000,
    //     favorite: false,
    //     imageProfesi: `${keuangan}`
    // },

    // {
    //     id: "32722",
    //     job_title: "Operational Manager Resort & Restaurant",
    //     experience_level: "3 tahun",
    //     education_level: "Sertifikat Professional, D3 (Diploma), D4 (Diploma), Sarjana (S1)",
    //     education_major: "Hotel/Restoran,Pariwisata",
    //     company_industry: "Pariwisata",
    //     job_description: "Operasional manager adalah sebuah jabatan yang dipegang dalam rangka sebagai kontrol penuh dari pengoperasian hotel tersebut, sebuah departemen yang memang diperuntukkan khusus untuk menjaga kualitas dan pengoperasian hotel sesuai dengan standar yang telah ditetapkan sehingga dengan memberikan patok utama semua staff dapat bekerja sesuai dengan standar.",
    //     youtube: "https://www.youtube.com/embed/YWec0mIziUg",
    //     salary: 4560000,
    //     favorite: false,
    //     imageProfesi: `${pariwisata}`
    // },
    // {
    //     id: "34007",
    //     job_title: "Customer Service Attendant",
    //     experience_level: "2 tahun",
    //     education_level: "Tidak terspesifikasi",
    //     education_major: "Pelayanan,Layanan Pelanggan",
    //     company_industry: "Pariwisata",
    //     job_description: "Customer service attendant adalah sebuah posisi atau jabatan yang memiliki kewajiban untuk memuaskan pelanggan atau melayani dalam bentuk menjawab semua pertanyaan baik itu keluhan, kritik, saran dan bahkan kebingungan dari pelanggan atau konsumen yang sedang menggunakan layanan dari usaha atau bisnis tempat anda bekerja.",
    //     youtube: "https://www.youtube.com/embed/M8F7DBCiW6c",
    //     salary: 3050000,
    //     favorite: false,
    //     imageProfesi: `${pariwisata}`
    // },
    // {
    //     id: "34334",
    //     job_title: "Cleaning Service",
    //     experience_level: "1 tahun",
    //     education_level: "Tidak terspesifikasi",
    //     education_major: "Lainnya,Pekerjaan Umum",
    //     company_industry: "Pariwisata",
    //     job_description: "Cleaning Service sendiri merupakan salah satu lembaga departemen yang ada di hotel, yang bertugas menjaga, merawat, dan membersihkan serta memelihara rooms atau kamar-kamar hotel maupun area di luar kamar hotel atau area yang tergolong kedalam area umum.",
    //     youtube: "https://www.youtube.com/embed/nHioq2U0KTc",
    //     salary: 3950000,
    //     favorite: false,
    //     imageProfesi: `${pariwisata}`
    // },
    // {
    //     id: "34601",
    //     job_title: "Housekeeping Hotel",
    //     experience_level: "1 tahun",
    //     education_level: "SMA, SMU/SMK/STM",
    //     education_major: "Hotel/Restoran,Pariwisata",
    //     company_industry: "Pariwisata",
    //     job_description: "Housekeeping HOTEL :apakah anda Tingkat Pendidikan: SMA/SMK PerhotelanUmur Maks. 35 Tahun Full Time , kerja shift, Gaji UMR Sleman Lokasi Kerja: Monjali, Sleman , Jogja, diutamakan yang domisili Jogja Pengalaman min 1 tahun di Housekeeping danFront Office HotelMemiliki latar belakang pendidikan/pekerjaanyang mendukung posisi yang dilamar Dapat mengoperasikan komputer (familiardengan Microsoft Word/Excel) Memiliki kemauan tinggi untuk belajar, tekundan jujur Hanya yang memenuhi kualifikasi",
    //     youtube: "https://www.youtube.com/embed/7w1QxGqdUIs",
    //     salary: 2250000,
    //     favorite: false,
    //     imageProfesi: `${pariwisata}`
    // },
    // {
    //     id: "32919",
    //     job_title: "TICKETING",
    //     experience_level: "1 tahun",
    //     education_level: "Sertifikat Professional, D3 (Diploma), D4 (Diploma), Sarjana (S1)",
    //     education_major: "Hotel/Restoran,Pariwisata",
    //     company_industry: "Pariwisata",
    //     job_description: "Ticketing membantu perusahaan untuk menampung, mengelola, dan melacak permintaan customer, Customer seringkali memberi pertanyaan atau keluhan kepada perusahaan melalui telepon maupun sebuah pesan. Maka dari itu, bidang ticketing bertugas mengelola feedback yang diberikan.",
    //     youtube: "https://www.youtube.com/embed/ewZ432xB4Ik",
    //     salary: 4000000,
    //     favorite: false,
    //     imageProfesi: `${pariwisata}`
    // },

    // {
    //     id: "32676",
    //     job_title: "Content Creator",
    //     experience_level: "1 tahun",
    //     education_level: "Tidak terspesifikasi",
    //     education_major: "Seni/Media/Komunikasi,Periklanan",
    //     company_industry: "Entertainment",
    //     job_description: "Content creator merupakan sebutan bagi seseorang yang melahirkan berbagai materi konten baik berupa tulisan, gambar, video, suara, maupun gabungan dari dua atau lebih materi. Nah konten-konten yang dibuat oleh para content creator itu biasanya dimuat di platform digital, seperti YouTube, Instagram dan TikTok.",
    //     youtube: "https://www.youtube.com/embed/y4Gpw81aYyI",
    //     salary: 3000000,
    //     favorite: false,
    //     imageProfesi: `${Entertainment}`
    // },
    // {
    //     id: "32725",
    //     job_title: "Junior Graphic Designer",
    //     experience_level: "",
    //     education_level: "SMA, SMU/SMK/STM, Sertifikat Professional, D3 (Diploma), D4 (Diploma), Sarjana (S1)",
    //     education_major: "Seni/Media/Komunikasi,Seni / Desain Kreatif",
    //     company_industry: "Entertainment",
    //     job_description: "Junior Graphic Designer terlibat dengan tugas-tugas desain dari konsepsi sampai penyelesaian. Mereka berpartisipasi dalam memproduksi versi desain awal, terlibat dalam solusi desain, dan memproses umpan balik untuk menyempurnakan desain.",
    //     youtube: "https://www.youtube.com/embed/jTb-XzeRkxE",
    //     salary: 4200000,
    //     favorite: false,
    //     imageProfesi: `${Entertainment}`
    // },
    // {
    //     id: "33203",
    //     job_title: "Live Streaming Operator + Editor",
    //     experience_level: "1 tahun",
    //     education_level: "Tidak terspesifikasi",
    //     education_major: "Seni/Media/Komunikasi,Periklanan",
    //     company_industry: "Entertainment",
    //     job_description: "Live Streaming Operator + Editor bertanggung jawab untuk menjaga live streaming operasi sehari-hari. Mengelola konversi konten menjadi video on demand (VOD). Menyiapkan kamera, tripod, mikrofon, lampu, bekerja sama dengan anggota kru dan teknisi A/V venue. Mengirimkan laporan pasca-acara seperti yang diminta oleh Produksi Live streaming Senior. Pastikan produk display untuk live streaming tertata rapi di studio. Bisa mengedit video (VN, Capcut, Adobe dll).",
    //     youtube: "https://www.youtube.com/embed/tgeLPv919rg",
    //     salary: 6000000,
    //     favorite: false,
    //     imageProfesi: `${Entertainment}`
    // },
    // {
    //     id: "33903",
    //     job_title: "Multimedia Designer",
    //     experience_level: "4 tahun",
    //     education_level: "Sarjana (S1)",
    //     education_major: "Seni/Media/Komunikasi,Seni / Desain Kreatif",
    //     company_industry: "Entertainment",
    //     job_description: "Multimedia Designer mengembangkan konten multimedia seperti permainan video, situs web interaktif, perangkat lunak pendidikan, konten iklan, dan program televisi. Melakukan penelitian mendalam dan mengumpulkan bahan untuk membuat animasi dan efek khusus yang akurat.",
    //     youtube: "https://www.youtube.com/embed/TiY-Zfbc4ZA",
    //     salary: 9600000,
    //     favorite: false,
    //     imageProfesi: `${Entertainment}`
    // },
    // {
    //     id: "33948",
    //     job_title: "Programmer / Game Developer",
    //     experience_level: "",
    //     education_level: "Sarjana (S1)",
    //     education_major: "Komputer/Teknologi Informasi,IT-Perangkat Lunak",
    //     company_industry: "Entertainment",
    //     job_description: "Video game developer, juga dikenal sebagai game developer, bertanggung jawab untuk merancang dan mengembangkan video game untuk PC, konsol, dan aplikasi seluler. Tugas mereka adalah membuat kode mesin dasar dari ide tim desain. Mereka mungkin juga terlibat dalam desain karakter, desain level, animasi, dan pengujian unit.",
    //     youtube: "https://www.youtube.com/embed/C6CWqt2rSIg",
    //     salary: 4250000,
    //     favorite: false,
    //     imageProfesi: `${Entertainment}`
    // },

    // {
    //     id: "34384",
    //     job_title: "PERAWAT",
    //     experience_level: "",
    //     education_level: "Sertifikat Professional, D3 (Diploma), D4 (Diploma)",
    //     education_major: "Layanan Kesehatan,Praktisi/Asisten Medis",
    //     company_industry: "Kesehatan",
    //     job_description: "Perawat adalah suatu profesi yang di fokuskan pada perawatan individu, keluarga dan komunitas yang bertanggung jawab dalam peningkatan kesehatan, pencegahan penyakit serta pelayanan terhadap pasien.",
    //     youtube: "https://www.youtube.com/embed/K2HlcZzjcog",
    //     salary: 3500000,
    //     favorite: false,
    //     imageProfesi: `${pariwisata}`
    // },
    // {
    //     id: "34378",
    //     job_title: "Dokter Hewan - Veterinary",
    //     experience_level: "1 tahun",
    //     education_level: "Sarjana (S1), Diploma Pascasarjana, Gelar Professional, Magister (S2)",
    //     education_major: "Layanan Kesehatan,Diagnosa/Lainnya",
    //     company_industry: "Kesehatan",
    //     job_description: "Dokter hewan ( disebut juga Medik Veteriner) adalah dokter yang bertanggung jawab terhadap kesehatan hewan (keswan), kesejahteraan hewan (kesrawan), serta kesehatan masyarakat veteriner.",
    //     youtube: "https://www.youtube.com/embed/FY97toleszs",
    //     salary: 5500000,
    //     favorite: false,
    //     imageProfesi: `${pariwisata}`
    // },
    // {
    //     id: "34412",
    //     job_title: "DOCTOR ONSITE",
    //     experience_level: "",
    //     education_level: "Sarjana (S1)",
    //     education_major: "Layanan Kesehatan,Diagnosa/Lainnya",
    //     company_industry: "Kesehatan",
    //     job_description: "Dokter Onsite adalah pelayanan kesehatan dan sistem pengelolaan kesehatan yang dilakukan didalam perusahaan atau area kerja tertentu, dengan jenis layanan sebagai berikut : Konsultasi dan tindakan emergency dokter. Pemeriksaan kesehatan harian tekanan darah.",
    //     youtube: "https://www.youtube.com/embed/PyYTvkUynUM",
    //     salary: 9600000,
    //     favorite: false,
    //     imageProfesi: `${kesehatan}`
    // },
    // {
    //     id: "32261",
    //     job_title: "Medical Representative",
    //     experience_level: "2 tahun",
    //     education_level: "Sertifikat Professional, D3 (Diploma), D4 (Diploma)",
    //     education_major: "Penjualan / Pemasaran,Penjualan Ritel",
    //     company_industry: "Kesehatan",
    //     job_description: "Medical representative atau sering juga disebut dengan Medrep adalah suatu jenis pekerjaan dibidang farmasi yang bertugas untuk mempresentasikan produk-produk berupa obat yang ditawarkan kepada user atau target produk, agar user tertarik untuk menggunakannya.",
    //     youtube: "https://www.youtube.com/embed/Uw1iWPG7wd0",
    //     salary: 4725000,
    //     favorite: false,
    //     imageProfesi: `${kesehatan}`
    // },
    // {
    //     id: "32511",
    //     job_title: "Asisten Apoteker",
    //     experience_level: "1 tahun",
    //     education_level: "Sertifikat Professional, D3 (Diploma), D4 (Diploma), Sarjana (S1)",
    //     education_major: "Layanan Kesehatan,Farmasi",
    //     company_industry: "Kesehatan",
    //     job_description: "Asisten Apoteker adalah jabatan yang mempunyai ruang lingkup, tugas, tanggung jawab, dan wewenang untuk melaksanakan penyiapan pekerjaan kefarmasian pada unit pelayanan kesehatan yang diduduki oleh Pegawai Negeri Sipil dengan hak dan kewajiban yang diberikan secara penuh oleh pejabat yang berwenang.",
    //     youtube: "https://www.youtube.com/embed/ekGy0yQERAI",
    //     salary: 2750000,
    //     favorite: false,
    //     imageProfesi: `${kesehatan}`
    // },

    // {
    //     id: "32113",
    //     job_title: "Fashion Designer",
    //     experience_level: "3 tahun",
    //     education_level: "Sarjana (S1)",
    //     education_major: "Seni/Media/Komunikasi,Seni / Desain Kreatif",
    //     company_industry: "Design",
    //     job_description: "Fashion Designer mendesain pakaian atas secara kreatif untuk seluruh industri penjualan. Meneliti dan terus memperbarui tren mode yang sedang berkembang serta tren umum yang berkaitan dengan desain, bahan, kain, dan warna. Bertanggung jawab untuk menciptakan ide desain kreatif berdasarkan tren mode yang sedang berkembang.",
    //     youtube: "https://www.youtube.com/embed/DuZzK_WpV78",
    //     salary: 8000000,
    //     favorite: false,
    //     imageProfesi: `${Desain}`
    // },
    // {
    //     id: "33041",
    //     job_title: "Pattern Maker",
    //     experience_level: "1 tahun",
    //     education_level: "Sarjana (S1)",
    //     education_major: "Seni/Media/Komunikasi,Seni / Desain Kreatif",
    //     company_industry: "Design",
    //     job_description: "Pattern Maker membuat template produk fashion seperti pakaian, sepatu, dan pakaian renang sehingga dapat diproduksi ulang secara massal. Mereka membuat sketsa dan membuat pola baik secara manual atau digital, atau kombinasi keduanya.",
    //     youtube: "https://www.youtube.com/embed/I4xtbMz8vj4",
    //     salary: 6250000,
    //     favorite: false,
    //     imageProfesi: `${Desain}`
    // },
    // {
    //     id: "33431",
    //     job_title: "Senior Interior Designer",
    //     experience_level: "2 tahun",
    //     education_level: "Sarjana (S1), Diploma Pascasarjana, Gelar Professional, Magister (S2)",
    //     education_major: "Bangunan/Konstruksi,Arsitek/Desain Interior",
    //     company_industry: "Design",
    //     job_description: "Sebagai Senior Interior Designer, tanggung jawab Anda termasuk mengkoordinasikan tim desain internal untuk sebuah proyek serta menyiapkan dan mengembangkan gambar, model, gambar, dan bahan yang terkait dengan desain.",
    //     youtube: "https://www.youtube.com/embed/s1T3zY-4UkE",
    //     salary: 6500000,
    //     favorite: false,
    //     imageProfesi: `${Desain}`
    // },
    // {
    //     id: "33740",
    //     job_title: "Art Designer",
    //     experience_level: "1 tahun",
    //     education_level: "Sarjana (S1)",
    //     education_major: "Seni/Media/Komunikasi,Seni / Desain Kreatif",
    //     company_industry: "Design",
    //     job_description: "Art Designer merencanakan konsep dengan mempelajari informasi dan materi yang relevan. Mengilustrasikan konsep dengan merancang contoh penataan seni, ukuran, ukuran jenis dan gaya dan mengajukannya untuk disetujui. Mempersiapkan seni jadi dengan mengoperasikan peralatan dan perangkat lunak yang diperlukan.",
    //     youtube: "https://www.youtube.com/embed/lLVmGzn-Qck",
    //     salary: 3875000,
    //     favorite: false,
    //     imageProfesi: `${Desain}`
    // },
    // {
    //     id: "34224",
    //     job_title: "VIDEOGRAPHER",
    //     experience_level: "1 tahun",
    //     education_level: "Sertifikat Professional, D3 (Diploma), D4 (Diploma)",
    //     education_major: "Seni/Media/Komunikasi,Seni / Desain Kreatif",
    //     company_industry: "Design",
    //     job_description: "Videographer mengoperasikan kamera video, di lokasi atau di studio, dalam produksi pemrograman pra-rekaman profesional. Merancang, mengangkut, menyiapkan, dan mengoperasikan peralatan produksi, termasuk peralatan audio dan pencahayaan, untuk produksi lapangan dan studio.",
    //     youtube: "https://www.youtube.com/embed/WHch1NEXtj8",
    //     salary: 6000000,
    //     favorite: false,
    //     imageProfesi: `${Desain}`
    // }
];

function getAllProfesi(){
    return datas;
}

function getProfesi(id){
    const foundedNote = datas.find((data) => data.id === id);
    return foundedNote;
}

function favoriteData() {
    const favData = datas.filter((data)=> data.favorite === true);
    return favData;
}

export { getAllProfesi, getProfesi, favoriteData };
// export default data;