"use client";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const page = () => {
  const images = [
    "https://sibirkoleso.ru/upload/iblock/ec8/batch_3.jpg",
    "https://sibirkoleso.ru/upload/iblock/f81/batch_2.jpg",
    "https://sibirkoleso.ru/upload/iblock/451/batch_1.jpg",
  ];

  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-[75%] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">О компании</h1>

      <p className="mb-8">
        Склад-магазин: «Сибирь Колесо» Мы представляем вашему вниманию широкий
        выбор зимних и летних шин. Наш ассортимент постоянно обновляется и
        пополняется. Обращайтесь в нашу компанию и вы убедитесь, что
        сотрудничать с нами не только выгодно и удобно, но и очень приятно. Не
        случайно наш магазин имеет много постоянных клиентов с которыми мы
        благотворно работаем вот уже много лет.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Широкий ассортимент</h2>
          <p>
            Наша компания предлагает все виды моделей шин, как для спокойной
            езды в населенном пункте, так и для комфортной и надежной езды при
            высокой скорости за городом. Являясь официальным дилером многих
            всемирно известных производителей шин и дисков, мы предлагаем
            качественную продукцию по низким ценам.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Профессионализм</h2>
          <p>
            Теперь нет нужды «носиться» по всему городу в поисках подходящих
            шин, достаточно позвонить по нашему номеру телефона. Наш сайт
            функционирует круглосуточно, мы принимаем заказы по всей России,
            даем подробную, детальную консультацию по всем интересующим
            вопросам.
          </p>
        </div>
      </div>

      <p className="mb-8">
        Наши специалисты без труда подберут для вас нужные шины и диски,
        учитывая все индивидуальные особенности вашего автомобиля. Если вы
        затрудняетесь самостоятельно сделать выбор, наши консультанты с радостью
        и абсолютно бесплатно помогут вам. Подберут подходящий размер,
        производителя, цену и. т. д. Если в нашем ассортименте не оказалось
        каких- то конкретных шин, которые вы ищете, мы пойдем вам навстречу,
        выполнив ваш индивидуальный заказ по доставке эксклюзивного товара.
      </p>

      <div className="mt-8 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 mb-4 md:mb-0">
          <Slider ref={setSliderRef} {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} className="w-full h-auto" />
              </div>
            ))}
          </Slider>
          <div className="mt-2 text-center">
            <button
              onClick={() => sliderRef?.slickPrev()}
              className="mr-2 px-3 py-1 bg-gray-200 rounded"
            >
              &lt;
            </button>
            <button
              onClick={() => sliderRef?.slickNext()}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              &gt;
            </button>
          </div>
          <p className="text-sm text-gray-600 text-center mt-2">
            Магазин «Сибирь-Колесо» на ул. Петухова 35, корпус 8
          </p>
        </div>
        <div className="w-full md:w-1/3 md:pl-8">
          <p className="mb-4">
            Мы всегда готовы выслушать ваши пожелания и замечания по работе
            нашего магазина, для этого вам нужно позвонить по телефону:
          </p>
          <div className="text-center">
            <a
              href="tel:88007751050"
              className="text-3xl font-bold text-blue-600"
            >
              8 800 775 1050
            </a>
            <p className="text-sm text-gray-600">(звонок бесплатный)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
