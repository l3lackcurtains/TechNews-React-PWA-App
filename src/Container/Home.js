import React, { Component } from "react";
import axios from "axios";
import { Grid, Row, Col } from "react-flexbox-grid";

import ProgressBar from "../Components/ProgressBar";
import NewsBox from "../Components/NewsBox";

import config from "../Utils/config";
class Home extends Component {
  state = {
    articles: []
  };

  componentDidMount = async () => {
    try {
      const newsArticles = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${
          config.newsApiKey
        }`
      );

      if (newsArticles.data.status === "ok") {
        this.setState({
          articles: newsArticles.data.articles
        });
      }
    } catch (e) {
      this.props.history.push("/offline");
    }
  };

  render() {
    const { articles } = this.state;
    if (articles.length === 0) {
      return (
        <React.Fragment>
          <ProgressBar />
        </React.Fragment>
      );
    }
    return (
      <Grid fluid>
        <Row>
          {articles.map((article, index) => (
            <Col
              xs={12}
              md={6}
              lg={4}
              key={`${article.title.charAt(0)}-${index}`}
            >
              <NewsBox key={article.source.name} article={article} />
            </Col>
          ))}
        </Row>
      </Grid>
    );
  }
}

export default Home;
