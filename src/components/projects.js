import React ,{Component} from 'react';
import { Tabs,Tab, Grid, Cell,Card, CardTitle, CardText ,CardActions, Button, CardMenu,IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {activate:0,activeTab:0};
        }

      toggleCategories(){
          /* Project 1*/
        if (this.state.activeTab === 0){
            return (
                <div className="projects-grid">
                    {/*  Project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#000', height:'176px', background:'url(https://blog.savoirfairelinux.com/fr-ca/wp-content/uploads/2017/11/Python-Logo-PNG-Image-300x150.png) center / cover'}}> #1</CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                    </CardText>
                    <CardActions>
                        <Button colored>Github</Button>
                        <Button colored>Github</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>


                    {/* *Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#000', height:'176px', background:'url(https://blog.savoirfairelinux.com/fr-ca/wp-content/uploads/2017/11/Python-Logo-PNG-Image-300x150.png) center / cover'}}> #2</CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                    </CardText>
                    <CardActions>
                        <Button colored>Github</Button>
                        <Button colored>Github</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                


                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#000', height:'176px', background:'url(https://blog.savoirfairelinux.com/fr-ca/wp-content/uploads/2017/11/Python-Logo-PNG-Image-300x150.png) center / cover'}}> #3</CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                    </CardText>
                    <CardActions>
                        <Button colored>Github</Button>
                        <Button colored>Github</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
                
            )
        }else if (this.state.activeTab === 1){
            return (
                <div className="projects-grid">
                {/*  Project 1*/}
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#000', height:'176px', background:'url(https://assets.puzzlefactory.pl/puzzle/245/270/original.jpg) center / cover'}}> #1</CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                </CardText>
                <CardActions>
                    <Button colored>Github</Button>
                    <Button colored>Github</Button>
                    <Button colored>Github</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>


                {/* *Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#000', height:'176px', background:'url(https://assets.puzzlefactory.pl/puzzle/245/270/original.jpg) center / cover'}}> #2</CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                </CardText>
                <CardActions>
                    <Button colored>Github</Button>
                    <Button colored>Github</Button>
                    <Button colored>Github</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
            


            <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#000', height:'176px', background:'url(https://assets.puzzlefactory.pl/puzzle/245/270/original.jpg) center / cover'}}> #3</CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                </CardText>
                <CardActions>
                    <Button colored>Github</Button>
                    <Button colored>Github</Button>
                    <Button colored>Github</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
            </div>
            )
        }else if (this.state.activeTab === 2){
            return (
                <div className="projects-grid">
                {/*  Project 1*/}
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#000', height:'176px', background:'url(https://i7.pngflow.com/pngimage/197/610/png-svg-animation-comparison-of-graphics-editors-android-studio-logo-computer-wallpaper-grass-cartoon-clipart.png) center / cover'}}> #1</CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                </CardText>
                <CardActions>
                    <Button colored>Github</Button>
                    <Button colored>Github</Button>
                    <Button colored>Github</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>


                {/* *Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#000', height:'176px', background:'url(https://i7.pngflow.com/pngimage/197/610/png-svg-animation-comparison-of-graphics-editors-android-studio-logo-computer-wallpaper-grass-cartoon-clipart.png) center / cover'}}> #2</CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                </CardText>
                <CardActions>
                    <Button colored>Github</Button>
                    <Button colored>Github</Button>
                    <Button colored>Github</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
            


            <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                <CardTitle style={{color:'#000', height:'176px', background:'url(https://i7.pngflow.com/pngimage/197/610/png-svg-animation-comparison-of-graphics-editors-android-studio-logo-computer-wallpaper-grass-cartoon-clipart.png) center / cover'}}> #3</CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                </CardText>
                <CardActions>
                    <Button colored>Github</Button>
                    <Button colored>Github</Button>
                    <Button colored>Github</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share"/>
                </CardMenu>
            </Card>
            </div>
            )
      }else if (this.state.activeTab === 3){
        return (
            <div className="projects-grid">
                    {/*  Project 1*/}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#000', height:'176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}> #1</CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                    </CardText>
                    <CardActions>
                        <Button colored>Github</Button>
                        <Button colored>Github</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>


                    {/* *Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#000', height:'176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}> #2</CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                    </CardText>
                    <CardActions>
                        <Button colored>Github</Button>
                        <Button colored>Github</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                


                <Card shadow={5} style={{minWidth: '450', margin:'auto'}}>
                    <CardTitle style={{color:'#000', height:'176px', background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}}> #3</CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                    </CardText>
                    <CardActions>
                        <Button colored>Github</Button>
                        <Button colored>Github</Button>
                        <Button colored>Github</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>
        )
      }
    }
        
    render() {
        return(
            <div className="categort-tabs">
                <Tabs activate={this.state.activate} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>Python</Tab>
                    <Tab>Java</Tab>
                    <Tab>Android Studio</Tab>
                    <Tab>React</Tab>

                </Tabs>
                
                    <Grid >
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                   
                
            </div>
        )
    }
}

export default Projects;