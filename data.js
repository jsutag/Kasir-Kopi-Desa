const recipes = [
    // ==========================================
    // KATEGORI: BASED
    // ==========================================
    {id: "4-based", nama: "Based Machiatto", kategori: "Based", metode: "Free Pouring", peralatan: ["Timbangan", "Measuring jug 4 liter", "Ballon whisk"], bahan: ["Air dingin 200 ml", "Machiatto powder 50 g"], step: ["Tuangkan 200 ml air dingin", "Tuangkan 50 g machiatto powder", "Frother kedua bahan tersebut hingga membentuk foam tebal"], shelf_life: "2 hari didalam chiller", catatan: "Wajib menggunakan hand gloves"},
    {id: "1-based", nama: "Based Cream", kategori: "Based", metode: "Free Pouring", peralatan: ["Timbangan", "Measuring jug 4 liter", "Ballon whisk"], bahan: ["Air panas 200 ml", "Krimmer powder 200 g", "Garam 2 g", "Fresh milk 1000 ml"], step: ["Tuangkan 200 ml air panas ( Suhu 100 °C )", "Tuangkan 200 g krimmer powder", "Tuangkan 2 g garam", "Aduk hingga merata menggunakan ballon whisk", "Tuangkan fresh milk 1000 ml", "Aduk hingga merata"], shelf_life: "3 hari didalam chiller", catatan: "Wajib menggunakan hand gloves"},
    {id: "2-based", nama: "Tea Based Vanilla Bourbon", kategori: "Based", metode: "Free Pouring", peralatan: ["Timbangan", "Measuring jug 2 liter", "Long bar spoon", "Saringan kain"], bahan: ["Air panas 1000 ml", "Vanilla black tea 10 g"], step: ["Tuangkan 1000 ml air panas ( Suhu 95 °C )", "Tuangkan 10 g vanilla bourbon", "Aduk hingga merata", "Seduh 15 menit", "Saring teh"], shelf_life: "1 hari didalam chiller", catatan: "Jika panas, dilarang membuat produk teh lainnya."},
    {id: "3-based", nama: "Simple Syrup", kategori: "Based", metode: "Stirring", peralatan: ["Timbangan", "Measuring jug 2 liter", "Long bar spoon atau ballon whisk", "Saringan kawat"], bahan: ["Air panas 1000 ml", "Gula pasir 1000 g"], step: ["Tuangkan 1000 ml air panas ( Suhu 100 °C )", "Tuangkan 1000 g gula pasir", "Aduk hingga merata", "Saring gula"], shelf_life: "10 hari didalam chiller", catatan: "Jika panas, dilarang membuat produk teh lainnya."},

    // ==========================================
    // KATEGORI: MAKANAN (NEW)
    // ==========================================
    {id: "m1", nama: "Snack Platter", kategori: "Makanan", sub_kategori: "Cemilan", metode: "", peralatan: ["Timbangan"], bahan: ["Kentang 50 g", "Sosis 3 pcs", "Nugget 3 pcs", "Saus 15 g"], step: ["Goreng semua bahan", "Sajikan dengan saus"], shelf_life: "", catatan: ""},
    {id: "m2", nama: "Dimsum", kategori: "Makanan", sub_kategori: "Cemilan", metode: "", peralatan: ["Steamer"], bahan: ["Dimsum 4 pcs", "Saus 15 g"], step: ["Kukus dimsum", "Sajikan dengan saus"], shelf_life: "", catatan: "Pilih rasa yang berbeda"},
    {id: "m3", nama: "Kentang Goreng", kategori: "Makanan", sub_kategori: "Cemilan", metode: "", peralatan: ["Deep fryer"], bahan: ["Kentang 120 g", "Saus 15 g"], step: ["Goreng kentang", "Sajikan dengan saus"], shelf_life: "", catatan: ""},
    {id: "m4", nama: "Mixed Fry", kategori: "Makanan", sub_kategori: "Cemilan", metode: "", peralatan: ["Deep fryer"], bahan: ["Rogut 1 pcs", "Mayo 1 pcs", "Pastel 1 pcs", "Cabe 3 pcs"], step: ["Goreng semua bahan", "Sajikan dengan cabe"], shelf_life: "", catatan: ""},
    {id: "m5", nama: "Panada", kategori: "Makanan", sub_kategori: "Cemilan", metode: "", peralatan: ["Deep fryer"], bahan: ["Panada 2 pcs"], step: ["Goreng panada"], shelf_life: "", catatan: ""},
    {id: "m6", nama: "Pastel", kategori: "Makanan", sub_kategori: "Cemilan", metode: "", peralatan: ["Deep fryer"], bahan: ["Pastel 3 pcs", "Cabe 3 pcs"], step: ["Goreng pastel", "Sajikan dengan cabe"], shelf_life: "", catatan: ""},
    {id: "m7", nama: "Risol Mayo", kategori: "Makanan", sub_kategori: "Cemilan", metode: "", peralatan: ["Deep fryer"], bahan: ["Risol Mayo 3 pcs", "Cabe 3 pcs"], step: ["Goreng risol", "Sajikan dengan cabe"], shelf_life: "", catatan: ""},
    {id: "m8", nama: "Rogut", kategori: "Makanan", sub_kategori: "Cemilan", metode: "", peralatan: ["Deep fryer"], bahan: ["Rogut 3 pcs", "Cabe 3 pcs"], step: ["Goreng rogut", "Sajikan dengan cabe"], shelf_life: "", catatan: ""},
    {id: "m9", nama: "Rujak Cireng", kategori: "Makanan", sub_kategori: "Cemilan", metode: "", peralatan: ["Deep fryer"], bahan: ["Cireng 5 pcs", "Sambal rujak cireng 1 porsi"], step: ["Goreng cireng", "Sajikan dengan sambal rujak"], shelf_life: "", catatan: ""},

    // ==========================================
    // KATEGORI: COFFEE REGULER
    // ==========================================
    {id: "r1", nama: "Ice Americano Reguler", kategori: "Coffee Reguler", metode: "Layering", peralatan: ["Timbangan"], bahan: ["Biji kopi reguler 18 g", "Air 120 ml", "Ice cube 150 g"], step: ["Giling 18 g kopi reguler", "Tuangkan air 120 ml", "Tuangkan es 150 g", "Ekstrak 60 ml espresso"], shelf_life: "", catatan: ""},
    {id: "r2", nama: "Hot Americano Reguler", kategori: "Coffee Reguler", metode: "Layering", peralatan: ["Timbangan"], bahan: ["Biji kopi reguler 18 g", "Air panas 180 ml"], step: ["Giling 9 g kopi reguler", "Tuangkan air panas 180 ml", "Ekstrak 30 ml espresso"], shelf_life: "", catatan: ""},
    {id: "r3", nama: "Ice Coffee Latte Reguler", kategori: "Coffee Reguler", metode: "Layering", peralatan: ["Timbangan"], bahan: ["Biji kopi reguler 18 g", "Fresh milk 120 ml", "Ice cube 150 g"], step: ["Giling 18 g kopi reguler", "Tuangkan fresh milk 120 ml", "Tuangkan es 150 g", "Ekstrak 60 ml espresso"], shelf_life: "", catatan: ""},
    {id: "r4", nama: "Hot Coffee Latte Reguler", kategori: "Coffee Reguler", metode: "Free Pouring", peralatan: ["Timbangan"], bahan: ["Biji kopi reguler 18 g", "Fresh milk 180 ml"], step: ["Giling 9 g kopi reguler", "Tuangkan fresh milk 180 ml", "Ekstrak 30 ml espresso", "Steam susu"], shelf_life: "", catatan: ""},
    {id: "r5", nama: "Ice Cappuccino Reguler", kategori: "Coffee Reguler", metode: "Layering", peralatan: ["Timbangan"], bahan: ["Biji kopi reguler 18 g", "Fresh milk 120 ml", "Ice cube 150 g"], step: ["Giling 18 g kopi reguler", "Tuangkan fresh milk 120 ml", "Tuangkan es 150 g", "Ekstrak 60 ml espresso"], shelf_life: "", catatan: ""},
    {id: "r6", nama: "Hot Cappuccino Reguler", kategori: "Coffee Reguler", metode: "Free Pouring", peralatan: ["Timbangan"], bahan: ["Biji kopi reguler 18 g", "Fresh milk 150 ml", "Powder chocolate 0,5 g"], step: ["Giling 9 g kopi reguler", "Tuangkan fresh milk 150 ml", "Ekstrak 30 ml espresso", "Steam susu foam tebal", "Tabur 0,5 g coklat"], shelf_life: "", catatan: "FOAM WAJIB TEBAL"},

    // ==========================================
    // KATEGORI: HOT COFFEE & ES KOPI (RESEP LAMA)
    // ==========================================
    {id: 2, nama: "Single Espresso", kategori: "Hot Coffee", metode: "", peralatan: ["Timbangan"], bahan: ["Biji kopi house blend 18 g", "Air panas 30 ml"], step: ["Giling 9 g kopi", "Ekstrak 30 ml espresso"], shelf_life: "", catatan: ""},
    {id: 3, nama: "Double Espresso", kategori: "Hot Coffee", metode: "", peralatan: ["Timbangan"], bahan: ["Biji kopi house blend 18 g", "Air panas 60 ml"], step: ["Giling 18 g kopi", "Ekstrak 60 ml espresso"], shelf_life: "", catatan: ""},
    {id: 4, nama: "Hot Americano", kategori: "Hot Coffee", metode: "Layering", peralatan: ["Timbangan"], bahan: ["Biji kopi house blend 18 g", "Air panas 180 ml"], step: ["Giling 9 g kopi", "Tuangkan air 180 ml", "Ekstrak 30 ml espresso"], shelf_life: "", catatan: ""},
    {id: 7, nama: "Hot Latte", kategori: "Hot Coffee", metode: "Free Pouring", peralatan: ["Timbangan"], bahan: ["Biji kopi house blend 18 g", "Fresh milk 180 ml", "Flavor syrup 18 ml"], step: ["Giling 9 g kopi", "Tuangkan fresh milk 180 ml", "Ekstrak 30 ml espresso", "Steam susu"], shelf_life: "", catatan: ""},
    {id: 8, nama: "Hot Capucinno", kategori: "Hot Coffee", metode: "Free Pouring", peralatan: ["Timbangan"], bahan: ["Biji kopi house blend 18 g", "Fresh milk 150 ml", "Powder chocolate 0,5 g"], step: ["Giling 9 g kopi", "Tuangkan fresh milk 150 ml", "Ekstrak 30 ml espresso", "Steam susu", "Tabur 0,5 g coklat"], shelf_life: "", catatan: "FOAM WAJIB TEBAL"},
    {id: 22, nama: "Vietnam Drip", kategori: "Hot Coffee", metode: "Free Pouring", peralatan: ["Timbangan"], bahan: ["Biji kopi reguler 12g", "Susu kental manis 20 ml", "Air panas 130 ml"], step: ["Giling 12 g kopi", "Tuangkan 20 ml SKM", "Tuangkan bubuk kopi", "Tuangkan 130 ml air panas"], shelf_life: "", catatan: ""},
    {id: 23, nama: "Manual Brew V60", kategori: "Hot Coffee", metode: "Free Pouring", peralatan: ["Timbangan"], bahan: ["Biji kopi house blend 15 g", "Paper filter 1 pcs", "Air panas 225 ml"], step: ["Giling 15 g kopi (grinder 5)", "Bilas paper filter", "Tuang air"], shelf_life: "", catatan: ""},
    {id: 5, nama: "Ice Americano", kategori: "Es Kopi", metode: "Layering", peralatan: ["Timbangan"], bahan: ["Biji kopi house blend 18 g", "Air 120 ml", "Ice cube 150 g"], step: ["Giling 18 g kopi", "Tuangkan air 120 ml", "Tuangkan es 150 g", "Ekstrak 60 ml espresso"], shelf_life: "", catatan: ""},
    {id: 6, nama: "Ice Latte", kategori: "Es Kopi", metode: "Layering", peralatan: ["Timbangan"], bahan: ["Biji kopi house blend 18 g", "Fresh milk 120 ml", "Ice cube 150 g"], step: ["Giling 18 g kopi", "Tuangkan fresh milk 120 ml", "Tuangkan es 150 g", "Ekstrak 60 ml espresso"], shelf_life: "", catatan: ""},
    {id: 13, nama: "Es Kopi Susu Gula Aren", kategori: "Es Kopi", metode: "Layering", peralatan: ["Timbangan"], bahan: ["Gula aren 15 ml", "Based cream 150 ml", "Biji kopi house blend 18 g", "Es batu 150 g"], step: ["Campur semua bahan", "Tuang es 150 g"], shelf_life: "3 hari chiller", catatan: "Aduk merata"},
    {id: 19, nama: "Es Kopi Susu Gula Aren Coffee Jelly", kategori: "Es Kopi", metode: "Layering", peralatan: ["Timbangan"], bahan: ["Gula aren 10 ml", "Based cream 100 ml", "Biji kopi house blend 18 g", "Coffee jelly 20 g", "Es batu 150 g"], step: ["Campur semua bahan", "Tuang es 150 g"], shelf_life: "3 hari chiller", catatan: "Aduk merata"},
    {id: 20, nama: "Es Kopi Butterscotch Strawberry", kategori: "Es Kopi", metode: "Layering", peralatan: ["Timbangan"], bahan: ["Butterscotch 20 ml", "Gula aren 10 ml", "Based cream milk 120 ml", "Biji kopi house blend 18 g", "Es batu 150 g", "Machiatto 40 g", "Strawberry syrup 10 g"], step: ["Campur semua bahan", "Tuang es 150 g"], shelf_life: "", catatan: ""},
    {id: 20, nama: "Es Kopi Butterscotch", kategori: "Es Kopi", metode: "Layering", peralatan: ["Timbangan"], bahan: ["Butterscotch 20 ml", "Gula aren 10 ml", "Based cream milk 120 ml", "Biji kopi house blend 18 g", "Es batu 150 g"], step: ["Campur semua bahan", "Tuang es 150 g"], shelf_life: "", catatan: ""},
    {id: 21, nama: "Es Kopi Kelepon", kategori: "Es Kopi", metode: "Layering", peralatan: ["Timbangan"], bahan: ["Kelepon powder 20 g", "Air panas 20 ml", "Gula aren 10 ml", "Based cream 100 ml", "Biji kopi house blend 18 g", "Es batu 150 g", "Machiatto 40 g", "Pandan syrup 20 g"], step: ["Campur semua bahan", "Tuang es 150 g"], shelf_life: "", catatan: ""},
    {id: 25, nama: "Es Pandan Latte", kategori: "Es Kopi", metode: "Stirring", peralatan: ["Timbangan"], bahan: ["Gula aren 10 ml", "Pandan Syrup 20 ml", "Based cream 120 ml", "Biji kopi house blend 18 g", "Es batu 150 g"], step: ["Campur semua bahan", "Tuang es 150 g"], shelf_life: "", catatan: ""},
    {id: 25, nama: "Es Kopi Desa", kategori: "Es Kopi", metode: "Stirring", peralatan: ["Timbangan"], bahan: ["Gula aren 14 ml", "Fresh milk 110 ml", "Biji kopi house blend 18 g", ], step: ["Campur semua bahan", "Tuang es 150 g"], shelf_life: "", catatan: ""},

    // ==========================================
    // KATEGORI: NON COFFEE
    // ==========================================
    {id: 1, nama: "Yuzu Lychee Matcha", kategori: "Non Coffee", metode: "Layering & Stirring", peralatan: ["Timbangan"], bahan: ["Matcha powder 10 g", "Air panas 20 ml", "Syrup yuzu 20 ml", "Syrup lyche 10 ml", "Ice cube 120 g", "Fresh milk 120 ml"], step: ["Larutkan matcha", "Campur semua bahan", "Tuang es 150 g"], shelf_life: "", catatan: ""},
    {id: 9, nama: "Hot Chocolate", kategori: "Non Coffee", metode: "Free Pouring", peralatan: ["Timbangan"], bahan: ["Chocolate powder 15 g", "Gula cair 5 ml", "Air panas 30 ml", "Fresh milk 150 ml"], step: ["Larutkan coklat", "Tuangkan susu 150 ml"], shelf_life: "", catatan: ""},
    {id: 10, nama: "Ice Chocolate", kategori: "Non Coffee", metode: "Layering", peralatan: ["Timbangan"], bahan: ["Chocolate powder 20 g", "Air panas 30 ml", "Gula cair 15 ml", "Based cream 120 ml", "Es batu 150 g"], step: ["Larutkan coklat", "Campur semua bahan", "Tuang es 150 g"], shelf_life: "", catatan: ""},
    {id: 11, nama: "Hot Matcha Latte", kategori: "Non Coffee", metode: "Free Pouring", peralatan: ["Timbangan"], bahan: ["Matcha powder 15 g", "Air panas 30 ml", "Vanilla syrup 10 ml", "Fresh milk 150 ml"], step: ["Larutkan matcha", "Tuangkan susu 150 ml"], shelf_life: "", catatan: ""},
    {id: 12, nama: "Ice Matcha Latte", kategori: "Non Coffee", metode: "Layering", peralatan: ["Timbangan"], bahan: ["Matcha powder 20 g", "Air panas 30 ml", "Vanilla syrup 15 ml", "Based cream 150 ml", "Es batu 150 g"], step: ["Larutkan matcha", "Campur bahan", "Tuang es 150 g"], shelf_life: "", catatan: ""},
    {id: 50, nama: "Ice Matcha Latte Premium", kategori: "Non Coffee", metode: "Layering", peralatan: ["Timbangan"], bahan: ["Matcha powder Premium 5 g", "Air panas 40 ml", "Vanilla syrup 15 ml", "Fresh milk 150 ml", "Es batu 150 g"], step: ["Larutkan matcha", "Campur bahan", "Tuang es 150 g"], shelf_life: "", catatan: ""},
    {id: 14, nama: "Ice Blue Ocean", kategori: "Non Coffee", metode: "Free Pouring", peralatan: ["Timbangan"], bahan: ["Yoghurt 30 ml", "Blue curacao syrup 20 ml", "Salted caramel syrup 15 ml", "Es batu 150 g", "Fresh milk 100 ml", "Popping boba mango 20 g"], step: ["Campur semua bahan", "Tuang es 150 g"], shelf_life: "", catatan: ""},
    {id: 15, nama: "Ice Lyche Tea", kategori: "Non Coffee", metode: "Free Pouring", peralatan: ["Timbangan"], bahan: ["Lyche syrup 30 ml", "Vanilla black tea 120 ml", "Es batu 150 g", "Buah lyche 2 pcs"], step: ["Campur teh & syrup", "Tuang es 150 g"], shelf_life: "", catatan: ""},
    {id: 16, nama: "Strawberry Fragaria Hot Tea", kategori: "Non Coffee", metode: "Free Pouring", peralatan: ["Timbangan"], bahan: ["Tea bag strawberry fragaria 1 pcs", "Air panas 250 ml"], step: ["Masukan teh", "Tuangkan air panas 250 ml"], shelf_life: "", catatan: ""},
    {id: 17, nama: "Jasmine Orchard Hot Tea", kategori: "Non Coffee", metode: "Free Pouring", peralatan: ["Timbangan"], bahan: ["Tea bag jasmine orchard 1 pcs", "Air panas 200 ml"], step: ["Masukan teh", "Tuangkan air panas 200 ml"], shelf_life: "", catatan: ""},
    {id: 18, nama: "Honey Lemon Tea", kategori: "Non Coffee", metode: "Stirring", peralatan: ["Timbangan"], bahan: ["Honey syrup 10 ml", "Lemon syrup 20 ml", "Gula cair 10 ml", "Vanilla black tea 120 ml", "Rainbow jelly 20 g", "Ice cube 150 g", "Dry lemon 1 pcs"], step: ["Campur semua bahan", "Tuang es 150 g"], shelf_life: "", catatan: ""},
    {id: 24, nama: "Black Essentials Hot Tea", kategori: "Non Coffee", metode: "Free Pouring", peralatan: ["Timbangan"], bahan: ["Tea bag black essentials 1 pcs", "Air panas 250 ml"], step: ["Masukan teh", "Tuangkan air panas 250 ml"], shelf_life: "", catatan: ""},

{
    id: 100,
    nama: "Air Mineral",
    kategori: "Softdrink",
    bahan: [
        "Air Mineral 1 pcs"
    ]
},

{
    id: 101,
    nama: "Coca Cola",
    kategori: "Softdrink",
    bahan: [
        "Coca Cola 1 pcs"
    ]
},

{
    id: 102,
    nama: "Sprite",
    kategori: "Softdrink",
    bahan: [
        "Sprite 1 pcs"
    ]
},

{
    id: 103,
    nama: "Pocari",
    kategori: "Softdrink",
    bahan: [
        "Pocari 1 pcs"
    ]
},

{
    id: 110,
    nama: "Es Teh Manis",
    kategori: "Teh",
    bahan: [
        "Tea Based Vanilla Bourbon 30 ml",
        "Simple Syrup 20 ml",
        "Es batu 150 g"
    ]
},

{
    id: 111,
    nama: "Es Teh Tawar",
    kategori: "Teh",
    bahan: [
        "Tea Based Vanilla Bourbon 30 ml",
        "Es batu 150 g"
    ]
},

{
    id: 112,
    nama: "Teh Manis Panas",
    kategori: "Teh",
    bahan: [
        "Teh Celup 30 ml",
        "Simple Syrup 20 ml",
        "Air panas 180 ml"
    ]
},

{
    id: 113,
    nama: "Teh Tawar Panas",
    kategori: "Teh",
    bahan: [
        "Teh Celup 30 ml",
        "Air panas 180 ml"
    ]
},

{
    id: 114,
    nama: "Es Teh Leci",
    kategori: "Teh",
    bahan: [
        "Tea Based Vanilla Bourbon 30 ml",
        "Lyche syrup 30 ml",
        "Buah lyche 2 pcs",
        "Es batu 150 g"
    ]
},

{
    id: 115,
    nama: "Es Honey Lemon Tea",
    kategori: "Teh",
    bahan: [
        "Tea Based Vanilla Bourbon 120 ml",
        "Honey syrup 10 ml",
        "Simple Syrup 10 ml",
        "Rainbow Jelly 20 g",
        "Lemon 1 pcs",
        "Es batu 150 g"
    ]
},

{
    id: 120,
    nama: "Coffee Jelly",
    kategori: "Additional",
    bahan: [
        "Coffee jelly 20 g"
    ]
},

{
    id: 130,
    nama: "Indomie Goreng Reguler",
    kategori: "Makanan",
    sub_kategori: "Indomie",
    bahan: [
        "Indomie Goreng 1 pcs"
    ]
},

{
    id: 131,
    nama: "Indomie Goreng Telur",
    kategori: "Makanan",
    sub_kategori: "Indomie",
    bahan: [
        "Indomie Goreng 1 pcs",
        "Telur 1 pcs"
    ]
},

{
    id: 132,
    nama: "Indomie Goreng Double Telur",
    kategori: "Makanan",
    sub_kategori: "Indomie",
    bahan: [
        "Indomie Goreng 1 pcs",
        "Telur 2 pcs"
    ]
},

{
    id: 133,
    nama: "Indomie Goreng Telur Kornet",
    kategori: "Makanan",
    sub_kategori: "Indomie",
    bahan: [
        "Indomie Goreng 1 pcs",
        "Telur 1 pcs",
        "Kornet 25 g"
    ]
},

{
    id: 134,
    nama: "Indomie Kari Reguler",
    kategori: "Makanan",
    sub_kategori: "Indomie",
    bahan: [
        "Indomie Kari 1 pcs"
    ]
},

{
    id: 135,
    nama: "Indomie Kari Telur",
    kategori: "Makanan",
    sub_kategori: "Indomie",
    bahan: [
        "Indomie Kari 1 pcs",
        "Telur 1 pcs"
    ]
},

{
    id: 136,
    nama: "Indomie Kari Double Telur",
    kategori: "Makanan",
    sub_kategori: "Indomie",
    bahan: [
        "Indomie Kari 1 pcs",
        "Telur 2 pcs"
    ]
},

{
    id: 137,
    nama: "Indomie Kari Telur Kornet",
    kategori: "Makanan",
    sub_kategori: "Indomie",
    bahan: [
        "Indomie Kari 1 pcs",
        "Telur 1 pcs",
        "Kornet 25 g"
    ]
},

{
    id: 138,
    nama: "Indomie Ayam Bawang Reguler",
    kategori: "Makanan",
    sub_kategori: "Indomie",
    bahan: [
        "Indomie Ayam Bawang 1 pcs"
    ]
},

{
    id: 139,
    nama: "Indomie Ayam Bawang Telur",
    kategori: "Makanan",
    sub_kategori: "Indomie",
    bahan: [
        "Indomie Ayam Bawang 1 pcs",
        "Telur 1 pcs"
    ]
},

{
    id: 140,
    nama: "Indomie Ayam Bawang Double Telur",
    kategori: "Makanan",
    sub_kategori: "Indomie",
    bahan: [
        "Indomie Ayam Bawang 1 pcs",
        "Telur 2 pcs"
    ]
},

{
    id: 141,
    nama: "Indomie Ayam Bawang Telur Kornet",
    kategori: "Makanan",
    sub_kategori: "Indomie",
    bahan: [
        "Indomie Ayam Bawang 1 pcs",
        "Telur 1 pcs",
        "Kornet 25 g"
    ]
},

{
    id: 142,
    nama: "Indomie Soto Reguler",
    kategori: "Makanan",
    sub_kategori: "Indomie",
    bahan: [
        "Indomie Soto 1 pcs"
    ]
},

{
    id: 143,
    nama: "Indomie Soto Telur",
    kategori: "Makanan",
    sub_kategori: "Indomie",
    bahan: [
        "Indomie Soto 1 pcs",
        "Telur 1 pcs"
    ]
},

{
    id: 144,
    nama: "Indomie Soto Double Telur",
    kategori: "Makanan",
    sub_kategori: "Indomie",
    bahan: [
        "Indomie Soto 1 pcs",
        "Telur 2 pcs"
    ]
},

{
    id: 145,
    nama: "Indomie Soto Telur Kornet",
    kategori: "Makanan",
    sub_kategori: "Indomie",
    bahan: [
        "Indomie Soto 1 pcs",
        "Telur 1 pcs",
        "Kornet 25 g"
    ]
},
];
