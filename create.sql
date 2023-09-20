CREATE TABLE `Shirt` (
    `st_ID` varchar(25),
    `style` varchar(20),
    `color` varchar(15),
    `material` varchar(15),
    `brand` varchar(20),
    PRIMARY KEY (`st_ID`)
);

CREATE TABLE `Legwear` (
    `l_ID` varchar(25),
    `style` varchar(20),
    `color` varchar(15),
    `material` varchar(15),
    `brand` varchar(20),
    PRIMARY KEY (`l_ID`)
);

CREATE TABLE `Outerwear` (
    `o_ID` varchar(25),
    `style` varchar(20),
    `color` varchar(15),
    `material` varchar(15),
    `brand` varchar(20),
    PRIMARY KEY (`o_ID`)
);

CREATE TABLE `Shoes` (
    `sh_ID` varchar(25),
    `style` varchar(20),
    `color` varchar(15),
    `brand` varchar(20),
    PRIMARY KEY (`sh_ID`)
);

CREATE TABLE `Wardrobe` (
    `outfitID` varchar(25),
    `st_ID` varchar(25),
    `l_ID` varchar(25),
    `o_ID` varchar(25),
    `sh_ID` varchar(25),
    `rating` int,
    PRIMARY KEY (`outfitID`, `st_ID`, `l_ID`, `o_ID`, `sh_ID`),
    FOREIGN KEY (`st_ID`) REFERENCES `Shirt`(`st_ID`),
    FOREIGN KEY (`l_ID`) REFERENCES `Legwear`(`l_ID`),
    FOREIGN KEY (`o_ID`) REFERENCES `Outerwear`(`o_ID`),
    FOREIGN KEY (`sh_ID`) REFERENCES `Shoes`(`sh_ID`)
);

insert into Shirt(st_ID, style, color, material, brand)
value('1', 'Graphic Tee', 'Black', 'Cotton', 'Stussy');

insert into Legwear(l_ID, style, color, material, brand)
value('1', 'Shorts', 'Red', 'Mesh', 'Nike');

insert into Outerwear(o_ID, style, color, material, brand)
value('1', 'Jacket', 'Blue', 'Denim', 'Levi');

insert into Shoes(sh_ID, style, color, brand)
value('1', 'Sneakers', 'Red', 'Jordan');

insert into Wardrobe(outfitID, st_ID, l_ID, o_ID, sh_ID, rating)
value('A', '1', '1', '1', '1', '7');


select * from Shirt;
select * from Legwear;
select * from Outerwear;
select * from Shoes;
select * from Wardrobe;