import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Image } from 'semantic-ui-react'
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
    const { activeItem } = this.state
    if(localStorage.getItem('token') && this.props.current_user){
      return (
        <div >
          <Menu className="ui top fixed menu" color='olive' inverted={true} >
            <Link to="/farmers">
              <Menu.Item>
                <Image src={logo} size='small' onClick={this.handleItemClick}/>
              </Menu.Item>
            </Link>
            <Link to='/farmers'>
              <Menu.Item as='h2' name='farmers' active={activeItem === 'farmers'} onClick={this.handleItemClick}/>
            </Link>
            <Menu.Menu position='right'>
              {Object.keys(this.props.current_user.current_cart).length == 0 ? null : <span className="cart-count">{Object.keys(this.props.current_user.current_cart).length}</span>}
            <Link to='/cart'>
              <Menu.Item as='h2' name='cart' active={activeItem === 'cart'} onClick={this.handleItemClick}/>
            </Link>
            <Link to='/account'>
              <Menu.Item as='h2' name='account' active={activeItem === 'account'} onClick={this.handleItemClick}/>
            </Link>

            <Link to='/farmers' onClick={this.props.logout}>
              <Menu.Item as='h2' name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick}/>
            </Link>
            </Menu.Menu>
          </Menu>
        </div>

      )
    }
    else {
      return (
        <Menu color='olive' inverted={true}>
          <Link to="/">
          <Menu.Item>
            <Image src={logo} size='small' active={activeItem === 'Our Garden'} onClick={this.handleItemClick}/>
          </Menu.Item>
          </Link>
        </Menu>
      )
    }
  }
}
