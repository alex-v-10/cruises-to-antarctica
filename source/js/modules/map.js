const LOCATION = [59.938631, 30.323037];

function init() {
  let myMap = new ymaps.Map('map', {
    center: LOCATION,
    zoom: 16,
  });

  let myPlacemark = new ymaps.Placemark(LOCATION, {
    hintContent: 'г. Санкт Петербург, ул. Большая Конюшенная, 19/8',
  }, {
    iconLayout: 'default#image',
    iconImageHref: './img/svg/map-pin.svg',
    iconImageSize: [18, 22],
    iconImageOffset: [-9, -22],
  });

  myMap.geoObjects.add(myPlacemark);
}

const initMap = () => {
  ymaps.ready(init);
};

export {initMap};
