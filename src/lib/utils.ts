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

export const slugify = function (text: string) {
  const trMap = {
    çÇ: 'c',
    ğĞ: 'g',
    şŞ: 's',
    üÜ: 'u',
    ıİ: 'i',
    öÖ: 'o',
  };
  for (const key in trMap) {
    text = text.replace(
      new RegExp('[' + key + ']', 'g'),
      trMap[key as keyof typeof trMap]
    );
  }
  return text
    .replace(/[^-a-zA-Z0-9\s]+/gi, '') // remove non-alphanumeric chars
    .replace(/\s/gi, '-') // convert spaces to dashes
    .replace(/[-]+/gi, '-') // trim repeated dashes
    .toLowerCase();
};
