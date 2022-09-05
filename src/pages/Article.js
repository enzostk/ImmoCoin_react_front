import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
    const { id } = useParams();
    const [currentArticle, setCurrentArticle] = useState();

    useEffect(() => {
        fetch("http://localhost:3000/properties/" + id )
          .then((res) => res.json())
          .then((data) => {
            setCurrentArticle(data);
            console.log(data);
            })
          .catch((error) => console.error(error));
      },[]);



    return (
        <div>
            {currentArticle}
        </div>
    );
};

export default Article;