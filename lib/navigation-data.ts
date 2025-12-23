export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigationData: NavItem[] = [
  {
    label: 'Главная',
    href: '/',
  },
  {
    label: 'Квартиры',
    href: '/kvartiry',
    children: [
      {
        label: 'По классу',
        href: '#',
        children: [
          { label: 'Элитные квартиры', href: '/kvartiry/elitnye' },
          { label: 'Квартиры бизнес-класса', href: '/kvartiry/biznes' },
          { label: 'Квартиры эконом-класса', href: '/kvartiry/ekonom-klass' },
          { label: 'Квартиры среднего класса', href: '/kvartiry/sredniy-klass' },
        ],
      },
      {
        label: 'По количеству комнат',
        href: '#',
        children: [
          { label: 'Студии', href: '/kvartiry/studii' },
          { label: '1-комнатные квартиры', href: '/kvartiry/1kom' },
          { label: '2-комнатные квартиры', href: '/kvartiry/2kom' },
          { label: '3-комнатные квартиры', href: '/kvartiry/3kom' },
        ],
      },
      {
        label: 'По району',
        href: '#',
        children: [
          { label: 'Квартиры в Центральном районе', href: '/kvartiry/central' },
          { label: 'Квартиры в Хостинском районе', href: '/kvartiry/hostinsky' },
          { label: 'Квартиры в Мамайке', href: '/kvartiry/mamayka' },
          { label: 'Квартиры в Адлере', href: '/kvartiry/adler' },
          { label: 'Квартиры в Красной Поляне', href: '/kvartiry/krasnaya-polyana' },
          { label: 'Квартиры в Мацесте', href: '/kvartiry/matsesta' },
          { label: 'Квартиры в Дагомысе', href: '/kvartiry/dagomys' },
          { label: 'Квартиры в Бытхе', href: '/kvartiry/bytkha' },
        ],
      },
      {
        label: 'По типу',
        href: '#',
        children: [
          { label: 'Апартаменты', href: '/kvartiry/apartments' },
          { label: 'Пентхаусы', href: '/kvartiry/penthouse' },
        ],
      },
      {
        label: 'Дополнительно',
        href: '#',
        children: [
          { label: 'Квартиры в ипотеку', href: '/kvartiry/v-ipoteku' },
          { label: 'Квартиры у моря', href: '/kvartiry/u-morya' },
          { label: 'Квартиры в центре Сочи', href: '/kvartiry/v-tsentre-sochi' },
          { label: 'Квартиры вторичка', href: '/kvartiry/vtorichka' },
        ],
      },
    ],
  },
  {
    label: 'Дома',
    href: '/doma',
    children: [
      {
        label: 'По классу',
        href: '#',
        children: [
          { label: 'Элитные дома', href: '/doma/elitnye' },
          { label: 'Элитные коттеджи', href: '/doma/elitnye-kottedzhi' },
          { label: 'Дома эконом-класса', href: '/doma/ekonom' },
        ],
      },
      {
        label: 'По типу',
        href: '#',
        children: [
          { label: 'Коттеджные посёлки', href: '/doma/kottedzhi-poselki' },
          { label: 'Коттеджи', href: '/doma/kottedzhi' },
          { label: 'Таунхаусы', href: '/doma/taunkhausy' },
          { label: 'Виллы', href: '/doma/villy' },
          { label: 'Частные дома', href: '/doma/chastnye' },
          { label: 'Эллинги', href: '/doma/ellingi' },
        ],
      },
      {
        label: 'По району',
        href: '#',
        children: [
          { label: 'Дома в Центральном районе', href: '/doma/central' },
          { label: 'Дома в Хостинском районе', href: '/doma/hostinsky' },
          { label: 'Дома в Мамайке', href: '/doma/mamayka' },
          { label: 'Дома в Адлере', href: '/doma/adler' },
          { label: 'Дома в Красной Поляне', href: '/doma/krasnaya-polyana' },
          { label: 'Дома в Мацесте', href: '/doma/matsesta' },
          { label: 'Дома в Дагомысе', href: '/doma/dagomys' },
          { label: 'Дома в Бытхе', href: '/doma/bytkha' },
          { label: 'Дома в Кудепсте', href: '/doma/kudepsta' },
          { label: 'Дома в Лазаревский', href: '/doma/lazarevskoe' },
        ],
      },
      {
        label: 'Дополнительно',
        href: '#',
        children: [
          { label: 'Дом от собственника', href: '/doma/ot-sobstvennika' },
          { label: 'Дома в центре Сочи', href: '/doma/v-tsentre' },
          { label: 'Дома у моря в Сочи', href: '/doma/u-morya' },
        ],
      },
    ],
  },
  {
    label: 'Новостройки',
    href: '/novostroyki',
    children: [
      {
        label: 'Класс',
        href: '#',
        children: [
          { label: 'Элитные новостройки', href: '/novostroyki/elitnye' },
          { label: 'Новостройки бизнес-класса', href: '/novostroyki/biznes-klass' },
          { label: 'Новостройки эконом-класса', href: '/novostroyki/ekonom-klass' },
        ],
      },
      {
        label: 'Готовность',
        href: '#',
        children: [
          { label: 'Сданные новостройки', href: '/novostroyki/sdannye' },
          { label: 'Строящиеся новостройки', href: '/novostroyki/stroyashchiesya' },
        ],
      },
      {
        label: 'Район',
        href: '#',
        children: [
          { label: 'Новостройки в Центральном районе', href: '/novostroyki/centralnyy-rayon' },
          { label: 'Новостройки в Хосте', href: '/novostroyki/hostinskiy-rayon' },
          { label: 'Новостройки в Кудепсте', href: '/novostroyki/kudepsta' },
          { label: 'Новостройки в Мамайке', href: '/novostroyki/mamayka' },
          { label: 'Новостройки в Бытхе', href: '/novostroyki/bytkha' },
          { label: 'Новостройки в Адлере', href: '/novostroyki/adler' },
          { label: 'Новостройки в Красной Поляне', href: '/novostroyki/krasnaya-polyana' },
          { label: 'Новостройки в Мацесте', href: '/novostroyki/matsesta' },
          { label: 'Новостройки в Дагомысе', href: '/novostroyki/dagomys' },
        ],
      },
      {
        label: 'Дополнительно',
        href: '#',
        children: [
          { label: 'Новостройки у моря', href: '/novostroyki/u-morya' },
          { label: 'Новостройки в ипотеку', href: '/novostroyki/ipoteka' },
          { label: 'Новостройки по ФЗ-214', href: '/novostroyki/fz-214' },
          { label: 'Новостройки от застройщика', href: '/novostroyki/ot-zastroyshchika' },
        ],
      },
    ],
  },
  {
    label: 'Участки',
    href: '/uchastki',
    children: [
      {
        label: 'Класс',
        href: '#',
        children: [
          { label: 'Элитные участки', href: '/uchastki/elitnye' },
          { label: 'Недорогие участки', href: '/uchastki/nedorogie' },
        ],
      },
      {
        label: 'Площадь',
        href: '#',
        children: [
          { label: 'Участки до 10 соток', href: '/uchastki/do-10-sotok' },
          { label: 'Участки от 10 до 30 соток', href: '/uchastki/ot-10-do-30-sotok' },
          { label: 'Участки от 30 до 60 соток', href: '/uchastki/ot-30-do-60-sotok' },
          { label: 'Участки от 60 соток до 1 га', href: '/uchastki/ot-60-sotok-do-1-ga' },
          { label: 'Участки свыше 1 га', href: '/uchastki/svyshe-1-ga' },
        ],
      },
      {
        label: 'Район',
        href: '#',
        children: [
          { label: 'Участки в Адлере', href: '/uchastki/adler' },
          { label: 'Участки в Дагомысе', href: '/uchastki/dagomys' },
          { label: 'Участки в Мамайке', href: '/uchastki/mamayka' },
          { label: 'Участки в Мацесте', href: '/uchastki/matsesta' },
          { label: 'Участки в Красной Поляне', href: '/uchastki/krasnaya-polyana' },
          { label: 'Участки в Кудепсте', href: '/uchastki/kudepsta' },
          { label: 'Участки в Хостинском районе', href: '/uchastki/hostinsky' },
          { label: 'Участки в Лазаревском', href: '/uchastki/lazarevskoe' },
          { label: 'Участки в Лоо', href: '/uchastki/loo' },
          { label: 'Участки в Голицыно', href: '/uchastki/golitsyno' },
        ],
      },
      {
        label: 'Использование',
        href: '#',
        children: [
          { label: 'Участки под ИЖС', href: '/uchastki/izhs' },
          { label: 'Участки под садоводство', href: '/uchastki/sadovodstvo' },
          { label: 'Участки под ЛПХ', href: '/uchastki/lph' },
          { label: 'Дачные участки', href: '/uchastki/dachnye' },
        ],
      },
      {
        label: 'Дополнительно',
        href: '#',
        children: [
          { label: 'Участки в горах', href: '/uchastki/gory' },
          { label: 'Участки в центре Сочи', href: '/uchastki/v-tsentre' },
          { label: 'Участки у моря', href: '/uchastki/u-morya' },
          { label: 'Участки от собственника', href: '/uchastki/ot-sobstvennika' },
        ],
      },
    ],
  },
  {
    label: 'Коммерция',
    href: '/kommerciya',
  },
  {
    label: 'Аренда',
    href: '/arenda',
  },
  {
    label: 'О компании',
    href: '/o-kompanii',
  },
];

