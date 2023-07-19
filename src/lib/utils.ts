export const removeHtmlTags = (str: string) => {
  // remove html tags from string like <b> <strong> <i> <a> and also remove $nbsp; and &amp; etc.
  return str
    .replace(/<[^>]*>?/gm, '')
    .replace(/&nbsp;/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
};
