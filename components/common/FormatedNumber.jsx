import { string, oneOfType, number } from 'prop-types';

import useI18n from 'hooks/useI18n';

function FormatedNumber({ style, value }) {
  const { currentLang } = useI18n();

  return new Intl.NumberFormat(currentLang, {
    style,
  }).format(value);
}

FormatedNumber.propTypes = {
  style: string,
  value: oneOfType([string, number]).isRequired,
};

FormatedNumber.defaultProps = {
  style: 'decimal',
};

export default FormatedNumber;
