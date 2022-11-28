declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.json' {
  const value: any;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

declare module 'react-imask' {
  import IMask from 'imask';

  export type IMaskInputProps = {
    value?: number | string;
    unmask?: 'typed' | boolean;
    className?: string;
    ref?: React.MutableRefObject<null>;
    inputRef?: React.MutableRefObject<null>;
    placeholder?: string;
    // events
    onAccept?: <T>(
      value: string,
      maskRef: IMask.InputMask<IMask.AnyMaskedOptions>,
      ...args: T[]
    ) => void;
    onComplete?: <T>(
      value: string,
      maskRef: IMask.InputMask<IMask.AnyMaskedOptions>,
      ...args: T[]
    ) => void;

    dispatch?: (
      value: string,
      masked: IMask.MaskedDynamic,
      flags: IMask.AppendFlags
    ) => IMask.AnyMasked | null | undefined;
  } & IMask.AnyMaskedOptions;

  export function IMaskMixin<T, D>(
    Component: React.ComponentType<{ inputRef?: React.Ref<D> } & T>
  ): React.ComponentType<T & IMaskInputProps>;

  export const IMaskInput: React.ComponentType<IMaskInputProps>;
}
