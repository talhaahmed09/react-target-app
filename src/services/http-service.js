export const delay = (timer = 2000) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(), timer);
  });
};

export const getCurrentTarget = async () => {
  await delay();
  return Promise.resolve({ target: 10000, current: 8000 });
};
