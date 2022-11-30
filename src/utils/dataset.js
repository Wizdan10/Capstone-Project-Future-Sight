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
        favorite: false,
        imageProfesi: `${IT}`
    },
    {
        id: "31837",
        job_title: "UI/UX Designer",
        experience_level: "2 tahun",
        education_level: "Sarjana (S1), Diploma Pascasarjana, Gelar Professional, Magister (S2)",
        education_major: "Komputer/Teknologi Informasi,IT-Perangkat Lunak",
        company_industry: "IT",
        job_description: "UI/UX designer merupakan profesi dalam pengembangan aplikasi dengan basis umpan balik pengguna serta tampilan visual antarmuka aplikasi. Peran UI/UX designer dalam proses pemasaran maupun branding sebuah aplikasi amat besar, sebab mereka menentukan bagaimana pengguna menilai suatu aplikasi. Suatu aplikasi yang dibangun dengan sinergi antara UI/UX designer dapat lebih konsisten dalam berkembang, pun lebih mudah diterima pengguna.",
        youtube: "https://www.youtube.com/embed/0n1E627CcBQ",
        salary: 7500000,
        favorite: false,
        imageProfesi: `${IT}`
    },
    {
        id: "31868",
        job_title: "Android Developer jr/mid",
        experience_level: "2 tahun",
        education_level: "SMA, SMU/SMK/STM, Sertifikat Professional, D3 (Diploma), D4 (Diploma), Sarjana (S1)",
        education_major: "Komputer/Teknologi Informasi,IT-Perangkat Lunak",
        company_industry: "IT",
        job_description: "Android Developer bisa dikatakan sebagai software developer yang memiliki spesialisasi merancang aplikasi untuk marketplace Android. Secara sederhana, mayoritas pekerjaan mereka adalah membuat aplikasi yang dapat digunakan di dalam smartphone ataupun tablet, baik itu berupa game maupun bentuk aplikasi lainnya.",
        youtube: "https://www.youtube.com/embed/DC3jl5L9su4",
        salary: 4550000,
        favorite: false,
        imageProfesi: `${IT}`
    },
    {
        id: "31890",
        job_title: "Technical Support Manager",
        experience_level: "5 tahun",
        education_level: "Tidak terspesifikasi",
        education_major: "Komputer/Teknologi Informasi,IT-Admin Jaringan/Sistem/Database",
        company_industry: "IT",
        job_description: "Technical Support Manager mengelola operasi terkait layanan teknis termasuk staf teknik, TI, atau pemeliharaan di suatu organisasi untuk memastikan semua pekerjaan diselesaikan tepat waktu, sesuai anggaran, dan sesuai spesifikasi pelanggan. Technical Support Manager memastikan tingkat inventaris fisik tetap dipantau dan diisi ulang bila diperlukan. Mereka bertanggung jawab untuk merancang dan menerapkan proses yang lebih baik atau kebijakan operasional di organisasi.",
        youtube: "https://www.youtube.com/embed/xCsKZEzDkPM",
        salary: 12000000,
        favorite: false,
        imageProfesi: `${IT}`
    },
    {
        id: "31761",
        job_title: "API Developer",
        experience_level: "1 tahun",
        education_level: "Sertifikat Professional, D3 (Diploma), D4 (Diploma), Sarjana (S1), Diploma Pascasarjana, Gelar Professional, Magister (S2)",
        education_major: "Komputer/Teknologi Informasi,IT-Perangkat Lunak",
        company_industry: "IT",
        job_description: "Pengembang API mengambil aspirasi organisasi dalam ekonomi API dan mengubahnya menjadi solusi praktis. Tujuan utama mereka adalah untuk menginterpretasikan persyaratan API yang ditetapkan oleh pemangku kepentingan dalam suatu organisasi untuk menghasilkan produk yang memenuhi persyaratan bisnis mereka. Mereka juga ditugaskan untuk mengimplementasikan desain API-first untuk memastikan bahwa API mencerminkan pengalaman pengembang terbaik dan kemungkinan desain. Keterampilan pengembangan API diperlukan bagi pengembang untuk memahami prinsip-prinsip desain API. Pengembang perlu mengintegrasikan dan menghubungkan sistem dan program yang berbeda mengikuti serangkaian aturan yang berbeda, namun menggunakan API yang sama atau mirip.",
        youtube: "https://www.youtube.com/embed/fFWhKjNzR6I",
        salary: 9600000,
        favorite: false,
        imageProfesi: `${IT}`
    },

    {
        id: "31808",
        job_title: "Sales Executive",
        experience_level: "1 tahun",
        education_level: "SMA, SMU/SMK/STM, Sertifikat Professional, D3 (Diploma), D4 (Diploma), Sarjana (S1)",
        education_major: "Penjualan / Pemasaran,Penjualan Ritel",
        company_industry: "Keuangan",
        job_description: "Sales executive adalah orang yang bertanggung jawab atas strategi penjualan perusahaan secara keseluruhan. Dalam peran ini, mereka juga dituntut dapat mengembangkan strategi dan melibatkan tim lain di luar sales. Secara umum, peran ini juga memungkinan setiap pelakunya untuk menjaga hubungan dengan pembeli besar.",
        youtube: "https://www.youtube.com/embed/bod-hV225WM",
        salary: 4500000,
        favorite: false,
        imageProfesi: `${keuangan}`
    },
    {
        id: "32499",
        job_title: "Accounting",
        experience_level: "2 tahun",
        education_level: "Tidak terspesifikasi",
        education_major: "Akuntansi / Keuangan,Akuntansi Umum / Pembiayaan",
        company_industry: "Keuangan",
        job_description: "Accounting tugasnya adalah untuk mengawasi semua aspek proyek yang terkait biaya keseluruhan. Termasuk di dalamnya menyiapkan dan mengumpulkan faktur, menyetujui biaya, melakukan verifikasi jam kerja karyawan, merencanakan dan memelihara anggaran, dan memastikan proyek bisa selesai tepat waktu.",
        youtube: "https://www.youtube.com/embed/BWItQzWjthU",
        salary: 5520000,
        favorite: false,
        imageProfesi: `${keuangan}`
    },
    {
        id: "32679",
        job_title: "Financial Advisor",
        experience_level: "2 tahun",
        education_level: "Sertifikat Professional, D3 (Diploma), D4 (Diploma), Sarjana (S1)",
        education_major: "Penjualan / Pemasaran,Penjualan - Jasa Keuangan",
        company_industry: "Keuangan",
        job_description: "Financial Advisor adalah seorang penasihat yang memberikan saran kepada penggunanya agar dapat merencanakan keuangan dengan matang. Pada umumnya, seorang financial advisor memberikan berbagai macam layanan, seperti manajemen investasi, perencanaan pajak, masalah keuangan, dan sebagainya.",
        youtube: "https://www.youtube.com/embed/F_HBArBxKe8",
        salary: 2875000,
        favorite: false,
        imageProfesi: `${keuangan}`
    },
    {
        id: "32983",
        job_title: "Marketing Officer",
        experience_level: "1 tahun",
        education_level: "Sarjana (S1)",
        education_major: "Penjualan / Pemasaran,Penjualan - Jasa Keuangan",
        company_industry: "Keuangan",
        job_description: "Marketing Officer memiliki lingkup dalam hal strategi pemasaran suatu produk dari perusahaan tempatnya bekerja. Melakukan kegiatan marketing aktif seperti door-to-door canvasing dan telemarketing. Menjaga hubungan baik dengan customer dan melakukan follow up atas perkembangan bisnis customer (financial advisor). Melakukan survey dan interview (Qualitative Credit Analysis) pada calon customer termasuk visit customer. Melengkapi dan memastikan keaslian dokumen identitas calon konsumen untuk keperluan entry order. Melakukan reminder pembayaran sebelum jatuh tempo sesuai penugasan. Melakukan penagihan atas konsumen overdue.",
        youtube: "https://www.youtube.com/embed/K5ti_zcuie8",
        salary: 5000000,
        favorite: false,
        imageProfesi: `${keuangan}`
    },
    {
        id: "33312",
        job_title: "Sales Fronting Bank",
        experience_level: "1 tahun",
        education_level: "SMA, SMU/SMK/STM, Sertifikat Professional, D3 (Diploma), D4 (Diploma), Sarjana (S1)",
        education_major: "Akuntansi / Keuangan,Perbankan / Jasa Finansial ",
        company_industry: "Keuangan",
        job_description: "Sales Fronting Bank melakukan penawaran produk-produk pegadaian kepada calon nasabah, seperti kredit kendaraan ( motor / mobil ), gadai emas, modal usaha dan lain sebagainya.",
        youtube: "https://www.youtube.com/embed/b7YnPm40-E4",
        salary: 6600000,
        favorite: false,
        imageProfesi: `${keuangan}`
    },
    {
        id: "31776",
        job_title: "Corporate Finance",
        experience_level: "3 tahun",
        education_level: "Sertifikat Professional, D3 (Diploma), D4 (Diploma), Sarjana (S1)",
        education_major: "Akuntansi / Keuangan, Investasi Perusahaan ",
        company_industry: "Keuangan",
        job_description: "Corporate Finance adalah subbidang keuangan yang berhubungan dengan bagaimana perusahaan menangani sumber pendanaan, penataan modal, akuntansi, dan keputusan investasi. Corporate Finance sering berkaitan dengan memaksimalkan nilai pemegang saham melalui perencanaan keuangan jangka panjang dan pendek serta penerapan berbagai strategi. Kegiatan keuangan perusahaan berkisar dari investasi modal hingga pertimbangan pajak. Departemen keuangan perusahaan bertanggung jawab untuk mengatur dan mengawasi aktivitas keuangan perusahaan mereka dan keputusan investasi modal. Keputusan tersebut termasuk apakah akan mengejar investasi yang diusulkan dan apakah akan membayar investasi dengan ekuitas, utang, atau keduanya. Mereka juga termasuk apakah pemegang saham harus menerima dividen, dan jika ya, berapa hasil dividennya. Selain itu, departemen keuangan mengelola aset lancar, kewajiban lancar, dan pengendalian inventaris.",
        youtube: "https://www.youtube.com/embed/7kfiYcEcsB0",
        salary: 11500000,
        favorite: false,
        imageProfesi: `${keuangan}`
    },

    {
        id: "32722",
        job_title: "Operational Manager Resort & Restaurant",
        experience_level: "3 tahun",
        education_level: "Sertifikat Professional, D3 (Diploma), D4 (Diploma), Sarjana (S1)",
        education_major: "Hotel/Restoran,Pariwisata",
        company_industry: "Pariwisata",
        job_description: "Operasional manager adalah sebuah jabatan yang dipegang dalam rangka sebagai kontrol penuh dari pengoperasian hotel tersebut, sebuah departemen yang memang diperuntukkan khusus untuk menjaga kualitas dan pengoperasian hotel sesuai dengan standar yang telah ditetapkan sehingga dengan memberikan patok utama semua staff dapat bekerja sesuai dengan standar.",
        youtube: "https://www.youtube.com/embed/YWec0mIziUg",
        salary: 4560000,
        favorite: false,
        imageProfesi: `${pariwisata}`
    },
    {
        id: "34007",
        job_title: "Customer Service Attendant",
        experience_level: "2 tahun",
        education_level: "Tidak terspesifikasi",
        education_major: "Pelayanan,Layanan Pelanggan",
        company_industry: "Pariwisata",
        job_description: "Customer service attendant adalah sebuah posisi atau jabatan yang memiliki kewajiban untuk memuaskan pelanggan atau melayani dalam bentuk menjawab semua pertanyaan baik itu keluhan, kritik, saran dan bahkan kebingungan dari pelanggan atau konsumen yang sedang menggunakan layanan dari usaha atau bisnis tempat anda bekerja.",
        youtube: "https://www.youtube.com/embed/M8F7DBCiW6c",
        salary: 3050000,
        favorite: false,
        imageProfesi: `${pariwisata}`
    },
    {
        id: "34334",
        job_title: "Cleaning Service",
        experience_level: "1 tahun",
        education_level: "Tidak terspesifikasi",
        education_major: "Lainnya,Pekerjaan Umum",
        company_industry: "Pariwisata",
        job_description: "Cleaning Service sendiri merupakan salah satu lembaga departemen yang ada di hotel, yang bertugas menjaga, merawat, dan membersihkan serta memelihara rooms atau kamar-kamar hotel maupun area di luar kamar hotel atau area yang tergolong kedalam area umum.",
        youtube: "https://www.youtube.com/embed/nHioq2U0KTc",
        salary: 3950000,
        favorite: false,
        imageProfesi: `${pariwisata}`
    },
    {
        id: "34601",
        job_title: "Housekeeping Hotel",
        experience_level: "1 tahun",
        education_level: "SMA, SMU/SMK/STM",
        education_major: "Hotel/Restoran,Pariwisata",
        company_industry: "Pariwisata",
        job_description: "Housekeeping HOTEL :apakah anda Tingkat Pendidikan: SMA/SMK PerhotelanUmur Maks. 35 Tahun Full Time , kerja shift, Gaji UMR Sleman Lokasi Kerja: Monjali, Sleman , Jogja, diutamakan yang domisili Jogja Pengalaman min 1 tahun di Housekeeping danFront Office HotelMemiliki latar belakang pendidikan/pekerjaanyang mendukung posisi yang dilamar Dapat mengoperasikan komputer (familiardengan Microsoft Word/Excel) Memiliki kemauan tinggi untuk belajar, tekundan jujur Hanya yang memenuhi kualifikasi",
        youtube: "https://www.youtube.com/embed/7w1QxGqdUIs",
        salary: 2250000,
        favorite: false,
        imageProfesi: `${pariwisata}`
    },
    {
        id: "32919",
        job_title: "TICKETING",
        experience_level: "1 tahun",
        education_level: "Sertifikat Professional, D3 (Diploma), D4 (Diploma), Sarjana (S1)",
        education_major: "Hotel/Restoran,Pariwisata",
        company_industry: "Pariwisata",
        job_description: "Ticketing membantu perusahaan untuk menampung, mengelola, dan melacak permintaan customer, Customer seringkali memberi pertanyaan atau keluhan kepada perusahaan melalui telepon maupun sebuah pesan. Maka dari itu, bidang ticketing bertugas mengelola feedback yang diberikan.",
        youtube: "https://www.youtube.com/embed/ewZ432xB4Ik",
        salary: 4000000,
        favorite: false,
        imageProfesi: `${pariwisata}`
    },
    {
        id: "31767",
        job_title: "Linen Attendant",
        experience_level: "1 tahun",
        education_level: "Tidak terspesifikasi",
        education_major: "Hotel/Restoran,Hotel/Pariwisata",
        company_industry: "Pariwisata",
        job_description: "Linen Attendant bertugas memastikan bahwa linen bersih dipasok ke seluruh hotel. Di antara tanggung jawabnya termasuk menyortir, mencuci, mengeringkan, mengepres, dan melipat pakaian dan barang-barang tekstil lainnya. Mereka juga menghilangkan noda dari produk dengan mengikuti proses pabrikan dan penggunaan produk pembersih komersial. Jika hotel menyediakan layanan kebersihan, Linen Attendant juga bertugas membersihkan barang-barang pribadi pengunjung. Posisi ini membutuhkan kemampuan untuk bekerja di lingkungan yang serba cepat bersama dengan keterampilan interpersonal yang sangat baik untuk berinteraksi dengan tamu dan anggota tim.",
        youtube: "https://www.youtube.com/embed/ztw0QG0E23o",
        salary: 1850000,
        favorite: false,
        imageProfesi: `${pariwisata}`
    },

    {
        id: "32676",
        job_title: "Content Creator",
        experience_level: "1 tahun",
        education_level: "Tidak terspesifikasi",
        education_major: "Seni/Media/Komunikasi,Periklanan",
        company_industry: "Entertainment",
        job_description: "Content creator merupakan sebutan bagi seseorang yang melahirkan berbagai materi konten baik berupa tulisan, gambar, video, suara, maupun gabungan dari dua atau lebih materi. Nah konten-konten yang dibuat oleh para content creator itu biasanya dimuat di platform digital, seperti YouTube, Instagram dan TikTok.",
        youtube: "https://www.youtube.com/embed/y4Gpw81aYyI",
        salary: 3000000,
        favorite: false,
        imageProfesi: `${Entertainment}`
    },
    {
        id: "32725",
        job_title: "Junior Graphic Designer",
        experience_level: "",
        education_level: "SMA, SMU/SMK/STM, Sertifikat Professional, D3 (Diploma), D4 (Diploma), Sarjana (S1)",
        education_major: "Seni/Media/Komunikasi,Seni / Desain Kreatif",
        company_industry: "Entertainment",
        job_description: "Junior Graphic Designer terlibat dengan tugas-tugas desain dari konsepsi sampai penyelesaian. Mereka berpartisipasi dalam memproduksi versi desain awal, terlibat dalam solusi desain, dan memproses umpan balik untuk menyempurnakan desain.",
        youtube: "https://www.youtube.com/embed/jTb-XzeRkxE",
        salary: 4200000,
        favorite: false,
        imageProfesi: `${Entertainment}`
    },
    {
        id: "33203",
        job_title: "Live Streaming Operator + Editor",
        experience_level: "1 tahun",
        education_level: "Tidak terspesifikasi",
        education_major: "Seni/Media/Komunikasi,Periklanan",
        company_industry: "Entertainment",
        job_description: "Live Streaming Operator + Editor bertanggung jawab untuk menjaga live streaming operasi sehari-hari. Mengelola konversi konten menjadi video on demand (VOD). Menyiapkan kamera, tripod, mikrofon, lampu, bekerja sama dengan anggota kru dan teknisi A/V venue. Mengirimkan laporan pasca-acara seperti yang diminta oleh Produksi Live streaming Senior. Pastikan produk display untuk live streaming tertata rapi di studio. Bisa mengedit video (VN, Capcut, Adobe dll).",
        youtube: "https://www.youtube.com/embed/tgeLPv919rg",
        salary: 6000000,
        favorite: false,
        imageProfesi: `${Entertainment}`
    },
    {
        id: "33903",
        job_title: "Multimedia Designer",
        experience_level: "4 tahun",
        education_level: "Sarjana (S1)",
        education_major: "Seni/Media/Komunikasi,Seni / Desain Kreatif",
        company_industry: "Entertainment",
        job_description: "Multimedia Designer mengembangkan konten multimedia seperti permainan video, situs web interaktif, perangkat lunak pendidikan, konten iklan, dan program televisi. Melakukan penelitian mendalam dan mengumpulkan bahan untuk membuat animasi dan efek khusus yang akurat.",
        youtube: "https://www.youtube.com/embed/TiY-Zfbc4ZA",
        salary: 9600000,
        favorite: false,
        imageProfesi: `${Entertainment}`
    },
    {
        id: "33948",
        job_title: "Programmer / Game Developer",
        experience_level: "",
        education_level: "Sarjana (S1)",
        education_major: "Komputer/Teknologi Informasi,IT-Perangkat Lunak",
        company_industry: "Entertainment",
        job_description: "Video game developer, juga dikenal sebagai game developer, bertanggung jawab untuk merancang dan mengembangkan video game untuk PC, konsol, dan aplikasi seluler. Tugas mereka adalah membuat kode mesin dasar dari ide tim desain. Mereka mungkin juga terlibat dalam desain karakter, desain level, animasi, dan pengujian unit.",
        youtube: "https://www.youtube.com/embed/C6CWqt2rSIg",
        salary: 4250000,
        favorite: false,
        imageProfesi: `${Entertainment}`
    },
    {
        id: "31803",
        job_title: "3D Animator",
        experience_level: "1 tahun",
        education_level: "Tidak terspesifikasi",
        education_major: "Seni/Media/Komunikasi,Seni / Desain Kreatif",
        company_industry: "Entertainment",
        job_description: "Deskripsi pekerjaan animator 3D merinci keterampilan atau pengalaman apa yang mungkin dibutuhkan oleh pemberi kerja untuk dimiliki animator untuk proyek 3D yang akan datang. Animator berspesialisasi dalam membuat berbagai jenis grafik 3D dari gambar animasi, objek, rendering manusia, rendering hewan, lanskap, dan lainnya. Animasi 3D ini kemudian digunakan untuk membuat cerita dan visual untuk menghibur dan menginformasikan penonton. Animator adalah bagian dari perencanaan dan pelaksanaan proses animasi. Animasi 3D memerlukan keahlian khusus untuk melakukan tugas harian yang diperlukan. Ini termasuk pemahaman yang kuat tentang program animasi komputer saat ini. Sebagai pekerjaan yang menugaskan animator untuk membuat visual baru setiap hari, menjadi kreatif adalah keterampilan yang paling penting untuk dimiliki. Keahlian analitis juga penting, karena memahami persamaan matematika yang rumit dapat membantu Anda membuat rangkaian animasi 3D dan melakukan tugas pada program perangkat lunak komputer yang rumit.",
        youtube: "https://www.youtube.com/embed/5oidBfh4ksg",
        salary: 6000000,
        favorite: false,
        imageProfesi: `${Entertainment}`
    },

    {
        id: "34384",
        job_title: "PERAWAT",
        experience_level: "",
        education_level: "Sertifikat Professional, D3 (Diploma), D4 (Diploma)",
        education_major: "Layanan Kesehatan,Praktisi/Asisten Medis",
        company_industry: "Kesehatan",
        job_description: "Perawat adalah suatu profesi yang di fokuskan pada perawatan individu, keluarga dan komunitas yang bertanggung jawab dalam peningkatan kesehatan, pencegahan penyakit serta pelayanan terhadap pasien.",
        youtube: "https://www.youtube.com/embed/K2HlcZzjcog",
        salary: 3500000,
        favorite: false,
        imageProfesi: `${kesehatan}`
    },
    {
        id: "34378",
        job_title: "Dokter Hewan - Veterinary",
        experience_level: "1 tahun",
        education_level: "Sarjana (S1), Diploma Pascasarjana, Gelar Professional, Magister (S2)",
        education_major: "Layanan Kesehatan,Diagnosa/Lainnya",
        company_industry: "Kesehatan",
        job_description: "Dokter hewan ( disebut juga Medik Veteriner) adalah dokter yang bertanggung jawab terhadap kesehatan hewan (keswan), kesejahteraan hewan (kesrawan), serta kesehatan masyarakat veteriner.",
        youtube: "https://www.youtube.com/embed/FY97toleszs",
        salary: 5500000,
        favorite: false,
        imageProfesi: `${kesehatan}`
    },
    {
        id: "34412",
        job_title: "DOCTOR ONSITE",
        experience_level: "",
        education_level: "Sarjana (S1)",
        education_major: "Layanan Kesehatan,Diagnosa/Lainnya",
        company_industry: "Kesehatan",
        job_description: "Dokter Onsite adalah pelayanan kesehatan dan sistem pengelolaan kesehatan yang dilakukan didalam perusahaan atau area kerja tertentu, dengan jenis layanan sebagai berikut : Konsultasi dan tindakan emergency dokter. Pemeriksaan kesehatan harian tekanan darah.",
        youtube: "https://www.youtube.com/embed/PyYTvkUynUM",
        salary: 9600000,
        favorite: false,
        imageProfesi: `${kesehatan}`
    },
    {
        id: "32261",
        job_title: "Medical Representative",
        experience_level: "2 tahun",
        education_level: "Sertifikat Professional, D3 (Diploma), D4 (Diploma)",
        education_major: "Penjualan / Pemasaran,Penjualan Ritel",
        company_industry: "Kesehatan",
        job_description: "Medical representative atau sering juga disebut dengan Medrep adalah suatu jenis pekerjaan dibidang farmasi yang bertugas untuk mempresentasikan produk-produk berupa obat yang ditawarkan kepada user atau target produk, agar user tertarik untuk menggunakannya.",
        youtube: "https://www.youtube.com/embed/Uw1iWPG7wd0",
        salary: 4725000,
        favorite: false,
        imageProfesi: `${kesehatan}`
    },
    {
        id: "32511",
        job_title: "Asisten Apoteker",
        experience_level: "1 tahun",
        education_level: "Sertifikat Professional, D3 (Diploma), D4 (Diploma), Sarjana (S1)",
        education_major: "Layanan Kesehatan,Farmasi",
        company_industry: "Kesehatan",
        job_description: "Asisten Apoteker adalah jabatan yang mempunyai ruang lingkup, tugas, tanggung jawab, dan wewenang untuk melaksanakan penyiapan pekerjaan kefarmasian pada unit pelayanan kesehatan yang diduduki oleh Pegawai Negeri Sipil dengan hak dan kewajiban yang diberikan secara penuh oleh pejabat yang berwenang.",
        youtube: "https://www.youtube.com/embed/ekGy0yQERAI",
        salary: 2750000,
        favorite: false,
        imageProfesi: `${kesehatan}`
    },
    {
        id: "31784",
        job_title: "Radiografer",
        experience_level: "1 tahun",
        education_level: "D3 (Diploma), D4 (Diploma), Sarjana (S1)",
        education_major: "Layanan Kesehatan,Praktisi/Asisten Medis",
        company_industry: "Kesehatan",
        job_description: "Radiofgrafer adalah tenaga kesehatan yang diberi tugas, wewenang dan tanggung jawab oleh pejabat yang berwenang untuk melakukan kegiatan radiografi dan imejing di unit Pelayanan Kesehatan. Radiografer merupakan tenaga kesehatan yang memberi kontribusi bidang radiografi dan imejing dalam upaya peningkatan kualitas pelayanan kesehatan. Radiografer lebih banyak di dayagunakan dalam upaya pelayanan kesehatan rujukan dan penunjang, utamanya pelayanan kesehatan yang menggunakan peralatan / sumber yang mengeluarkan radiasi pengion dan non pengion. Saat ini radiografer di dalam menerapkan kompetensinya masih difokuskan pada pelayanan radiologi, yaitu meliputi pelayanan kesehatan bidang radiodiagnostik, imejing, radioterapi dan kedokteran nuklir.",
        youtube: "https://www.youtube.com/embed/-32q6HTeXUM",
        salary: 3000000,
        favorite: false,
        imageProfesi: `${kesehatan}`
    },

    {
        id: "32113",
        job_title: "Fashion Designer",
        experience_level: "3 tahun",
        education_level: "Sarjana (S1)",
        education_major: "Seni/Media/Komunikasi,Seni / Desain Kreatif",
        company_industry: "Design",
        job_description: "Fashion Designer mendesain pakaian atas secara kreatif untuk seluruh industri penjualan. Meneliti dan terus memperbarui tren mode yang sedang berkembang serta tren umum yang berkaitan dengan desain, bahan, kain, dan warna. Bertanggung jawab untuk menciptakan ide desain kreatif berdasarkan tren mode yang sedang berkembang.",
        youtube: "https://www.youtube.com/embed/DuZzK_WpV78",
        salary: 8000000,
        favorite: false,
        imageProfesi: `${Desain}`
    },
    {
        id: "33041",
        job_title: "Pattern Maker",
        experience_level: "1 tahun",
        education_level: "Sarjana (S1)",
        education_major: "Seni/Media/Komunikasi,Seni / Desain Kreatif",
        company_industry: "Design",
        job_description: "Pattern Maker membuat template produk fashion seperti pakaian, sepatu, dan pakaian renang sehingga dapat diproduksi ulang secara massal. Mereka membuat sketsa dan membuat pola baik secara manual atau digital, atau kombinasi keduanya.",
        youtube: "https://www.youtube.com/embed/I4xtbMz8vj4",
        salary: 6250000,
        favorite: false,
        imageProfesi: `${Desain}`
    },
    {
        id: "33431",
        job_title: "Senior Interior Designer",
        experience_level: "2 tahun",
        education_level: "Sarjana (S1), Diploma Pascasarjana, Gelar Professional, Magister (S2)",
        education_major: "Bangunan/Konstruksi,Arsitek/Desain Interior",
        company_industry: "Design",
        job_description: "Sebagai Senior Interior Designer, tanggung jawab Anda termasuk mengkoordinasikan tim desain internal untuk sebuah proyek serta menyiapkan dan mengembangkan gambar, model, gambar, dan bahan yang terkait dengan desain.",
        youtube: "https://www.youtube.com/embed/s1T3zY-4UkE",
        salary: 6500000,
        favorite: false,
        imageProfesi: `${Desain}`
    },
    {
        id: "33740",
        job_title: "Art Designer",
        experience_level: "1 tahun",
        education_level: "Sarjana (S1)",
        education_major: "Seni/Media/Komunikasi,Seni / Desain Kreatif",
        company_industry: "Design",
        job_description: "Art Designer merencanakan konsep dengan mempelajari informasi dan materi yang relevan. Mengilustrasikan konsep dengan merancang contoh penataan seni, ukuran, ukuran jenis dan gaya dan mengajukannya untuk disetujui. Mempersiapkan seni jadi dengan mengoperasikan peralatan dan perangkat lunak yang diperlukan.",
        youtube: "https://www.youtube.com/embed/lLVmGzn-Qck",
        salary: 3875000,
        favorite: false,
        imageProfesi: `${Desain}`
    },
    {
        id: "34224",
        job_title: "VIDEOGRAPHER",
        experience_level: "1 tahun",
        education_level: "Sertifikat Professional, D3 (Diploma), D4 (Diploma)",
        education_major: "Seni/Media/Komunikasi,Seni / Desain Kreatif",
        company_industry: "Design",
        job_description: "Videographer mengoperasikan kamera video, di lokasi atau di studio, dalam produksi pemrograman pra-rekaman profesional. Merancang, mengangkut, menyiapkan, dan mengoperasikan peralatan produksi, termasuk peralatan audio dan pencahayaan, untuk produksi lapangan dan studio.",
        youtube: "https://www.youtube.com/embed/WHch1NEXtj8",
        salary: 6000000,
        favorite: false,
        imageProfesi: `${Desain}`
    },
    {
        id: "31841",
        job_title: "Set Designer",
        experience_level: "2 tahun",
        education_level: "Sarjana (S1)",
        education_major: "Bangunan/Konstruksi,Arsitek/Desain Interior",
        company_industry: "Design",
        job_description: "Desainer set membuat set untuk teater, film, dan televisi. Mereka bekerja sama dengan sutradara dan mengatur pembangun untuk membuat konsep, merancang, dan mengembangkan keseluruhan tampilan produksi. Desainer set membaca skrip, menyelesaikan tata letak set, memesan bahan, dan memastikan semua aktor dan staf diberi pengarahan tentang keselamatan dan mengetahui cara kerja set. Tanggung jawab desainer set termasuk menganalisis skrip dan berkolaborasi dengan sutradara, meneliti detail sejarah dan arsitektur, memberikan perkiraan biaya dan waktu, dan memastikan semua set memenuhi standar keselamatan. Anda harus dapat berkolaborasi dengan tim kreatif yang berbeda dan tetap termotivasi saat bekerja berjam-jam. Agar sukses sebagai desainer set, Anda harus dapat mendelegasikan tugas, membuat keputusan di bawah tekanan, dan memberikan instruksi yang jelas. Kandidat yang luar biasa memiliki perhatian yang tajam terhadap detail, visi kreatif yang kuat, dan kemampuan untuk memproses kritik dengan matang.",
        youtube:"https://www.youtube.com/embed/UFerm1OWR40",
        salary: 6250000,
        favorite: false,
        imageProfesi: `${Desain}`
    },
];

let btn =["Kesehatan","IT","Entertainment","Keuangan","Pariwisata","Design","All"]

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

function rupiah(number){
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
    }).format(number);
  }

export { btn, getAllProfesi, getProfesi, favoriteData, rupiah };
// export default data;