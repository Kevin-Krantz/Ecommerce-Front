interface IButtonProps {
  $white?: boolean;
  $outline?: boolean;
  $primary?: boolean;
  size?: string;
  $block?: boolean;
  $black?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: string;
}
