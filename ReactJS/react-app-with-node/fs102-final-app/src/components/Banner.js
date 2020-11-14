import React, { useState, useEffect } from "react";
import { Carousel, Button } from "react-bootstrap";
import CryptoNewsAPI from "crypto-news-api";

export default function Banner() {
  // Connect to the CryptoControl API
  const Api = new CryptoNewsAPI("0347eedc522f8a6f8e94fda2737fc985");
  const [news, setNews] = useState([]);

  // Get top news
  useEffect(() => {
    Api.getTopNews().then((news) => {
      setNews(news);
    });
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      <style type="text/css">
        {`
    .height {
height: 500px;
background-position: top;
    }

    `}
      </style>

      <Carousel>
        {news.map((news) => (
          <Carousel.Item className="height">
            <img
              className="d-sm-block"
              src={news.originalImageUrl}
              alt={news.title}
              width="100%"
            />
            <Carousel.Caption>
              <h3>{news.title}</h3>
              <p className="left">{truncate(news?.description, 200)}</p>
              <Button variant="secondary" href={news.url} target="_blank">
                Read more
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
