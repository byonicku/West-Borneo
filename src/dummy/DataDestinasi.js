const destinations = [
  {
    id: 1,
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.818037955018!2d109.3393574!3d-0.021556799999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d585ac7425e0b%3A0x9dffe986cffedb63!2sTaman%20Alun%20Kapuas!5e0!3m2!1sen!2sid!4v1709543898893!5m2!1sen!2sid",
    name: "Taman Alun Kapuas",
    description: "Pesona Alam Sungai Kapuas yang menakjubkan.",
    location: "Pontianak, Kalimantan Barat, Indonesia",
    openingHours: "-",
    image: {
      original: "http://34.101.232.245:3000/taman-alam-kapuas-1.jpg",
      thumbnail: "http://34.101.232.245:3000/taman-alam-kapuas-1.jpg",
    }, // Placeholder image URL
    galery: [
      {
        original: "http://34.101.232.245:3000/taman-alam-kapuas-2.jpg",
        thumbnail: "http://34.101.232.245:3000/taman-alam-kapuas-2.jpg",
      },
      {
        original: "http://34.101.232.245:3000/taman-alam-kapuas-3.jpg",
        thumbnail: "http://34.101.232.245:3000/taman-alam-kapuas-3.jpg",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
    ],
    slug: "taman-alun-kapuas",
    information:
      "Taman dengan pemandangan alam yang menakjubkan, terletak di tepi sungai Kapuas. Beserta pemandangan air mengalir dengan tenang dan kapal-kapal yang melintas di sungai Kapuas. Dengan indahnya pemandangan sambil menikmati hidangan khas Pontianak, taman ini memberikan suasana yang wajib dikunjungi dan tidak terlupakan.",
  },
  {
    id: 2,
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8183197360727!2d109.3222052!3d0.0009995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e2a75b7f18d41d%3A0x959992e0a47ea028!2sKhatulistiwa%20Park!5e0!3m2!1sen!2sid!4v1709543815778!5m2!1sen!2sid",
    name: "Khatulistiwa Park",
    description: "Taman dengan pesona garis khatulistiwa.",
    location: "Pontianak, Kalimantan Barat, Indonesia",
    openingHours:"07.30-21.00 WIB",
    image: {
      original: "https://placehold.co/1920x1080",
      thumbnail: "https://placehold.co/1280x720",
    }, // Placeholder image URL
    galery: [
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
    ],
    slug: "khatulistiwa-park",
    information:
      "Taman dengan pemandangan garis khatulistiwa yang membelah bumi. Taman ini menawarkan pemandangan matahari terbenam dan terbit yang menakjubkan. Terdapat tugu khatulistiwa yang menjadi ikon taman ini. Taman ini juga menawarkan berbagai fasilitas rekreasi dan hiburan yang menarik. Taman dibuka setiap hari, namun ada beberapa hari tertentu yang menjadi waktu favorit untuk berkunjung ke taman ini, yaitu saat terjadi fenomena ekuinoks atau titik balik matahari.",
  },
  {
    id: 3,
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8178166836324!2d109.3498511!3d-0.028789200000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d58492226606b%3A0x30190f6309dc377c!2sKeraton%20Kadriyah%20Pontianak%20Kalbar!5e0!3m2!1sen!2sid!4v1709543778032!5m2!1sen!2sid",
    name: "Keraton Kadriyah Pontianak",
    description: "Keraton yang kental dengan budaya Melayu.",
    location: "Pontianak, Kalimantan Barat, Indonesia",
    openingHours: "08.00-17.00 WIB",
    image: {
      original: "https://placehold.co/1920x1080",
      thumbnail: "https://placehold.co/1280x720",
    }, // Placeholder image URL
    galery: [
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
    ],
    slug: "keraton-kadriyah-pontianak",
    information:
      "Keraton Kadriyah Pontianak adalah salah satu keraton yang masih berdiri kokoh di Indonesia. Keraton ini merupakan peninggalan sejarah yang kental dengan budaya Melayu. Keraton ini memiliki arsitektur yang khas dan menarik. Di dalam keraton ini terdapat berbagai koleksi benda-benda yang merupakan peninggalan dari Sultan Syarif Abdurrahman Alkadrie, yang merupakan pendiri keraton ini pada tahun 1771.",
  },
  {
    id: 4,
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.512802551424!2d111.65!3d0.0833333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fe25ec3ec6182f%3A0xe92bd8266863266a!2sBukit%20Kelam!5e0!3m2!1sen!2sid!4v1709543655456!5m2!1sen!2sid",
    name: "Bukit Kelam",
    description: "Bukit dengan pemandangan hijau alam yang mempesona.",
    location: "Sintang, Kalimantan Barat, Indonesia",
    openingHours: "24 jam",
    image: {
      original: "https://placehold.co/1920x1080",
      thumbnail: "https://placehold.co/1280x720",
    }, // Placeholder image URL
    galery: [
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
    ],
    slug: "bukit-kelam",
    information:
      "Bukit Kelam adalah salah satu destinasi wisata alam yang menawarkan pemandangan alam yang menakjubkan. Bukit ini merupakanbatu monolit gelap dengan ketinggian 1.002 meter di atas permukaan laut. Bukit ini memberikan pengalaman mendaki karena bebatuan yang cocok dijadikan pendakian. Jika tidak mampu untuk mendaki, pengunjung dapat menikmati pemandangan alam yang menakjubkan dari kaki bukit.",
  },

  {
    id: 5,
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.8157866961155!2d111.508725!3d0.0645705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31fe21e080b9556b%3A0x99b6f20738ec6f32!2sHutan%20wisata%20baning%20kota!5e0!3m2!1sen!2sid!4v1709543620041!5m2!1sen!2sid",
    name: "Hutan Wisata Baning",
    description: "Hutan Tropis dengan keanekaragaman hayati yang menyegarkan.",
    location: "Sintang, Kalimantan Barat, Indonesia",
    openingHours: "-",
    image: {
      original: "https://placehold.co/1920x1080",
      thumbnail: "https://placehold.co/1280x720",
    }, // Placeholder image URL
    galery: [
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
    ],
    slug: "hutan-wisata-baning",
    information:
      "Hutan Wisata Baning adalah hutan tropis yang terletak di tengah kota Sintang. Meskipun berada di tengah kota, hutan ini memiliki udara yang sangat bersih dan segar. Ada jalur kayu buatan yang bisa menuntun anda dalam berkeliling hutan wisata ini. Ada beragam tumbuhan dan spesies langka yang bisa ditemui di hutan wisata ini. Hutan ini cocok untuk anda yang memerlukan ketenangan dan keindahan alam yang menyegarkan.",
  },
  {
    id: 6,
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.440543190285!2d113.1431574!3d-0.14767575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dff91cd3b33fdad%3A0xa2c3c6765016ec1d!2sAir%20Terjun%20Nokan%20Nayan!5e0!3m2!1sen!2sid!4v1709543572629!5m2!1sen!2sid",
    name: "Air Terjun Nokan Nayan",
    description: "Keindahan Air Terjun Tertinggi di Indonesia",
    location: "Sintang, Kalimantan Barat, Indonesia",
    openingHours: "-",
    image: {
      original: "https://placehold.co/1920x1080",
      thumbnail: "https://placehold.co/1280x720",
    }, // Placeholder image URL
    galery: [
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
    ],
    slug: "air-terjun-nokan-nayan",
    information:
      "Air Terjun Nokan Nayan adalah air terjun tertinggi di Indonesia. Air terjun ini memiliki ketinggian 180 meter. Akses menuju air terjun cukup sulit, tetapi pemandangan yang ditawarkan sangat memuaskan. Air terjun ini memiliki kolam alami yang sangat indah dan air yang jernih. Air terjun ini cocok untuk anda yang menyukai petualangan dan keindahan alam yang menakjubkan. Jika anda ingin berkunjung ke air terjun ini, sebaiknya anda membawa perlengkapan yang cukup dan mempersiapkan fisik yang prima.",
  },
  {
    id: 7,
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.7122760986945!2d109.98092329999999!3d-1.861718099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e0518246fcc8edf%3A0x452050502a61bd02!2sPaleis%20van%20Islamitisch%20Sultanaat%20%22%20Matan%20Tandjompoera%20%22!5e0!3m2!1sen!2sid!4v1709543512888!5m2!1sen!2sid" ,
    name: "Keraton Kerajaan Matan Tanjungpura",
    description: "Warisan Budaya Melayu sejak abad ke-8.",
    location: "Ketapang, Kalimantan Barat, Indonesia",
    openingHours: "-",
    image: {
      original: "https://placehold.co/1920x1080",
      thumbnail: "https://placehold.co/1280x720",
    }, // Placeholder image URL
    galery: [
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
    ],
    slug: "keraton-kerajaan-matan-tanjungpura",
    information: "",
  },

  {
    id: 8,
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127607.83184303647!2d109.97022120000001!3d-1.847309999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e0519c7433acc57%3A0xba33cd4c431a02a6!2sBalai%20kyai%20mangku%20negeri%20%2F%20rumah%20Melayu%20kepala%20pulau)!5e0!3m2!1sen!2sid!4v1709543471577!5m2!1sen!2sid",
    name: "Rumah Adat Melayu Kyai Mangku Negeri",
    description: "Rumah Adat khas Melayu di tepi Sungai.",
    location: "Ketapang, Kalimantan Barat, Indonesia",
    openingHours: "-",
    image: {
      original: "https://placehold.co/1920x1080",
      thumbnail: "https://placehold.co/1280x720",
    }, // Placeholder image URL
    galery: [
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
    ],
    slug: "rumah-adat-melayu-kyai-mangku-negeri",
    information: "Rumah Adat Melayu Ketapang adalah saksi bisu sejarah perkembangan kebudayaan Melayu. Tujuan dibangunya Rumah Adat Melayu Ketapang adalah untuk melestarikan nilai-nilai budaya yang ada di wilayah Kalimantan Barat khususnya Ketapang, sekaligus menghidupkan kembali nilai-nilai adat budaya Melayu Ketapang. Tempat ini dulunya menjadi tempat tinggal bagi banyak penduduk suku Melayu yang telah menetap puluhan tahun."
  },

  {
    id: 9,
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.7447450948953!2d109.9702212!3d-1.8473100000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e051814f95b381f%3A0x9ebffd93e386dd47!2sKelenteng%20Tua%20Pek%20Kong!5e0!3m2!1sen!2sid!4v1709543409655!5m2!1sen!2sid",
    name: "Kelenteng Tua Pek Kong",
    description: "Kelenteng Tertua di Ketapang.",
    location: "Ketapang, Kalimantan Barat, Indonesia",
    openingHours: "-",
    image: {
      original: "https://placehold.co/1920x1080",
      thumbnail: "https://placehold.co/1280x720",
    }, // Placeholder image URL
    galery: [
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
    ],
    slug: "kelenteng-tua-pek-kong",
    information: "Kelenteng Tua Pek Kong adalah kelenteng tertua di Ketapang. Kelenteng ini merupakan tempat ibadah bagi umat Konghucu di Ketapang. Klenteng Tua Pek Kong digambarkan sebagai dewa yang memiliki Ru Yi yang merupakan simbol keberuntungan dan kekuasaan di tangan kanan patung dewa."
  },

  {
    id: 10,
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.508706954702!2d108.72755154999999!3d0.7137953999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e3a61d825b1703%3A0xdca6826f54c5d7fb!2sPulau%20Randayan!5e0!3m2!1sen!2sid!4v1709543365370!5m2!1sen!2sid",
    name: "Pulau Randayan",
    description: "Pulau kecil dengan surga keindahan.",
    location: "Kepulauan Lemukutan, Kalimantan Barat, Indonesia",
    openingHours: "24 jam",
    image: {
      original: "https://placehold.co/1920x1080",
      thumbnail: "https://placehold.co/1280x720",
    }, // Placeholder image URL
    galery: [
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
    ],
    slug: "pulau-randayan",
    information: "Pulau Randayan adalah pulau kecil yang terletak di pesisir utara Kalimantan Barat. Pulau ini memiliki keindahan pasir putih dan alam bawah laut yang menakjubkan. Pulau ini cocok untuk anda yang menyukai keindahan alam dan kegiatan snorkeling ataupun diving. Ekosistemnya yang masih terjaga serta biaya yang cukup terjangkau membuat pulau ini menjadi salah satu destinasi menarik di Kalimantan Barat."
  },

  {
    id: 11,
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127660.4483987712!2d112.1172273!3d0.8405225999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e00e82a94b8c5e7%3A0xbfc12ada8a5b6c9!2sSentarum%20Lake%20National%20Park!5e0!3m2!1sen!2sid!4v1709543329866!5m2!1sen!2sid",
    name: "Danau Sentarum",
    description: "Taman dengan danau terluas di Kalimantan.",
    location: "Kapuas Hulu, Kalimantan Barat, Indonesia",
    openingHours: "8.00-16.30",
    image: {
      original: "https://placehold.co/1920x1080",
      thumbnail: "https://placehold.co/1280x720",
    }, // Placeholder image URL
    galery: [
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
    ],
    slug: "danau-sentarum",
    information: "Taman Nasional Danau Sentarum (TNDS) merupakan salah satu kawasan konservasi di Indonesia dengan luas 130.000 ha, kawasan hutan rawa tergenang yang terdapat sungai-sungai besar dan kecil ini merupakan salah satu kebanggaan Indonesia, dimana hutan ini sangat langka di dunia. Sepanjang lebih kurang sepuluh bulan dalam satu tahun, TNDS digenangi oleh air sungai Kapuas dan menjadi hamparan lahan basah yang luasnya lebih dari 120.000 ha. TNDS memiliki keberagaman kekayaan flora maupun fauna yang sangat tinggi. TNDS juga merupakan habitat bagi beberapa jenis satwa yang dilindungi, seperti orangutan, harimau, dan berbagai jenis burung. TNDS juga merupakan habitat bagi beberapa jenis ikan air tawar yang langka, seperti ikan arwana, ikan kelisa, dan ikan gabus."
  },
  
  {
    id: 12,
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.59645816635!2d108.858328!3d0.83057435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e30afddad244cb%3A0xa59fc62511c84f49!2sKura%20Kura%20Beach!5e0!3m2!1sen!2sid!4v1709543186916!5m2!1sen!2sid",
    name: "Pantai Kura-Kura",
    description: "Pantai dengan keindahan alam yang menakjubkan.",
    location: "Bengkayang, Kalimantan Barat, Indonesia",
    openingHours: "-",
    image: {
      original: "https://placehold.co/1920x1080",
      thumbnail: "https://placehold.co/1280x720",
    }, // Placeholder image URL
    galery: [
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
    ],
    slug: "pantai-kura-kura",
    information: "Pantai Kura-Kura adalah salah satu pantai yang terletak di Kabupaten Singkawang, Kalimantan Barat. Salah satu keunikan pantai ini adalah tempat berkumpulnya kura-kura untuk bertelur. Akses menuju pantai ini cukup mudah. Selain itu pemandangan di pantai ini sangat memukau apabila sudah mencapai senja untuk melihat matahari terbenam. "
  },

  {
    id: 13,
    maps:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3156233008635!2d108.98895420000002!3d0.9095337000000157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e372725b14ece7%3A0x7e090133ddfe14f4!2sTri%20Dharma%20Bumi%20Raya%20Temple%20(The%20centerpoint%20of%20Singkawang%20City)!5e0!3m2!1sen!2sid!4v1709543151389!5m2!1sen!2sid",
    name: "Vihara Tri Dharma Bumi Raya",
    description: "Vihara tertua di Singkawang.",
    location: "Singkawang, Kalimantan Barat, Indonesia",
    openingHours: "-",
    image: {
      original: "https://placehold.co/1920x1080",
      thumbnail: "https://placehold.co/1280x720",
    }, // Placeholder image URL
    galery: [
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
    ],
    slug: "vihara-tri-dharma-bumi-raya",
    information: "Vihara Tri Dharma Bumi Raya adalah Vihara tertua di Singkawang. Vihara ini merupakan tempat ibadah bagi umat Buddha di Singkawang. Vihara ini menjadi perwujudan keragaman budaya yang ada di Singkawang yang menunjukkan bahwa masyarakat Singkawang sangat menghargai perbedaan dan keberagaman. Vihara ini menarik masyarakat karena letaknya yang berdekatan dengan Masjid Raya Singkawang. Lokasi Vihara yang terletak di pusat kota Singkawang juga menjadikan Vihara Tri Dharma Budi Raya menjadi salah satu destinasi yang wajib dikunjungi apa bila berkunjung ke Singkawang."
  },

  {
    id: 14,
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.314327302465!2d108.9888318!3d0.9107054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e37272db4754fb%3A0x88ba7d441e5a1f7!2sMasjid%20Raya%20Singkawang!5e0!3m2!1sen!2sid!4v1709543089612!5m2!1sen!2sid",
    name: "Masjid Raya Singkawang",
    description: "Masjid dengan keragamannya.",
    location: "Singkawang, Kalimantan Barat, Indonesia",
    openingHours: "24 jam",
    image: {
      original: "https://placehold.co/1920x1080",
      thumbnail: "https://placehold.co/1280x720",
    }, // Placeholder image URL
    galery: [
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
    ],
    slug: "masjid-raya-singkawang",
    information: "Masjid Raya Singkawang adalah masjid yang memiliki arsitektur yang menakjubkan. Masjid ini merupakan tempat ibadah bagi umat Islam di Singkawang. Masjid ini juga merupakan salah satu masjid tertua di Singkawang. Selain itu, bersama dengan vihara Tri Dharma Bumi Raya, Masjid Raya Singkawang menjadi simbol kerukunan antar umat beragama di Singkawang. Masjid ini juga menjadi salah satu destinasi yang wajib dikunjungi apa bila berkunjung ke Singkawang. Letaknya yang berada di pusat kota menjadikan masjid ini mudah dijangkau."
  },

  {
    id: 15,
    maps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.3699768693746!2d108.88911967480276!3d0.8589552991327201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31e374ad771ba9ad%3A0x1c12da0437fd35b6!2sBajau%20Beach!5e0!3m2!1sen!2sid!4v1709542745674!5m2!1sen!2sid" ,
    name: "Pantai Tanjung Bajau",
    description: "Pantai cantik dengan pesona yang indah.",
    location: "Singkawang, Kalimantan Barat, Indonesia",
    openingHours: "24 jam",
    image: {
      original: "https://placehold.co/1920x1080",
      thumbnail: "https://placehold.co/1280x720",
    }, // Placeholder image URL
    galery: [
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
      {
        original: "https://placehold.co/1920x1080",
        thumbnail: "https://placehold.co/1280x720",
      },
    ],
    slug: "pantai-tanjung-bajau",
    information: "Pantai Tanjung Bajau adalah pantai yang terletak di Singkawang. Pantai ini menawarkan pemandangan alam yang menakjubkan. Pantai ini memilki ombak yang cukup tenang. Selan keindahan pantai, ada daya tarik lainnya seperti bukit yang letaknya tidak jauh dari pantai, wahana permainan, maupun jembatan kayu yang mencapai mulut laut. Pantai ini cocok untuk anda yang menyukai keindahan alam dan kegiatan bermain air. Namun, disarankan untuk berhati-hati karena banyak bebatuan besar di pesisir pantai."
  }
];

export default destinations;
