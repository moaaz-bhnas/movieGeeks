import React, { memo } from 'react';
import { 
  CommunicationSvg,
  CommunicationSvgPath
} from '../style';

const BellSvg = () => {
  return (
    <CommunicationSvg enableBackground="new 0 0 511.156 511.156" height="512" viewBox="0 0 511.156 511.156" width="512" xmlns="http://www.w3.org/2000/svg">
      <CommunicationSvgPath className="communicationSvgPath" d="m184.904 465.044c11.999 27.127 39.154 46.112 70.674 46.112s58.674-18.985 70.674-46.112z" />
      <CommunicationSvgPath className="communicationSvgPath" d="m255.573 48.836c20.8 0 40.772 3.67 59.306 10.389v-2.283c0-31.398-25.544-56.942-56.941-56.942h-4.719c-31.398 0-56.942 25.544-56.942 56.942v2.254c18.524-6.699 38.49-10.36 59.296-10.36z" />
      <CommunicationSvgPath className="communicationSvgPath" d="m442.747 435.044h-374.338c-7.082 0-13.569-4.776-15.042-11.704-1.458-6.859 1.668-13.629 8.01-16.559 1.505-.976 12.833-8.897 24.174-32.862 20.829-44.01 25.201-106.005 25.201-150.263 0-79.855 64.967-144.82 144.821-144.82 79.665 0 144.512 64.652 144.82 144.245.007.191.011.383.011.575 0 44.258 4.372 106.253 25.201 150.263 11.341 23.965 22.668 31.887 24.174 32.862 6.342 2.93 9.469 9.699 8.01 16.559-1.473 6.927-7.959 11.704-15.042 11.704zm7.2-28.157h.01z" />
    </CommunicationSvg>
  );
}

export default memo(BellSvg);