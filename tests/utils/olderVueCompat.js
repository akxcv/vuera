import Vue from '@vue/compat'

/**
 * In Vue < 2.4.0, there's no $attrs or $listeners. We have to pass props through a registered
 * prop `passedProps`.
 */
export default function olderVueCompat (options) {
  if (Vue.version.startsWith('2.4')) return options
  return {
    props: {
      ...options.props,
      passedProps: {
        ...options.attrs,
        ...options.on,
      },
    },
  }
}
