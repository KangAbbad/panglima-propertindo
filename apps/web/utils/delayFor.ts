export const delayFor = async (s: number) => {
  await new Promise((resolve) => setTimeout(resolve, s));
};
