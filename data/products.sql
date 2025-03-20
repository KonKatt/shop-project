CREATE TABLE products (
    id varchar(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    rating_stars DECIMAL(2, 1),
    rating_count INT,
    price DECIMAL(10, 2) NOT NULL,
    keywords TEXT, 
    type VARCHAR(20), 
    size VARCHAR(10), 
    warranty_period VARCHAR(50),
    PRIMARY KEY (id)
);

INSERT INTO products (id, image, name, rating_stars, rating_count, price, keywords, type, size, warranty_period) VALUES
('39f55601-9dd0-420d-8ed4-390fc8749a1b', 'athletic-cotton-socks-6-pairs.jpg', 'Носки высокие набор', 4.5, 87, 500, 'носки, спорт, одежда', 'clothing', '36', NULL),
('17f2af35-dc86-4a43-9a72-b992268eafeb', 'intermediate-composite-basketball.jpg', 'Баскетбольный мяч', 4.0, 127, 600, 'спорт, баскетболл', NULL, NULL, NULL),
('148c712b-70a1-42ac-93a4-0dbc61e5e9b4', 'adults-plain-cotton-tshirt-2-pack-teal.jpg', 'Рубашки мужские взрослые - 2 в наборе', 4.5, 56, 799, 'футболка, одежда, мужское', 'clothing', '41', NULL),
('80f1b9be-440a-4938-8ff0-a2e3449e6668', 'vacuum_cleaner.png', 'Бытовой пылесос 2000 Series XB2042', 5.0, 2197, 6899, 'пылесос, для дома, техника', 'appliance', NULL, '5 лет'),
('01bbeee3-4d0c-4c42-89f6-305dd305abca', 'adults-plain-cotton-tshirt-2-pack-red.jpg', 'Рубашки мужские взрослые - 2 в наборе', 4.5, 56, 799, 'футболка, одежда, мужское', 'clothing', '45', NULL),
('fd782da2-8ada-4742-9cc2-475792f145fc', 'men-cozy-fleece-zip-up-hoodie-black.jpg', 'Толстовка черная мужская взрослая', 3.5, 56, 1099, 'толстовка, свитшот, одежда, мужское, худи', 'clothing', '60', NULL),
('b880acff-ebb7-4614-831b-bf7d9fa21fd5', 'plain-hooded-fleece-sweatshirt-teal.jpg', 'Толстовка женская зеленая', 4.5, 317, 1200, 'худи, толстовка, одежда, женское, свитшот', 'clothing', '60', NULL),
('77919bbe-0e56-475b-adde-4f24dfed3a04', 'cotton-bath-towels-gray.png', 'Роскошный набор полотенец - Графитовый серый', 4.5, 144, 249, 'ванная, полотенце', NULL, NULL, NULL),
('3fdfe8d6-9a15-4979-b459-585b0d0545b9', 'liquid-laundry-detergent-plain.jpg', 'Жидкое моющее средство для стирки', 4.5, 305, 549, 'ванная, уборка, моющее средство', NULL, NULL, NULL),
('58b4fc92-e98c-42aa-8c55-b6b79996769a', 'knit-athletic-sneakers-gray.jpg', 'Водонепроницаемые спортивные кроссовки', 4.0, 89, 4390, 'ботинки, спорт, обувь', 'clothing', '39', NULL),
('aad29d11-ea98-41ee-9285-b916638cac4a', 'round-sunglasses-black.jpg', 'Очки солнечные', 4.5, 30, 1560, 'очки аксессуары, пляж', NULL, NULL, NULL),
('04701903-bc79-49c6-bc11-1af7e3651358', 'women-beach-sandals.jpg', 'Женские сандали - бежевые', 4.5, 562, 2499, 'обувь, сандали, женское, пляж, лето', 'clothing', '34', NULL),
('901eb2ca-386d-432e-82f0-6fb1ee7bf969', 'blackout-curtains-black.jpg', 'Комплект затемняющих штор, 4 шт', 4.5, 232, 4599, 'спальня, шторы, дом', NULL, NULL, NULL),
('82bb68d7-ebc9-476a-989c-c78a40ee5cd9', 'umbrella.jpg', 'Зонт темно-зеленый дождевой', 4.0, 160, 699, 'аксессуары, дождь', NULL, NULL, NULL),
('c2a82c5e-aff4-435f-9975-517cfaba2ece', 'electric-glass-and-steel-hot-water-kettle.webp', 'Электрический чайник для заваривания чая из стекла', 5.0, 846, 3074, 'бытовая техника, кухня', 'appliance', NULL, '1 год'),
('a82c6bac-3067-4e68-a5ba-d827ac0be010', 'straw-sunhat.webp', 'Соломенная шляпа', 4.0, 215, 2200, 'шляпки, соломенная шляпа, лето', NULL, NULL, NULL);