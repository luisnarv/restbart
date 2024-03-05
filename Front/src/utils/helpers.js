export const color = function (value, colors) {
  if (value <= 20) {
    return colors[4];
  } else if (value <= 40) {
    return colors[3];
  } else if (value <= 60) {
    return colors[2];
  } else if (value <= 80) {
    return colors[1];
  } else if (value <= 100) {
    return colors[0];
  }
};
