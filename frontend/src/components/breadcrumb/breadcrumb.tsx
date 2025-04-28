import Link from 'next/link';

interface BreadcrumbProps {
  title: string;
  subtitle?: string;
}

const Breadcrumb = ({ title, subtitle }: BreadcrumbProps) => {
  return (
    <div
      className="it-breadcrumb-area it-breadcrumb-bg"
      style={{
        backgroundImage: `url('/assets/img/breadcrumb/breadcrumb.jpg')`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="it-breadcrumb-content">
              <div className="it-breadcrumb-title-box">
                <h3 className="it-breadcrumb-title">{title}</h3>
              </div>
              <div className="it-breadcrumb-list-wrap text-center">
                <div className="it-breadcrumb-list-content">
                  <span>
                    <Link href="/">home</Link>
                  </span>{' '}
                  <span className="dvdr">&#47;&#47;</span>{' '}
                  <span>{subtitle ? subtitle : title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Breadcrumb;
