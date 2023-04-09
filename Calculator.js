const result = document.getElementById('result');

const insertValue = (val) => {
  result.value += val;
};

const clearResult = () => {
  result.value = '';
};

const backspace = () => {
  result.value = result.value.slice(0, -1);
};

const calculate = () => {
  try {
    result.value = eval(result.value);
  } catch(error) {
    result.value = 'Error';
  };
};
