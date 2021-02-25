import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';
const Example = (props) => {
  return (
      <div className="container">
        <CardGroup>
        <Card>
            <CardImg top width="100%" src="https://images.unsplash.com/photo-1572964734607-0051976fac79?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        </Card>
        <Card>
            <CardImg top width="100%" src="https://images.unsplash.com/photo-1536939459926-301728717817?ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        </Card>
        <Card>
            <CardImg top width="100%" src="https://images.unsplash.com/photo-1562077981-4d7eafd44932?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        </Card>
        </CardGroup>

        <CardGroup>
        <Card>
            <CardImg top width="100%" src="https://images.unsplash.com/photo-1569254983547-44dc559f038f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        </Card>
        <Card>
            <CardImg top width="100%" src="https://images.unsplash.com/photo-1565803974275-dccd2f933cbb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        </Card>
        <Card>
            <CardImg top width="100%" src="https://images.unsplash.com/photo-1554265311-8799d909c767?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap" />
        </Card>
        </CardGroup>
    </div>
  );
};

export default Example;