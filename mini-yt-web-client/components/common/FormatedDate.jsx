import {
  string, oneOfType, number, instanceOf,
} from 'prop-types';

import useI18n from 'hooks/useI18n';

function FormatedDate({ date }) {
  const { currentLang } = useI18n();

  return Intl.DateTimeFormat(currentLang).format(new Date(date));
}

FormatedDate.propTypes = {
  className: string,
  date: oneOfType([string, number, instanceOf(Date)]).isRequired,
};

FormatedDate.defaultProps = {
  className: undefined,
};

export default FormatedDate;
