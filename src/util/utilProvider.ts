export const utilProvider = {
  replaceDoubleQouteToSingle(input: string): string {
    /*eslint-disable */
    const result = input.replace(/"/g, "'");
    return result;
    /*eslint-enable */
  },

  removeTime(date: any) {
    return (
      date.getFullYear().toString() +
      '-' +
      (date.getMonth() + 1) +
      '-' +
      date.getDate()
    );
  },
};
