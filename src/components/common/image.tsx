import React, { useMemo } from 'react';
import { CustomField } from '../../types/global';
import { imageUrlGenerator } from '../../utils/image-url-generator';
import { getCustomFieldValue } from '../../utils/custom-field-handler';

interface ImageProps {
  fileds: CustomField[];
}

const Image: React.FC<ImageProps> = ({ fileds = [] }) => {
  const url = getCustomFieldValue(fileds, 'cover_image')?.id;

  return (
    <div
      className='w-full h-full bg-cover bg-center absolute top-0 start-0'
      style={{
        backgroundImage: `url(${imageUrlGenerator(url)})`,
      }}
    ></div>
  );
};

export default Image;
