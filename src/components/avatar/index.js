import React, { memo } from 'react';
import { 
  StyledAvatar
} from './style';

const Avatar = (props) => {
  const { user, size } = props;
  const { name, avatar } = user;

  return (
    <StyledAvatar 
      src={avatar} 
      alt="" 
      size={size}
    />
  );
}

export default memo(Avatar);