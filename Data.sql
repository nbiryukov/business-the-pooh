# Пользователи
INSERT INTO User(login, password, name, isAdmin, productAmount, honeyAmount, idProductType, idPromotion) 
VALUES('super_owl44', 'yasovaatinet', 'Екатерина', false, 0, 0, (select idProductType from ProductType where type='P'), 1);
INSERT INTO User(login, password, name, isAdmin, productAmount, honeyAmount, idProductType, idPromotion) 
VALUES('P9ltA40k', 'pyatak2828', 'Дмитрий', false, 0, 0, (select idProductType from ProductType where type='B'), 1);
INSERT INTO User(login, password, name, isAdmin, productAmount, honeyAmount, idProductType, idPromotion) 
VALUES('rraabbiitt', 'aaaaa1234', 'Евстрат', false, 0, 0, (select idProductType from ProductType where type='F'), 1);



# КУРС:flowersForHoneyPot = 10, balloonsForHoneyPot = 10, potForHoneyPot = 5; 
# ОПЕРАЦИИ: 'B' - покупка, 'E' - ввод, 'G' - вывод
# 		
# Krolic										
#1
INSERT INTO Operation(type, date, productAmount, honeyPots, honeyCount, comission, idProductType) 
VALUES('E', '2017-10-31 08:20:43', 100, 0, 0, 0, (select idProductType from ProductType where type='F'));
#2
INSERT INTO Operation(type, date, productAmount, honeyPots, honeyCount, comission, idProductType) 
VALUES('B', '2017-10-31 15:30:43', 90, 9, 2.25, 0.3375, (select idProductType from ProductType where type='F'));
#3
INSERT INTO Operation(type, date, productAmount, honeyPots, honeyCount, comission, idProductType) 
VALUES('G', '2017-10-31 22:55:43', 0, 0,  0.5, 0, (select idProductType from ProductType where type='H'));

# Petya	
#4
INSERT INTO Operation(type, date, productAmount, honeyPots, honeyCount, comission, idProductType) 
VALUES('E', '2017-11-1 03:22:43', 10, 0, 0, 0, (select idProductType from ProductType where type='B'));
#5
INSERT INTO Operation(type, date, productAmount, honeyPots, honeyCount, comission, idProductType) 
VALUES('B', '2017-11-1 15:35:43', 10, 1, 0.25, 0.0375, (select idProductType from ProductType where type='B'));
#6
INSERT INTO Operation(type, date, productAmount, honeyPots, honeyCount, comission, idProductType) 
VALUES('G', '2017-11-2 16:30:43', 0, 0,  0.2125, 0, (select idProductType from ProductType where type='H'));

# Sova
#7
INSERT INTO Operation(type, date, productAmount, honeyPots, honeyCount, comission, idProductType) 
VALUES('E', '2017-10-31 22:25:00', 50, 0, 0, 0, (select idProductType from ProductType where type='B'));
#8
INSERT INTO Operation(type, date, productAmount, honeyPots, honeyCount, comission, idProductType) 
VALUES('B', '2017-11-1 6:30:43', 15, 3, 0.75, 0.1125, (select idProductType from ProductType where type='B'));
#9
INSERT INTO Operation(type, date, productAmount, honeyPots, honeyCount, comission, idProductType) 
VALUES('G', '2017-11-1 6:31:35', 0, 0,  0.63, 0, (select idProductType from ProductType where type='H'));

# КРОЛИКИ
INSERT INTO Deal(loginUser, idOperation) VALUES('rraabbiitt', 1);
INSERT INTO Deal(loginUser, idOperation) VALUES('rraabbiitt', 2);
INSERT INTO Deal(loginUser, idOperation) VALUES('rraabbiitt', 3);

# ПЯТАЧКИ
INSERT INTO Deal(loginUser, idOperation) VALUES('P9ltA40k', 4);
INSERT INTO Deal(loginUser, idOperation) VALUES('P9ltA40k', 5);
INSERT INTO Deal(loginUser, idOperation) VALUES('P9ltA40k', 6);

# СОВЫ
INSERT INTO Deal(loginUser, idOperation) VALUES('super_owl44', 7);
INSERT INTO Deal(loginUser, idOperation) VALUES('super_owl44', 8);
INSERT INTO Deal(loginUser, idOperation) VALUES('super_owl44', 9);

# Винни
INSERT INTO Operation(type, date, productAmount, honeyPots, honeyCount, comission, idProductType) 
VALUES('E', '2017-11-1 22:1:43', 0, 0,  0.4480, 0, (select idProductType from ProductType where type='H'));