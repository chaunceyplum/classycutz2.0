import React from 'react'
import NavWithHero from './NavWithHero'
import Hero from './Hero'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { Fragment } from 'react'

export const Layout = ({ children }: any) => {
  const loggedIn = useSelector((state: any) => state.isLoggedIn)
  const User = useSelector((state: any) => state.User)
  return (
    <>
      <NavWithHero User={User} loggedIn={loggedIn} />

      <main>{children}</main>

      <Footer />
    </>
  )
}

// export default function Layout({ children, ...pageProps }) {
//   const loggedIn = useSelector((state: any) => state.isLoggedIn)
//   const User = useSelector((state: any) => state.User)

//   function recursiveMap(children, fn) {
//     return React.Children.map(children, (child) => {
//       if (!React.isValidElement(child) || typeof child.type == 'string') {
//         return child
//       }

//       if (child.props.children) {
//         child = React.cloneElement(child, {
//           children: recursiveMap(child.props.children, fn),
//         })
//       }

//       return fn(child)
//     })
//   }

//   // Add props to all child elements.
//   const childrenWithProps = recursiveMap(children, (child) => {
//     // Checking isValidElement is the safe way and avoids a TS error too.
//     if (isValidElement(child)) {
//       // Pass additional props here
//       return cloneElement(child, { currentUser: { ...user } })
//     }

//     return child
//   })

//   return (
//     <Fragment>
//       <NavWithHero User={User} loggedIn={loggedIn} />
//       <Hero />
//       {childrenWithProps}

//       <Footer />
//     </Fragment>
//   )
// }

// export default Layout
