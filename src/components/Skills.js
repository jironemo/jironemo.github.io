import React, {Component} from 'react';

import {Row,Card,CardTitle,CardBody,CardText} from 'reactstrap';

class Skills extends Component{
    render(){
        return(
            <Row>
            <Card style = {{color:'white',backgroundColor:'#f89820'}}className = 'mr-2 mt-2 col-12 col-md-5'>
              <CardBody>
                <CardTitle> <h4>Java</h4> </CardTitle>
                    <hr/>
                    I have been using Java for various school projects and client applications for 3 years.
                </CardBody>
              </Card>
              <Card style = {{color:'white', backgroundColor: '#9866d3'}} className = 'mr-2 mt-2 col-12 col-md-5'>
                <CardBody>
                  <CardTitle><h4>C#</h4></CardTitle>
                  <hr/>
                  <CardText>
                    I have been using C# since I graduated highschool in various client and personal projects.
                  </CardText>
                </CardBody>
              </Card>
              <Card style = {{color:'white', backgroundColor: '#3776ab'}} className = 'mr-2 mt-2 col-12 col-md-5'>
                <CardBody>
                  <CardTitle><h4>Python</h4></CardTitle>
                  <hr/>
                  <CardText>
                    I learnt Python during my second year of college and I have been using it ever since. However, I only have fundamental knowledge of this language.
                  </CardText>
                </CardBody>
              </Card>
              <Card style = {{color:'white', backgroundColor: '#61dbfb'}}className = 'mr-2 mt-2 col-12 col-md-5'>
                <CardBody>
                  <CardTitle><h4>ReactJS</h4></CardTitle>
                  <hr/>
                  <CardText>
                    I recently learnt Reactjs. I know the basics of Redux and bootstrap-styling in react.
                  </CardText>
                </CardBody>
              </Card>
            </Row>
            );
    }
}

export default Skills;