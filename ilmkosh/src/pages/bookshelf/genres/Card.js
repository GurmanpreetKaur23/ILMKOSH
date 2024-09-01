import React, { useState } from "react";
import Modal from "./Modal";
import "./style.css";

const Card = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();

    if (!Array.isArray(book)) {
        console.error("The 'book' prop is not an array:", book);
        return null; // or return a fallback UI
    }

    return (
        <>
            {book.map((item) => {
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                if (thumbnail !== undefined && amount !== undefined) {
                    return (
                        <React.Fragment key={item.id}>
                            <div className="card" onClick={() => { setShow(true); setItem(item) }}>
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">&#8377;{amount}</p>
                                </div>
                            </div>
                            <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
                        </React.Fragment>
                    );
                }
                return null;
            })}
        </>
    );
};

export default Card;