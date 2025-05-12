import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image'; // Se estiver usando Next.js

const ArticleRenderer = ({ content }) => {
  return (
    <ReactMarkdown 
      rehypePlugins={[rehypeRaw]}
      components={{
        img: ({ node, ...props }) => (
          <Image 
            src={props.src} 
            alt={props.alt || ''} 
            width={800} 
            height={500}
            className="rounded-lg my-4"
          />
        ),
        a: ({ node, ...props }) => (
          <a 
            {...props} 
            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg inline-block mt-4 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          />
        )
      }}
    >
      {content}
    </ReactMarkdown>
  );
};