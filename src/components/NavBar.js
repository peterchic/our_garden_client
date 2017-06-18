import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
  constructor(){
    super()
    this.state = {
      activeItem: 'farmers'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    if(localStorage.getItem('token')){
      return (
        <Menu color='olive' inverted={1} size='massive'>
          <Link to="/farmers">
          <Menu.Item name='farmers' active={activeItem === 'farmers'} onClick={this.handleItemClick}/>
          </Link>

          <Link to='/about'>
          <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick}/>
          </Link>

          <Menu.Menu position='right'>
            Products In Current Cart {this.props.product_carts.length}
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
        <Menu>
          <Link to="/">
          <Menu.Item name='log in or sign up' active={activeItem === 'log in or sign up'} onClick={this.handleItemClick}/>
          </Link>
        </Menu>
      )
    }
  }
}


//     return (
//       <nav className={`navbar ${colors[props.color]} bg-inverse`}>
//         <div className='navbar-header'>
//           <a className='navbar-brand'>
//             { props.title }
//           </a>
//         </div>
//
//         <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//           <ul className="nav navbar-nav">
//             <li><Link to="/farmers">Find A Garden</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/" onClick={props.logout}>Log Out</Link></li>
//           </ul>
//           <ul className="pull-right nav navbar-nav">
//           </ul>
//         </div>
//       </nav>
//     )
//   } else {
//     return (
//       <div>
//         <nav className={`navbar ${colors[props.color]} bg-inverse`}>
//           <div className='navbar-header'>
//             <a className='navbar-brand'>
//               { props.title }
//             </a>
//           </div>
//
//           <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//             <ul className="nav navbar-nav">
//               <li><Link to="/farmers">Log In or Sign Up!</Link></li>
//             </ul>
//           </div>
//         </nav>
//
//       </div>
//     )
//   }
// }
