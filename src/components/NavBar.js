import React from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import logo from '../images/our_garden_logo-01.svg'

export default class NavBar extends React.Component {
  constructor(){
    super()
    this.state = {
      activeItem: 'farmers',
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    // debugger
    console.log('navbar', this.props);
    const { activeItem } = this.state
    if(localStorage.getItem('token')){
      return (
        <Menu color='olive' inverted={true} size='massive'>
          <Link to="/farmers">
          <Menu.Item>
            <Image src={logo} size='small' active={activeItem === 'farmers'} onClick={this.handleItemClick}/>

        </Menu.Item>
          </Link>

          <Link to='/farmers'>
          <Menu.Item name='farmers' active={activeItem === 'about'} onClick={this.handleItemClick}/>
          </Link>

          <Menu.Menu position='right'>
            {/* <div>{this.props.current_user.products.length}</div> */}
            <Link to='/cart'>
            <Menu.Item name='cart' active={activeItem === 'cart'} onClick={this.handleItemClick}/>
            </Link>
            <Link to='/acount'>
            <Menu.Item name='account' active={activeItem === 'account'} onClick={this.handleItemClick}/>
            </Link>

            <Link to='/farmers' onClick={this.props.logout}>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}/>
            </Link>
          </Menu.Menu>
        </Menu>
      )
    }
    else {
      return (
        <Menu color='olive' inverted={true} size='massive'>
          <Link to="/">
          <Menu.Item name="Our Garden" active={activeItem === 'Our Garden'} onClick={this.handleItemClick}/>
          </Link>
        </Menu>
      )
    }
  }
}
