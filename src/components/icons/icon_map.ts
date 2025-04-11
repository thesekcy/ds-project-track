import React from 'react';
import { ConfigIcon } from "./svg/config";
import { IconProps } from "../../types/IconsTypes";
import { NotificationIcon } from "./svg/notification";
import { EnhancedSearchIcon } from './svg/enhanced_search';
import { SunIcon } from './svg/sun';

type IconMap = {
  [key: string]: (props: IconProps) => React.ReactElement;
};

const iconMap: IconMap = {
  ConfigIcon,
  NotificationIcon,
  EnhancedSearchIcon,
  SunIcon
};

export default iconMap;
