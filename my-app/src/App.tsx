import React, { Fragment } from "react"; // ctrl + . on element to add it
import logo from "./logo.svg";
import "./App.css";
import { Button, Image, Card, Icon, Statistic } from "semantic-ui-react";

function App() {
  return (
    <Fragment>
      <Fragment>
        <Fragment>
          <h1>This is a header!</h1>
          <p>
            Paragraph!<em>Emphasized text!</em>
          </p>
          <button className="SpecialButton">I know what a button is!</button>
          <button>Another button!</button>
          <p>Proof!</p>
          <Button
            color="red"
            content="Like"
            icon="heart"
            label={{
              basic: true,
              color: "red",
              pointing: "left",
              content: "2,048",
            }}
          />
          <Card>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src="/images/avatar/large/steve.jpg"
              />
              <Card.Header>Steve Sanders</Card.Header>
              <Card.Meta>Friends of Elliot</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group{" "}
                <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Approve
                </Button>
                <Button basic color="red">
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Fragment>
        <Fragment>
          <Card>
            <Card.Content>
              <Image
                floated="right"
                size="mini"
                src="/images/avatar/large/molly.png"
              />
              <Card.Header>Molly Thomas</Card.Header>
              <Card.Meta>New User</Card.Meta>
              <Card.Description>
                Molly wants to add you to the group <strong>musicians</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Approve
                </Button>
                <Button basic color="red">
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Fragment>
        <Fragment>
          <h1>This is a header!</h1>
          <p>
            Paragraph!<em>Emphasized text!</em>
          </p>
          <button className="SpecialButton">I know what a button is!</button>
          <button>Another button!</button>
          <p>Proof!</p>
        </Fragment>
        <Fragment>
          <Card>
            <Image src="/images/avatar/large/matthew.png" wrapped ui={false} />
            <Card.Content>
              <Card.Header>Stephane</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Stephane is a bowler living in Edmonton.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                2200 Friends
              </a>
            </Card.Content>
          </Card>
          <Fragment>
            <Statistic color="red">
              <Statistic.Value>27</Statistic.Value>
              <Statistic.Label>red</Statistic.Label>
            </Statistic>
            <Statistic color="orange">
              <Statistic.Value>8'</Statistic.Value>
              <Statistic.Label>orange</Statistic.Label>
            </Statistic>
            <Statistic color="yellow">
              <Statistic.Value>28</Statistic.Value>
              <Statistic.Label>yellow</Statistic.Label>
            </Statistic>
            <Statistic color="olive">
              <Statistic.Value>7'</Statistic.Value>
              <Statistic.Label>olive</Statistic.Label>
            </Statistic>
            <Statistic color="green">
              <Statistic.Value>14</Statistic.Value>
              <Statistic.Label>green</Statistic.Label>
            </Statistic>
            <Statistic color="teal">
              <Statistic.Value>82</Statistic.Value>
              <Statistic.Label>teal</Statistic.Label>
            </Statistic>
            <Statistic color="blue">
              <Statistic.Value>1'</Statistic.Value>
              <Statistic.Label>blue</Statistic.Label>
            </Statistic>
            <Statistic color="violet">
              <Statistic.Value>22</Statistic.Value>
              <Statistic.Label>violet</Statistic.Label>
            </Statistic>
            <Statistic color="purple">
              <Statistic.Value>23</Statistic.Value>
              <Statistic.Label>purple</Statistic.Label>
            </Statistic>
            <Statistic color="pink">
              <Statistic.Value>15</Statistic.Value>
              <Statistic.Label>pink</Statistic.Label>
            </Statistic>
            <Statistic color="brown">
              <Statistic.Value>36</Statistic.Value>
              <Statistic.Label>brown</Statistic.Label>
            </Statistic>
            <Statistic color="grey">
              <Statistic.Value>49</Statistic.Value>
              <Statistic.Label>grey</Statistic.Label>
            </Statistic>
          </Fragment>
        </Fragment>
      </Fragment>
    </Fragment>
  );
}

export default App;
