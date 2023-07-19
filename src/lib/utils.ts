export const removeHtmlTags = (str: string) => {
  // remove html tags and $nbsp; and tab space from string
  return str.replace(/<[^>]*>?|&nbsp;/g, '');
};
