import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
// import logo from '../images/our_garden_logo-01.svg'

export default class NavBar extends React.Component {
  constructor(){
    super()
    this.state = {
      activeItem: 'farmers',
    }
  }

  // quantity(){
  //   const quantity = this.props.current_user.products.map( item => {
  //    return <li>{item.name}</li>
  //  }).length
  // }

  // if product carts cart_id === current_user.id then return match plus length




  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    // debugger
    console.log('navbar', this.props);
    const { activeItem } = this.state
    if(localStorage.getItem('token') && this.props.current_user){
      return (
        <Menu color='olive' inverted={true} size='massive'>
          <Link to="/farmers">
          <Menu.Item name='farmers' active={activeItem === 'farmers'} onClick={this.handleItemClick}/>
          </Link>

          <Link to='/about'>
          <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}/>
          </Link>

          <Menu.Menu position='right'>
            <div>{this.props.current_user.products.length}</div>
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
    } else {
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
