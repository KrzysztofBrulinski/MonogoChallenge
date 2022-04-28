# EXERCISE DESCRIPTION

Zadaniem konkursowym jest napisanie skryptu JS, który znajdzie określoną liczbę na podstawie danych wejściowych podanych w pliku tekstowym oraz danych firmy dostępnych na stronie internetowej Monogo.

Po pierwsze, musisz wczytać dane z pliku input.txt (plik ten znajdziesz pod linkiem https://www.monogo.pl/competition/input.txt) za pomocą JS (nie kopiuj zawartości tego pliku!).

Otrzymasz obiekt z 4 właściwościami: selectedFilters, products, colors i sizes.

Musisz pogrupować produkty według ich opcji kolorów i rozmiarów za pomocą pola ID (zwróć uwagę na typy danych!). Jeden produkt może mieć tylko jedną opcję rozmiaru i koloru (nie ma duplikatów produktów i ich opcji).

Następnie należy odfiltrować zgrupowane produkty, aby dopasować je do wybranych filtrów i uzyskać tylko te produkty, których cena jest wyższa niż 200 (x > 200).

Następnie należy uzyskać wartość poprzez pomnożenie najniższej i najwyższej ceny z przefiltrowanej listy produktów. Wynik należy sformatować tak, aby był liczbą całkowitą (zaokrągloną, bez części ułamkowej).

Następnie musisz utworzyć tablicę z liczby, którą wcześniej otrzymałeś, dodając co drugą cyfrę tej liczby do poprzedniej (np. 123456 -> [1 + 2, 3 + 4, 5 + 6] -> [3, 7, 11].

Wynik będzie rezultatem mnożenia indeksu numeru lubelskiego biurowca Monogo w tablicy z punktu 5, wartości, którą otrzymałeś w punkcie 4, oraz długości nazwy firmy "Monogo".

Rozwiązanie prosimy umieścić na swoim repozytorium GitHub lub GitLab i przesłać nam link. Skrypt powinien dać się wywołać za pomocą node.js, a wynik powinien być prezentowany w konsoli za pomocą console.log().

# HOW TO RUN SCRIPT

## RUN
```
node challange.mjs
```

## OR

```
nodemon challange.mjs
```