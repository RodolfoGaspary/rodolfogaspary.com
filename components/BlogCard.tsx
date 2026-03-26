import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  to: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tag: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  to,
  title,
  description,
  date,
  readingTime,
  tag,
}) => {
  return (
    <Link
      to={to}
      className="flex items-start gap-4 p-5 rounded-lg border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 hover:border-stone-300 dark:hover:border-stone-600 transition-colors duration-200 group"
    >
      <div className="flex-1 min-w-0">
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent mb-2">
          {tag}
        </span>
        <h3 className="font-semibold text-stone-900 dark:text-white group-hover:text-accent transition-colors mb-1 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-muted dark:text-stone-400 line-clamp-2 mb-3">
          {description}
        </p>
        <div className="flex items-center gap-2 text-xs text-muted dark:text-stone-500">
          <time dateTime={date}>{date}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{readingTime}</span>
        </div>
      </div>
      <span className="material-symbols-outlined text-stone-400 dark:text-stone-600 mt-1 shrink-0">
        arrow_forward
      </span>
    </Link>
  );
};

export default BlogCard;
