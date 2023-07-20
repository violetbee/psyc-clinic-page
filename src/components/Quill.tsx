'use client';

import parse from 'html-react-parser';

const Quill = ({ content }: { content: string }) => {
  return parse(content);
};

export default Quill;
