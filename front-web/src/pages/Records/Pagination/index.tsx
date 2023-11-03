import './styles.css';

type Props = {
    totalPages?: number;
    goToPage: (a: number) => void;
    activePage: number;
}

export function Pagination({ totalPages = 0, goToPage, activePage }: Props) {
    const paginationItems = Array.from(Array(totalPages).keys());
    return (
        <div className="pagination-container">
            {paginationItems.map(item => (
                <button 
                    key={item}
                    className={`pagination-item ${activePage === item ? 'active' : 'inactive'}`}
                    onClick={() => goToPage(item)}
                >
                    {item + 1}
                </button>
            ))}
        </div>
    );
}