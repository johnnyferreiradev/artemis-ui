import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
  base: [
    'au-sheet-content bg-light dark:bg-grayscale-900',
    'fixed z-30 gap-4 p-6 shadow-lg transition ease-in-out',
    'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
  ],
  variants: {
    side: {
      top: 'inset-x-0 top-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
      bottom:
        'inset-x-0 bottom-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
      left: 'inset-y-0 left-0 h-full w-3/4 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
      right:
        'inset-y-0 right-0 h-full w-3/4 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm',
    },
  },
  defaultVariants: {
    side: 'right',
  },
});
