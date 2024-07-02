function validateParams(textToConvert, toCase) {
  const errors = [];
  const availableCases = ['SNAKE', 'KEBAB', 'CAMEL', 'PASCAL', 'UPPER'];

  if (!textToConvert) {
    errors.push({
      message:
        'Text to convert is required. Correct request is: ' +
        '"/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>".',
    });
  }

  if (!toCase) {
    errors.push({
      message:
        '"toCase" query param is required. Correct request is: ' +
        '"/<TEXT_TO_CONVERT>?toCase=<CASE_NAME>".',
    });
  }

  if (toCase && !availableCases.includes(toCase)) {
    errors.push({
      message:
        'This case is not supported. Available cases: ' +
        'SNAKE, KEBAB, CAMEL, PASCAL, UPPER.',
    });
  }

  return errors;
}

module.exports = { validateParams };
