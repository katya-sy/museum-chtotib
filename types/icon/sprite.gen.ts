export interface SpritesMap {
  shared:
    | 'arrow right'
    | 'cart'
    | 'catalog'
    | 'check'
    | 'close'
    | 'down'
    | 'email'
    | 'first'
    | 'geoloc'
    | 'left'
    | 'menu'
    | 'minus'
    | 'plus'
    | 'right'
    | 'search'
    | 'tel'
    | 'up'
    | 'user';
}
export const SPRITES_META: {
  [Key in keyof SpritesMap]: {
    filePath: string;
    items: Record<
      SpritesMap[Key],
      {
        viewBox: string;
        width: number;
        height: number;
      }
    >;
  };
} = {
  shared: {
    filePath: 'shared.svg',
    items: {
      'arrow right': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
      cart: {
        viewBox: '0 0 30 30',
        width: 30,
        height: 30,
      },
      catalog: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
      check: {
        viewBox: '0 0 30 30',
        width: 30,
        height: 30,
      },
      close: {
        viewBox: '0 0 30 30',
        width: 30,
        height: 30,
      },
      down: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
      email: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
      first: {
        viewBox: '0 0 21 12',
        width: 21,
        height: 12,
      },
      geoloc: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
      left: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
      menu: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
      minus: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
      plus: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
      right: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
      search: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
      tel: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
      up: {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24,
      },
      user: {
        viewBox: '0 0 30 30',
        width: 30,
        height: 30,
      },
    },
  },
};
