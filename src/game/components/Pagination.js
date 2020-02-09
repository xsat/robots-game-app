import React from "react";
import {Link} from "react-router-dom";

export class Pagination extends React.Component {
    render() {
        const total = this.props.total ?? 0;
        const limit = this.props.limit ?? 10;
        const count = Math.floor(total / limit);
        const url = this.props.url ?? "";
        const page = this.props.page ?? 0;

        return (
            <ul className="pagination">
                {[...Array(count).keys()].map(function (number) {
                    const pageNumber = number + 1;
                    return (
                        <li className="inline" key={number}>
                            {number === 0 ?
                                <Link
                                    className={page === number ? 'active' : null}
                                    to={url}>{pageNumber}</Link> :
                                <Link
                                    className={page === number ? 'active' : null}
                                    to={`${url}/${number}`}>{pageNumber}</Link>}
                        </li>
                    );
                })}
            </ul>
        );
    }
}