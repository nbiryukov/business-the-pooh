# Помощник ведения учета и обмена мёда #

Помощник, помогающий вести подробный учет расходов и доходов жителям леса вселенной Винни Пуха.
Данный веб-сервис организует процесс купли-продажи пчелиного мёда за товары жителей. Поддерживаются следующие типы товаров:

1. *цветы* (тип пользователя - Кролик),
2. *горшочки* (тип пользователя - Совунья),
3. *воздушные шарики* (тип пользователя - Пятачок).

Поддерживаемые типы пользователей и их иерархия:

1. ПЧЕЛЫ - основные поставщики мёда жителям. Пчелы регулируют курс мёда к товарам жителей в зависимости от имеющихся в наличии у пчел товаров на начало нового дня.
2. ВИННИ ПУХ - "администратор" леса. Работает на пчел, каждое утро обходя жителей, собирая с них комиссию за проведенные операции обмена. Собранный комиссионный мёд возвращает пчёлам, за что те оплачивают его услуги, отдавая ему половину им же собранного меда.
3. ЖИТЕЛИ - обычные жители леса. Жителями являются Кролик, Совунья и Пятачок. За каждым жителем закреплен его определенный тип товара, с помощью которого он может проводить операции обмена.

### Основная информация об операциях внутри помощника ###

1. Система работает с пчелами, предоставляющими мёд. Объем мёда фиксирован на день и продается банками фиксированного объема. 
2. Операционный день считается с 7:00 по мск до 7:00 по мск. Курс мёда меняется ежедневно.
3. Пчелы продают мёд банками. Жители хранят имеющийся у них мёд в таре свободного объема (он не регламентируется).
4. Система обмена считается "цельнотоварной" - обмен производится на целые товары поштучно.
5. Жители имеют право "вывести" приобретенный мёд из системы для личных нужд при условии, что объем меда, который они желают вывести допустимый (не содержит "комиссионный мед").
6. За обмен жителям необходимо платить комиссию. Размер комиссии фиксирован и всегда измеряется в мёде. Комиссия за вывод "мёда" из системы не берется.
7. При совершении сделки с пчелами, жителю сообщается информация о комиссии по данной операции. 
8. Пользователю запрещается тратить мёд в таком объеме, что оставшегося количества будет недостаточно для оплаты комиссии по операции.
9. Согласно п. 4, если товара жителя согласно текущему курсу хватает, например, на 3,5 банки меда, то он может купить только наибольшее целое число банок (т.е. 3 банки).
10. Для работы с помощником пользователь/житель должен зарегистрироваться и иметь свой логин и пароль.

Также пользователи могут отследить динамику изменения курса мёда и историю совершенных операций.

### Бизнес-процесс ###

Описание бизнес-процесса на примере успешного сценария обмена товаров.
Примечание: в сценарии пользователем считается житель леса.
Предусловие: пользователь выполнил вход в систему.

1. Если пользователь желает ввести свой товар в систему, то он вводит свой товар в систему.
2. Пользователь изучает курс обмена его товара на мёд.
3. Если пользователя устраивает данный курс и количества его товара достаточно для совершения операции..
	3.1. Пользователь выбирает количество товара, которое он готов обменять на удовлетворяющее его количество банок мёда.
	3.2. Пользователь ознакамливается с комиссией за операцию.
	3.3. Пользователь подтверждает операцию обмена.
	3.4. На счет пользователя зачисляется купленный мёд.
	3.5. На следующий операционный день после совершения операции (ближайшее будущее время 7:00) обмена к пользователю приходит Винни Пух и собирает комиссионный мед.

### Цели проекта ###

Основными целями проекта явлются:

1. повышение эффективности отслеживания медового "депозита",
2. упрощение процесса покупки мёда,
3. упрощение анализа изменения курса мёда.

### Область применения ###

Помощник может быть использован на торговых площадках (в частности при бартерном процессе) покупателями при совершении сделок.

### Состав команды на текущий момент ###

Подранюк Екатерина - руководитель команды (тимлид), архитектор, разработчик (frontend), менеджер.

Борзых Алексей - разработчик (backend), тестировщик, менеджер.

Бирюков Никита - разработчик (backend+frontend), архитектор, тестировщик.