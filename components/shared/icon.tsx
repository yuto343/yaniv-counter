import { FunctionComponent } from "react";
import Svg, { Path, Rect } from "react-native-svg";
import { CSS_COLOR } from "../../constants/style";
type IconProps = {
  size: number;
  color?: string;
};
export const IconPlus: FunctionComponent<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox='0 0 22 22' fill='none'>
    <Path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M10.9998 0C9.98732 0 9.1665 0.82081 9.1665 1.83333V9.16633H1.83333C0.820811 9.16633 0 9.98714 0 10.9997C0 12.0122 0.82081 12.833 1.83333 12.833H9.1665V20.1667C9.1665 21.1792 9.98732 22 10.9998 22C12.0124 22 12.8332 21.1792 12.8332 20.1667V12.833H20.1667C21.1792 12.833 22 12.0122 22 10.9997C22 9.98714 21.1792 9.16633 20.1667 9.16633H12.8332V1.83333C12.8332 0.820811 12.0124 0 10.9998 0Z'
      fill={color}
    />
  </Svg>
);
export const IconClose: FunctionComponent<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox='0 0 15 15' fill='none'>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12.8492 7.89947C12.8492 10.6331 10.6331 12.8492 7.89941 12.8492C5.16574 12.8492 2.94967 10.6331 2.94967 7.89947C2.94967 5.1658 5.16574 2.94973 7.89941 2.94973C10.6331 2.94973 12.8492 5.1658 12.8492 7.89947ZM9.36537 5.68126C9.56885 5.47778 9.89874 5.47778 10.1022 5.68126C10.3057 5.88473 10.3057 6.21463 10.1022 6.4181L8.62863 7.89169L10.1024 9.36545C10.3059 9.56893 10.3059 9.89882 10.1024 10.1023C9.89892 10.3058 9.56903 10.3058 9.36555 10.1023L7.89179 8.62853L6.418 10.1023C6.21453 10.3058 5.88463 10.3058 5.68116 10.1023C5.47769 9.89884 5.47769 9.56894 5.68116 9.36547L7.15494 7.89169L5.68134 6.41809C5.47787 6.21461 5.47787 5.88472 5.68134 5.68124C5.88482 5.47777 6.21471 5.47777 6.41819 5.68124L7.89179 7.15484L9.36537 5.68126Z'
      fill={color ?? CSS_COLOR.DANGER}
    />
  </Svg>
);

export const IconClose2: FunctionComponent<IconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox='0 0 17 17' fill='none'>
    <Rect
      x='12.0206'
      y='3.53546'
      width='2'
      height='12'
      rx='1'
      transform='rotate(45 12.0206 3.53546)'
      fill={color ?? CSS_COLOR.BLACK}
    />
    <Rect
      x='3.53564'
      y='4.94965'
      width='2'
      height='12'
      rx='1'
      transform='rotate(-45 3.53564 4.94965)'
      fill={color ?? CSS_COLOR.BLACK}
    />
  </Svg>
);
