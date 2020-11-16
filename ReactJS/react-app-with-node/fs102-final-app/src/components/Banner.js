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
object-fit: cover;
width: 100%;

    }
    .caption {
      bottom: 30%; !important
      text-align: left; !important
      background: rgba(0, 0, 0, 0.5);
    }
    `}
      </style>

      <Carousel>
        {news
          .filter((news) => news.originalImageUrl)
          .map((news) => (
            <Carousel.Item>
              <img
                className="d-sm-block"
                src={news.originalImageUrl}
                alt={news.title}
                className="height"
              />
              <Carousel.Caption className="caption">
                <h4>{news.title}</h4>
                <p className="left">{truncate(news?.description, 80)}</p>
                <Button variant="primary" href={news.url} target="_blank">
                  Read more
                </Button>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    </>
  );
}
