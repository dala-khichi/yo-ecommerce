import { Link } from 'react-router-dom';

interface BreadcrumbLink {
  link: string;
  to: string;
}

interface BreadcrumbProps {
  pageName: string;
  links?: BreadcrumbLink[];
}

const Breadcrumb = ({ pageName, links = [] }: BreadcrumbProps) => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" to="/">
              Dashboard
            </Link>
            {(links.length > 0 || pageName !== 'Dashboard') && <span className="mx-2">/</span>}
          </li>
          
          {links.map((link, index) => (
            <li key={index}>
              <Link className="font-medium text-primary" to={link.to}>
                {link.link}
              </Link>
              {index < links.length - 1 || pageName !== link.link ? <span className="mx-2">/</span> : null}
            </li>
          ))}
          
          {(links.length === 0 || pageName !== links[links.length - 1]?.link) && (
            <li className="font-medium text-primary">
              {pageName}
            </li>
          )}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;