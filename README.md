
## Интернет-магазин скутеров

Магазин с несколькими десятками моделей скутеров и аксессуаров к ним. 

Ссылка на деплой: https://dirk19991.github.io/Segway-Shop/

## Стек

[![My Skills](https://skillicons.dev/icons?i=react,redux,js,figma)](https://skillicons.dev)

\+ Material UI, React Router 6, библиотеки react-burger-menu, react-responsive, slick-carousel


## Полное описание

1. Реализована адаптивная верстка по макету в Figma. Модальное окно взято из библиотеки Material UI, для мобильной версии использованы библиотеки react-burger-menu и slick-carousel. 

<img src="https://user-images.githubusercontent.com/104031523/202393972-da926424-6812-45d4-9028-07ea58eb43bb.gif" alt="Alt text" title="Optional title" width=70% height=70%>

<img src="https://user-images.githubusercontent.com/104031523/202395618-bb74c6f8-d973-45d3-9e18-4e13a29d922a.gif" alt="Alt text" title="Optional title" width=70% height=70%>

2. Для хранения состояния используется Redux Toolkit, для сохранения состояния между запусками приложений - Redux-Persist. Товары можно добавлять и убирать из корзины, при клике на кнопку "ADD TO CART" она превращается в кнопку с количеством товаров, что позволяется удобно добавить несколько одинаковых товаров. Header сделан с position: sticky, а значок корзины показывает количество товаров с помощью псевдоэлемента, поэтому пользователь всегда видит состояние корзины.

<img src="https://user-images.githubusercontent.com/104031523/202401342-55d421e5-29b9-4607-9496-4953de6615b9.gif" alt="Alt text" title="Optional title" width=50% height=50%>

3. Навигация на странице выполнена с помощью react-router-hash-link и react-scroll-to-top.

<img src="https://user-images.githubusercontent.com/104031523/202402622-b7435866-119c-40e7-bdb7-605ebdec5751.gif" alt="Alt text" title="Optional title" width=70% height=70%>

## Инструкция по установке

```
git clone https://github.com/Dirk19991/Segway-Shop.git
cd .\Segway-Shop\
npm install
npm start
```
