type ComponentProps = {
  children: React.ReactNode;
};

export default function Footer({ children, ...restProps }: ComponentProps) {
  <div {...restProps}>{children}</div>;
}
