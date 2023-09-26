import { usePages } from '../../../hooks/usePages';

const Pagination = ({totalPages, page, changePage}) => {
  let pagesArray = usePages(totalPages);

  return (
    <div className='page__wrapper'>
      {pagesArray.map(p => 
        <span 
          key={p} 
          className={page === p ? 'page page__current' : 'page'}
          onClick={() => changePage(p)}
        >
          {p}
        </span>
      )}
    </div>
  )
};

export default Pagination;
