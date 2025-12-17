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

