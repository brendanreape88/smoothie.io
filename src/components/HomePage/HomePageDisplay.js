import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import HomePageNav from "./HomePageNav";
import SmoothieContext from "../../contexts/SmoothieContext";
import "./HomePage.css";

class HomePageDisplay extends Component {
  state = {
    numberOfSmoothies: 6,
  };

  static contextType = SmoothieContext;

  loadMoreSmoothies = () => {
    let { numberOfSmoothies } = this.state;
    this.setState({
      numberOfSmoothies: (numberOfSmoothies += 6),
    });
  };

  loginReview = () => {
    alert("Please login to leave a review!");
  };

  render() {
    const data = this.props.recipes;
    const { numberOfSmoothies } = this.state;
    const user_id = this.context.user ? this.context.user.id : 0;
    return (
      <>
        <section className="HomePage__HomeDisplay">
          <HomePageNav section={this.props.section} />
          <div className="HomePage__HomeDisplay__FlexBox">
            {!data ? (
              <h3>getting recipes...</h3>
            ) : (
              data.map((d, i) => {
                if (i < numberOfSmoothies) {
                  return (
                    <div
                      className="HomePage__HomeDisplay__FlexBox__Item"
                      key={d.id}
                    >
                      <Link to={`/recipe/${d.id}`}>
                        {d.smoothie_pic ? (
                          <img
                            src={`${d.smoothie_pic}`}
                            alt={`a smoothie named ${d.smoothie_name}`}
                          />
                        ) : (
                          <img
                            src="https://i.ibb.co/VSS1v7M/smoothie-art-png-tiny.png"
                            alt={`a smoothie named ${d.smoothie_name}`}
                          />
                        )}
                      </Link>
                      <div className="Item__Controls">
                        <h3 className="CardTitle">
                          <Link to={`/recipe/${d.id}`}>{d.smoothie_name}</Link>
                        </h3>
                        <button onClick={() => this.props.favorite(d.id)}>
                          favorite
                        </button>
                        <button>
                          <Link
                            to={{
                              pathname: `/create`,
                              prepopulate: true,
                              customId: `${d.id}`,
                            }}
                          >
                            customize
                          </Link>
                        </button>
                        {user_id === 0 ? (
                          <button onClick={this.loginReview}>review</button>
                        ) : (
                          <button>
                            <Link
                              to={{
                                pathname: `/recipe/${d.id}#ReviewForm`,
                                reviewOn: true,
                              }}
                            >
                              review
                            </Link>
                          </button>
                        )}
                      </div>
                    </div>
                  );
                }
              })
            )}
          </div>
        </section>
        <section className="HomePage__BottomButtons">
          <div className="HomePage__BottomButtons__FlexBox">
            <div className="BottomButton__More">
              <button onClick={this.loadMoreSmoothies}>more smoothies</button>
            </div>
            <div className="BottomButton__Create">
              <button>
                <Link to="/create">create a smoothie</Link>
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default HomePageDisplay;
