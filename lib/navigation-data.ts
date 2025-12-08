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
          { label: '1-комнатные квартиры', href: '/kvartiry/1-komnatnye' },
          { label: '2-комнатные квартиры', href: '/kvartiry/2-komnatnye' },
          { label: '3-комнатные квартиры', href: '/kvartiry/3-komnatnye' },
        ],
      },
      {
        label: 'По району',
        href: '#',
        children: [
          { label: 'Квартиры в Центральном районе', href: '/kvartiry/tsentralnyy-rayon' },
          { label: 'Квартиры в Хостинском районе', href: '/kvartiry/khostinskiy-rayon' },
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
          { label: 'Апартаменты', href: '/kvartiry/apartamenty' },
          { label: 'Пентхаусы', href: '/kvartiry/penthausy' },
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
          { label: 'Дома эконом-класса', href: '/doma/ekonom-klass' },
        ],
      },
      {
        label: 'По типу',
        href: '#',
        children: [
          { label: 'Коттеджные посёлки', href: '/doma/kottedzhnye-poselki' },
          { label: 'Коттеджи', href: '/doma/kottedzhi' },
          { label: 'Таунхаусы', href: '/doma/taunkhausy' },
          { label: 'Виллы', href: '/doma/villy' },
          { label: 'Частные дома', href: '/doma/chastnye-doma' },
          { label: 'Эллинги', href: '/doma/ellingi' },
        ],
      },
    ],
  },
  {
    label: 'Новостройки',
    href: '/novostroyki',
  },
  {
    label: 'Участки',
    href: '/uchastki',
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

